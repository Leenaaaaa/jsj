<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media"  v-for="item in newlist" :key="item.id">
                
                    <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间:{{ item.add_time | dataFormat('YYYY-MM-DD')}}</span>
                            <span>点击:{{ item.click }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>  
    import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            newlist:[]
        }
    },
    created() {
        this.getNewsList();
    },
    methods: {
        getNewsList() {
            // 获取新闻列表
            this.$http.get('api/getnewslist').then(result => {
                console.log(result)
                if(result.body.status === 0) {
                    // 如果没有失败 ,应该把数据保存在data上
            
                   this.newlist = result.body.message;
                }else {
                    Toast('获取新闻列表失败!')
                }
               
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    
    .mui-ellipsis {
      font-size: 12px;
      color: #0094ff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>