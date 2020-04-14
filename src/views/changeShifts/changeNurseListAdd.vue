<template>
  <a-modal
    :visible="visible"
    :width="width"
    title="交接班记录"
    wrapClassName="z_modal_save"
    @cancel="() => { $emit('cancel') }"
    @ok="() => { $emit('create') }"
  >
    <div class="body">
      <div class="title">交接信息</div>
      <a-form layout="horizontal" :form="change_doctor" @submit="add()">
        <a-row :gutter="24">
          <a-col :span="6">
            <a-form-item
              label="原有"
              class="people"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 8 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 14 }, }"
            >
              <a-input
                placeholder="Please input your name"
                v-decorator="[ `totalVisits`, { rules: [ { required: true, message: '', }, ],  }, ]"
                :min="1"
                :max="10"
              />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item
              label="白班入院"
              class="people"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 8 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 14 }, }"
            >
              <a-input
                v-decorator="[ `visits`, { rules: [ { required: true, message: '', }, ],  }, ]"
                placeholder="Please input your name"
                :min="1"
                :max="10"
              />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item
              label="出院"
              class="people"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 8 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 14 }, }"
            >
              <a-input
                v-decorator="[ `emergencyGreenAccess`, { rules: [ { required: true, message: '', }, ],  }, ]"
                placeholder="Please input your name"
                :min="1"
                :max="10"
              />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item
              label="转入"
              class="people"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 8 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 14 }, }"
            >
              <a-input
                v-decorator="[ `criticalPopulation`, { rules: [ { required: true, message: '', }, ],  }, ]"
                placeholder="Please input your name"
                :min="1"
                :max="10"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="6">
            <a-form-item
              label="转出"
              class="people"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 8 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 14 }, }"
            >
              <a-input
                v-decorator="[ `numberOfPersonsRescued`, { rules: [ { required: true, message: '', }, ],  }, ]"
                placeholder="Please input your name"
                :min="1"
                :max="10"
              />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item
              label="中班入院"
              class="people"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 8 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 14 }, }"
            >
              <a-input
                v-decorator="[ `deathToll`, { rules: [ { required: true, message: '', }, ],  }, ]"
                placeholder="Please input your name"
                :min="1"
                :max="10"
              />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item
              label="夜班入院"
              class="people"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 8 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 14 }, }"
            >
              <a-input
                v-decorator="[ `numberOfPersonsAdmitted`, { rules: [ { required: true, message: '', }, ],  }, ]"
                placeholder="Please input your name"
                :min="1"
                :max="10"
              />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item
              label="病急"
              class="people"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 8 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 14 }, }"
            >
              <a-input
                v-decorator="[ `numberOfOutpatientOperations`, { rules: [ { required: true, message: '', }, ],  }, ]"
                placeholder="Please input your name"
                :min="1"
                :max="10"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="6">
            <a-form-item
              label="病重"
              class="people"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 8 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 14 }, }"
            >
              <a-input
                v-decorator="[ `totalNumberOfVisitors`, { rules: [ { required: true, message: '', }, ],  }, ]"
                placeholder="Please input your name"
                :min="1"
                :max="10"
              />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item
              label="一般护理"
              class="people"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 8 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 14 }, }"
            >
              <a-input
                v-decorator="[ `currentNumberOfVisitors`, { rules: [ { required: true, message: '', }, ],  }, ]"
                placeholder="Please input your name"
                :min="1"
                :max="10"
              />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item
              label="死亡"
              class="people"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 8 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 14 }, }"
            >
              <a-input
                v-decorator="[ `currentNumberOfVisitors`, { rules: [ { required: true, message: '', }, ],  }, ]"
                placeholder="Please input your name"
                :min="1"
                :max="10"
              />
            </a-form-item>
          </a-col>

          <a-col :span="6">
            <a-form-item
              label="现有"
              class="people"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 8 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 14 }, }"
            >
              <a-input
                v-decorator="[ `currentNumberOfVisitors`, { rules: [ { required: true, message: '', }, ],  }, ]"
                placeholder="Please input your name"
                :min="1"
                :max="10"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24" class="button">
          <a-button class="save" @click="submit">保存</a-button>
          <a-button class="cancle">取消</a-button>
        </a-row>
      </a-form>
      <div class="line mt10"></div>
      <div class="title mt10">
        交接患者
        <a-button class="add">添加</a-button>
      </div>
      <a-table :columns="columns" :dataSource="changShiftsPatient">
        <template slot="sex" slot-scope="sex">
          <a-tag :color="sex===1 ? 'green' :'red'" :key="sex">{{sex===1?"男":"女"}}</a-tag>
        </template>
        <template slot="action5" slot-scope>
          <span>
            <a>修改</a>
            <a-divider type="vertical" />
            <a>删除</a>
          </span>
        </template>
      </a-table>
      <a-form layout="horizontal" class="mt10">
        <a-row :gutter="24">
          <a-col :span="6">
            <a-form-item
              label="床号"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 4 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 14 }, }"
            >
              <a-input placeholder="Please input your name" :min="1" :max="10" />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item
              label="姓名"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 4 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 14 }, }"
            >
              <a-input placeholder="Please input your name" :min="1" :max="10" />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item
              label="住院号"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 4 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 14 }, }"
            >
              <a-input placeholder="Please input your name" :min="1" :max="10" />
            </a-form-item>
          </a-col>
          <a-col :span="6"></a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item
              label="诊断"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 2 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 19 }, }"
            >
              <a-textarea placeholder="Basic usage" :rows="4" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="评估"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 2 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 19 }, }"
            >
              <a-textarea placeholder="Basic usage" :rows="4" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="背景"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 2 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 19 }, }"
            >
              <a-radio-group v-model="value">
                <a-radio :value="1">新收</a-radio>
                <a-radio :value="2">病急</a-radio>
                <a-radio :value="3">病重</a-radio>
                <a-radio :value="4">死亡</a-radio>
                <a-radio :value="5">预术</a-radio>
                <a-radio :value="6">过敏</a-radio>
                <a-radio :value="7">术后（）天</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item
              label="交班护士"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 8 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 19 }, }"
            >
              <a-input placeholder="Please input your name" :min="1" :max="10" />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item
              label="接班护士"
              :labelAlign="`right`"
              :labelCol="{ xs: { span: 24 }, sm: { span: 8 },} "
              :wrapperCol="{ xs: { span: 24 }, sm: { span: 19 }, }"
            >
              <a-input placeholder="Please input your name" :min="1" :max="10" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <template slot="footer">
      <div class="bottom_buttom">
        <a-button class="save" @click="()=>{$emit('create')}">保存</a-button>
        <a-button class="saveAndAdd">保存并新增</a-button>
        <a-button class="cancle" @click="()=>{$emit('cancel')}">取消</a-button>
      </div>
    </template>
  </a-modal>
