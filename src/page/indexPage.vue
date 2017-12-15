<template>
    <div class="container">

        <div class="index-warp">
            <div class="index-left">
                <div class="index-left-block">
                    <p class="title-lg bg-green lh30 pl10">全部产品</p>
                    <template v-for="produce in produceList">
                        <p class="title-md pl20 lh30">{{produce.title}}</p>
                        <ul class="second-ul">
                            <li v-for=" item in produce.list"><a :href="item.url">{{item.name}}</a><span v-if="item.hot"
                                                                                                         class="

                             hot-tag">HOT</span></li>
                        </ul>
                        <div v-if="!produce.last" class="border"></div>
                    </template>
                </div>
                <div class="index-left-block">
                    <p class="title-lg bg-green lh30 pl10">最新消息</p>
                    <ul class="mt10">
                        <li v-for="item in newsList" class="title-md pl20 "><a :href="item.url">{{item.title}}</a></li>
                    </ul>
                </div>
            </div>
            <div class="index-right">
                <div class="index-silde" @mouseover="clearInv" @mouseout="runInv">
                   <ul>
                       <li>
                           <img v-if="show" :src="imgList[nowIndex].url" alt=""/>

                       </li>
                   </ul>
                    <div class="btn-span"><span @click="goto(prev)"><</span><span @click="goto(index)" v-for=" item,index in imgList " :class="{on: index==nowIndex}" ></span><span @click="goto(next)">></span></div>
                </div>
                <div class="index-board-list">
                    <div class="index-board-item" v-for="item in boardList">
                        <div class="img-left" :class="item.id">
                        </div>
                        <div class="index-board-item-right">
                            <p class="fz4 cl0 fw">{{item.title}}</p>
                            <p class="fz3 grey">{{item.description}}</p>
                            <button class="btn">查看详情</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        created: function () {
          this.$http.get("/data/menu.json")
                .then(function (data) {
                   // console.log(data);
                    this.newsList = JSON.parse(data.bodyText);
                }, function (err) {
                    console.log(err)
                })
        }, //vue-resource向后端或者服务器发送请求
        mounted() {
            this.runInv();
        },
        prop: {
            imgList: {
                type:Array,
                default:[],
            },
//            inv:{
//                type:Number,
////                default:10000,
//                default:2000,
//            }
        },
        data(){
            return {
                show:true,
                nowIndex:0,
                imgList:[
                    {
                        index:'0',
                        url:'/src/assets/sildeimages/pic1.jpg'
                    },
                    {
                        index:'1',
                        url:'/src/assets/sildeimages/pic2.jpg'
                    },
                    {
                        index:'2',
                        url:'/src/assets/sildeimages/pic3.jpg'
                    },
                    {
                        index:'3',
                        url:'/src/assets/sildeimages/pic4.jpg'
                    }
                ],
                boardList: [
                    {
                        title: '开放产品',
                        description: '这是一个开放产品',
                        saleout: false,
                        id: 'earth'

                    },
                    {
                        title: '开放产品2',
                        description: '这是一个开放产品',
                        saleout: false,
                        id: 'car'

                    },
                    {
                        title: '开放产品3',
                        description: '这是一个开放产品',
                        saleout: false,
                        id: 'loud'

                    },
                    {
                        title: '开放产品4',
                        description: '这是一个开放产品',
                        saleout: false,
                        id: 'mount'

                    },
                ],
                newsList: [],

//                    [
//                    {
//                        title:"数据统计",
//                        url:'http://www.baidu.com'
//                    },
//                    {
//                        title:"数据预测",
//                        url:'http://www.baidu.com'
//                    },
//                    {
//                        title:"数据分析",
//                        url:'http://www.baidu.com'
//                    },
//                ],
                produceList: {
                    pc: {
                        title: 'pc产品',
                        list: [
                            {
                                name: 'pc数据1',
                                url: 'http://www.baidu.com',
                                hot: true
                            },
                            {
                                name: 'pc数据2',
                                url: 'http://www.baidu.com'
                            },
                        ]
                    },
                    app: {
                        title: '应用产品',
                        last: true,
                        list: [
                            {
                                name: '应用数据1',
                                url: 'http://www.baidu.com'
                            },
                            {
                                name: '应用数据2',
                                url: 'http://www.baidu.com',
                                hot: true
                            },
                        ]
                    }
                },


            }
        },
        methods:{
            goto:function (index) {
                this.nowIndex=index;

            },
            runInv(){

                this.invId = setInterval(() => {
                  this.goto(this.next);
                  this.show=true
                },1000);
            },
            clearInv() {
                clearInterval(this.invId);
            }
        },
        computed: {
            prev() {
                if(this.nowIndex === 0) {
                    return this.imgList.length - 1;
                }else {
                    return this.nowIndex - 1;
                }
            },
            next() {
                if(this.nowIndex === this.imgList.length-1) {
                    return 0;
                }else {
                    return this.nowIndex + 1;
                }
            }
        }


    }
