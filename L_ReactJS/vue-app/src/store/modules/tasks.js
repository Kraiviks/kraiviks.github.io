export default {
    actions:{

    },
    mutations:{

    },
    state:{
        taskBase: [
            {
                id: new Date().now,
                taskName:'Test'
            }
        ]
    },
    getters:{
        allTasks() {
            return this.taskBase;
        }
    }
}