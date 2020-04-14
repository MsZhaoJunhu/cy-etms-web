<template>
  <div class="main">
    <div class="content">
      <div class="content_top">
        <a-form :form="search" @submit="submit()">
          <ul class="content_top_ul">
            <li>
              <!-- <span>姓名或ID</span>
              <input type="text" />-->
              <a-form-item label="姓名或ID：" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                <a-input
                  v-decorator="['conditipn', { rules: [{ required: false, message: '' }] }]"
                />
              </a-form-item>
            </li>
            <li>
              <!-- <span>入科时间</span>
              <input type="date" />-->
              <a-form-item label="入科时间" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                <a-date-picker v-decorator="['regDeptTime']" show-time format="YYYY-MM-DD" />
              </a-form-item>
            </li>
            <li>
              <!-- <span>出科时间</span>
              <input type="date" />-->
              <a-form-item label="出科时间" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                <a-date-picker v-decorator="['outDeptTime']" show-time format="YYYY-MM-DD" />
              </a-form-item>
            </li>
            <li>
              <a-button class="z_button_search" icon="search" html-type="submit">查询</a-button>
            </li>
          </ul>
        </a-form>
      </div>
      <div class="content_bottom">
        <div class="content_bottom_top">
          <a-button class="z_button_add" icon="plus" @click="add()">新增</a-button>
          <div>
            <a-button class="z_button_print">打印</a-button>
            <a-button class="z_button_statistics">统计</a-button>
            <!-- <button>打印</button> -->
            <!-- <button>统计</button> -->
          </div>
        </div>
        <div class="content_bottom_bottom">
          <!-- <table  class="content_bottom_bottom_table" v-loading="loading"> -->
          <table class="content_bottom_bottom_table" v-loading="loading">
            <thead>
              <tr>
                <th rowspan="2">入科时间</th>
                <th rowspan="2">姓名</th>
                <th rowspan="2">性别</th>
                <th rowspan="2">年龄</th>
                <th rowspan="2">ID号</th>
                <th rowspan="2">主要症状</th>
                <th rowspan="2">来院方式</th>
                <th colspan="5">生命特征</th>
                <th rowspan="2">病情分级</th>
                <th rowspan="2">分区</th>
                <th rowspan="2">重点病重</th>
                <th rowspan="2">绿色通道</th>
                <th rowspan="2">去向</th>
                <th rowspan="2">去向登记时间</th>
                <th rowspan="2">出科时间</th>
                <th rowspan="2">留观时间/min</th>
                <th rowspan="2">停留时间/min</th>
                <th rowspan="2">滞留时间/min</th>
                <th rowspan="2">分诊人</th>
                <th rowspan="2">操作</th>
              </tr>
              <tr>
                <th>T(℃)</th>
                <th>
                  P
                  <br />(min/次)
                </th>
                <th>
                  R
                  <br />(min/次)
                </th>
                <th>
                  BP
                  <br />(mmHg)
                </th>
                <th>
                  SPO2
                  <br />(%)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(elem,index) of table_listGroupNew" :key="index">
                <td>{{elem.regDeptTime}}</td>
                <td>{{elem.patientName}}</td>
                <td>{{elem.patientSex==1?"男":"女"}}</td>
                <td>{{elem.patientAge}}</td>
                <td>{{elem.patientId}}</td>
                <td>{{elem.mainSymptoms}}</td>
                <td>{{elem.wayToHospital}}</td>
                <td>{{elem.temperature}}</td>
                <td>{{elem.heartRate}}</td>
                <td>{{elem.breathe}}</td>
                <td>{{elem.bloodPressure}}</td>
                <td>{{elem.oxygenSaturation}}</td>
                <td>{{elem.gradingDisease}}</td>
                <td v-if="elem.gradingDisease==='1级' || elem.gradingDisease==='2级' ">
                  <span class="partition_bgc" :style="{backgroundColor:partition_r.bgcolor}"></span>
                  <span>{{partition_r.text}}</span>
                </td>
                 <td v-if="elem.gradingDisease==='3级'">
                  <span class="partition_bgc" :style="{backgroundColor:partition_y.bgcolor}"></span>
                  <span>{{partition_y.text}}</span>
                </td>
                <td v-if="elem.gradingDisease==='4级'">
                  <span class="partition_bgc" :style="{backgroundColor:partition_g.bgcolor}"></span>
                  <span>{{partition_g.text}}</span>
                </td>
                <td>{{elem.focusOnSevere==1?"是":"否"}}</td>
                <td>{{elem.greenChannel}}</td>
                <td>{{elem.whereabouts}}</td>
                <td>{{elem.go_away_time}}</td>
                <td>{{elem.outDeptTime}}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <img class="td_img" src="./image/edit.png" @click="update(elem.id)" />
                  <img src="./image/delete.png" @click="del(elem.id)" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
    </div>

    <!-- 编辑 -->
    <yjfzDetail
      ref="collectionFormEdit"
      :edit="visible1"
      :width="width"
      @cancel1="handleCancel1"
      @create1="handleCreate1"
    ></yjfzDetail>
    <!-- 增加 -->
    <yjfzAdd
      ref="collectionForm"
      :visible="visible"
      :width="width"
      @cancel="handleCancel"
      @create="handleCreate"
    ></yjfzAdd>
  </div>