</script>
<style scoped>

    .mt10 {
        margin: 10px 0;
    }

    .hot-tag {
        background: red;
        color: #fff;
        font-size: 12px;
    }

    .border {
        border: 1px solid #ccc;
    }

    .pl10 {
        padding: 0 10px;
    }

    .pl20 {
        padding: 0 20px;
    }

    .index-left-block {
        overflow: hidden;
        margin: 30px 0;
        border: 1px solid #ccc;
        background: #fff;
    }

    .lh30 {
        line-height: 30px;
    }

    .bg-green {
        background: #019B39;
        color: #fff;
    }

    .title-lg {
        font-size: 15px;
    }

    .title-md {
        font-size: 14px;
    }

    .title-sm {
        font-size: 12px;
    }

    .index-warp {
        width: 100%;
        overflow: hidden;
        margin-top: 30px;
    }

    h2 {
        background: #019B39;
    }

    .second-ul {
        padding: 0 25px;
        font-size: 13px;
    }

    .index-left {
        width: 20%;
        float: left;
    }

    .index-right {
        width: 75%;
        float: right;
        overflow: hidden;
        margin-top: 30px;
    }

    .index-board-list {
        width: 100%;
        overflow: hidden;
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .index-board-item {
        width: 47%;
        height: 100px;
        background: #fff;
        border-radius: 4px;
        margin-bottom: 15px;
        padding: 2% 1%;
    }

    .img-left {
        width: 25%;
        height: 100px;
        float: left;
        margin-right: 4%
    }

    .index-board-item-right {
        width: 70%;
        height: 100px;
        float: left;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .btn {
        width: fit-content;
        width: -webkit-fit-content;
        padding: 0 10px;
        text-align: center;
        line-height: 30px;
        color: #fff;
        font-size: 14px;
        border-radius: 4px;
        background: #019B39;
        outline: none;
        border: none;

    }

    .img-left.earth {
        background: url(/src/assets/images/1.png) no-repeat center;
    }

    .img-left.car {
        background: url(/src/assets/images/2.png) no-repeat center;
    }

    .img-left.loud {
        background: url(/src/assets/images/3.png) no-repeat center;
    }

    .img-left.mount {
        background: url(/src/assets/images/4.png) no-repeat center;
    }
    .index-silde{
        width:100%;
        height:300px;
        margin-bottom:20px;
        position: relative;
    }
    .index-silde li{
        float: left;
    }
    .index-silde li.on{display: block;}
    .index-silde img{
        width:100%;
        height:300px;
    }
    .btn-span{
        width:fit-content;
        height:10px;
        position: absolute;
        right:10px;
        bottom:10px;
    }
    .btn-span span{
        display: inline-block;
        width:10px;
        height:10px;
        background: #fff;
        color:#333;
        font-size:12px;
        text-align: center;
        line-height: 10px;
        border-radius: 50%;
        margin:0 10px;
        cursor: pointer;
    }
    .btn-span span.on{background: red;}

</style>