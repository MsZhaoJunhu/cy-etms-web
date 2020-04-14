<template>
  <div class="doctorAdvice">
      <a-tabs  type="card">
        <a-tab-pane tab="基本病历" key="1">Content of Tab Pane 1</a-tab-pane>
        <a-tab-pane tab="处置" key="2">Content of Tab Pane 2</a-tab-pane>
        <a-tab-pane tab="处方" key="3">
            <prescription></prescription>
        </a-tab-pane>
        <a-tab-pane tab="检查申请" key="4">Content of Tab Pane 4</a-tab-pane>
        <a-tab-pane tab="检验申请" key="5">Content of Tab Pane 5</a-tab-pane>
        <a-tab-pane tab="已开检查" key="6">Content of Tab Pane 6</a-tab-pane>
        <a-tab-pane tab="已开检验" key="7">Content of Tab Pane 7</a-tab-pane>
        <a-tab-pane tab="以往处置处方" key="8">Content of Tab Pane 8</a-tab-pane>
        <a-tab-pane tab="以往病历" key="9">Content of Tab Pane 9</a-tab-pane>
        <a-tab-pane tab="医嘱单" key="10">
             <physicianOrderSheet></physicianOrderSheet>
        </a-tab-pane>
        <a-tab-pane tab="以往医嘱" key="11">
            <pastMedicalRecords></pastMedicalRecords>
        </a-tab-pane>
        <a-tab-pane tab="住院证" key="12">Content of Tab Pane 12</a-tab-pane>
      </a-tabs>
  </div>
</template>

<script>
export default {
  name: "doctorAdvice",
  components : {
    pastMedicalRecords: () => import('@/views/medicalRecord/pastMedicalRecords.vue'),
    physicianOrderSheet: () => import("@/views/medicalRecord/physicianOrderSheet.vue"),
    prescription: () => import("@/views/medicalRecord/prescription.vue"),
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {

  }
};
</script>

<style lang="less" scoped>
.doctorAdvice { 
  --borderColoe: #eaeaea;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  > .head {
    height: 66px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid var(--borderColoe);
  }
  /deep/.ant-tabs-nav-container{
      height: 60px!important;
      display: flex;
      align-items: center;
  }
   /deep/.ant-tabs-nav-container::before{
       content: '类别：';
       margin-left: 16px;
       margin-right: 0px;
       display: inline-block;
   }
   /deep/ .ant-tabs-tab{
       margin-left: 12px !important;
       border: 1px solid var( --borderColoe ) !important;
       height: 26px !important;
       line-height: 26px !important;
       font-weight: bold;
   }
   /deep/ .ant-tabs-tab-active{
       background: #49cef4 !important;
       color: #49cef4 !important;
       color: #fff !important;
   }
   /deep/ .ant-tabs-tab-active::after{
       background: rgba(0,0,0,0) !important;
   }
}
</style>>