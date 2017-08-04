<template>
    <div>
        <h1>姓名{{name}}</h1>
        <h2>这里是年龄啊： {{age}}</h2>
        <h3>我的QQ号码是：{{qq}}</h3>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: "刘志强",
            age: "28",
            qq:"578557428"
        }
    }, methods: {
        golist() {
            this.$route.router.go({
                name: "list"
            });
        }
    }
}
</script>

<style lang="sass">
$qwe:#2DD8AD;
body {
    background-color: $qwe;
    color: red;
}

h1 {
    background-color: blue;
    color: red;
}

h2 {
    background-color: purple;
}

a {
    font-size: 34px;
    color: black;
}
</style>
