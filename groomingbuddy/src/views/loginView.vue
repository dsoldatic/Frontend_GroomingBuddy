<template>
  <section class="vh-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 text-black">
          <div class="px-5 ms-xl-4">
            <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style="color: #709085;"></i>
            <span class="h1 fw-bold mb-0"></span>
          </div>

          <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
            <form style="width: 23rem;" @submit.prevent="login">
              <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">LOGIN</h3>

              <div class="form-outline mb-4">
                <input type="email" id="form2Example18" class="form-control form-control-lg" v-model="email" />
                <label class="form-label" for="form2Example18">Email address</label>
              </div>

              <div class="form-outline mb-4">
                <input type="password" id="form2Example28" class="form-control form-control-lg" v-model="password" />
                <label class="form-label" for="form2Example28">Password</label>
              </div>

              <div class="pt-1 mb-4">
                <button class="btn btn-info btn-lg btn-block" type="submit">Login</button>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-muted"></a></p>
              <router-link to="/signup" v-slot="{ navigate }">
                <p>Don't have an account? <a @click="navigate" class="link-info">Sign up</a></p>
              </router-link>

              
            </form>
          </div>
        </div>

        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img src="@/assets/Little_white_dog.png"
            alt="Login image"
            class="w-50 h-50"
            style="object-fit: cover; object-position: bottom; margin-top: 390px; margin-left: 50px;">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
    
      console.log("Login button clicked");
      console.log("Email:", this.email);
      console.log("Password:", this.password);
    },
  },
};
</script>

<style>

</style>
