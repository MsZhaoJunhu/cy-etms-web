<template>
  <div class="right">
    <div class="head">
      <a-form layout="inline">
        <a-form-item label="科室" class="search_item">
          <a-select
            v-decorator="['select',{ rules: [{ required: true, message: 'Please select your country!' }] },]"
            placeholder="急诊门诊"
          ></a-select>
        </a-form-item>
        <a-form-item label="模板分类" class="search_item">
          <a-select
            v-decorator="['select',{ rules: [{ required: true, message: 'Please select your country!' }] },]"
            placeholder="全部"
          ></a-select>
        </a-form-item>
        <a-form-item label="模板分类" class="search_item">
          <a-select
            v-decorator="['select',{ rules: [{ required: true, message: 'Please select your country!' }] },]"
            placeholder="全部"
          ></a-select>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" icon="search">Search</a-button>
        </a-form-item>
      </a-form>
      <a-button class="right_button" @click="add()">
        <a-icon type="plus" />添加
      </a-button>
    </div>
    <div class="table_body">
      <a-table :columns="columns" :dataSource="data" :rowSelection="rowSelection"></a-table>
    </div>
    <handleTemplateDetail
      ref="handleTemplateDetail"
      :visible="visible1"
      :width="width"
      :type="templateType"
      @cancel="handleTemplateDetailCancel"
      @create="templateAddCreate"
    >
    </handleTemplateDetail>
    <!-- 增加 -->
    <templateAdd
      ref="templateAdd"
      :visible="visible"
      :width="width"
      :type="templateType"
      @cancel="templateAddCancel"
      @create="templateAddCreate"
    ></templateAdd>
  </div>
</template>
<script>

export default {
  name: "prescriptionTemplate",
  components: {
    templateAdd: () => import("@/views/template/templateAdd.vue"),
    handleTemplateDetail: () => import("@/views/template/handleTemplateDetail.vue")
  },
  data() {
    return {
      templateType:1,
      visible1:false,
      width: "60%",
      visible: false,
      formLayout: "horizontal",
      columns: [
        {
          title: "模板分类",
          dataIndex: "name",
          key: "name",
          ellipsis: true
        },
        {
          title: "模板名称",
          dataIndex: "age",
          key: "age",
          ellipsis: true
        },
        {
          title: "模板描述",
          dataIndex: "address",
          key: "address 1",
          ellipsis: true
        },
        {
          title: "所属科室",
          dataIndex: "address",
          key: "address 2",
          ellipsis: true
        },
        {
          title: "模板属性",
          dataIndex: "address",
          key: "address 3",
          ellipsis: true
        },
        {
          title: "操作",
          dataIndex: "address",
          key: "address 4",
          ellipsis: true
        }
      ],
      data: []
    };
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : {};
    },
    rowSelection() {
      const { selectedRowKeys } = this;
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
          );
        },
        getCheckboxProps: record => ({
          props: {
            disabled: record.name === "Disabled User", // Column configuration not to be checked
            name: record.name
          }
        })
      };
    }
  },
  methods: {
    handleTemplateDetailCancel () {
      this.visible1 = false;
    },
    add() {
      this.$refs.templateAdd.reset()
      this.visible = true;
    },
    templateAddCancel() {
      this.visible = false;
    },
    templateAddCreate() {
      this.visible = false;
      this.visible1 = true;
    },
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
    click(data) {
      console.log(data);
    }
  }
};
</script>
<style scoped lang='less'>
.right {
  background: #fff;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
  > .head {
    margin-top: 14px;
    position: relative;
    border-bottom: 1px solid #eaeaea;
    .right_button {
      position: absolute;
      right: 30px;
      top: 0px;
    }
  }
  > .buttom {
    display: flex;
    justify-content: center;
    justify-items: center;
    flex-wrap: wrap;
    button {
      margin-left: 10px;
    }
  }
}
.search_item {
  /deep/.ant-form-item-control-wrapper {
    min-width: 140px;
  }
}
</style>