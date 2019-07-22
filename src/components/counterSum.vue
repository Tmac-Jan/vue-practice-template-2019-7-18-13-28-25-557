<template>
    <div class="hello">

        <p>sum:{{this.$store.state.sum}}</p>
    </div>

</template>

<script>

    export default {
        name: 'countersum',
        data() {
            return {
                counterSum22: this.$store.state.sum
            }
        },
        components: {},
        props: {
            counterSum: Number
        },
        computed: {},
        beforeDestroy() {

        },
        methods: {}
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
