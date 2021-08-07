new Vue({
    el: '#app',
    data() {
        return {
            todoList: [],
            new_todo: '',
            showComplete: false,
        };
    },
    computed: {},
    mounted() {
        this.getTodos();
    },
    watch: {
        todoList: {
            handler: function (updatedList) {
                localStorage.setItem('todo_list', JSON.stringify(updatedList));
            },
            deep: true
        }
    },
    computed: {
        pending: function () {
            return this.todoList.filter(function (item) {
                return !item.done;
            })
        },
        completed: function () {
            return this.todoList.filter(function (item) {
                return item.done;
            });
        },
        completedPercentage: function () {
            return (Math.floor((this.completed.length / this.todoList.length) * 100)) + "%";
        },
        today: function () {
            let date = new Date();
            let today = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
            today = {
                date: date.toLocaleDateString('fr-FR', today),
            }
            return (today);
        }
    },
    methods: {
        // get all todos when loading the page
        getTodos() {
            if (localStorage.getItem('todo_list')) {
                this.todoList = JSON.parse(localStorage.getItem('todo_list'));
            }
        },
        // add a new item
        addItem() {
            // validation check
            if (this.new_todo) {
                this.todoList.unshift({
                    id: this.todoList.length,
                    title: this.new_todo,
                    done: false,
                });
            }
            // reset new_todo
            this.new_todo = '';
            // save the new item in localstorage
            return true;
        },
        deleteItem(item) {
            this.todoList.splice(this.todoList.indexOf(item), 1);
        },
        toggleShowComplete() {
            this.showComplete = !this.showComplete;
        },
        clearAll() {
            this.todoList = [];
        }
    },
});