</template>

<script>
export default {
  name: "changeNurseListAdd",
  props: ["visible", "width", "type"],
  data() {
    return {
      value: "",
      change_doctor: this.$form.createForm(this, {
        name: "change_doctor"
      }),
      columns: [
        {
          title: "床号",
          dataIndex: "shiftsNursePatientid",
          key: "shiftsNursePatientid"
        },
        {
          title: "姓名",
          dataIndex: "patientName",
          key: "patientName",
          // scopedSlots: { customRender: "sex" }
        },
        {
          title: "住院号",
          key: "inHospital",
          dataIndex: "inHospital"
        },
        {
          title: "背景",
          key: "background",
          dataIndex: "background"
        },
        {
          title: "诊断",
          key: "diagnosis",
          dataIndex: "diagnosis"
        },
        {
          title: "评估",
          key: "assessment",
          dataIndex: "assessment"
        },
        {
          title: "交班护士",
          key: "shiftNurse",
          dataIndex: "shiftNurse"
        },
        {
          title: "接班护士",
          key: "successionNurse",
          dataIndex: "successionNurse"
        },
        {
          title: "操作",
          key: "action5",
          scopedSlots: { customRender: "action5" }
        }
      ],
      changShiftsPatient: []
    };
  },
  mounted() {
    this.getChangShiftsPatient();
  },
  methods: {
    getChangShiftsPatient() {
      let data = {};
      this.$get("changeShiftsApi/selAllChangeShiftsPatient", data).then(
        res => {
          if (res.status == 200) {
            this.changShiftsPatient = res.data.data;
            console.log(this.changShiftsPatient);
          }
        }
      );
    },
    submit() {
      //   return new Promise((resolve, reject) => {
      //     this.change_doctor.validateFields(err => {
      //       if (!err) {
      //         resolve(true);
      //       } else {
      //         reject(false);
      //       }
      //     });
      //   });

      const a = this.change_doctor.getFieldsValue();
      var data = JSON.stringify(a);
      //带入token
      this.$ipost("changeShiftsApi/addChangShiftsDoctor", data).then(res => {
        this.change_doctor.setFieldsValue(res.data.data);
        this.$success({
          title: "保存成功提示",
          // JSX support
          content: (
            <div>
              <p>医师保存信息成功......</p>
            </div>
          )
        });
      });
      console.log(data);
    }
  }
};
</script>

<style lang="less" scoped>
.body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  > .title {
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    text-align: 1rem;
    position: relative;
    > .add {
      background: #1890ff;
      color: #fff;
      position: absolute;
      right: 30px;
    }
  }
  .people {
    /deep/.ant-form-item-control-wrapper {
      position: relative;
    }
    /deep/.ant-form-item-control-wrapper::after {
      content: "人";
      position: absolute;
      top: 9px;
      right: -19px;
      color: #1890ff;
    }
    /deep/.ant-form-item-label {
      label {
        color: #1890ff;
      }
    }
  }
  .line {
    width: 100%;
    border-bottom: 1px solid #eee;
  }
  .mt10 {
    margin-top: 10px;
  }
  .button {
    padding-right: 47px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    button {
      margin-right: 16px;
    }
    .save {
      background: #1890ff;
      color: #fff;
    }
  }
}
.bottom_buttom {
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin-right: 16px;
  }
  .saveAndAdd,
  .save {
    background: #1890ff;
    color: #fff;
  }
}
</style>>