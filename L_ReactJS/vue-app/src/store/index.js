import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        asideLeftState: false,
        arrayTask: []
    },
    mutations:{
        toggleL(state) {
            state.asideLeftState = !state.asideLeftState;
        },
        createTask(state){
            let inp = document.querySelector('.form-control').value;
            if (inp !== '') {
                state.arrayTask.unshift(inp);
            }
            document.querySelector('.input-group').reset();
        }
    }
})