</template>
<script>
import cyUtils from "./../../utils/cyUtils";

export default {
  name: "yjfz",
  components: {
    yjfzDetail: () => import("@/views/yjfz/yjfz_detail.vue"),
    yjfzAdd: () => import("@/views/yjfz/yjfz_add.vue")
  },
  data() {
    return {
      loading: false,
      visible: false,
      visible1: false,
      width: "90%",
      cyUtils: new cyUtils(),
      yjfzDetail: false,
      yjfzAdd: false,
      search: this.$form.createForm(this, { name: "search" }),
      table_listGroupNew: "",
      total: 0,
      pageNumber: 1,
      pageSize: 10,
      editList: "",
      partition_g: { bgcolor: "#34D838", text: "绿区" },
      partition_r: { bgcolor: "#ee3729", text: "红区" },
      partition_y: { bgcolor: "#f7e01e", text: "黄区" },
      trId: "",
      table_listGroup: [],
      currentPage4: 4
    };
  },
  async created() {
    //得到数据
    await this.getPatientInfo();
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    getPatientInfo() {
      this.loading = true;
      let map = this.search.getFieldsValue();
      map.pageNum = this.pageNumber;
      map.pageSize = this.pageSize;
      this.$get("previewTriageController/getByIdOrNameAndTime", map).then(
        res => {
          if (res.data.code == 200) {
            //成功数据获取
            this.table_listGroupNew = res.data.data.row;
            console.log(this.table_listGroupNew);
            this.total = res.data.data.total;
            this.loading = false;
          }
        }
      );
    },
    add() {
      this.$refs.collectionForm.resetForm(); //调用子组件的重置表单
      this.visible = true;
      this.yjfzAdd = true;
    },
    async update(id) {
      //根据id查找
      await this.$get("previewTriageController/getTriageInfo/" + id).then(
        res => {
          if (res.data.code == 200) {
            if (
              res.data.data.triagePatientInfo.patientAge != null &&
              res.data.data.triagePatientInfo.patientAge != ""
            ) {
              let arr = res.data.data.triagePatientInfo.patientAge.split("/");
              res.data.data.triagePatientInfo.sui = arr[0];
              res.data.data.triagePatientInfo.yue = arr[1];
              res.data.data.triagePatientInfo.tian = arr[2];
            }
            this.editList = res.data.data;
            //处理一波反显数据
            this.$refs.collectionFormEdit.setFormValues(this.editList);
            this.visible1 = true;
            this.yjfzDetail = true;
          }
        }
      );
    },
    regDeptTime() {
      alert(111);
    },
    outDeptTime() {},
    submit() {
      //提交表单
      this.getPatientInfo();
    },
    del(val) {
      let that = this;
      this.$confirm({
        title: "确认删除?",
        content: "确认删除预检分诊信息？",
        centered: true,
        onOk() {
          that.$delete("previewTriageController/del/" + val).then(res => {
            if (res.data.code == 200) {
              that.$message.success("删除成功！");
              that.getPatientInfo();
            }
          });
        },
        onCancel() {}
      });
    },
    //处理数据
    handleCreate() {
      let that = this;
      const form = this.$refs.collectionForm.form;
      //得到表单数据  triage_patient_info  triage_patient_symptom   triage_vital_signs
      this.$refs.collectionForm
        .getValidateFields()
        .then(res => {
          this.$confirm({
            title: "确认添加?",
            content: "确认添加预检分诊信息？",
            centered: true,
            onOk() {
              let data = that.$refs.collectionForm.getDate();
              data.id = that.trId;
              that
                .$post("previewTriageController/addTriage", data)
                .then(rep => {
                  if (rep.data.code == 200) {
                    //相关操作弹出成功  关闭弹框，刷新表格
                    that.$message.success("添加成功！");
                    that.visible = false;
                    that.getPatientInfo();
                  } else {
                    that.$message.error("添加成功！");
                  }
                });
            },
            onCancel() {}
          });
        })
        .catch(err => {
          this.$message.warning("请检查数据是否符合规范");
        });
    },
    // 分页
    onChange(page, pageSize) {
      console.log("PageNum: ", page);
      console.log("Page: ", pageSize);
      this.pageNumber = page;
      this.pageSize = pageSize;
      this.getPatientInfo();
    },
    //页面获取
    onShowSizeChange(current, size) {
      console.log("current: ", current);
      console.log("size: ", size);
      this.pageNumber = current;
      this.pageSize = size;
      this.getPatientInfo();
    },
    handleCreate1() {
      //更新操作
      //  const form = this.$refs.collectionFormEdit.form;
      let that = this;
      this.$refs.collectionFormEdit
        .getValidateFieldsVerifi()
        .then(res => {
          this.$confirm({
            title: "确认修改?",
            content: "确认修改预检分诊信息？",
            centered: true,
            onOk() {
              let data = that.$refs.collectionFormEdit.getDate();
              data = that.cyUtils.deleteValueIsNull(data);
              that
                .$post("previewTriageController/addTriage", data)
                .then(rep => {
                  if (rep.data.code == 200) {
                    //相关操作弹出成功  关闭弹框，刷新表格
                    that.$message.success("保存成功！");
                    that.visible1 = false;
                    that.getPatientInfo();
                  } else {
                    that.$message.error("保存成功！");
                  }
                });
            },
            onCancel() {}
          });
        })
        .catch(err => {
          console.log("res", err);
          this.$message.warning("请检查数据是否符合规范");
        });
    },
    handleCancel() {
      this.visible = false;
    },
    handleCancel1() {
      this.visible1 = false;
    }
  }
};
</script>
<style lang="less" scoped>
/* 清除内外边距 */
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
pre, /* text formatting elements 文本格式元素 */
fieldset, lengend, button, input, textarea, /* form elements 表单元素 */
th, td ,div {
  /* table elements 表格元素 */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 设置默认字体 */
body,
button,
input,
select,
textarea {
  /* for ie */
  /*font: 12px/1 Tahoma, Helvetica, Arial, "宋体", sans-serif;*/
  font-family: "微软雅黑", sans-serif, inherit; /* 用 ascii 字符表示，使得在任何编码下都无问题 */
  font-size: 0.12rem;
}
h2 {
  font-size: 16px;
}
h3 {
  font-size: 14px;
}
h4,
h5,
h6 {
  font-size: 100%;
}

address,
cite,
dfn,
em,
var {
  font-style: normal;
} /* 将斜体扶正 */
code,
kbd,
pre,
samp,
tt {
  font-family: "Courier New", Courier, monospace;
} /* 统一等宽字体 */
small {
  font-size: 12px;
} /* 小于 12px 的中文很难阅读，让 small 正常化 */

/* 重置列表元素 */
ul,
ol {
  list-style: none;
}

/* 重置文本格式元素 */
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}

