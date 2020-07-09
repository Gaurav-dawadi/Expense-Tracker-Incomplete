<template>
    <div>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/show">Expense list</router-link></li>
        </ul>
    </div>   
</template>

<script>
export default {
    
}
</script>

<style scoped>
ul{
    display: flex;
    margin: 15px 50px 10px 250px;
}
li{
    margin-right: 30px;
}

</style>