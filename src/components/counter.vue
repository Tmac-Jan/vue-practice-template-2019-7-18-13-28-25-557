<template>
    <div class="hello">
        <p>输入数字</p>
        <button @click="inc">add</button>
        <span>result:{{count}}</span>
        <button @click="dec">dec</button>
    </div>
</template>

<script>
    export default {
        name: 'counter',
        data() {
            return {
                count: 0,
            }
        },
        components: {},
        props: {},
        computed: {},
        beforeDestroy() {
            // this.$emit('destroyItemSum', this.count);
           // this.$store.state.sum-=this.count;
            this.$store.commit('decSum', this.count);
        },
        methods: {
            //增加
            inc() {
                //const count = this.count
                this.count++;
                //this.$emit('addSum', 1);
                this.$store.commit('addSum', 1);
            },
            //减少
            dec() {
                this.count--;
              //  this.$store.state.sum-=1;
                this.$store.commit('decSum', 1);
               //this.$emit('addSum', -1);
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
