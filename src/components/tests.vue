<template>
  <div class="hello">
         <iframe id="iframe1" width="800" height="600" frameborder='no' border='0' marginwidth='0' marginheight='0' scrolling='no' allowtransparency='yes'
             :src="'https://view.officeapps.live.com/op/view.aspx?src=./a.ppt'"></iframe>
  </div>
</template>

<script>
export default {
    data(){
        return{
        
        }
    },
    methods:{

    },
    mounted(){

    }
 
}
</script>
<style  lang="less" scoped>
h3{
    text-align: center;
}
 .box-card {
   background: chocolate;
   width: 100%;
   font-size: 0.9rem;
  }
   .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
