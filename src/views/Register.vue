<template>
    <div class="register-card">
        <h2>Register</h2>
        <h3>Insira seus dados</h3>
        <form @submit.prevent="register" class="register-form">
            <input type="text" name="nome" id="nome" placeholder="Coloque seu nome">
            <input type="text" name="nome" id="nome" placeholder="Coloque sua idade">
            <input type="email" placeholder="Coloque seu Email" v-model="register_form.email">
            <input type="password" placeholder="Digite uma senha" v-model="register_form.password">
            <input type="password" placeholder="Digite novamente a senha" v-model="register_form.password">
            <p class="register-link">
                Já tem uma conta? <a href="/login">Clique aqui para Entrar</a>
            </p> 
            <input type="submit" value="Register">
        </form>
    </div> 
</template>

<script>
    import {ref} from 'vue';
    import {useStore} from 'vuex'; 


    export default {
        setup() {
            const register_form = ref({});
            const store = useStore();

            const register = () => {
                store.dispatch('register', register_form.value)
            }

            return {
                register_form,
                register
            }
        }
    }
</script>

<style>
* {
    box-sizing: border-box;
}

@keyframes rotate {
    100% {
        background-position: 15% 50%;
    }
}

:root {
    --color-primary: #056b46;
    --color-link: #05a76b;
}

body{
    display: grid;
    place-items: center;
    margin: 0;
    height: 100vh;
    padding: 0 24px;
    background-color: var(--color-primary);
    background-image: url('../assets/background-register.png');
    background-repeat: no-repeat;
    background-size: cover;
    color: #f9f9f9f9;
    animation: rotate 6s infinite alternate linear;
}

body::after{
    content: "";
    position: fixed;
    inset: 0;
    background: rgb(0 0 0 / 35%);
}

.register-card {
    position: relative;
    z-index: 3;
    width: 100%;
    margin: 0 20px;
    padding: 70px 30px 44px;
    border-radius: 20px;
    background: rgb(24 21 36 / 66%);
    backdrop-filter: blur(10px);
    text-align: center;
}

.register-card > h2{
    font-size: 36px;
    font-weight: 400;
    margin: 0 0 12px;
}

.register-card > h3{
    color: rgb(255 255 255 / 38%);
    font-size: 16px;
    font-weight: 400;
    margin: 0 0 48px;
}

.register-form{
    width: 100%;
    margin: 0;
    display: grid;
    gap: 16px;
}

.register-form > :is(input, button) {
    width: 100%;
    height: 56px;
    border-radius: 6px;
    border: 0;
}

.register-form > input {
    color: rgb(255 255 255 / 96%);
    background: rgb(255 255 255 / 8%);
    font-family: inherit;
    font-size: 16px;
    padding: 0 16px;
}

.register-form > input::placeholder {
    color: rgb(255 255 255 / 38%);
}

.register-form > button {
    cursor: pointer;
    width: 100%;
    height: 56px;
    padding: 0 16px;
    background: var(--color-primary);
    color: #f9f9f9f9;
    border: 0;
    font-family: inherit;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    transition: all 0.375s;
}

.register-form > .register-link {
    color: #f9f9f9f9;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    margin-bottom: 30px;
}

.register-form > .register-link a {
    color: var(--color-link);
}

@media (width >= 448px){
    .register-card{
        margin: 0;
        width: 70%;
        min-width: 400px;
    }
}

@media (width >= 628px){
    .register-card{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        padding: 0 44px;
        width: 50%;
        min-width: auto;
        max-width: 500px;
        display: flex;
        border-radius: 0;
        flex-direction: column;
        justify-content: center;
    }
}




</style>