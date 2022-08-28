<script setup>
    import { useStore } from 'vuex';
    
    const store = useStore();
    </script>
    
    <template>
        <button class="btn-add-todo">
            <span>
                <img src="../assets/plus_btn.svg">
            </span>
        </button>
    </template>
    
    <style scoped>
        .btn-add-todo {
            margin-left: auto;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #D6DBEB;
            border: 0;
        }
        .btn-add-todo:hover {
            background: #C6CBDB;
        }
    </style>