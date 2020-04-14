<template>
  <div class="box">
    <div class="container">
      <div class="left">
        <div class="left_top">
            <p class="title">基本信息</p>
            <div class="items">
              <section class="item">
                <ul class="ul_item">
                  <li><span>来院时间</span><input type="date"></li>
                  <li><span>ID号</span><input type="text"></li>
                </ul>
              </section>
              <section class="item">
                <ul class="ul_item">
                  <li><span>入科时间</span><input type="date"></li>
                  <li><span>姓名</span><input type="text"></li>
                </ul>
              </section>
              <section class="item">
                <ul class="ul_item">
                  <li><span>身份证号</span><input type="text"></li>
                  <li>
                    <span>性别</span>
                    <div class="change_div">
                      <input type="radio" name="sex" id="man"><label for="man">男</label>
                      <input type="radio" name="sex" id="wman"><label for="wman">女</label>
                    </div>
                  </li>
                </ul>
              </section>
              <section class="item">
                <ul class="ul_item">
                  <li><span>出生日期</span><input type="date"></li>
                  <li>
                    <span>年龄</span>
                    <!-- <input type="text" class="age_input">岁
                    <input type="text" class="age_input">月
                    <input type="text" class="age_input">天 -->
                    <input type="text">
                  </li>
                </ul>
              </section>
              <section class="item">
                <ul class="ul_item">
                  <li><span>发病时间</span><input type="date"></li>
                  <li><span>电话</span><input type="text"></li>
                </ul>
              </section>
              <section class="item">
                <ul class="ul_item">
                  <li><span>出科时间</span><input type="date"></li>
                  <li>
                    <span>名族</span>
                    <select>
                      <option value="1">请选择</option>
                      <option value="2">汉族</option>
                      <option value="3">其他</option>
                    </select>
                  </li>
                </ul>
              </section>
              <section class="item">
                <ul class="ul_item">
                  <li><span>医保号</span><input type="text"></li>
                </ul>
              </section>
              <section class="item">
                <ul class="ul_item">
                  <li><span>联系人</span><input type="text"></li>
                </ul>
              </section>
              <section class="item">
                <ul class="ul_item">
                  <li class="address"><span>地址&nbsp;&nbsp;&nbsp;</span><input type="text"></li>
                </ul>
              </section>
            </div>
        </div>
        <div class="left_bottom">
          <p class="title">生命体征</p>
          <div class="items">
              <section class="item">
                <ul class="ul_item">
                  <li class="bottom_li"><span>体温</span><input type="text"></li>
                  <li class="bottom_li"><span>心率</span><input type="text"></li>
                  <li class="bottom_li"><span>呼吸</span><input type="text"></li>
                </ul>
              </section>
              <section class="item">
                <ul class="ul_item">
                  <li class="bottom_li"><span>血压</span><input type="text"></li>
                  <li class="bottom_li"><span>血糖</span><input type="text"></li>
                  <li class="bottom_li"><span>脉搏</span><input type="text"></li>
                </ul>
              </section>
              <section class="item">
                <ul class="ul_item">
                  <li class="saturation"><span>血氧饱和度</span><input type="text"></li>
                </ul>
              </section>
          </div>  
        </div>
      </div>
      <div class="right">
        <div class="right_top">
          <p class="title">病人现状</p>
          <div class="items">
            <section class="item">
              <ul class="ul_item">
                <li class="first">
                  <span>来院方式</span>
                  <div class="change_div">
                    <input type="radio" name="come_way" id="walk"><label for="walk">步行</label>
                    <input type="radio" name="come_way" id="hold"><label for="hold">扶入</label>
                    <input type="radio" name="come_way" id="rise"><label for="rise">抬入</label>
                    <input type="radio" name="come_way" id="rise_120"><label for="rise_120">120抬入</label>
                    <input type="radio" name="come_way" id="other"><label for="other">其他</label>
                  </div>
                </li>
                <li class="scond">
                  <span>重点病重</span>
                  <div class="change_div">
                    <input type="radio" name="ill" id="yes"><label for="yes">是</label>
                    <input type="radio" name="ill" id="no"><label for="no">否</label>
                  </div>
                </li>
              </ul>
            </section>
            <section class="item">
                <ul class="ul_item">
                  <li class="symptom"><span>主要症状&nbsp;&nbsp;&nbsp;</span><input type="text"></li>
                </ul>
            </section>
            <section class="item">
                <ul class="ul_item">
                  <li><span>主要描述&nbsp;&nbsp;&nbsp;</span><input type="text"></li>
                  <li><span>现病史</span><input type="text"></li>
                </ul>
            </section>
            <section class="item">
                <ul class="ul_item">
                  <li><span>疑似传染病</span><input type="text"></li>
                  <li><span>过敏史</span><input type="text"></li>
                </ul>
            </section>
            <section class="item">
                <ul class="ul_item">
                  <li class="green_way">
                    <span>绿色通道</span>
                    <div class="btns">
                        <a href="#" class="btn_a btn_class">胸痛</a>
                        <a href="#" class="btn_a">卒中</a>
                        <a href="#" class="btn_a">创伤</a>
                        <a href="#" class="btn_a">心梗</a>
                        <a href="#" class="btn_a">咯血</a>
                        <a href="#" class="btn_a">孕产血</a>
                        <a href="#" class="btn_a">脑出血</a>
                        <a href="#" class="btn_a">心管血</a>
                        <a href="#" class="btn_a">心力衰竭</a>
                        <a href="#" class="btn_a">颅脑损伤</a>
                        <a href="#" class="btn_a">呼吸衰竭</a>
                        <a href="#" class="btn_a">重症肺结核</a>
                        <a href="#" class="btn_a">爆发性脑脊髓膜炎</a>
                    </div>
                  </li>
                </ul>
            </section>    
          </div>
        </div>
        <div class="right_center">
          <p class="title">分诊信息</p>
          <div class="items">
            <section class="item">
              <ul class="ul_item">
                <li class="illnessOne">
                  <span>病情分级</span>
                  <div class="change_div">
                    <a href="#" class="btn_a btn_class">1级 </a>
                    <a href="#" class="btn_a">2级</a>
                    <a href="#" class="btn_a">3级</a>
                    <a href="#" class="btn_a">4级</a>
                  </div>
                </li>
                <li class="illnessTwo">
                  <span>病情分区</span>
                  <div class="change_div">
                    <a href="#" class="btn_a btn_class">红区</a>
                    <a href="#" class="btn_a">黄区</a>
                    <a href="#" class="btn_a">绿区</a>
                  </div>
                </li>
              </ul>
            </section>
            <section class="item">
                <ul class="ul_item">
                  <li class="visit">
                    <span>初/复诊</span>
                      <input type="radio" name="visit" id="first_visit"><label for="first_visit">出诊</label>
                      <input type="radio" name="visit" id="repeat_visit"><label for="repeat_visit">复诊</label>
                  </li>
                  <li class="visit">
                    <span>是否手术</span>
                      <input type="radio" name="is_operation" id="operation_y"><label for="operation_y">是</label>
                      <input type="radio" name="is_operation" id="operation_n"><label for="operation_n">否</label>
                  </li>
                </ul>
            </section>
            <section class="item">
                <ul class="ul_item">
                  <li class="triage">
                    <span>分诊科室</span>
                    <div class="btns">
                        <a href="#" class="btn_a btn_class">口腔门诊</a>
                        <a href="#" class="btn_a">耳鼻喉科门诊</a>
                        <a href="#" class="btn_a">眼科门诊</a>
                        <a href="#" class="btn_a">产妇科门诊</a>
                        <a href="#" class="btn_a">泌尿外科门诊</a>
                        <a href="#" class="btn_a">内科急诊</a>
                        <a href="#" class="btn_a">外科急诊</a>
                        <a href="#" class="btn_a">普通内科</a>
                        <a href="#" class="btn_a">普外与骨科</a>
                        <a href="#" class="btn_a">胸外科</a>
                        <a href="#" class="btn_a">感染一科</a>
                        <a href="#" class="btn_a">感染二科</a>
                        <a href="#" class="btn_a">感染三科</a>
                        <a href="#" class="btn_a">结核一科</a>
                        <a href="#" class="btn_a">结核二科</a>
                        <a href="#" class="btn_a">结核三科</a>
                        <a href="#" class="btn_a">结核四科</a>
                        <a href="#" class="btn_a">结核五科</a>
                    </div>
                  </li>
                </ul>
            </section>    
          </div>
        </div>
        <div class="right_bottom">
          <button class="confirm_btn" @click="save">保存</button><button>取消</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'yjfz_new',
  methods:{
    save(){
      alert("sxxz")
      this.$router.push({path:'yjfz'})
    }
  }
}
</script>
<style scoped>
  /* 清除内外边距 */
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
pre, /* text formatting elements 文本格式元素 */
fieldset, lengend, button, input, textarea, /* form elements 表单元素 */
th, td ,div{ /* table elements 表格元素 */
		margin: 0;
		padding: 0;
		box-sizing: border-box;
}

