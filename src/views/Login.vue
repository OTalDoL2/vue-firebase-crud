<template>
    <div class="login-card">
        <h2>Login</h2>
        <h3>Insira seus dados</h3>
        <form @submit.prevent="login" class="login-form">
            <input type="email" placeholder="Coloque seu Email" v-model="login_form.email">
            <input type="password" placeholder="password" v-model="login_form.password">
            <p class="register-link">
                Não tem uma conta? <a href="/register">Clique aqui para Criar uma Conta</a>
            </p> 
            <input type="submit" value="Login">
        </form>
    </div> 
</template>

<script>
    import {ref} from 'vue';
    import {useStore} from 'vuex'; 


    export default {
        setup() {
            const login_form = ref({});
            const register_form = ref({});
            const store = useStore();

            const login = () => {
                store.dispatch('login', login_form.value)
            }

            const register = () => {
                store.dispatch('register', register_form.value)
            }

            return {
                login_form,
                register_form,
                login, 
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
    --color-primary: #7656f0;
    --color-link: #56bff0;
}

body{
    display: grid;
    place-items: center;
    margin: 0;
    height: 100vh;
    padding: 0 24px;
    background-color: var(--color-primary);
    background-image: url('../assets/background-login.png');
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

.login-card {
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

.login-card > h2{
    font-size: 36px;
    font-weight: 400;
    margin: 0 0 12px;
}

.login-card > h3{
    color: rgb(255 255 255 / 38%);
    font-size: 16px;
    font-weight: 400;
    margin: 0 0 48px;
}

.login-form{
    width: 100%;
    margin: 0;
    display: grid;
    gap: 16px;
}

.login-form > :is(input, button) {
    width: 100%;
    height: 56px;
    border-radius: 6px;
    border: 0;
}

.login-form > input {
    color: rgb(255 255 255 / 96%);
    background: rgb(255 255 255 / 8%);
    font-family: inherit;
    font-size: 16px;
    padding: 0 16px;
}

.login-form > input::placeholder {
    color: rgb(255 255 255 / 38%);
}

.login-form > button {
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

.login-form > .register-link {
    color: #f9f9f9f9;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    margin-bottom: 30px;
}

.login-form > .register-link a {
    color: var(--color-link);
}

@media (width >= 448px){
    .login-card{
        margin: 0;
        width: 70%;
        min-width: 400px;
    }
}

@media (width >= 628px){
    .login-card{
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