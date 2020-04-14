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
    <insApplicationDetail
      :visible="visible1"
      :width="width"
      :type="templateType"
      @cancel="insApplicationDetailCancel"
      @create="templateAddCreate"
    ></insApplicationDetail>
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
  name: "insApplication",
  components: {
    templateAdd: () => import("@/views/template/templateAdd.vue"),
    insApplicationDetail: () =>
      import("@/views/template/insApplicationDetail.vue")
  },
  data() {
    return {
      templateType: 4,
      width: "60%",
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
      ]
    };
  },
  computed: {},
  methods: {
    insApplicationDetailCancel(){
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
    padding-bottom: 20px;

    button {
      margin-left: 10px;
    }
  }

  .table_body {
    padding-top: 10px;

    /deep/ .orangeCheckBox {
      margin-right: 20px;

      span {
        color: #f27966;
      }
    }

    .table_body_row {
      display: flex;
      justify-content: center;
      justify-items: center;
      flex-wrap: wrap;
      height: auto;
      box-sizing: border-box;
      padding-top: 10px;

      .table_body_row_item {
        width: 50%;
        min-height: 100px;
        height: auto;

        .row_item_box {
          width: 100%;
          min-height: 100px;
          height: auto;

          .row_item_box_table {
            border: 1px solid #ddd;

            .row_item_box_table_title,
            .row_item_box_table_row {
              display: flex;

              .row_item_box_table_col {
                width: 50%;
                border-left: 1px solid #ddd;
                border-bottom: 1px solid #ddd;
              }
            }

            .row_item_box_table_title {
              background: #fafafa;
              height: 42px;
              line-height: 40px;
              font-size: 12px;
              color: #555555;
              font-weight: bold;
              text-align: center;
            }

            .row_item_box_table_row {
              height: 30px;
              line-height: 30px;
              text-align: center;
            }

            .row_item_box_table_row1 {
              min-height: 210px;
            }
          }

          .buttonGroup {
            padding-top: 20px;
            display: flex;
            justify-content: flex-end;
            justify-items: center;

            button {
              margin-left: 20px;
            }
          }
        }
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
  /deep/ .ant-form-item-control-wrapper {
    min-width: 140px;
  }
}
</style>
