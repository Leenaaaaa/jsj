<template>
<div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="i">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp; 用户: {{ item.user_name}}&nbsp;&nbsp;发表时间::{{ item.add_time | dataFormat('YYYY-MM-DD')}}
                </div>
                <div class="cmt-body">
                    {{item.content ==='underfined'?'此用户什么都没说':item.content}}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>

</div>
   
   
</template>

<script>
    export default {
        data() {
            return{
                pageIndex: 1,
                comments: []
            }
        },
        created() {
            this.getComments();
        },
        methods: {
            getComments() {
                this.$http.get("api/getComments/"+ this.id +"?pageindex="+ this.pageIndex).then(result => {
                   console.log(result)
                   if(result.body.status === 0) {
                        // this.comments = result.body.message;
                        // 老数据拼接新数据
                        this.comments = this.comments.concat(result.body.message)
                   }else{
                       Toast('获取评论失败')
                   }
                });
            },
            getMore() {
                // 加载更多
                this.pageIndex++;
                this.getComments();
            }
        },
            
        props: [
            'id'
        ]
    }
</script>

<style lang="scss" scoped>
    .cmt-container{
        h3{
          font-size: 18px;  
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;

        }
        .cmt-list {
            margin: 10px 0;
            .cmt-item {
                font-size: 13px;
                .cmt-title{
                    line-height: 30px;
                    background-color: #ccc;
                }
                .cmt-body {
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>