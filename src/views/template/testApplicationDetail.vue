<template>
  <a-modal
    :visible="visible"
    :width="width"
    title="检查模板信息"
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
        <a-checkbox class="orangeCheckBox">特病检查</a-checkbox>
        <a-checkbox class="orangeCheckBox">急诊</a-checkbox>
        <a-form class="ant-advanced-search-form" layout="horizontal" :style="{'margin-top':'10px'}">
          <a-row :gutter="24">
            <a-col :span="12">
              <a-form layout="horizontal">
                <a-row :gutter="24">
                  <a-col :span="12">
                    <a-form-item
                      label="类别"
                      :labelAlign="`left`"
                      :labelCol="{ xs: { span: 24 }, sm: { span: 8 },} "
                      :wrapperCol="{ xs: { span: 24 }, sm: { span: 16 }, }"
                    >
                      <a-input
                        v-decorator="[ `field-1`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]"
                        placeholder="111"
                      />
                    </a-form-item>
                  </a-col>
                  <a-col :span="12">
                    <a-form-item
                      :labelCol="{ xs: { span: 24 }, sm: { span: 0 },} "
                      :wrapperCol="{ xs: { span: 24 }, sm: { span: 16 }, }"
                    >
                      <a-input
                        v-decorator="[ `field-2`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]"
                        placeholder="222"
                      />
                    </a-form-item>
                  </a-col>
                </a-row>
              </a-form>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="发往科室"
                :labelCol="{ xs: { span: 24 }, sm: { span: 3 },} "
                :wrapperCol="{ xs: { span: 24 }, sm: { span: 7 }, }"
              >
                <a-input
                  v-decorator="[ `field-3`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]"
                  placeholder="placeholder"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="24" :style="{'margin-left':'0px'}">
            <a-form-item
              label="症状"
              :labelAlign="`left`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 2 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 15 }, }"
            >
              <a-input
                v-decorator="[ `field-4`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]"
                placeholder="placeholder"
              />
            </a-form-item>
          </a-row>
          <a-row :gutter="24" :style="{'margin-left':'0px'}">
            <a-form-item
              label="体征"
              :labelAlign="`left`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 2 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 15 }, }"
            >
              <a-input
                v-decorator="[ `field-5`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]"
                placeholder="placeholder"
              />
            </a-form-item>
          </a-row>
          <a-row :gutter="24" :style="{'margin-left':'0px'}">
            <a-form-item
              label="临床诊断"
              :labelAlign="`left`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 2 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 15 }, }"
            >
              <a-input
                v-decorator="[ `field-6`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]"
                placeholder="placeholder"
              />
            </a-form-item>
          </a-row>
          <a-row :gutter="24" :style="{'margin-left':'0px'}">
            <a-form-item
              label="相关化验诊断"
              :labelAlign="`left`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 2 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 15 }, }"
            >
              <a-input
                v-decorator="[ `field-7`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]"
                placeholder="placeholder"
              />
            </a-form-item>
          </a-row>
          <a-row :gutter="24" :style="{'margin-left':'0px'}">
            <a-form-item
              label="申请注意事项"
              :labelAlign="`left`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 2 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 15 }, }"
            >
              <a-textarea placeholder="textarea with clear icon" />
            </a-form-item>
          </a-row>
          <a-row :gutter="24" :style="{'margin-left':'0px'}" class="itemChoose">
            <a-form-item
              label="项目"
              :labelAlign="`left`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 2 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 13 }, }"
            >
              <a-radio-group defaultValue="a" buttonStyle="solid">
                <a-radio-button value="a">免费 - 胸部正位片（肺结核可以筛查）</a-radio-button>
                <a-radio-button value="b">免费 - 胸部正位片（密切接触者筛查）</a-radio-button>
                <a-radio-button value="c">胸部床旁正位片</a-radio-button>
                <a-radio-button value="d">胸部前弓位</a-radio-button>
                <a-radio-button value="e">胸部正、侧位片</a-radio-button>
                <a-radio-button value="f">胸部正、斜位片</a-radio-button>
              </a-radio-group>
            </a-form-item>
          </a-row>
          <a-row :gutter="24" :style="{'margin-left':'0px'}" class="itemChoose">
            <a-form-item
              label=" "
              :labelAlign="`left`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 2 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 13 }, }"
            >
              <a-textarea placeholder="textarea with clear icon" />
            </a-form-item>
          </a-row>
        </a-form>
      </div>
    </div>
    <template slot="footer">
      <div>
        <a-button class="z_modal_btn_save">保存</a-button>
        <a-button class="z_modal_btn_reset">放弃</a-button>
      </div>
    </template>
  </a-modal>
</template>

<script>
export default {
  name: "testApplicationDetail",
  props: ["visible", "width", "type"],
  methods: {
    handleCancel() {},
    handleOk() {}
  }
};
</script>

<style scoped lang="less">
.body {
  width: 100%;
  height: 100%;
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
  .search_item {
    /deep/.ant-form-item-control-wrapper {
      min-width: 140px;
    }
  }
}
</style>
