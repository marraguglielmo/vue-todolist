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
            if(this.newTask.text.length >= 5){
                this.todoList.unshift(this.newTask);
                this.newTask = {
                    text: '',
                    done: false
                };
            }else{
                console.log('errore');
                this.newTask = {
                    text: '',
                    done: false
                };
            }
        }
    }
}).mount('#app');