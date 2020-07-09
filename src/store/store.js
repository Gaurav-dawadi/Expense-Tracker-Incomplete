import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        data:[],
    },
    methods: {
        updateMessage (e) {
          this.$store.commit('updateMessage', e.target.value)
        }
    },
    mutations:{
        sendData(state, data){
            state.data.push(data)
        },
        deleteExpense(state, id){
            state.data.splice(id, 1)
        }
    },
    actions:{
        sendData(context, data){
            context.commit('sendData', data)
            console.log('data send')
        },
        fetchdata(context, data){
            db.ref('expense').on('value', snapshot => {
                context.commit('setdata', snapshot.val())
            })
        },
        deleteExpense(context, id){
            context.commit('deleteExpense', id)
        },

    }
})