<template>
  <a-modal
    :visible="visible"
    :width="width"
    title="处方模板信息"
    wrapClassName="z_modal_save"
    @cancel="() => { $emit('cancel') }"
    @ok="() => { $emit('create') }"
  >
    <div class="body">
      <div class="head">
        <a-form layout="inline">
          <a-form-item label="药局" class="search_item">
            <a-select
              v-decorator="['select',{ rules: [{ required: true, message: 'Please select your country!' }] },]"
              placeholder="请选择"
            ></a-select>
          </a-form-item>
          <a-form-item label class="search_item">
            <a-radio value="a">西药</a-radio>
            <a-radio value="b">草药</a-radio>
          </a-form-item>
          <a-form-item label="处方属性" class="search_item">
            <a-select
              v-decorator="['select',{ rules: [{ required: true, message: 'Please select your country!' }] },]"
              placeholder="请选择"
            ></a-select>
          </a-form-item>
          <a-form-item label class="search_item">
            <a-checkbox value="A">特病处方</a-checkbox>
          </a-form-item>
        </a-form>
      </div>
      <div class="table_body">
        <a-table :columns="item2Columns" :dataSource="item2data"></a-table>
        <a-table :columns="item2Columns1" :dataSource="item2data1"></a-table>
      </div>
    </div>
    <template slot="footer">
        <div>
          <a-button class="z_template_button1">新方</a-button>
          <a-button class="z_template_button2">添加</a-button>
          <a-button class="z_template_button3">子处方</a-button>
          <a-button class="z_template_button4">保存</a-button>
          <a-button class="z_template_button5">删除</a-button>
          <a-button class="z_template_button6">放弃</a-button>
        </div>
      </template>
  </a-modal>
</template>

<script>
export default {
  name: "prescriptionTemplateDetail",
  props: ["visible", "width", "type"],
  data() {
    return {
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
      item2data1: []
    };
  }
};
</script>

<style scoped lang="less">
.body {
  width: 100%;
  height: auto;
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
  .search_item {
    /deep/ .ant-form-item-control-wrapper {
      min-width: 140px;
    }
  }
}
</style>
