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
    <testApplicationDetail
      ref="testApplicationDetail"
      :visible="visible1"
      @cancel="testApplicationDetailCancel"
      :width="width"
      :type="templateType"
    ></testApplicationDetail>
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
  name: "testApplication",
  components: {
    templateAdd: () => import("@/views/template/templateAdd.vue"),
    testApplicationDetail: () =>
      import("@/views/template/testApplicationDetail.vue")
  },
  data() {
    return {
      templateType: 3,
      width: "80%",
      visible: false,
      visible1: false,
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
  computed: {},
  methods: {
    testApplicationDetailCancel() {
      this.visible1 = false;
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
  .table_body {
    padding-top: 10px;
    /deep/.orangeCheckBox {
      margin-right: 20px;
      span {
        color: #f27966;
      }
    }
    .itemChoose {
      /deep/.ant-radio-button-wrapper {
        margin-right: 16px;
        margin-bottom: 12px;
      }
      /deep/.ant-radio-button-wrapper-checked {
        background: #49cef4;
        color: #fff;
      }
    }
  }
  .bottom {
    width: 100%;
    display: flex;
    justify-content: center;
    justify-items: center;
    margin-top: 20px;
    button {
      margin-left: 20px;
    }
  }
}
.search_item {
  /deep/.ant-form-item-control-wrapper {
    min-width: 140px;
  }
}
</style>