/* 设置默认字体 */
body,
button, input, select, textarea { /* for ie */
		/*font: 12px/1 Tahoma, Helvetica, Arial, "宋体", sans-serif;*/
		font-family: "微软雅黑",sans-serif, inherit; /* 用 ascii 字符表示，使得在任何编码下都无问题 */
		font-size: 0.12rem;
}
h2 { font-size: 16px; }
h3 { font-size: 14px; }
h4, h5, h6 { font-size: 100%; }

address, cite, dfn, em, var { font-style: normal; } /* 将斜体扶正 */
code, kbd, pre, samp, tt { font-family: "Courier New", Courier, monospace; } /* 统一等宽字体 */
small { font-size: 12px; } /* 小于 12px 的中文很难阅读，让 small 正常化 */

/* 重置列表元素 */
ul, ol { list-style: none; }

/* 重置文本格式元素 */
a { text-decoration: none; }
a:hover { text-decoration: none; }

abbr[title], acronym[title] { /* 注：1.ie6 不支持 abbr; 2.这里用了属性选择符，ie6 下无效果 */
		border-bottom: 1px dotted;
		cursor: help;
}

q:before, q:after { content: ''; }

/* 重置表单元素 */
legend { color: #000; } /* for ie6 */
fieldset, img { border: none; } /* img 搭车：让链接里的 img 无边框 */
/* 注：optgroup 无法扶正 */
button, input, select, textarea {
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
html { overflow-y: scroll; width:100%;font-size: 62%;}
/*超出内容显示省略号*/
.ellipsis{  max-width: 100%;  white-space: nowrap;  text-overflow:ellipsis;  overflow:hidden;  }
/*清除浮动*/
.clearfix {  *zoom: 1;  }
.clearfix:before,
.clearfix:after {  display: table;  line-height: 0;  content: "";  }
.clearfix:after {  clear: both;  }
body{
  width:100%;
}
.box{
  width:80%;
  height:100%;
  margin:0 auto;
  margin-top:1rem;
}
.container{
  width:100%;
  height:100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border:1px solid #ccc;
}
.right{
  width:55%;
  height:100%;
}
.left{
  width:45%;
  border-right:1px solid #ccc;
}
.left_top,.left_bottom,.right_top,.right_center,.right_bottom{
  padding:1rem;
}
.right_top,.left_top,.right_center{
  border-bottom:1px solid #ccc;
}
.title{
  color:#333;
  font-size:2rem;
  margin-bottom:1rem;
  font-weight: bold;
}
.items{
  width:100%;
}
.ul_item{
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:1rem;
}
.ul_item>li{
  width:50%;
  text-align: left;
}
.ul_item>li>span{
  margin-right:1rem;
}
.ul_item>li>.change_div{
  display: inline-block;
}
.ul_item>.bottom_li>input{
  width:30%;
}
.ul_item>.address,.ul_item>.saturation,.ul_item>.symptom,.ul_item>.green_way,.ul_item>.triage{
  width: 100%;
}
.green_way,.triage{
  display: flex;
  justify-content: space-between;
}
.green_way>.btns,.triage>.btns{
  width:86%;
}
.age_input{
  width:2rem;
  height:1.3rem;
  text-align: center;
}
.address>input,.saturation>input,.symptom>input{
  width:60%;
}
input[type=text],input[type=date]{
  height:1.8rem;
  width:60%;
  text-align: left;
  background-color: transparent;
  border:1px solid #ccc;
  outline-style: none;
}
.btn_a{
  display: inline-block;
  padding:.3rem 1rem;
  border:1px solid #ccc;
  color:#333;
  margin-bottom:.5rem;
  border-radius: 4px;
}
.btn_class{
  color:#fff;
  font-weight: bold;
  background-color: #49CDF3;
  border:0;
}
.right_bottom{
  padding:1rem 0;
  text-align: right;
}
.right_bottom>button{
  padding:.5rem 2rem;
  border:1px solid #DCEDFD;
  outline: none;
  color:#66AFF6;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
}
.right_bottom>button:first-child{
  margin-right:.5rem;
}
.right_bottom>.confirm_btn{
  background-color:#56A8F5;
  color:#fff;
}
@media screen and (min-width:1025px) and (max-width:1364px){
  .ul_item>.first{
    width:70% !important;
  }
  .ul_item>.scond{
    width:30% !important;
  }
  .green_way>.btns, .triage>.btns{
    width:82%;
  }
  .ul_item>.illnessOne{
    width:52% !important;
  }
  .ul_item>.illnessTwo{
    width:45% !important;
  }
}
@media screen and (min-width:768px) and (max-width:1024px){
  .box{
    width:100%;
  }
  .ul_item{
    display: block;
    margin-bottom:0;
  }
  .ul_item>li{
    margin-bottom:.5rem;
    width:100%;
    display: flex;
    justify-content: space-between;
  }
  .ul_item>.visit{
    display: block;
  }
  .right{
    width:60%;
  }
  .left{
    width:40%;
  }
  .green_way>.btns, .triage>.btns{
    width:82%;
  }
  .ul_item>.bottom_li>input{
    width:60%;
  }
}

</style>

