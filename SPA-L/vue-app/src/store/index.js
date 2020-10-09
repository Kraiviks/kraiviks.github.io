import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        bgColor: false,
        asideLeftState: false,
        arrayTask: [],
        arrayT: [],
        arrayC: [],
        filterT: false,
        filterA: true,
        filterC: false
    },
    mutations:{
        changeBgColor(state){
            state.bgColor = !state.bgColor
        },
        toggleL(state) {
            state.asideLeftState = !state.asideLeftState;
        },
        createTask(state){
            let inp = document.querySelector('.form-control').value;
            if (inp !== '') {
                const newItem = {
                    label: inp,
                    important: false,
                    checked: false,
                    id: Date.now()
                }
                const newArr = [newItem, ...state.arrayTask];
                state.arrayTask = newArr
                document.querySelector('.input-group').reset();
            }            
        },
        delTask(state, id){
            const index = state.arrayTask.findIndex(elem => elem.id === id);
            const before = state.arrayTask.slice(0, index);
            const after = state.arrayTask.slice(index + 1);
            const newArr = [...before, ...after];

            state.arrayTask = newArr
        },
        toggleImportant(state, id){
            const index = state.arrayTask.findIndex(elem => elem.id === id);
            const old = state.arrayTask[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...state.arrayTask.slice(0, index), newItem, ...state.arrayTask.slice(index + 1)];

            state.arrayTask = newArr
        },
        checkTask(state, id){
            const index = state.arrayTask.findIndex(elem => elem.id === id);
            state.arrayTask[index].checked = !state.arrayTask[index].checked
        },
        filterAll(state){
            state.arrayTask  
            state.filterA = true
            state.filterT = false
            state.filterC = false
        },
        filterActive(state){
            const newArr = state.arrayTask.filter(elem => elem.checked === false);
            state.arrayT = newArr
            state.filterA = false
            state.filterT = true
            state.filterC = false
        },
        filterCompleted(state){
            const newArr = state.arrayTask.filter(elem => elem.checked === true);
            state.arrayC = newArr
            state.filterA = false
            state.filterT = false
            state.filterC = true
        }
    }
})
