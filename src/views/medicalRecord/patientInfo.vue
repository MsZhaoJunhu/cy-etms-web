<template>
<div class="patientInfo">
     <a-form :layout="`horizontal`">
         <a-row :gutter="24">
             <a-col :span="8">
                 <a-form-item label="病人ID" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 6 },} " :wrapperCol="{ xs: { span: 24 }, sm: { span: 16 }, }">
                    <a-input v-decorator="[ `field1`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]" placeholder="placeholder" />
                </a-form-item>
             </a-col>
             <a-col :span="8">
                 <a-form-item label="姓名" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 6 },} " :wrapperCol="{ xs: { span: 24 }, sm: { span: 16 }, }">
                    <a-input v-decorator="[ `field1`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]" placeholder="placeholder" />
                </a-form-item>
             </a-col>
             <a-col :span="8">
                 <a-form-item label="性别" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 6 },} " :wrapperCol="{ xs: { span: 24 }, sm: { span: 16 }, }">
                    <a-input v-decorator="[ `field1`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]" placeholder="placeholder" />
                </a-form-item>
             </a-col>
         </a-row>
         <a-row :gutter="24">
             <a-col :span="8">
                 <a-form-item label="出生日期" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 6 },} " :wrapperCol="{ xs: { span: 24 }, sm: { span: 16 }, }">
                    <a-input v-decorator="[ `field1`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]" placeholder="placeholder" />
                </a-form-item>
             </a-col>
             <a-col :span="8">
                 <a-form-item label="民族" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 6 },} " :wrapperCol="{ xs: { span: 24 }, sm: { span: 16 }, }">
                    <a-input v-decorator="[ `field1`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]" placeholder="placeholder" />
                </a-form-item>
             </a-col>
             <a-col :span="8">
                 <a-form-item label="身份" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 6 },} " :wrapperCol="{ xs: { span: 24 }, sm: { span: 16 }, }">
                    <a-input v-decorator="[ `field1`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]" placeholder="placeholder" />
                </a-form-item>
             </a-col>
         </a-row>
         <a-row :gutter="24">
             <a-col :span="8">
                 <a-form-item label="电话号码" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 6 },} " :wrapperCol="{ xs: { span: 24 }, sm: { span: 16 }, }">
                    <a-input v-decorator="[ `field1`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]" placeholder="placeholder" />
                </a-form-item>
             </a-col>
             <a-col :span="8">
                 <a-form-item label="人群分类" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 6 },} " :wrapperCol="{ xs: { span: 24 }, sm: { span: 16 }, }">
                    <a-input v-decorator="[ `field1`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]" placeholder="placeholder" />
                </a-form-item>
             </a-col>
             <a-col :span="8">
                 <a-form-item label="费别" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 6 },} " :wrapperCol="{ xs: { span: 24 }, sm: { span: 16 }, }">
                    <a-input v-decorator="[ `field1`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]" placeholder="placeholder" />
                </a-form-item>
             </a-col>
         </a-row>
         <a-row :gutter="24">
             <a-col :span="24">
                 <a-form-item label="单位" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 2 },} " :wrapperCol="{ xs: { span: 24 }, sm: { span: 20 }, }">
                    <a-input v-decorator="[ `field1`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]" placeholder="placeholder" />
                </a-form-item>
             </a-col>
         </a-row>
         <a-row :gutter="24">
             <a-col :span="9">
                 <a-form-item label="现住址所在区县" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 5 },} " :wrapperCol="{ xs: { span: 24 }, sm: { span: 18 }, }">
                    <a-input v-decorator="[ `field1`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]" placeholder="placeholder" />
                </a-form-item>
             </a-col>
         </a-row>
         <a-row :gutter="24">
             <a-col :span="24">
                 <a-form-item label="现住址" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 2 },} " :wrapperCol="{ xs: { span: 24 }, sm: { span: 20 }, }">
                    <a-input v-decorator="[ `field1`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]" placeholder="placeholder" />
                </a-form-item>
             </a-col>
         </a-row>
         <a-row :gutter="24">
             <a-col :span="24">
                 <a-form-item label="户籍地址" :labelAlign="`left`" :labelCol="{ xs: { span: 24 }, sm: { span: 2 },} " :wrapperCol="{ xs: { span: 24 }, sm: { span: 20 }, }">
                    <a-input v-decorator="[ `field1`, { rules: [ { required: true, message: 'Input something!', }, ], }, ]" placeholder="placeholder" />
                </a-form-item>
             </a-col>
         </a-row>
     </a-form>
</div>
</template>

<script>
export default {
    name: 'patientInfo',
    data () {
        return {

        }
    },
    mounted () {

    },
    methods : {

    }
}
</script>

<style lang="less" scoped>
.patientInfo{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 16px;
}
</style>>