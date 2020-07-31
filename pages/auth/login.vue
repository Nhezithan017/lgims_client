<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-6 d-none d-lg-block bg-image">
                        </div>
                        <div class="col-lg-6">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Login</h1>
                                </div>
                                <form  class="user" @submit.prevent="submit">
                                 <alert-error :form="form" v-if="form.errors.has('message')">
                                   {{  form.errors.get('message') }}
                                </alert-error>
                                    <div class="form-group">
                                       <base-input v-model="form.username"
                                        placeholder="Username"
                                        :form="form"
                                        classType="form-control-user"
                                        field="username">
                                       </base-input>
                                    </div>

                                    <div class="form-group">
                                       <base-input v-model="form.password"
                                        placeholder="Password"
                                        classType="form-control-user"
                                        :form="form"
                                        inputType="password"
                                        field="password">
                                       </base-input>
                                    </div>

                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox small">
                                            <input type="checkbox" class="custom-control-input" name="remember" id="remember">
                                            <label class="custom-control-label" for="remember">Remember me</label>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <base-button :loading="form.busy">
                                          Login
                                        </base-button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  middleware: ['guest'],
  data(){
    return {
      form: this.$vform({
          username: '',
          password: ''
      })
    }
  },
  methods:{
    submit(){
      this.$auth.loginWith('local', {
          data: this.form
      })
      .then(res => {
            location.reload();
            this.$router.push('/dashboard');
      })
      .catch(e => {
        this.form.errors.set(e.response.data.errors);
      })
    }
  }

}
</script>
<style>
.bg-image{
    background-image: url('~assets/images/lgimsicon.png');
    background-size: auto;
    background-position: center;
    background-size: cover;
}
</style>
