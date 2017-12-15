<template>
    <div>
        <div class="appheader">
            <div class="container">
                <div class="logo"><img :src="imgUrl" alt=""/></div>
                <ul class="fr">
                    <li @click="clickLogin">登录</li>
                    <li @click="clickRegister">注册</li>
                    <li @click="clickAbout">关于</li>

                </ul>
            </div>


        </div>
        <div class="appcontent">
            <keep-alive>
            <router-view></router-view>
            </keep-alive>

        </div>
        <div class="appfooter">
            <div class="container">
                <p class="text-center ">@copyright ajhfjfjhkhsdfk</p>
            </div>
        </div>
        <Dialogs :is-show="loginShow" @OnClose="closeDialog('loginShow')"></Dialogs>
        <registerDialog :is-show="registerShow" @closeRegister="closeRegisterDialog('registerShow')">
        </registerDialog>
        <aboutDialog :is-show="abooutShow" @closeAboutDialog="closeAboutDialog('abooutShow')" ></aboutDialog>
    </div>
</template>
<script type="text/ecmascript-6">
    import Dialogs from './dialogs.vue'
    import registerDialog from './registerDialog.vue'
    import aboutDialog from './aboutDialog.vue'
    export default{
        prop: [],
        components:{Dialogs,registerDialog,aboutDialog},
        data (){
            return{
              imgUrl:'/src/assets/logo.png',
                loginShow:false,
                registerShow:false,
                abooutShow:false,
            }
        },
        methods:{
            clickLogin(){
                this.loginShow=true
            },
            closeDialog (attr) {
                this[attr] = false
            },
            clickRegister(){
                this.registerShow=true
            },
            closeRegisterDialog(attr){
                this[attr]=false
            },
            clickAbout(){
               this.abooutShow=true
            },
            closeAboutDialog(attr){
                this[attr]=false
            }
        }
    }
</script>
<style >
    body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,
    form,fieldset,input,textarea,p,blockquote,th,td,img { padding: 0; margin: 0; }
    fieldset,img { border: 0; }
    address,caption,cite,code,dfn,em,strong,th,var,i { font-weight: normal; font-style: normal; }
    ol,ul,li { list-style: none; }
    caption,th { text-align: left; }
    q:before,q:after { content:''; }
    abbr,acronym { border: 0; }
    ul{margin-bottom:0!important;list-style: none;padding:0;}
    a:hover{text-decoration:none;color:#333;}
    a{text-decoration:none;color:#333;}
    input[type="button"], input[type="submit"], input[type="reset"] ,input[type="text"],input[type="tel"],input[type="password"],textarea,button{
        -webkit-appearance: none;
        outline: none;
    }
    [readonly="readonly"] {
        pointer-events: none;
    }
    body{min-width:1200px;background: #f1f1f1;}
    label{margin-bottom:0;}
    .fw{font-weight: bold;}
    .fz10{font-size:10px;}
    .fz2{font-size:12px;}
    .fz3{font-size:13px;}
    .fz4{font-size:14px;}
    .fz5{font-size:15px;}
    .fz6{font-size:16px;}
    .fz24{font-size:24px;}
    .fl{float: left;}
    .fr{float: right;}
    .padding_0{padding:0;}
    .pd15{padding-top:15px;padding-bottom:15px;}
    .padding_10{padding: 15px 10px;}
    .pl0{padding-left:0px;}
    .pr0{padding-right:0px;}
    .pr20{padding-right:20px;}
    .pl25{padding-left:25px;}
    .padding_0_10{padding:0 10px;}
    .padding_0_15{padding:0 15px;}
    .padding_0_5{padding:0 5px;}
    .p10{padding:10px!important;}
    .padding_0_0_0_10{padding:0 0 0 10px;}
    .mt5{margin-top:5px;}
    .mt10{margin-top:10px;}
    .mt15{margin-top:15px;}
    .mr5{margin-right:5px;}
    .mt30{margin-top:30px;}
    .mt80{margin-top:80px;}
    .ml10{margin-left:10px;}
    .mr15{margin-right:15px;}
    .mb15{margin-bottom:15px;}
    .mb30{margin-bottom:30px;}
    .mb50{margin-bottom:50px;}
    .mb60{margin-bottom:60px;}
    .mb110{margin-bottom:110px;}
    .mb60{margin-bottom:60px;}
    .mb10{margin-bottom:10px;}
    .mb5{margin-bottom:5px;}
    .lh20{line-height:20px!important;}
    .lh25{line-height:25px;}
    .lh30{line-height:30px;}
    .lh45{line-height:45px;}
    .lh50{line-height:50px;}
    .over{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    .over2{overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp:2;-webkit-box-orient: vertical;}
    .bg-grey{background: #f0f0f0;}
    .bg-white{background: #fff;}
    .black{color:#333333;}
    .grey{color:#666666;}
    .green{color:#019B39;}
    .white{color:#fff;}
    .cl0{color:#333;}
    .cl9{color:#999;}
    .red{color:#d80b0b;}
    .red2{color:#BA0101;}
    .text-m{text-decoration:line-through}
    .b-border{border-bottom:1px solid #f0f0f0!important;}
    .r-border{border-right:1px solid #f0f0f0!important;}
    .b-none{border:none!important;}
    .flex{display: flex;justify-content: space-between;flex-wrap: wrap;}
    .flex-col{display: flex;flex-direction: column;justify-content: space-between;flex-wrap: nowrap;}
    .clear{clear: both;}
    a.block{display: block;width:100%;overflow: hidden;}
    .appheader{width:100%;height:80px;background:#2c3e50;}
    .container{width:1180px;margin:0 auto;padding:0 10px;overflow: hidden;}
    .appheader ul{overflow: hidden;width:fit-content;width:-webkit-fit-content;width:-ms-fit-content;width:-moz-fit-content;}
    .appheader ul>li{padding:10px;color:#fff;float:left;cursor: pointer;margin-top:20px;}
    .logo{width:5%;overflow: hidden;margin-top:10px;float: left;}
    .logo img{max-width:100%;}
    .appfooter{width:100%;height:80px;background:#ccc;color:#2c3e50;line-height: 80px;}
    .text-center{text-align: center;}
</style>