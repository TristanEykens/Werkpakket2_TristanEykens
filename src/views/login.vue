<script setup>
import { ref, onMounted } from 'vue';
import router from "@/router";

const users = [
  { username: 'robin', password: 'test123', address: 'Elfde-Liniestraat 24, 3500 Hasselt' },
  { username: 'tristan', password: 'eykens', address: 'Ziegelsmeer 8, 3700 Tongeren' }
];

const username = ref('');
const password = ref('');
const loginError = ref(false);
const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true');
const userAddress = ref('');

const handleLogin = (e) => {
  e.preventDefault();
  const user = users.find(u => u.username === username.value && u.password === password.value);
  if (user) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userAddress', user.address);
    const postLoginAction = sessionStorage.getItem('postLoginAction');
    if (postLoginAction === 'Confirmation') {
      router.push('/Confirmation');
      sessionStorage.removeItem('postLoginAction');
    } else {
      router.push('/');
    }
  } else {
    loginError.value = true;
  }
};

const handleLogout = () => {
  localStorage.setItem('isLoggedIn', 'false');
  localStorage.removeItem('userAddress');
  isLoggedIn.value = false;
};

onMounted(() => {
  isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true';
});
</script>

<template>
  <main>
    <div class="center">
      <h1 v-if="!isLoggedIn">SIGN IN</h1>
      <h1 v-else>You are already signed in!</h1>

      <form v-if="!isLoggedIn" @submit="handleLogin">
        <div class="txt_field">
          <input type="text" v-model="username" required>
          <span></span>
          <label>Username</label>
        </div>
        <div class="txt_field">
          <input type="password" v-model="password" required>
          <span></span>
          <label>Password</label>
        </div>
        <p v-if="loginError">Invalid username or password!</p>
        <div class="signup_link">
          <a class="aForgotPassword"> Forgot password</a>
          <a href="#" class="aSignUp">Signup</a>
        </div>
        <input type="submit" value="Login">
      </form>
      <div class="bottombutton">
      <button v-if="isLoggedIn" @click="handleLogout" class="logout-button">Logout</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: #DE9E48;
  box-shadow: 0 15px 35px rgba(0,0,0,9);
}

.center h1 {
  text-align: center;
  padding: 20px 0;
  color: white;
  font-size: 40px;
}

.center form {
  padding: 0 40px;
  box-sizing: border-box;
}

.center form .txt_field {
  position: relative;
  margin: 30px 0;
}

.center form .txt_field input {
  width: 100%;
  padding: 0 5px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
  background: white;
  border-radius: 4px;
  height: 55px;
}

.center form .txt_field label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: #aaa;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}

.center form .txt_field span::before {
  content: '';
  position: absolute;
  top: 40px;
  left: 0;
  width: 0;
  height: 2px;
  transition: 0.5s;
}

.center form .txt_field input:focus ~ label,
.center form .txt_field input:valid ~ label {
  top: -5px;
  color: #1d130e;
}

.center form .txt_field input:focus ~ span::before,
.center form .txt_field input:valid ~ span::before {
  width: 100%;
}


.center input[type="submit"] {
  width: 100%;
  height: 50px;
  background: #1d130e;
  font-size: 18px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  outline: none;
}

.center input[type="submit"]:hover {
  background: white;
}

.center .signup_link {
  margin: 30px 0px;
  text-align: center;
  font-size: 16px;
  color: white;
}

.aForgotPassword {
  float: left;
}

.aSignUp {
  float: right;
  font-weight: 600;
}

.center .signup_link a {
  color: white;
  text-decoration: white;
}

.center .signup_link a:hover {
  text-decoration: underline;
}

.logout-button {
  width: 50%;
  height: 45px;
  background-color: black;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 20px;
}

.logout-button:hover {
  background-color: white;
  color: #1d130e;
}

</style>