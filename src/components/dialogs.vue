<template>
    <div>
        <div class="dialogs" v-if="isShow">
            <div class="mask" @click="closeme"></div>
            <div class="cont">
                <p class="text-right " @click="closeme">x</p>
                <slot>登录</slot>
            </div>
        </div>

    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        props: {
            isShow:{
                type:Boolean,
                default:false,
            }
        },
        methods:{
            closeme(){
                this.$emit("OnClose")
            }
        }
    }
</script>
<style scoped>
    .mask{
        width:100%;
        height:100%;
        position: absolute;
        top:0;
        left:0;
        background: rgba(0,0,0,0.5);

    }
    .cont{
        width:50%;
        padding:10px;
        min-height:100px;
        overflow: hidden;
        position: absolute;
        top:20%;
        left:50%;
        margin-left:-25%;
        background: #fff;
    }
    .text-right{
        text-align: right;
    }
</style>