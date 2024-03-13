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
            },
            errorMsg: ''
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
                this.errorMsg = '';
            }else{
                this.errorMsg = 'Attenzione, la task deve essere lunga almeno 5 caratteri';
                this.newTask = {
                    text: '',
                    done: false
                };
            }
        }
    }
}).mount('#app');