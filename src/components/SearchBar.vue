<script setup>
    import { useStore } from 'vuex';
    const store = useStore();
    </script>
    
    <template>
        <span class="search-wrapper">
            <img src="../assets/search.svg">
            <input class="search-bar"
            placeholder="Поиск ID, Имени, статуса или даты"
            >
        </span>
        
    </template>
    
    <style scoped>
        .search-wrapper {
            display: flex;
            flex-direction: row;
        }
        .search-bar {
            font-family: 'Vela Sans';
            border: 0;
            margin-left: 16px;
            width: 250px;
        }
        .search-bar::placeholder {
            color: #C4C4C4;
        }
    </style>