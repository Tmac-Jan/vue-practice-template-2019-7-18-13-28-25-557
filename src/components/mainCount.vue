<template>
  <div class="hello">
       <span>输入 Counter 的个数：</span>
    <input type="number" v-model.number="count" />
    <counterGroup :times="count" />
  </div>
</template>

<script>
 import counterGroup from "./counterGroup.vue";
export default {
   
  name: 'mainCount',
  data(){
  return{
   count:0,
  }
  },
   components: {
      counterGroup
  },
  props: {
  },
  computed: {

  		},
  methods: {
  		
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
