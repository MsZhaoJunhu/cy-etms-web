<template>
  <div class="prescription">
      <div class="head">
          <a-form layout="horizontal">
              <a-row :gutter="24">
                <a-col :span="6">
                    <a-form-item label="药局" :labelAlign="`right`" :labelCol="{ xs: { span: 24 }, sm: { span: 5 },} " :wrapperCol="{ xs: { span: 24 }, sm: { span: 17 }, }" >
                        <a-input placeholder="Please input your name" />
                    </a-form-item> 
                </a-col>
                <a-col :span="6">
                    <a-radio-group>
                    <a-radio :value="1">西药</a-radio>
                    <a-radio :value="2">草药</a-radio>
                    </a-radio-group>
                </a-col>
                <a-col :span="6">
                    <a-form-item label="处方属性" :labelAlign="`right`" :labelCol="{ xs: { span: 24 }, sm: { span: 5 },} " :wrapperCol="{ xs: { span: 24 }, sm: { span: 17 }, }" >
                        <a-input placeholder="Please input your name" />
                    </a-form-item> 
                </a-col>
                <a-col :span="6" class="tbcf">
                    <a-checkbox>特病处方</a-checkbox>
                </a-col>
              </a-row>
          </a-form>
      </div>
  </div>
</template>

<script>
export default {
  name: "prescription",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.prescription {
  --borderColor: #eaeaea;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .tbcf{
      /deep/.ant-checkbox-wrapper{
          padding-top: 20px;
          span{
              color: #f27966;
          }
      }
  }
  >.head{
      height: 66px;
      box-sizing: border-box;
      border: 1px solid var(--borderColor);
      /deep/.ant-form-item{
        height: 66px;
        padding-top: 12px;
        margin-bottom: 0px !important;
      }
      /deep/.ant-radio-group{
          padding-top: 20px;
      }
  }
}
</style>>