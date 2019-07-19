<template>
  <div >
 <Counter v-for="n in count" :key="n" />
  </div>
</template>

<script> 
 import counter from "./counter.vue";
export default {
  name: 'counterGroup',
  data(){
  return{
   count:1
  }
  },
  components: {
    counter
  },
  props: {
    times:Number
  },
  computed: {
  		},
  methods: {
  			inc(){
          this.count++;
          this.$emit('add-parent-total',this.count);
        },
        dec(){
          this.count--;
          this.$emit('add-parent-total',this.count);
        }
  		},
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



