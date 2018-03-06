<template>
	<div>
		<div class="">
      省
      <select name="" class="" id="aa" @change="valuechange(1)"> 
        <option v-for="(item,index) in Province"  >{{item}}</option> 
      </select> 
      <select name="" class="" id="bb" @change="valuechange(2)"> 
        <option v-for="(item,index) in City"  >{{item}}</option> 
      </select>
      <select name="" class="" id="cc" @change="ss()"> 
        <option v-for="(item,index) in county"  >{{item}}</option> 
      </select>
    </div>
  </div>
</template>
<style lang="less">
</style>
<script>
	import { Picker } from 'mint-ui';
  import myaddress from '../../static/jsonData/address3.json';     //引入省市区数据
  import LivePost from '../service/live';
  export default {
  	name: '',
  	components: {
  		'mt-picker': Picker
  	},
  	props: {},
  	data () {
  		return {
        Province:[],
        City:[],
        county:[],
      }
    },
    created() {

    },
    methods: {
      first(){
        let Province = Object.keys(myaddress);
        this.Province = Province;
        //市
        let citys = Object.keys(myaddress[Province[0]]);
        this.City = citys;
        //区
        let countys = Object.values(myaddress[Province[0]]);
        this.county = countys[0];
        return ;
      },
      valuechange(type){
        var obj = document.getElementById("aa").value;
        //市
        let citys = Object.keys(myaddress[obj]);
        this.City = citys;
        var objCity = document.getElementById("bb").value;
        console.log(objCity);
        let len = citys.length;
        if(type != 1){
          for(var i = 0;i < len ; i++){
           if(citys[i] == objCity){
            //区
            let countys = Object.values(myaddress[obj]);
            this.county = countys[i];
          }
        }
      }else{
          let countys = Object.values(myaddress[obj]);
          this.county = countys[0];
        }

    }

  },
  mounted(){
    this.first();
  }
}
</script>