<template>
    <div>
        <!-- <counter v-for="n in times" :key="n" @addSum="addTotal" @destroyItemSum="destroyTotal"/>-->
        <counter v-for="n in times" :key="n"/>
        <!-- <counter-sum :counterSum="sum"/>-->
        <counter-sum/>
    </div>
</template>

<script>
    import counter from "./counter.vue";
    import counterSum from "./counterSum.vue";

    export default {
        name: 'counterGroup',
        data() {
            return {
                count: 10,
                sum: 0
            }
        },
        components: {
            counter,
            counterSum
        },
        props: {
            times: Number
        },
        computed: {},
        methods: {
            // addTotal(itemValue) {
            //     this.sum += itemValue;
            // },
            // destroyTotal(itemValue) {
            //     this.sum -= itemValue;
            // }
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



