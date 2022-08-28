import {createStore} from 'vuex';

const state = {
    todos: [],
    searchText: "",
    sortBy: "date",
    sortByDir: "DESC",
    newTodoModalIsOpen: false,
    newTodoText: ""
}

const mutations = {
    initialiseState (state, payload) {
        state.todos = payload.todos;
        state.searchText = payload.searchText;
        state.sortBy = payload.sortBy;
        state.sortByDir = payload.sortByDir;
        state.newTodoModalIsOpen = payload.newTodoModalIsOpen;
        state.newTodoText = payload.newTodoText;
    },
    openNewTodo (state) {
        state.newTodoModalIsOpen = true;
        localStorage.setItem('state', JSON.stringify(state));
    },
    closeNewTodo (state) {
        state.newTodoModalIsOpen = false;
        localStorage.setItem('state', JSON.stringify(state));
    },
    createTodo (state) {
        state.todos.push({
            id: state.todos.length,
            body: state.newTodoText,
            isDone: false,
            date: Date.now()
        });
        localStorage.setItem('state', JSON.stringify(state));
    },
    updateNewTodoText (state, value) {
        state.newTodoText = value;
        localStorage.setItem('state', JSON.stringify(state));
    },
    updateStatus (state, payload) {
        state.todos[payload.id].isDone = payload.value;
        localStorage.setItem('state', JSON.stringify(state));
    },
    updateSearchText (state, value) {
        state.searchText = value;
        localStorage.setItem('state', JSON.stringify(state));
    },
    updateSortBy (state, value) {
        state.sortBy = value;
        localStorage.setItem('state', JSON.stringify(state));
    },
    updateSortByDir (state) {
        state.sortByDir = state.sortByDir === "ASC" ? "DESC" : "ASC";
        localStorage.setItem('state', JSON.stringify(state));
    }
}

const getters = {
    matchingTodos (state) {
        return state.todos.filter(todo => {
            return (todo.body.toLowerCase().includes(state.searchText.toLowerCase()) ||
            new Date(todo.date).toLocaleDateString().includes(state.searchText) ||
            todo.id.toString().includes(state.searchText) ||
            `${todo.isDone ? "Выполнено" : "В работе"}`.toLowerCase().includes(state.searchText.toLowerCase()))
        });
    },
    sortedTodos (state, getters) {
        switch (state.sortBy + state.sortByDir) {
            case "dateASC":
                return getters.matchingTodos.sort((a, b) => a.date - b.date);
            case "statusDESC":
                return getters.matchingTodos.sort((a, b) => a.isDone - b.isDone);
            case "statusASC":
                return getters.matchingTodos.sort((a, b) => b.isDone - a.isDone);
            default:
                return getters.matchingTodos.sort((a, b) => b.date - a.date);
        }
    }
}

const store = createStore({
    state,
    mutations,
    getters
})

export default store;