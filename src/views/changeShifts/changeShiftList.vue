<template>
  <div class="main">
    <div class="content">
      <div class="content_top">
        <div class="left">
          <a-form layout="horizontal">
            <a-row :gutter="24">
              <a-col :span="12">
                <a-form-item label="入科时间" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                  <a-date-picker v-decorator="['regDeptTime']" show-time format="YYYY-MM-DD" />
                </a-form-item>
              </a-col>
              <a-col :span="9">
                <a-form-item
                  class="people"
                  :labelAlign="`right`"
                  :labelCol="{ xs: { span: 24 }, sm: { span: 7 },} "
                  :wrapperCol="{ xs: { span: 24 }, sm: { span: 15 }, }"
                >
                  <a-input placeholder="Please input your name" />
                </a-form-item>
              </a-col>
              <a-col :span="3">
                <a-form-item
                  class="people"
                  :labelAlign="`right`"
                  :labelCol="{ xs: { span: 24 }, sm: { span: 7 },} "
                  :wrapperCol="{ xs: { span: 24 }, sm: { span: 17 }, }"
                >
                  <a-button icon="search" @click="add()">查询</a-button>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </div>
        <div class="right">
          <a-row :gutter="24">
            <a-col :span="12">
              <a-button icon="search" @click="add()">新增</a-button>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="content_bottom">
        <a-table
          :columns="columns"
          :loading="loading"
          :dataSource="changeShiftList"
          :pagination="false"
          bordered
        >
          <template slot="action" slot-scope="text, record">
            <a href="javascript:;" @click="x">详情</a>
          </template>
        </a-table>
      </div>
      <!-- 分页 -->
      <div class="pagenation">
        <template>
          <div id="components-pagination-demo-mini">
            <a-pagination
              size="small"
              :total="total"
              showSizeChanger
              showQuickJumper
              @change="onChange"
              @showSizeChange="onShowSizeChange"
            />
          </div>
        </template>
      </div>
    </div>

    <!-- 详情 -->
    <collectionEditForm ref="collectionForm" :editOption="editOption" />

    <!-- 增加 -->
    <changeShiftListAdd
      ref="changeNurseListAdd"
      :visible="visible"
      :width="width"
      :type="templateType"
      @cancel="changeShiftListCancel"
      @create="changeShiftListCreate"
    ></changeShiftListAdd>
  </div>
</template>
<script>
const collectionEditForm = {
  props: ["editOption"],
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "form_in_modal" });
  },
  template: `
    <a-modal
      :visible="editOption"
      title='Create a new collection'
      okText='Create'
      @cancel="() => { $emit('cancel') }"
      @ok="() => { $emit('create') }"
    >
      <a-form layout='vertical' :form="form">
        <a-form-item label='Title'>
          <a-input
            v-decorator="[
              'title',
              {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              }
            ]"
          />
        </a-form-item>
        <a-form-item label='Description'>
          <a-input
            type='textarea'
            v-decorator="['description']"
          />
        </a-form-item>
        <a-form-item class='collection-create-form_last-form-item'>
          <a-radio-group
            v-decorator="[
              'modifier',
              {
                initialValue: 'private',
              }
            ]"
          >
              <a-radio value='public'>Public</a-radio>
              <a-radio value='private'>Private</a-radio>
            </a-radio-group>
        </a-form-item>
      </a-form>
    </a-modal>
  `
};

