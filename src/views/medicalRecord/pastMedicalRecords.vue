<template>
  <div class="pastMedicalRecords">
    <a-table :columns="columns" :dataSource="data"></a-table>
  </div>
</template>

<script>
export default {
  name: "pastMedicalRecords",
  data() {
    return {
        columns : [
            {
            title: '填写时间',
            dataIndex: 'name',
            key: 'name',
            },
            {
            title: '病历名称',
            dataIndex: 'age',
            key: 'age',
            },
            {
            title: '状态',
            dataIndex: 'address',
            key: 'address',
            },
            {
            title: '打印次数',
            key: 'tags',
            dataIndex: 'tags',
            },
            {
            title: '最后保存时间',
            key: 'action',
            },{
            title: '起草人',
            key: 'action',
            },{
            title: '最后审签人',
            key: 'action',
            }, {
            title: '操作',
            key: 'caozuo'
          },
        ],
        data : [
            {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
            },
            {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
            },
            {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
            },
        ]
    }
  },
  mounted() {},
  methods : {
      
  }
};
</script>

<style lang="less" scoped>
.pastMedicalRecords {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 16px;
}
</style>>