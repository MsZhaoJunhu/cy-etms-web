<template>
  <div class="temp_body">
    <div class="main">
      <div class="left">
        <a-menu>
          <a-menu-item @click="click(1)">处置模板</a-menu-item>
          <a-menu-item @click="click(2)">处方模板</a-menu-item>
          <a-menu-item @click="click(3)">检查申请模板</a-menu-item>
          <a-menu-item @click="click(4)">检验申请模板</a-menu-item>
        </a-menu>
      </div>
      <div class="right">
        <handleTemplate v-if="show == 1" />
        <prescriptionTemplate v-if="show == 2" />
        <testApplication v-if="show == 3"  />
        <insApplication v-if="show == 4"  />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "template",
  data() {
    return {
      show: 1
    };
  },
  components: {
    testApplication: () => import("@/views/template/testApplication.vue"),
    insApplication: () => import("@/views/template/insApplication.vue"),
    prescriptionTemplate: () =>  import("@/views/template/prescriptionTemplate.vue"),
    handleTemplate: () => import("@/views/template/handleTemplate.vue")
  },
  mounted() {},
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : {};
    }
  },
  methods: {
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
    click(data) {
      this.show = data;
    }
  }
};
</script>
<style lang='less' scoped>
.temp_body {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  box-sizing: border-box;
  .main {
    margin-top: 10px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0px;
    display: flex;
    justify-content: center;
    justify-items: center;
    flex-wrap: wrap;
    background: #f0f2f5;
    > .left {
      width: 176px;
      height: 100%;
      padding-right: 16px;
    }
    > .right {
      background: #fff;
      height: 100%;
      width: calc(100% - 176px);
      box-sizing: border-box;
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
    }
  }
}
/deep/.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: #56a8f5;
  color: #fff;
}
/deep/.ant-menu-item:hover {
  color: #56a8f5;
}
</style>