export default {
  name: "changeShiftList",
  components: {
    collectionEditForm,
    changeShiftListAdd: () =>
      import("@/views/changeShifts/changeShiftListAdd.vue")
  },
  data() {
    return {
      loading: false,
      total: 0,
      changeShiftList: [],
      visible: false,
      editOption: false,
      width: "80%",
      pageNumber: 1,
      pageSize: 10,
      templateType: 1,
      search: this.$form.createForm(this, { name: "search" }),
      columns: [
        {
          title: "序号",
          align: "center",
          dataIndex: "shiftsId",
          ellipsis: true
        },
        {
          title: "记录日期",
          align: "center",
          dataIndex: "createTime",
          ellipsis: true,
          width: 200
        },
        {
          title: "就诊总人次",
          align: "center",
          dataIndex: "totalVisits",
          ellipsis: true
        },
        {
          title: "120出诊人次",
          align: "center",
          dataIndex: "visits",
          ellipsis: true
        },
        {
          title: "急诊绿色通道人次",
          align: "center",
          dataIndex: "emergencyGreenAccess",
          ellipsis: true
        },
        {
          title: "危重人数",
          align: "center",
          dataIndex: "criticalPopulation",
          ellipsis: true
        },
        {
          title: "抢救人次",
          align: "center",
          dataIndex: "numberOfPersonsRescued",
          ellipsis: true
        },
        {
          title: "死亡人数",
          align: "center",
          dataIndex: "deathToll",
          ellipsis: true
        },
        {
          title: "门诊手术人次",
          align: "center",
          dataIndex: "numberOfOutpatientOperations",
          ellipsis: true
        },
        {
          title: "留观总人数",
          align: "center",
          dataIndex: "totalNumberOfVisitors",
          ellipsis: true
        },
        {
          title: "现有留观人数",
          align: "center",
          dataIndex: "currentNumberOfVisitors",
          ellipsis: true
        },
        {
          title: "交班医师",
          align: "center",
          dataIndex: "handoverDoctor",
          ellipsis: true
        },
        {
          title: "接班医师",
          align: "center",
          dataIndex: "successionPhysician",
          ellipsis: true
        },
        {
          title: "操作",
          key: "action",
          scopedSlots: { customRender: "action" }
        }
      ]
    };
  },
  created() {},
  mounted() {
    this.getChageShiftsAll();
    console.log(this.changeShiftList);
  },
  methods: {
    add() {
      this.visible = !this.visible;
    },
    changeShiftListCancel() {
      this.visible = !this.visible;
      this.getChageShiftsAll();
    },
    changeShiftListCreate() {
      alert("创建");
    },
    getChageShiftsAll() {
      this.loading = true;
      let map = {};
      map.pageNum = this.pageNumber;
      map.pageSize = this.pageSize;
      this.$get("changeShiftsApi/getListChangShiftsDoctorList", map).then(
        res => {
          console.log(res);
          if (res.status == 200) {
            this.loading = false;
            this.changeShiftList = res.data.data.row;
            this.total = res.data.data.total;
          }
        }
      );
    },
    // 分页
    onChange(page, pageSize) {
      console.log("PageNum: ", page);
      console.log("Page: ", pageSize);
      this.pageNumber = page;
      this.pageSize = pageSize;
      this.getChageShiftsAll();
    },
    //页面获取
    onShowSizeChange(current, size) {
      console.log("current: ", current);
      console.log("size: ", size);
      this.pageNumber = current;
      this.pageSize = size;
      this.getChageShiftsAll();
    },
    x() {
      alert("xxxx");
      this.editOption = true;
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  width: 80%;
  margin: 0 auto;
}
.pagenation {
  width: 100%;
  margin: 2rem 0 1rem 0;
  text-align: center;
}
.content {
  width: 100%;
  margin-top: 10px;
  padding: 0rem 0;
}
.content_top {
  position: relative;
  background-color: #fff;
  /* padding: 1rem 0.8rem; */
  height: 66px;
  padding-top: 15px;
  padding-left: 15px;
  > .left {
    display: flex;
    justify-content: start;
    width: 900px;
    input {
      // width: 218px;
    }
    button {
      background: #56a8f5;
      border: 1px solid #56a8f5;
      color: #fff;
      width: 84px;
      transition: all 0.3s;
    }
    button:hover {
      background: #fff;
      border: 1px solid #56a8f5;
      color: #56a8f5;
    }
  }
  > .right {
    // width: 330px;
    width: 60px;
    position: absolute;
    right: 40px;
    top: 15px;
    .ant-row > div:nth-child(2) {
      /deep/.ant-form-item-control-wrapper {
        width: 167px;
      }
    }
  }
}
.content_middle {
  height: 116px;
  box-sizing: border-box;
  padding: 17px 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  background: #fff;
  > .content_middle_div {
    border: 1px solid #dddddd;
    width: 20%;
    height: 50%;
    display: flex;
    > .content_middle_div_left {
      border-right: 1px solid #ddd;
      width: 50%;
      height: 100%;
      background: #fafafa;
      color: #555555;
      font-size: 12px;
      font-weight: bold;
      line-height: 39px;
      text-align: center;
    }
  }
}
.content_bottom {
  background: #fff;
  padding-top: 19px;
}
/deep/.ant-table-thead > tr > th {
  padding: 10px 16px;
}
/deep/.ant-table-tbody > tr > td {
  padding: 5px 16px;
}
#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}
</style>
