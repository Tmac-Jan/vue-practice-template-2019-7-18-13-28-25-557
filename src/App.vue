<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <span>输入 Counter 的个数：</span>
        <input type="number" v-model.number="count"/>
        <span>
            result:{{count}}
        </span>
        <counterGroup :times="count"/>
    </div>

</template>

<script>
    import counterGroup from "./components/counterGroup.vue"

    export default {
        name: 'app',
        components: {
            counterGroup
        },
        data() {
            return {
                count: 1
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
