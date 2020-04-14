<template>
  <a-modal
    :visible="visible"
    :width="width"
    title="检验模板信息"
    wrapClassName="z_modal_save"
    @cancel="() => { $emit('cancel') }"
    @ok="() => { $emit('create') }"
  >
    <div class="body">
      <div class="head">
        <a-form layout="inline">
          <a-form-item label="药局" class="search_item">
            <a-select v-decorator="['select',{ rules: [{ required: true, message: 'Please select your country!' }] },]" placeholder="请选择" ></a-select>
          </a-form-item>
          <a-form-item label class="search_item">
            <a-radio value="a">西药</a-radio>
            <a-radio value="b">草药</a-radio>
          </a-form-item>
          <a-form-item label="处方属性" class="search_item">
            <a-select v-decorator="['select',{ rules: [{ required: true, message: 'Please select your country!' }] },]" placeholder="请选择" ></a-select>
          </a-form-item>
          <a-form-item label class="search_item">
            <a-checkbox value="A">特病处方</a-checkbox>
          </a-form-item>
        </a-form>
        <div class="table_body">
          <a-checkbox class="orangeCheckBox">特病检查</a-checkbox>
          <a-checkbox class="orangeCheckBox">急诊</a-checkbox>
          <div class="table_body_row">
            <div class="table_body_row_item">
              <a-form class="ant-advanced-search-form" layout="horizontal">
                <a-row :gutter="24">
                  <a-col :span="24">
                    <a-form-item label="检验科室" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 3 },} "
                                 :wrapperCol="{ xs: { span: 24 }, sm: { span: 16 }, }">
                      <a-textarea placeholder="textarea with clear icon"/>
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row :gutter="24">
                  <a-col :span="24">
                    <a-form-item label="类别" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 3 },} "
                                 :wrapperCol="{ xs: { span: 24 }, sm: { span: 16 }, }">
                      <a-input
                        v-decorator="[ `field-1`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]"
                        placeholder="placeholder"/>
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row :gutter="24">
                  <a-col :span="24">
                    <a-form-item label="标本" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 3 },} "
                                 :wrapperCol="{ xs: { span: 24 }, sm: { span: 16 }, }">
                      <a-input
                        v-decorator="[ `field-2`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]"
                        placeholder="placeholder"/>
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row :gutter="24">
                  <a-col :span="24">
                    <a-form-item label="版本说明" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 3 },} "
                                 :wrapperCol="{ xs: { span: 24 }, sm: { span: 16 }, }">
                      <a-input
                        v-decorator="[ `field-3`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]"
                        placeholder="placeholder"/>
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row :gutter="24">
                  <a-col :span="24">
                    <a-form-item label="送检医师" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 3 },} "
                                 :wrapperCol="{ xs: { span: 24 }, sm: { span: 16 }, }">
                      <a-input
                        v-decorator="[ `field4`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]"
                        placeholder="placeholder"/>
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row :gutter="24">
                  <a-col :span="24">
                    <a-form-item label="申请日期" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 3 },} "
                                 :wrapperCol="{ xs: { span: 24 }, sm: { span: 16 }, }">
                      <a-input
                        v-decorator="[ `field-5`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]"
                        placeholder="placeholder"/>
                    </a-form-item>
                  </a-col>
                </a-row>
              </a-form>
            </div>
            <div class="table_body_row_item">
              <div class="row_item_box">
                <div class="row_item_box_table">
                  <div class="row_item_box_table_title">
                    <div class="row_item_box_table_col">项目名称</div>
                    <div class="row_item_box_table_col">收费金额</div>
                  </div>
                  <div class="row_item_box_table_row">
                    <div class="row_item_box_table_col"></div>
                    <div class="row_item_box_table_col"></div>
                  </div>
                  <div class="row_item_box_table_row row_item_box_table_row1">
                    <div class="row_item_box_table_col"></div>
                    <div class="row_item_box_table_col"></div>
                  </div>
                </div>
                <div class="buttonGroup">
                  <a-button class="buttonGroup_selectAll">全选</a-button>
                  <a-button class="buttonGroup_selectClear">清除</a-button>
                  <a-button class="buttonGroup_selectDelete">删除</a-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template slot="footer">
        <div>
            <a-button class="button1" key="back" @click="handleCancel">保存检验</a-button>
            <a-button class="button2" key="submit" type="primary" @click="handleOk">放弃保存</a-button>
        </div>
    </template>
  </a-modal>
</template>

<script>
    export default {
      name: "insApplicationDetail",
      props: ["visible", "width",'type'],
      methods:{
        handleCancel(){},
        handleOk(){}
      }
    }
</script>

<style scoped lang="less">
.body{
  width: 100%;
  \    > .head {
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
    padding-bottom: 20px;

    button {
      margin-left: 10px;
    }
  }

  .table_body {
    padding-top: 10px;

    /deep/ .orangeCheckBox {
      margin-right: 20px;

      span {
        color: #f27966;
      }
    }

    .table_body_row {
      display: flex;
      justify-content: center;
      justify-items: center;
      flex-wrap: wrap;
      height: auto;
      box-sizing: border-box;
      padding-top: 10px;

      .table_body_row_item {
        width: 50%;
        min-height: 100px;
        height: auto;

        .row_item_box {
          width: 100%;
          min-height: 100px;
          height: auto;

          .row_item_box_table {
            border: 1px solid #ddd;

            .row_item_box_table_title,
            .row_item_box_table_row {
              display: flex;

              .row_item_box_table_col {
                width: 50%;
                border-left: 1px solid #ddd;
                border-bottom: 1px solid #ddd;
              }
            }

            .row_item_box_table_title {
              background: #fafafa;
              height: 42px;
              line-height: 40px;
              font-size: 12px;
              color: #555555;
              font-weight: bold;
              text-align: center;
            }

            .row_item_box_table_row {
              height: 30px;
              line-height: 30px;
              text-align: center;
            }

            .row_item_box_table_row1 {
              min-height: 210px;
            }
          }

          .buttonGroup {
            padding-top: 20px;
            display: flex;
            justify-content: flex-end;
            justify-items: center;

            button {
              margin-left: 20px;
            }
          }
        }
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
    /deep/ .ant-form-item-control-wrapper {
      min-width: 140px;
    }
  }
}
</style>
