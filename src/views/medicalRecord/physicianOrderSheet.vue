<template>
  <div class="physicianOrderSheet">
    <div class="title">重庆市公共卫生医疗救治中心</div>
    <div class="title_msg">临时医嘱单</div>
    <div class="title_info">
      <div class="title_info_item">张三</div>
      <div class="title_info_item">女</div>
      <div class="title_info_item">51</div>
      <div class="title_info_item">急诊部</div>
      <div class="title_info_item">就诊号</div>
    </div>
    <div class="phv_table">
      <a-table bordered :dataSource="data" :columns="colums">
        
      </a-table>
    </div>
    <div class="button"></div>
  </div>
</template>

<script>
export default {
  name: "physicianOrderSheet",
  data() {
    return {
      colums: [
        {
          title: "Name",
          dataIndex: "name",
          scopedSlots: { customRender: "name" }
        },
        {
          title: "Cash Assets",
          className: "column-money",
          dataIndex: "money"
        },
        {
          title: "Address",
          dataIndex: "address"
        }
      ],
      data: [
        {
          key: "1",
          name: "John Brown",
          money: "￥300,000.00",
          address: "New York No. 1 Lake Park"
        },
        {
          key: "2",
          name: "Jim Green",
          money: "￥1,256,000.00",
          address: "London No. 1 Lake Park"
        },
        {
          key: "3",
          name: "Joe Black",
          money: "￥120,000.00",
          address: "Sidney No. 1 Lake Park"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.physicianOrderSheet {
  margin: 16px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  --borderColor: #eaeaea;
  border: 1px solid var(--borderColor);
  .title {
    text-align: center;
    margin-top: 30px;
    color: #333;
    font-size: 16px;
    font-weight: bold;
    line-height: 16px;
  }
  .title_msg {
    color: #666666;
    margin: 15px;
    line-height: 14px;
    text-align: center;
    font-size: 14px;
  }
  .title_info {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 10%;
    > .title_info_item {
      font-size: 12px;
      color: #333333;
      width: 20%;
      text-align: left;
      text-indent: 2rem;
      &:nth-child(1)::before {
        content: "姓名：";
      }
      &:nth-child(2)::before {
        content: "性别：";
      }
      &:nth-child(3)::before {
        content: "年龄：";
      }
      &:nth-child(4)::before {
        content: "科室：";
      }
      &:nth-child(5)::before {
        content: "就诊号：";
      }
    }
  }
  .phv_table {
    margin-top: 20px;
  }
  .button {
    display: flex;
    justify-content: center;
  }
}
</style>>