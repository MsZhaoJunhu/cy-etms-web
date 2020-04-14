/* eslint-disable prefer-promise-reject-errors */
<template>
  <a-modal
    :visible="visible"
    :width="width"
    title="预检分诊-新增"
    wrapClassName="z_modal_style"
    @cancel="() => { $emit('cancel') }"
    @ok="() => { $emit('create') }"
  >
    <div class="yjfz">
      <div class="left">
        <div class="top">
          <div class="title">基本信息</div>
          <a-form layout="inline" :form="triage_patient_info" @submit="add()">
            <a-row :gutter="24">
              <a-col :span="12">
                <a-form-item :label="`来院时间`">
                  <!-- <a-input  v-decorator="[ `regTime`, { rules: [ { required: false, message: '', }, ],  }, ]" placeholder="" /> -->
                  <a-date-picker
                    v-decorator="['regTime', { rules: [ { required: true, message: '请选择来院时间', }, ],  }, ]"
                    show-time
                    format="YYYY-MM-DD"
                    onchange="onChange"
                    onOk="onOk"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`入科时间`">
                  <a-date-picker
                    v-decorator="['regDeptTime', { rules: [ { required: true, message: '请选择入科时间', }, ],  }, ]"
                    show-time
                    format="YYYY-MM-DD"
                    onchange="onChange"
                    onOk="onOk"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`ID号`">
                  <a-input v-decorator="[ 'patientId' ]" placeholder="ID号" />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`身份证号`">
                  <a-input
                    v-decorator="[ `idcardNo`, { rules: [ { required: true, message: '请输入身份证', }, ],  }, ]"
                    placeholder
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`姓名`">
                  <a-input
                    v-decorator="[ `patientName`, { rules: [ { required: true, message: '请输入姓名', }, ],  }, ]"
                    placeholder
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`性别`">
                  <a-radio-group
                    v-decorator="['patientSex',{ rules: [ { required: true, message: '请选择性别', }, ],  },]"
                  >
                    <a-radio value="1">男</a-radio>
                    <a-radio value="0">女</a-radio>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`出生日期`">
                  <a-date-picker
                    v-decorator="['birthDate', { rules: [ { required: true, message: '请选择出生日期', }, ],  }, ]"
                    show-time
                    format="YYYY-MM-DD"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`年龄`" class="age">
                  <a-input
                    addonAfter="岁"
                    v-decorator="['sui', { rules: [ { required: true, message: '请输入多少岁', }, ],  }, ]"
                  />
                  <a-input
                    addonAfter="月"
                    v-decorator="['yue', { rules: [ { required: true, message: '请输入多少月', }, ],  }, ]"
                  />
                  <a-input
                    addonAfter="天"
                    v-decorator="['tian', { rules: [ { required: true, message: '请输入多少天', }, ],  }, ]"
                  />
                  <!-- <a-input  v-decorator="[ `patientId`, { rules: [ { required: false, message: '', }, ],  }, ]" placeholder="" /> -->
                  <span style="opacity: 0;">111</span>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`医保号`">
                  <a-input v-decorator="[ `medicalInsuranceNo`,  ]" placeholder />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`发病时间`">
                  <a-date-picker
                    v-decorator="['onsetTime', { rules: [ { required: true, message: '请输入发病时间', }, ],  }, ]"
                    show-time
                    format="YYYY-MM-DD"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`联系人`">
                  <a-input
                    v-decorator="[ `contacts`, { rules: [ { required: true, message: '请输入联系人', }, ],  }, ]"
                    placeholder
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`电话`">
                  <a-input
                    v-decorator="[ `phone`, { rules: [ { required: true, message: '请输入电话', }, ],  }, ]"
                    placeholder
                  />
                </a-form-item>
              </a-col>
              <a-col :span="24">
                <a-form-item :label="`地址`" class="address">
                  <a-input
                    v-decorator="[ `address`, { rules: [ { required: true, message: '请输入地址', }, ],  }, ]"
                    placeholder
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`民族`">
                  <a-select  name="nation"   v-decorator="[ `nation`]" style="width: 160px" >
                    <a-select-option value="汉族">汉族</a-select-option>
                    <a-select-option value="土家族">土家族</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`出科时间`">
                  <a-date-picker
                    v-decorator="['outDeptTime', { rules: [ { required: false, message: '', }, ],  }, ]"
                    show-time
                    format="YYYY-MM-DD"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`是否心肺复苏`">
                  <a-radio-group
                    v-decorator="['isCpr',{ rules: [ { required: false, message: '', }, ] },]"
                  >
                    <a-radio value="1">是</a-radio>
                    <a-radio value="0">否</a-radio>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`是否成功`">
                  <a-radio-group
                    v-decorator="['isSuccess',{ rules: [ { required: false, message: '', }, ] },]"
                  >
                    <a-radio value="1">是</a-radio>
                    <a-radio value="0">否</a-radio>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`去向`">
                  <a-select  name="whereabouts"   v-decorator="[ `whereabouts`]" style="width: 160px" >
                    <a-select-option value="住院">住院</a-select-option>
                    <a-select-option value="留观">留观</a-select-option>
                    <a-select-option value="离院">离院</a-select-option>
                    <a-select-option value="转院">转院</a-select-option>
                    <a-select-option value="死亡">死亡</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`是否重返抢救室`" class="isReturnRescueRoom">
                  <a-radio-group
                    v-decorator="['isReturnRescueRoom',{ rules: [ { required: false, message: '', }, ]},]"
                  >
                    <a-radio value="1">是</a-radio>
                    <a-radio value="0">否</a-radio>
                  </a-radio-group>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </div>
        <div class="buttom">
          <div class="title">生命体征</div>
          <a-form layout="inline" :form="triage_vital_signs" @submit="add()">
            <a-row :gutter="24">
              <a-col :span="8">
                <a-form-item :label="`体温`">
                  <a-input
                    v-decorator="[ `temperature`, { rules: [ { required: true, message: '体温必填', }, ],  }, ]"
                    placeholder="℃"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item :label="`心率`">
                  <a-input
                    v-decorator="[ `heartRate`, { rules: [ { required: true, message: '', }, ],  }, ]"
                    placeholder="次/分"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item :label="`呼吸`">
                  <a-input
                    v-decorator="[ `breathe`, { rules: [ { required: true, message: '', }, ],  }, ]"
                    placeholder="次/分"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item :label="`血压`">
                  <a-input
                    v-decorator="[ `bloodPressure`, { rules: [ { required: true, message: '', }, ],  }, ]"
                    placeholder="mmHg"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item :label="`血糖`">
                  <a-input
                    v-decorator="[ `bloodGlucose`, { rules: [ { required: true, message: '', }, ],  }, ]"
                    placeholder="mmol/L"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item :label="`脉搏`">
                  <a-input
                    v-decorator="[ `pulse`, { rules: [ { required: true, message: '', }, ],  }, ]"
                    placeholder="bpm"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="16">
                <a-form-item :label="`血氧饱和度`" class="oxygenSaturation">
                  <a-input
                    v-decorator="[ `oxygenSaturation`, { rules: [ { required: true, message: '', }, ],  }, ]"
                    placeholder="%"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <div class="title">病人症状</div>
          <a-form layout="inline" :form="triage_patient_symptom" @submit="add()">
            <a-row :gutter="24">
              <a-col :span="12">
                <a-form-item :label="`来院方式`">
                  <a-radio-group
                    v-decorator="['wayToHospital',{ rules: [ { required: true, message: '请填入来院方式', }, ] } ]"
                  >
                    <a-radio value="步行">步行</a-radio>
                    <a-radio value="扶入">扶入</a-radio>
                    <a-radio value="抬入">抬入</a-radio>
                    <a-radio value="120抬入">120抬入</a-radio>
                    <a-radio value="其他">其他</a-radio>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`重点病重`">
                  <a-radio-group
                    v-decorator="['focusOnSevere',{ rules: [ { required: true, message: '请输入重点病重', }, ]  },]"
                  >
                    <a-radio value="1">是</a-radio>
                    <a-radio value="0">否</a-radio>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col :span="24">
                <a-form-item :label="`主要症状`" class="mainSymptoms">
                  <a-textarea
                    v-decorator="[ `mainSymptoms`, { rules: [ { required: true, message: '请输入主要症状', }, ],  }, ]"
                    placeholder
                    :rows="4"
                  />
                </a-form-item>
              </a-col>
              <!-- <a-col :span="12">
                <a-form-item :label="`主诉`">
                  <a-input
                    v-decorator="[ `mainStatement`, { rules: [ { required: false, message: '', }, ],  }, ]"
                    placeholder
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`现病史`">
                  <a-input
                    v-decorator="[ `historyOfPresentIllness`, { rules: [ { required: false, message: '', }, ],  }, ]"
                    placeholder
                  />
                </a-form-item>
              </a-col>-->
              <a-col :span="12">
                <a-form-item :label="`疑似传染病`" class="suspectedContagio">
                  <a-input
                    v-decorator="[ `suspectedContagio`, { rules: [ { required: true, message: '请输入疑似传染病', }, ],  }, ]"
                    placeholder
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`过敏史`">
                  <a-input
                    v-decorator="[ `allergyHistory`, { rules: [ { required: true, message: '请输入过敏史', }, ],  }, ]"
                    placeholder
                  />
                </a-form-item>
              </a-col>
              <a-col :span="24">
                <a-form-item :label="`绿色通道`" class="greenChannel">
                  <a-radio-group v-decorator="['greenChannel']">
                    <a-radio-button value="胸痛">胸痛</a-radio-button>
                    <a-radio-button value="卒中">卒中</a-radio-button>
                    <a-radio-button value="创伤">创伤</a-radio-button>
                    <a-radio-button value="心梗">心梗</a-radio-button>
                    <a-radio-button value="咯血">咯血</a-radio-button>
                    <a-radio-button value="孕产妇">孕产妇</a-radio-button>
                    <a-radio-button value="脑出血">脑出血</a-radio-button>
                    <a-radio-button value="心血管">心血管</a-radio-button>
                    <a-radio-button value="心力衰竭">心力衰竭</a-radio-button>
                    <a-radio-button value="颅脑损伤">颅脑损伤</a-radio-button>
                    <a-radio-button value="呼吸衰竭">呼吸衰竭</a-radio-button>
                    <a-radio-button value="重症肺结核">重症肺结核</a-radio-button>
                    <a-radio-button value="爆发性脑脊髓膜炎">爆发性脑脊髓膜炎</a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </div>
        <div class="buttom">
          <div class="title">分诊信息</div>
          <a-form layout="inline" :form="triage_info" @submit="add()">
            <a-row :gutter="24">
              <a-col :span="12">
                <a-form-item :label="`病情分级`" class="gradingDisease">
                  <a-radio-group
                    v-decorator="['gradingDisease',{ rules: [ { required: true, message: '请选择病情分级', }, ] },]"
                  >
                    <a-radio-button value="1级">1级</a-radio-button>
                    <a-radio-button value="2级">2级</a-radio-button>
                    <a-radio-button value="3级">3级</a-radio-button>
                    <a-radio-button value="4级">4级</a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`病情分区`" class="gradingDisease">
                  <a-radio-group
                    v-decorator="['diseaseZoning',{ rules: [ { required: true, message: '请选择病情分区', }, ]},]"
                  >
                    <a-radio-button value="红区">红区</a-radio-button>
                    <a-radio-button value="黄区">黄区</a-radio-button>
                    <a-radio-button value="绿区">绿区</a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`初/复诊`">
                  <a-radio-group
                    v-decorator="['firstAndSecondVisit',{ rules: [ { required: true, message: '', }, ] },]"
                  >
                    <a-radio value="初诊">初诊</a-radio>
                    <a-radio value="复诊">复诊</a-radio>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="`是否手术`">
                  <a-radio-group
                    v-decorator="['isSurgery',{ rules: [ { required: true, message: '', }, ] },]"
                  >
                    <a-radio value="1">是</a-radio>
                    <a-radio value="0">否</a-radio>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col :span="24">
                <a-form-item :label="`分诊科室`" class="triageDept">
                  <a-radio-group
                    v-decorator="['triageDept',{ rules: [ { required: true, message: '', }, ] },]"
                  >
                    <a-radio-button value="口腔门诊">口腔门诊</a-radio-button>
                    <a-radio-button value="耳鼻喉科门诊">耳鼻喉科门诊</a-radio-button>
                    <a-radio-button value="眼科门诊">眼科门诊</a-radio-button>
                    <a-radio-button value="妇产科门诊">妇产科门诊</a-radio-button>
                    <a-radio-button value="泌尿外科门诊">泌尿外科门诊</a-radio-button>
                    <a-radio-button value="内科急诊">内科急诊</a-radio-button>
                    <a-radio-button value="外科急诊">外科急诊</a-radio-button>
                    <a-radio-button value="普通内科">普通内科</a-radio-button>
                    <a-radio-button value="普外与骨科">普外与骨科</a-radio-button>
                    <a-radio-button value="胸外科">胸外科</a-radio-button>
                    <a-radio-button value="感染一科">感染一科</a-radio-button>
                    <a-radio-button value="感染二科">感染二科</a-radio-button>
                    <a-radio-button value="感染三科">感染三科</a-radio-button>
                    <a-radio-button value="结核一科">结核一科</a-radio-button>
                    <a-radio-button value="结核二科">结核二科</a-radio-button>
                    <a-radio-button value="结核三科">结核三科</a-radio-button>
                    <a-radio-button value="结核四科">结核四科</a-radio-button>
                    <a-radio-button value="结核五科">结核五科</a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </div>
      </div>
    </div>
  </a-modal>
