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
          <a-button icon="search">Search</a-button>
        </a-form-item>
      </a-form>
      <a-button class="right_button" @click="add()">
        <a-icon type="plus" />添加
      </a-button>
    </div>
    <div class="table_body">
      <a-table :columns="columns" :dataSource="data" :rowSelection="rowSelection"></a-table>
    </div>
    <prescriptionTemplateDetail
      ref="prescriptionTemplateDetail"
      :visible="visible1"
      :width="width"
      :type="templateType"
      @cancel="prescriptionTemplateDetailCancel"
      @create="templateAddCreate"
    ></prescriptionTemplateDetail>
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
    prescriptionTemplateDetail: () =>
      import("@/views/template/prescriptionTemplateDetail.vue")
    },
  data() {
    return {
      templateType: 2,
      width: "60%",
      visible: false,
      visible1:false,
      formLayout: "horizontal",
      item2Columns: [
        {
          title: "就诊时间",
          dataIndex: "name",
          key: "name",
          ellipsis: true
        },
        {
          title: "开单序号",
          dataIndex: "age",
          key: "age",
          ellipsis: true
        },
        {
          title: "处方分类",
          dataIndex: "address",
          key: "address 1",
          ellipsis: true
        },
        {
          title: "特病审核状态",
          dataIndex: "address",
          key: "address 2",
          ellipsis: true
        },
        {
          title: "就诊序号",
          dataIndex: "address",
          key: "address 3",
          ellipsis: true
        },
        {
          title: "特病处方",
          dataIndex: "address",
          key: "address 4",
          ellipsis: true
        },
        {
          title: "收费否",
          dataIndex: "address",
          key: "address 5",
          ellipsis: true
        },
        {
          title: "处方号",
          dataIndex: "address",
          key: "address 6",
          ellipsis: true
        }
      ],
      item2Columns1: [
        {
          title: "药名",
          dataIndex: "name",
          key: "name",
          ellipsis: true
        },
        {
          title: "处方号",
          dataIndex: "age",
          key: "age",
          ellipsis: true
        },
        {
          title: "规格",
          dataIndex: "address",
          key: "address 1",
          ellipsis: true
        },
        {
          title: "医生说明",
          dataIndex: "address",
          key: "address 2",
          ellipsis: true
        },
        {
          title: "取药属性",
          dataIndex: "address",
          key: "address 3",
          ellipsis: true
        },
        {
          title: "药周",
          dataIndex: "address",
          key: "address 4",
          ellipsis: true
        },
        {
          title: "用药天数",
          dataIndex: "address",
          key: "address 5",
          ellipsis: true
        },
        {
          title: "代前",
          dataIndex: "address",
          key: "address 6",
          ellipsis: true
        },
        {
          title: "警告",
          dataIndex: "address",
          key: "address 7",
          ellipsis: true
        },
        {
          title: "厂家",
          dataIndex: "address",
          key: "address 8",
          ellipsis: true
        },
        {
          title: "单次用量",
          dataIndex: "address",
          key: "address 9",
          ellipsis: true
        },
        {
          title: "用量单位",
          dataIndex: "address",
          key: "address 10",
          ellipsis: true
        },
        {
          title: "途径",
          dataIndex: "address",
          key: "address 11",
          ellipsis: true
        },
        {
          title: "剂数",
          dataIndex: "address",
          key: "address 12",
          ellipsis: true
        },
        {
          title: "频次",
          dataIndex: "address",
          key: "address 13",
          ellipsis: true
        },
        {
          title: "药品数量",
          dataIndex: "address",
          key: "address 14",
          ellipsis: true
        },
        {
          title: "单位",
          dataIndex: "address",
          key: "address 15",
          ellipsis: true
        },
        {
          title: "实收",
          dataIndex: "address",
          key: "address 16",
          ellipsis: true
        }
      ],
      item2data: [],
      item2data1: [],
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
    }
  },
  methods: {
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
    prescriptionTemplateDetailCancel(){
      this.visible1 = false;
    },
    click(data) {
      console.log(data);
    },
    templateAddCancel() {
      this.visible = false;
    },
    templateAddCreate() {
      this.visible = false;
      this.visible1 = true;
    },
    add() {
      this.$refs.templateAdd.reset();
      this.visible = true;
    },
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
  /deep/ .ant-form-item-control-wrapper {
    min-width: 140px;
  }
}
</style>
