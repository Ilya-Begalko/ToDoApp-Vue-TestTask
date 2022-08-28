<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    const store = useStore();
    const closeModal = () => { store.commit('closeNewTodo') };
    const newTodoText = computed({
        get () {
            return store.state.newTodoText
        },
        set (value) {
            store.commit('updateNewTodoText', value)
        }
    });
    const submitTodo = () => {
        store.commit('createTodo');
        store.commit('updateNewTodoText', "")
        closeModal();
    }
    </script>
    
    
    <template>
        <div class="modal-backdrop">
            <div class="modal-window">
                <div class="heading-wrapper">
                    <div class="modal-heading">
                        Создать новую задачу
                    </div>
                    <button class="btn-close-modal" @click="closeModal">
                        <img src="../assets/white_cross.svg" class="white-cross">
                    </button>
                </div>
    
    
                <div class="modal-label">
                    Описание:
                </div>
                <input class="modal-textfield" placeholder="Введите описание" v-model="newTodoText">
                <button class="modal-submit" @click="submitTodo">
                    Создать
                </button>
            </div>
        </div>
    </template>
    
    <style scoped>
    @font-face {
        font-family: 'AGAvantGardeCyr Book';
        src: url('../assets/fonts/agavantgardecyr-book_[allfont.net].ttf')
    }
    
    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.01);
        backdrop-filter: blur(4px);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .modal-window {
        box-sizing: border-box;
        width: 400px;
        height: 281px;
        padding-left: 40px;
        padding-top: 40px;
        padding-right: 40px;
        background: #FFFFFF;
        border: 1px solid #DDE2E4;
        box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        display: flex;
        flex-direction: column;
    }
    
    .heading-wrapper {
        display: flex;
    }
    
    .modal-heading {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 132%;
        margin-bottom: 30px;
    }
    
    .btn-close-modal {
        height: 22px;
        width: 22px;
        justify-content: center;
        background: #314B99;
        border-radius: 5px;
        border: 0;
        display: flex;
        margin-left: auto;
    }
    
    .btn-close-modal:hover {
        background: #213B89;
    }
    
    .btn-close-modal .white-cross {
        justify-self: center;
        align-self: center;
    }
    
    .modal-label {
        font-family: 'AGAvantGardeCyr Book';
        margin-bottom: 5px;
    }
    
    .modal-textfield {
        height: 40px;
        padding: 16px;
        width: 100%;
        margin-bottom: 30px;
        background: #FFFFFF;
        border: 1px solid #DDE2E4;
        border-radius: 8px;
    }
    
    .modal-textfield::placeholder {
        font-family: 'Vela Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 132%;
        color: #000000;
        opacity: 0.5;
    }
    
    .modal-submit {
        padding: 12px 40px;
        background: #F0F5FF;
        border-radius: 8px;
        border: 0;
        width: fit-content;
        align-self: center;
        font-family: 'Vela Sans';
        font-size: 18px;
        color: #314B99;
    }
    .modal-submit:hover {
        background: #E0E5EF;
    }
    </style>