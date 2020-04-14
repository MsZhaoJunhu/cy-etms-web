<template>
  <div class="medicalRecordBody">
    <div class="left">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item
              label="出院科室"
              :labelAlign="`left`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 12 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 12 }, }"
            >
              <a-input placeholder="Please input your name" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="就诊日期"
              :labelAlign="`left`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 12 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 12 }, }"
            >
              <a-input placeholder="Please input your name" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="18">
            <a-input placeholder="Please input your name" />
          </a-col>
          <a-col :span="6" :style="{'padding-left':'0px'}">
            <a-button type="primary">Primary</a-button>
          </a-col>
        </a-row>
      </a-form>
      <div class="m_tab">
        <a-row :gutter="24" :class="'mt20'">
          <a-tabs type="card">
            <a-tab-pane tab="未就诊" key="1">
              <a-table :columns="columns" :dataSource="data" bordered></a-table>
            </a-tab-pane>
            <a-tab-pane tab="已就诊" key="2">
              <p>Content of Tab Pane 2</p>
              <p>Content of Tab Pane 2</p>
              <p>Content of Tab Pane 2</p>
            </a-tab-pane>
          </a-tabs>
        </a-row>
      </div>
      <div class="m_bottom">
        <div class="title">以往就诊信息</div>
        <div class="body">
          <a-table :columns="columns1" :dataSource="data1" bordered></a-table>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="head">
        <div class="head_item">1</div>
        <div class="head_item">2</div>
        <div class="head_item">3</div>
        <div class="head_item">4</div>
        <div class="head_item">5</div>
        <div class="head_item">6</div>
        <div class="head_item">7</div>
      </div>
      <div class="card">
        <a-tabs type="card">
          <a-tab-pane tab="病人信息" key="1">
              <patientInfo></patientInfo>
          </a-tab-pane>
          <a-tab-pane tab="医嘱管理" key="2">
            <doctorAdvice></doctorAdvice>
          </a-tab-pane>
          <a-tab-pane tab="病历管理" key="3">3</a-tab-pane>
          <a-tab-pane tab="病程记录" key="4">4</a-tab-pane>
          <a-tab-pane tab="会诊记录" key="5">5</a-tab-pane>
          <a-tab-pane tab="文件管理" key="6">6</a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "medicalRecordManagement",
  components : {
    patientInfo: () => import("@/views/medicalRecord/patientInfo.vue"),
    doctorAdvice: () => import("@/views/medicalRecord/doctorAdvice.vue"),
  },
  data() {
    return {
      columns: [
        {
          title: "就诊日期",
          dataIndex: "name",
          key: "name"
        },
        {
          title: "姓名",
          dataIndex: "age",
          key: "age"
        },
        {
          title: "ID号",
          dataIndex: "address",
          key: "address 1"
        }
      ],
      columns1: [
        {
          title: "就诊日期",
          dataIndex: "name",
          key: "name"
        },
        {
          title: "出院科室",
          dataIndex: "age",
          key: "age"
        },
        {
          title: "就诊序号",
          dataIndex: "address",
          key: "address 1"
        }
      ],
      data: [],
      data1: []
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.medicalRecordBody {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  background: #f0f2f5;
  justify-content: space-around;
  > .left {
    box-sizing: border-box;
    padding: 16px;
    width: 355px;
    min-height: 100px;
    > .m_tab {
      width: 100%;
      box-sizing: border-box;
      margin-top: 20px;
      /deep/.ant-tabs-nav-scroll {
        border-top: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
        .ant-tabs-nav {
          width: 100%;
          .ant-tabs-tab {
            width: 50%;
            text-align: center;
          }
          .ant-tabs-tab-active {
            background-color: #5584af;
            color: #fff;
          }
        }
      }
      /deep/.ant-tabs-top-bar {
        margin-bottom: 0px;
      }
      /deep/.ant-table-thead {
        th {
          padding: 10px 16px;
        }
      }
    }
    > .m_bottom {
      > .title {
        height: 59px;
        line-height: 59px;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  > .right {
    width: calc(100% - 371px);
    min-height: 100px;
    > .head {
      width: 100%;
      height: 60px;
      line-height: 60px;
      display: flex;
      border-bottom: 1px solid #eaeaea;
      justify-content: space-betweens;
      > .head_item {
        text-align: center;
        width: 14.28%;
        &:nth-child(1)::before {
          content: "ID：";
        }
        &:nth-child(2)::before {
          content: "姓名：";
        }
        &:nth-child(3)::before {
          content: "性别：";
        }
        &:nth-child(4)::before {
          content: "年龄：";
        }
        &:nth-child(5)::before {
          content: "就诊号：";
        }
        &:nth-child(6)::before {
          content: "就诊日期：";
        }
        &:nth-child(7)::before {
          content: "类别：";
        }
      }
    }
    > .card {
      /deep/ .ant-tabs-tab {
        border-bottom: 1px solid #e8e8e8;
        background: #fff;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
      }
      /deep/.ant-tabs-bar{
          margin-bottom: 0px;
      }
      /deep/.ant-tabs-tab-active {
        color: #56a8f5;
        position: relative;
        &::after {
          content: "";
          height: 3px;
          background: #56a8f5;
          display: block;
          bottom: 0px;
          width: 66%;
          position: absolute;
        }
      }
    }
  }
  .mt20 {
    margin-top: 20px;
  }
  & > div {
    margin-top: 16px;
    background: #fff;
  }
}
</style>