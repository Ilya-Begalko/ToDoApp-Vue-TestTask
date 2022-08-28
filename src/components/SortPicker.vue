<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const sortBy = computed({
    get() {
        return store.state.sortBy
    },
    set(value) {
        store.commit('updateSortBy', value)
    }
});
const sortByDir = computed(() => store.state.sortByDir);
const updateSortByDir = () => {
    store.commit('updateSortByDir');
}
</script>
    
<template>
    <div class="sort-picker_wrapper">
        <div>Сортировать по:</div>
        <select class="sort-picker" v-model="sortBy">
            <option value="date">Дата</option>
            <option value="status">Статус</option>
        </select>
        <button class="sort-picker_direction" :class="{ 'sort-picker_direction__ascending': sortByDir === 'ASC' }"
            @click="updateSortByDir">
            <img src="../assets/down_arrow.svg" class="sort-picker-direction_image">
        </button>
    </div>
</template>
    
<style scoped>
.sort-picker_wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;

}

.sort-picker {
    font-family: 'Vela Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #16191D;
    border: 0;
    background-color: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    margin-right: auto;
    text-align: end;
}

.sort-picker_direction {
    border: 0;
    background-color: inherit;
    padding-left: 0;
    height: 18px;
    display: flex;
}

.sort-picker-direction_image {
    align-self: center;
}

.sort-picker_direction__ascending>* {
    transform: scaleY(-1);
}
</style>