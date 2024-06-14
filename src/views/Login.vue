<!-- eslint-disable prettier/prettier -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4 login-container">
    <div class="max-w-md w-full login-box">
      <h2 class="text-center text-2xl font-bold text-gray-800 mb-6">Sign in to your dashboard</h2>

      <form class="space-y-4" @submit.prevent>
        <div class="relative text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <input id="email" name="email" v-model="user.email" type="email" autocomplete="email" class="
              w-full
              py-4
              text-sm text-gray-900
              rounded-md
              pl-10
              border border-gray-300
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10
            " placeholder="Email address" required="" />
        </div>

        <div class="relative text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </span>
          <input id="password" name="password" v-model="user.password" type="password" autocomplete="current-password"
            required="" class="
              w-full
              py-4
              text-sm text-gray-900
              rounded-md
              pl-10
              border border-gray-300
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10
            " placeholder="Password" />
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-0 border-gray-300 rounded cursor-pointer" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900 cursor-pointer"> Remember me </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
          </div>
        </div>

        <div>
          <button @click="login" type="submit" :disabled="btnDisable"
            class="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg max-w-md">
            <svg v-show="buttonSpinner" width="20" height="20" fill="currentColor" class="mr-2 animate-spin"
              viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
              </path>
            </svg>
            Sign in
          </button>
          <!-- <button @click="login" type="submit" class="
              group
              relative
              w-full
              flex
              justify-center
              py-4
              px-6
              border border-transparent
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            ">
            Sign in
          </button> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import storage from '../utils/storage';
import checkUserRole from '../utils/checkUserRole';
export default {
  data() {
    return {
      buttonSpinner: false,
      btnDisable: false,
      user: {
        email: 'rusiru@gmail.com',
        password: 'rusiru1998'
      },
      is_remember: false,
    }
  },
  methods: {
    login() {
      this.buttonSpinner = true;
      this.btnDisable = true;
      this.$api.login(this.user).then(async (res) => {
        console.log('ressssssssssssssssssss', res);
        storage.setItem('userInfo', res);
        this.buttonSpinner = false;
        this.btnDisable = false;
        if (checkUserRole.getUserRole(res.data.data.user.role)) {
          this.$router.push('/dashboard').catch(() => { });
        }
      })
    },
  },
}
</script>


<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('/src/assets/backgroumd.jpg');
  background-size: cover;
  background-position: center;
}

.login-box {
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
