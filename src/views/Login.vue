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
          <button @click="login" type="submit" class="
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
          </button>
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
      user: {
        email: 'rusiru@gmail.com',
        password: 'rusiru1998'
      },
      is_remember: false,
    }
  },
  methods: {
    login() {
      this.$api.login(this.user).then(async (res) => {
        console.log('ressssssssssssssssssss', res);
        storage.setItem('userInfo', res);
        if (checkUserRole.getUserRole(res.data.data.user.role)) {
          this.$router.push('/dashboard')
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