</template>
<script>
export default {
  name: "yjfz_add",
  props: ["visible", "width"],
  data() {
    return {
      triage_patient_info: this.$form.createForm(this, {
        name: "triage_patient_info"
      }),
      triage_vital_signs: this.$form.createForm(this, {
        name: "triage_vital_signs"
      }),
      triage_patient_symptom: this.$form.createForm(this, {
        name: "triage_patient_symptom"
      }),
      triage_info: this.$form.createForm(this, {
        name: "triage_info"
      })
    };
  },
  updated() {},
  created() {},
  mounted() {},
  methods: {
    resetForm() {
      // 重置表单
      this.triage_patient_info.resetFields();
      this.triage_vital_signs.resetFields();
      this.triage_patient_symptom.resetFields();
      this.triage_info.resetFields();
    },
    submit() {
      alert("1111");
    },
    // 对象转数组
    objArr(obj) {
      let arr = [];
      for (let i in obj) {
        let o = {};
        o[i] = obj[i];
        arr.push(o);
      }
      return arr;
    },
    // 对象添加对象
    extend(target, source) {
      for (var obj in source) {
        target[obj] = source[obj];
      }
      return target;
    }, // 测试
    getDate() {
      // 获取表单所有数据
      const a = this.triage_patient_info.getFieldsValue();
      const b = this.triage_vital_signs.getFieldsValue();
      const c = this.triage_patient_symptom.getFieldsValue();
      const d = this.triage_info.getFieldsValue();
      let data;
      data = this.extend(a, b);
      data = this.extend(data, c);
      data = this.extend(data, d);
      return data;
    },
    getValidateFields() {
      // 做表单验证，四个表单同时通过验证，才算通过
      return Promise.all([
        this.triagePatientInfoVerifi(),
        this.triageVitalSignsVerifi(),
        this.triagePatientSymptomVerifi(),
        this.triageInfoVerifi()
      ]);
    },
    triagePatientInfoVerifi() {
      return new Promise((resolve, reject) => {
        this.triage_patient_info.validateFields(err => {
          if (!err) {
            resolve(true);
          } else {
            reject(false);
          }
        });
      });
    },
    triageVitalSignsVerifi() {
      return new Promise((resolve, reject) => {
        this.triage_vital_signs.validateFields(err => {
          if (!err) {
            resolve(true);
          } else {
            reject("false");
          }
        });
      });
    },
    triagePatientSymptomVerifi() {
      return new Promise((resolve, reject) => {
        this.triage_patient_symptom.validateFields(err => {
          if (!err) {
            resolve(true);
          } else {
            reject(false);
          }
        });
      });
    },
    triageInfoVerifi() {
      return new Promise((resolve, reject) => {
        this.triage_info.validateFields(err => {
          if (!err) {
            resolve(true);
          } else {
            reject(false);
          }
        });
      });
    },
    onOk(value) {
      console.log("onOk:", value);
    },
    onChange(value, dateString) {
      console.log("Selected Time: ", value);
      console.log("Formatted Selected Time: ", dateString);
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  font-size: 1.3rem;
  font-weight: bold;
  font-family: "宋体";
}
.yjfz {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  flex-wrap: wrap;
  .ant-form-item {
    margin-bottom: 0.5rem !important;
  }
  > .left {
    width: 36.5%;
    min-height: 20px;
    border-right: 1px solid #ececec;
    > .top {
      width: 100%;
      border-bottom: 1px solid #ececec;
      /deep/.ant-form-item-label {
        min-width: 80px;
      }
      /deep/.ant-form-item {
        width: 100%;
      }
      /deep/.ant-form-item-control-wrapper {
        min-width: 195px;
      }
      .age {
        /deep/.ant-form-item-children {
          display: flex;
        }
        /deep/.ant-form-item-control-wrapper {
          width: calc(100% - 80px);
          .ant-form-item-control {
            > .ant-form-item-children {
              > .ant-input-group-wrapper {
                > .ant-input-wrapper {
                  > .ant-input-group-addon {
                    background-color: #fff;
                    border: none;
                    padding: 0 5px;
                  }
                }
              }
            }
          }
        }
      }
      .address {
        /deep/.ant-form-item-control-wrapper {
          width: calc(100% - 104px);
        }
      }
      .isReturnRescueRoom {
        /deep/.ant-form-item-control-wrapper {
          min-width: calc(100% - 112px);
          width: calc(100% - 112px);
        }
      }
    }
    > .buttom {
      width: 100%;
      /deep/.ant-form {
        > .ant-row {
          > div {
            > .ant-form-item {
              > .ant-form-item-control-wrapper {
                width: 130px;
              }
            }
            > .oxygenSaturation {
              /deep/.ant-form-item-control-wrapper {
                width: 298px;
              }
            }
          }
        }
      }
    }
  }
  > .right {
    width: 63.5%;
    min-height: 20px;
    > .top {
      border-bottom: 1px solid #ececec;
      /deep/.ant-form {
        > .ant-row {
          .ant-form-item {
            width: 100%;
            > .ant-form-item-control-wrapper {
              width: calc(100% - 89px);
            }
          }
          .ant-form-item-label {
            min-width: 84px;
          }
          .mainSymptoms {
            width: 100%;
            > .ant-form-item-control-wrapper {
              width: calc(100% - 90px);
            }
          }
          .suspectedContagio {
            display: flex;
            /deep/.ant-form-item-control-wrapper {
            }
          }
          .greenChannel {
            /deep/.ant-form-item-control-wrapper {
              > .ant-form-item-control {
                > .ant-form-item-children {
                  > .ant-radio-group {
                    > .ant-radio-button-wrapper {
                      margin-right: 10px;
                    }
                    > .ant-radio-button-wrapper-checked {
                      color: #fff;
                      background-color: #49cef4;
                      border: 1px solid #49cef4;
                    }
                    > .ant-radio-button-wrapper:hover,
                    .ant-radio-button-wrapper-focused {
                      color: #fff;
                      background-color: #49cef4;
                      border: 1px solid #49cef4;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    > .buttom {
      /deep/.ant-form {
        > .ant-row {
          .ant-form-item-label {
            min-width: 84px;
          }
          .gradingDisease {
            /deep/.ant-form-item-control-wrapper {
              > .ant-form-item-control {
                > .ant-form-item-children {
                  > .ant-radio-group {
                    > .ant-radio-button-wrapper {
                      padding: 0 20px;
                      margin-right: 10px;
                    }
                    > .ant-radio-button-wrapper-checked {
                      color: #fff;
                      background-color: #49cef4;
                      border: 1px solid #49cef4;
                    }
                    > .ant-radio-button-wrapper:hover,
                    .ant-radio-button-wrapper-focused {
                      color: #fff;
                      background-color: #49cef4;
                      border: 1px solid #49cef4;
                    }
                  }
                }
              }
            }
          }
          .triageDept {
            /deep/.ant-form-item-control-wrapper {
              width: calc(100% - 84px);
              > .ant-form-item-control {
                > .ant-form-item-children {
                  > .ant-radio-group {
                    > .ant-radio-button-wrapper {
                      width: 140px;
                      margin-right: 24px;
                      text-align: center;
                    }
                    > .ant-radio-button-wrapper-checked {
                      color: #fff;
                      background-color: #49cef4;
                      border: 1px solid #49cef4;
                    }
                    > .ant-radio-button-wrapper:hover,
                    .ant-radio-button-wrapper-focused {
                      color: #fff;
                      background-color: #49cef4;
                      border: 1px solid #49cef4;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
/deep/.ant-form-inline .ant-form-item {
  margin-right: 0px;
}

@media screen and (max-width: 1200px) {
  .yjfz {
    > .left {
      width: 100%;
    }
    > .right {
      width: 100%;
    }
  }
}
</style>
