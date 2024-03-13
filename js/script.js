const {createApp} = Vue;

createApp({
    data(){
        return{
            todoList:[
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Ripassare Vue',
                    done: false
                },
                {
                    text: 'Completare i bonus',
                    done: false
                }
            ],
            newTask : {
                text: '',
                done: false
            }
        }
    },

    methods:{
        addTask(){
            this.todoList.unshift(this.newTask);
            console.log(this.todoList);
        }
    }
}).mount('#app');