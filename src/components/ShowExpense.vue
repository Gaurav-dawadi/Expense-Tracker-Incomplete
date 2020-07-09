<template>
    <div class="container">
        <div class="listOfExpenses m-5">
            <div class="container title">
                <h2>List Of Expenses</h2>
            </div>
            <div class="collection m-5">
                <div v-for = "(item, index) in data" :key="index" class="container content">                   
                    <label>Name: </label>
                    <span>{{ item.name }}</span>
                    <p></p>
                    <label>Amount: </label>
                    <span>Rs {{ item.amount }}</span>
                    <p></p>
                    <label>Date: </label>
                    <span>{{ item.date }}</span>
                    <p></p>
                    <div id="deleteExpense" class="col-md-4 col-lg-2 m-5">
                        <button type="submit" class="btn btn-warning btn-block" v-on:click="deleteExpense(index)">DELETE</button>
                    </div>
                </div>
                <div class="container totalAmount">
                    <span>Total Amount: Rs {{total}}</span>
                </div>                
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    computed:{
        data: function(){
            return this.$store.state.data
        },
        total: function(){
            return this.$store.state.data.reduce(function(sum, item){
                return sum + parseInt(item.amount)
            }, 0)
        }
    },
    methods:{
        deleteExpense(id){
            this.$store.dispatch("deleteExpense", id)
        }
    }
}
</script>

<style scoped>
.title{
    background-color:  teal;
    padding: 20px;
    text-align: center;
}
.listOfExpenses{
    background-color: whitesmoke;
    color: honeydew;
}
.collection{
    margin: 10px 30px;
    padding: 10px;
    font-size: 2em;
}
.content{
    background-color:  teal;
    margin: .5em 0px;
    padding: 20px;
    text-align: center;
}

.totalAmount{
    margin: 1.5em 0em;
    background-color: teal;
    padding: 20px;
    text-align: center;
}

</style>