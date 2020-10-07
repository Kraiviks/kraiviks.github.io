import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        asideLeftState: false,
        asideRightState: false,
        arrayTask: []
    },
    mutations:{
        toggleL(state) {
            state.asideLeftState = !state.asideLeftState;
        },
        toggleR(state) {
            state.asideRightState = !state.asideRightState;
        },
        createTask(state){
            let inp = document.querySelector('.form-control').value;
            if (inp !== '') {
                state.arrayTask.push(inp);
            }
            document.querySelector('.input-group').reset();
        }
    }
})
