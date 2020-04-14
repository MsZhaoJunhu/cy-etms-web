<template>
  <a-modal
    :visible="visible"
    :width="width"
    title="处置模板信息"
    wrapClassName="z_modal_save"
    @cancel="() => { $emit('cancel') }"
    @ok="() => { $emit('create') }"
  >
    <div class="right">
       <div class="table_body">
        <a-table :columns="item2Columns" :dataSource="item2data"></a-table>
      </div>
    </div>
    <template slot="footer">
      <div>
        <a-button class="z_template_button4">保存</a-button>
        <a-button class="z_template_button5">删除</a-button>
        <a-button class="z_template_button6">放弃</a-button>
      </div>
    </template>
  </a-modal>
</template>

<script>
export default {
  name: "handleTemplateDetail",
  props: ["visible", "width", "type"],
  data() {
    return {
     item2Columns: [
        {
          title: "项目名称",
          dataIndex: "name",
          key: "name",
          ellipsis: true
        },
        {
          title: "类别",
          dataIndex: "age",
          key: "age",
          ellipsis: true
        },
        {
          title: "数量",
          dataIndex: "address",
          key: "address 1",
          ellipsis: true
        },
        {
          title: "单位",
          dataIndex: "address",
          key: "address 2",
          ellipsis: true
        },
        {
          title: "实收",
          dataIndex: "address",
          key: "address 3",
          ellipsis: true
        },
        {
          title: "开单序号",
          dataIndex: "address",
          key: "address 4",
          ellipsis: true
        },
        {
          title: "特病处理审核状态",
          dataIndex: "address",
          key: "address 5",
          ellipsis: true
        },
        {
          title: "频次",
          dataIndex: "address",
          key: "address 6",
          ellipsis: true
        },
        {
          title: "执行科室",
          dataIndex: "address",
          key: "address 6",
          ellipsis: true
        },
        {
          title: "特病处置",
          dataIndex: "address",
          key: "address 6",
          ellipsis: true
        },
        {
          title: "收费标准",
          dataIndex: "address",
          key: "address 6",
          ellipsis: true
        },
        {
          title: "医生说明",
          dataIndex: "address",
          key: "address 6",
          ellipsis: true
        }
      ],
      item2data:[]
    };
  },
  computed: {

  },
  methods: {
    rowSelection1() {
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
  }
};
</script>

<style lang="less" scoped>
</style>