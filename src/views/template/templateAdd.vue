<template>
  <a-modal
    :visible="visible"
    :width="width"
    title="模板信息"
    wrapClassName="z_modal_add"
    @cancel="() => { $emit('cancel') }"
    @ok="() => { $emit('create') }"
  >
    <template slot="footer">
        <div>
            <a-button key="back" @click="handleCancel">{{backContext.text}}</a-button>
            <a-button key="submit" type="primary" :loading="loading" @click="handleOk">{{sureContext}}</a-button>
        </div>
    </template>
    <div class="step_body">
        <div class="step_item">
            <a-form layout="horizontal">
            <a-row :gutter="24">
                <a-col :span="24">
                <a-form-item label="模板名称" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 2 },} " :wrapperCol="{ xs: { span: 24 }, sm: { span: 5 }, }">
                    <a-input v-decorator="[ `field1`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]" placeholder="placeholder" />
                </a-form-item>
                </a-col>
                <a-col :span="24">
                <a-form-item label="所属科室" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 2 },} " :wrapperCol="{ xs: { span: 24 }, sm: { span: 7 }, }">
                    <a-radio-group >
                        <a-radio :value="1">歌乐山急诊部</a-radio>
                        <a-radio :value="2">平顶山急诊部</a-radio>
                    </a-radio-group>
                </a-form-item>
                </a-col>
                <a-col :span="24">
                <a-form-item label="模板分类" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 2 },} " :wrapperCol="{ xs: { span: 24 }, sm: { span: 5 }, }">
                    <a-select > </a-select>
                </a-form-item>
                </a-col>
                <a-col :span="24">
                <a-form-item label="模板描述" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 2 },} " :wrapperCol="{ xs: { span: 24 }, sm: { span: 20 }, }">
                    <a-textarea placeholder="Basic usage" :rows="4" />
                </a-form-item>
                </a-col>
            </a-row>
            </a-form>
        </div>
    </div>
  </a-modal>
</template>

<script>
export default {
  name: "templateAdd",
  props: ["visible", "width",'type'],
  data(){
      return {
            backContext:{},
            loading: false,
            sureContext:'取消',
            status:{},
      }
  },
  mounted(){

  },
  methods:{
      reset(){
           this.status = this.step();
           this.backContext = this.status.next().value
      },
      handleCancel(){
        let _status = this.status.next().value
        this.backContext  = _status
        this.$emit('create')
          // if(this.backContext.code == 3){
          //     this.$emit('create')
          // }
      },
      handleOk(){
          this.loading = true
      },
      * step() {
        yield {code:1,text:"下一步"};
        yield {code:2,text:"确定"};
        yield {code:3,text:"确定"};
      }
  }
};
</script>

<style scoped lang='less'>
.step_body{
    width: 100%;
    .step_item{
        width: 100%;
    }
}
.step_item2{
    > .head {
    margin-top: 14px;
    position: relative;
    border-bottom: 1px solid #eaeaea;
    .right_button {
      position: absolute;
      right: 30px;
      top: 0px;
    }
    .search_item {
        /deep/.ant-form-item-control-wrapper {
            min-width: 140px;
        }
    }
  }
    .buttom {
    display: flex;
    justify-content: center;
    justify-items: center;
    flex-wrap: wrap;
    button {
      margin-left: 10px;
    }
  }
}
.step_item3{
      .table_body{
    padding-top: 10px;
    /deep/.orangeCheckBox{
      margin-right: 20px;
      span{
        color: #f27966;
      }
    }
    .itemChoose{
      /deep/.ant-radio-button-wrapper{
        margin-right: 16px;
        margin-bottom: 12px;
      }
      /deep/.ant-radio-button-wrapper-checked{
        background: #49cef4;
        color: #fff;
      }
    }
  }
   .bottom{
    width: 100%;
    display: flex;
    justify-content: center;
    justify-items: center;
    margin-top: 20px;
    button{
      margin-left: 20px;
    }
  }
}
.step_item4{
    .head {
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
  .table_body{
    padding-top: 10px;
    /deep/.orangeCheckBox{
      margin-right: 20px;
      span{
        color: #f27966;
      }
    }
    .table_body_row{
      display: flex;
      justify-content: center;
      justify-items: center;
      flex-wrap: wrap;
      height: auto;
      box-sizing: border-box;
      padding-top: 10px;
      .table_body_row_item{
        width: 50%;
        min-height: 100px;
        height: auto;
        .row_item_box{
          width: 100%;
          min-height: 100px;
          height: auto;
          .row_item_box_table{
            border: 1px solid #ddd;
            .row_item_box_table_title,
            .row_item_box_table_row{
              display: flex;
              .row_item_box_table_col{
                width: 50%;
                border-left: 1px solid #ddd;
                border-bottom: 1px solid #ddd;
              }
            }
             .row_item_box_table_title{
               background: #fafafa;
               height: 42px;
               line-height: 40px;
               font-size: 12px;
               color: #555555;
               font-weight: bold;
               text-align: center;
             }
             .row_item_box_table_row{
               height: 30px;
               line-height: 30px;
               text-align: center;
             }
             .row_item_box_table_row1{
               min-height: 210px;
             }
          }
          .buttonGroup{
            padding-top: 20px;
            display: flex;
            justify-content: flex-end;
            justify-items: center;
            button{
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
  .bottom{
    width: 100%;
    display: flex;
    justify-content: center;
    justify-items: center;
    margin-top: 20px;
    button{
      margin-left: 20px;
    }
  }
}
</style>
