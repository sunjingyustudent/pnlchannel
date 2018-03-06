<template>
  <div class="classify-wrap" v-if="classify.length>0">
    <div class="sortMenu">
      <ul class="sortMenu-ul" >
        <li class="cell" v-for="item in classify"  @click="changeClassify(item) ">
          <a class="author_name_a" :class="{'checked':item.id == classifyid}">{{item.author_name}}</a>
        </li>
      </ul>
    </div>
    <div class="tip tip-animation" v-if="tip">
      <img src="../assets/images/fingers.png" alt="" class="tip-img">
    </div>
  </div>
</template>
<script> 
  import livePost from '../service/live';
  export default {
    props:['classify','classifyid'],
    data () {
      return {
        tip:true,
      }
    },
    created(){
      let classifyid = this.$route.query.classifyid;
      let _this = this;
      if (classifyid == 0 || classifyid == undefined) {
       setTimeout(function () {
        _this.tip = false;
      }, 2000);
     }  
   },
   methods:{
    changeClassify(item){
      let _this = this;
      this.$emit('postDat',item.id)
    }
  }
}
</script>  
<style>
  /* 分类菜单*/
  .classify-wrap{
    width: 100%;
    height: 2rem;
  }
  .sortMenu{
    width: 100%; 
    overflow-x: scroll; 
    -webkit-overflow-x: scroll;
/*     border-bottom: 1px solid #ccc; */
  }
  /*去掉难看的滚动条*/
  .sortMenu::-webkit-scrollbar{ 
    width: 0; 
    height: 0;   
    background-color: #fff;  
  }
  .sortMenu-ul { 
    min-width:500px; 
    display: flex;
    justify-content: flex-start;
    
  }
  .sortMenu .cell{ 
    display: inline-block; 
    font-size: .7rem;
    padding: 0px 1rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    position: relative;
    text-overflow: ellipsis;
    word-break: keep-all;
    background-color: #efefef;
    margin-right: .1rem;
  }
  .author_name_a{
    display: inline-block; 
    height: 2rem;

  }
  .checked{
   border-bottom: 2px solid red;
 }
 .tip{
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  right: 5%;
  top: 4%;
}
.tip-img{
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
}
.tip-animation{
  display: block;
  z-index: 10000;
  animation:myfirst 2s;
  -moz-animation:myfirst 2s; /* Firefox */
  -webkit-animation:myfirst 2s; /* Safari and Chrome */
  -o-animation:myfirst 2s; /* Opera */
}
@keyframes myfirst
{
  0%{right:3%;}
  25%{right:7%;}
  50%{right:3%;}
  75%{right:7%;}
  100%{right:3%;}
}

@-moz-keyframes myfirst /* Firefox */
{
  0%{right:3%;}
  25%{right:7%;}
  50%{right:3%;}
  75%{right:7%;}
  100%{right:3%;}
}

@-webkit-keyframes myfirst /* Safari and Chrome */
{
  0%{right:3%;}
  25%{right:7%;}
  50%{right:3%;}
  75%{right:7%;}
  100%{right:3%;}
}

@-o-keyframes myfirst /* Opera */
{
  0%{right:3%;}
  25%{right:7%;}
  50%{right:3%;}
  75%{right:7%;}
  100%{right:3%;}
}
</style>