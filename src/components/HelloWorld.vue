<template>
  <div class="hello">
    <button @click="oncc"> WF</button>
    <hebao ref="hebao"></hebao>
    <tess></tess>
  </div>
</template>

<script>
import hebao from './hebao'
import tess from './tests'
export default {
components: {hebao, tess},
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      id:12
    }
  },
  methods:{
    oncc(){
      console.log('QWAS');
     this.$refs.hebao.childMethod(); 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
