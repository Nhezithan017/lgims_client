<template>
   <div class="modal fade" id="usersModal" tabindex="-1" role="dialog" aria-labelledby="usersModal" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title h6 text-gray-900 font-weight-bold text-primary" id="exampleModalLabel"><i class="fas fa-fw fa-plus"></i>Create User</h6>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <form @submit.prevent="save(user)">
                    <div class="modal-body">
                                <div class="form-group">
                                    <label for="Name" class="form-label">Name</label>
                                   <base-input v-model="form.name"
                                        placeholder="Name"
                                        :form="form"
                                        field="name">
                                       </base-input>
                                </div>
                                <div class="form-group">
                                 <label for="Username" class="form-label">Username</label>
                                   <base-input  v-model="form.username"
                                        placeholder="Username"
                                        :form="form"
                                        field="username">
                                       </base-input>
                                </div>
                                   <template v-if="!isUpdate">
                                <div class="form-group">
                                 <label for="Password" class="form-label">Password</label>

                                  <base-input v-model="form.password"
                                        placeholder="Password"
                                        :form="form"
                                        inputType="password"
                                        field="password">
                                       </base-input>

                                </div>
                                 </template>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </form>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
  props:{
    user:{
      type: Object,
      required: true
    },
    isUpdate: {
      type: Boolean,
      default: false
    }
  },
    data() {
      return {
        form: this.$vform({
          username: '',
          name: '',
          password: ''
        })
      }
    },
    methods: {
      save(user){
        if(user.id){
          this.$axios.$put(`/${user.id}/user`, this.form)
                    .then(res => {
                      console.log(res)
                    })
                    .catch(e => console.log(e));
        }
      },
    },

}
</script>

<style>

</style>>
