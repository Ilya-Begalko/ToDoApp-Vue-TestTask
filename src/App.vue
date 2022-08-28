<script setup>
import Header from './components/Header.vue';
import AddBtn from './components/AddBtn.vue';
import SearchBar from './components/SearchBar.vue';
import SortPicker from './components/SortPicker.vue';
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
