<script setup>
import Header from './components/Header.vue';
import AddBtn from './components/AddBtn.vue';
import SearchBar from './components/SearchBar.vue';
import SortPicker from './components/SortPicker.vue';
import TableList from './components/TableList.vue';
import ModalAddWindow from './components/ModalAddWindow.vue';

import { computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const newTodoModalIsOpen = computed(() => store.state.newTodoModalIsOpen);
onBeforeMount(() => {
  if (localStorage.getItem('state')) {
    store.commit('initialiseState', JSON.parse(localStorage.getItem('state')));
  }
})
</script>

<template>
  <header>
    <div class="header--top">
      <Header></Header>
      <AddBtn></AddBtn>
    </div>
    <div class="tool--bar">
      <SearchBar></SearchBar>
      <SortPicker></SortPicker>
    </div>
  </header>

  <main>
    <TableList></TableList>
    <ModalAddWindow v-show="newTodoModalIsOpen"></ModalAddWindow>
  </main>
</template>

<style scoped>
.header--top, .tool--bar {
  display: flex;
  margin-top: 30px;
  justify-content: center;
  margin-left: 40px;
}
</style>
