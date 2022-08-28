<script setup>
import Header from './components/Header.vue';
import AddBtn from './components/AddBtn.vue';
</script>

<template>
  <header>
    <div class="header--top">
      <Header></Header>
      <AddBtn></AddBtn>
    </div>
  </header>

  <main>

  </main>
</template>

<style scoped>
.header--top {
  display: flex;
  margin-top: 30px;
  justify-content: center;
  margin-left: 40px;
}
</style>
