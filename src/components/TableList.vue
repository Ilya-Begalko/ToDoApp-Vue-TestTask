<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const todos = computed(() => store.getters.sortedTodos);
const updateStatus = (id, e) => {
    store.commit('updateStatus', { id: id, value: e.target.checked })
}
</script>
    
<template>
    <div class="table-wrapper">
        <table class="table">
            <thead class="thead">
                <tr>
                    <th class="col-chk tcell theadcell col-start">
                    </th>
                    <th class="col-body tcell theadcell">
                        Описание
                    </th>
                    <th class="col-status tcell theadcell">
                        Статус
                    </th>
                    <th class="col-date tcell theadcell col-end">
                        Дата
                    </th>
                </tr>
            </thead>
            <tbody class="tbody">
                <tr class="trow" v-for="todo in todos" :key="todo.id">
                    <td class="tcell">
                        <div class="chkbox-wrapper">
                            <input type="checkbox" :checked=todo.isDone @change="updateStatus(todo.id, $event)">
                        </div>
                    </td>
                    <td class="tcell">
                        {{ todo.body }}
                    </td>
                    <td class="tcell status" :class="{ status__done: todo.isDone }">
                        {{ todo.isDone ? "Выполнено" : "В работе" }}
                    </td>
                    <td class="tcell">
                        {{ new Date(todo.date).toLocaleDateString() }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
    
<style scoped>
.table-wrapper {
    margin-top: 30px;
}

.table {
    border-spacing: 0;
}

.thead {
    text-align: left;
}

.tbody {
    top: 16px;
}

.tcell {
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid #EEEBE9;
}

.trow:last-child>* {
    border-bottom: 1px solid #EEEBE9;
}

.theadcell {
    border-right: 1px solid #C4C4C4;
    padding-top: 10px;
    padding-bottom: 0;
    border-top: 0;
    border-bottom: 0;
    height: 32px;
}

.trow:hover {
    background-color: #F6F9FF;
}

.col-chk {
    width: 80px;
}

.col-body {
    display: table;
    table-layout: fixed;
    width: 100%;
}

.col-status {
    width: 150px;
}

.col-date {
    width: 130px;
}

.col-end {
    border-right: 0;
}

.status {
    color: #F89B11;
}

.status__done {
    color: #134EC1;
}

.chkbox-wrapper {
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

input[type=checkbox] {
    width: 28px;
    height: 38px;
    background-image: url('../assets/chk_false.svg');
    appearance: none;
    background-position: center center;
    background-repeat: no-repeat;
}

input[type=checkbox]:checked {
    background-image: url('../assets/chk_true.svg');
}
</style>