abbr[title],
acronym[title] {
  /* 注：1.ie6 不支持 abbr; 2.这里用了属性选择符，ie6 下无效果 */
  border-bottom: 1px dotted;
  cursor: help;
}

q:before,
q:after {
  content: "";
}

/* 重置表单元素 */
legend {
  color: #000;
} /* for ie6 */
fieldset,
img {
  border: none;
} /* img 搭车：让链接里的 img 无边框 */
/* 注：optgroup 无法扶正 */
button,
input,
select,
textarea {
  font-size: 100%; /* 使得表单元素在 ie 下能继承字体大小 */
}

/* 重置表格元素 */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* 重置 hr */
hr {
  border: none;
  height: 1px;
}

/* 让非ie浏览器默认也显示垂直滚动条，防止因滚动条引起的闪烁 */
html {
  overflow-y: scroll;
  width: 100%;
  font-size: 62%;
}
/*超出内容显示省略号*/
.ellipsis {
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
/*清除浮动*/
.clearfix {
  *zoom: 1;
}
.clearfix:before,
.clearfix:after {
  display: table;
  line-height: 0;
  content: "";
}
.clearfix:after {
  clear: both;
}
body {
  width: 100%;
}
.main {
  width: 80%;
  margin: 0 auto;
}
.content {
  width: 100%;
  margin-top: 10px;
  padding: 0rem 0;
}
.content_top {
  background-color: #fff;
  /* padding: 1rem 0.8rem; */
  height: 66px;
  padding-top: 15px;
  padding-left: 15px;
  margin-bottom: 1rem;
}
.content_top_ul {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.content_top_ul > li {
  width: auto;
  min-width: 260px;
  margin-right: 2rem;
  .ant-form-item {
    margin-bottom: 0px !important;
  }
}
.content_top_ul > li > span {
  color: #333;
  margin-right: 0.5rem;
}
.content_top_ul > li > input {
  outline-style: none;
  border: 1px solid #ccc;
  background-color: transparent;
}
// .content_top_ul > li > button {
//   padding: 0.5rem 1.6rem;
//   border-radius: 4px;
//   border: 0;
//   outline: none;
//   color: #fff;
//   background-color: #56a8f5;
//   cursor: pointer;
// }
.content_bottom {
  width: 100%;
  padding: 1rem;
  background-color: #fff;
}
.content_bottom_top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
// .content_bottom_top button {
//   padding: 0.5rem 2rem;
//   color: #fff;
//   border: 0;
//   outline: none;
//   border-radius: 4px;
//   cursor: pointer;
// }
// .content_bottom_top > button {
//   background-color: #56a8f5;
// }
.content_bottom_top > div > button:first-child {
  background-color: #49cef4;
  margin-right: 1rem;
}
.content_bottom_top > div > button:last-child {
  background-color: #3edab3;
}
.content_bottom_bottom {
  width: 100%;
}
.content_bottom_bottom_table {
  width: 100%;
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 auto;
}
.content_bottom_bottom_table tr,
td,
th {
  border: 1px solid #ccc;
  text-align: center;
}
.content_bottom_bottom_table th {
  color: #555;
}
.content_bottom_bottom_table td {
  color: #777;
  padding: 0.6rem 0.5rem;
}
.content_bottom_bottom_table td:last-child > img {
  width: 1rem;
  height: 1rem;
  cursor: pointer;
}
.partition_bgc {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 5px;
}
.td_img {
  margin-right: 5px;
}
.pagenation {
  width: 100%;
  margin: 2rem 0 1rem 0;
  text-align: center;
}

@media screen and (min-width: 1025px) and (max-width: 1400px) {
  .content_bottom_bottom_table td {
    padding: 0.3rem 0.5rem;
  }
  .partition_bgc {
    width: 0.7rem;
    height: 0.7rem;
    margin-right: 0;
  }
  .td_img {
    margin-right: 0;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  body {
    background-color: #eee;
  }
  .main {
    width: 100%;
    margin-top: 0;
  }
  .content_bottom_bottom_table td {
    padding: 0;
  }
  .content_top_ul > li {
    width: 58%;
    margin-right: 0;
  }
  .content_top_ul > li:last-child {
    width: 25%;
  }
  .content_top_ul > li:last-child {
    margin-right: 0;
  }
  .content_top_ul > li > input {
    width: 68%;
  }
  .content_top_ul > li > span {
    margin-right: 0.1rem;
  }
  .el-pagination__jump {
    margin-left: 0px;
  }
  .el-pagination {
    padding: 0;
  }
  .el-pagination button,
  .el-pagination span:not([class*="suffix"]) {
    min-width: 0;
  }
  .el-pagination .el-select .el-input {
    margin: 0;
    width: 84px;
  }
  .partition_bgc,
  .td_img {
    margin-right: 0;
  }
  // febnye
  #components-pagination-demo-mini .ant-pagination:not(:last-child) {
    margin-bottom: 24px;
  }
}
</style>
