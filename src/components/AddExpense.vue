<template>
    <div class="container mt-3">
        <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
            <h2 class="mb-5">ADD EXPENSE</h2>
            <form v-on:submit.prevent='sendData'>
                <b-container fluid>
                    <b-row class="field-1">
                        <b-col sm="2">
                        <label id="name" >Name:</label>
                        </b-col>
                        <b-col sm="8">
                        <b-form-input  v-model='data.name' id="input-large" size="lg" placeholder="Enter title of expense"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="field-2">
                        <b-col sm="2">
                        <label id="name" >Amount:</label>
                        </b-col>
                        <b-col sm="8">
                        <b-form-input v-model='data.amount' id="input-large" size="lg" placeholder="Enter amount"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="field-3">
                        <b-col sm="2">
                        <label id="name" >Date:</label>
                        </b-col>
                        <b-col sm="8">
                        <b-form-input v-model='data.date' id="input-large" size="lg" placeholder="Enter date"></b-form-input>
                        </b-col>
                    </b-row>
                    <div class="col-md-4 col-lg-2 m-5">
                        <button type="submit" class="btn btn-warning btn-block" >ADD</button>
                    </div>
                </b-container>
            </form>

        </b-jumbotron>
    </div>  
</template>


<script>
export default {
    data() {
        return {
            data: {
                title: '',
                amount: '',
                date: '',
            }
        }    
    },
    methods:{
        sendData(){
            this.$store.dispatch('sendData', this.data);
            this.data = {};
        }
    },
}
</script>


<style scoped>
h2{
    text-align: center;
}
#name{
    font-size: larger;
}
.field-1, .field-2, .field-3{
    margin-bottom: 30px;
}
#submitButton{
    margin: 50px 0px 0px 450px;
}
</style>