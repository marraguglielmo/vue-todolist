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
            ]
        }
    }
}).mount('#app');