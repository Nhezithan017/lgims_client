<template>
<div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary"><i class="fas fa-fw fa-user"></i> User</h6>
            </div>
            <div class="card-body">
            <div class="d-flex justify-content-between">
              <a class="btn btn-success mb-3" @click.prevent="isUpdating = false" data-toggle="modal" data-target="#usersModal" href=""><i class="fas fa-fw fa-plus-square"></i></a>
              <form  @submit.prevent="search" class="form-inline ml-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div class="input-group">
                        <input type="text" v-model="filters.q" name="search" id="search" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-primary rounded">
                                <span v-if="searching">
                                       <i class="fas fa-spinner fa-spin"></i>
                                </span>
                                <i class="fas fa-search fa-sm"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th width="5%">No</th>
                      <th>Username</th>
                      <th>Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(user, index) in users" :key="user.id">
                     <td>{{index + 1 }}</td>
                     <td>{{ user.username }}</td>
                     <td>{{ user.name }}</td>
                     <td>
                      <div class="flex justify-content-between">
                        <button @click.prevent="isUpdating = true" class="btn btn-sm btn-success" data-toggle="modal" data-target="#usersModal">
                         Edit
                        </button>
                        <base-users :isUpdate="isUpdating" :user="user"/>
                        <button class="btn btn-sm btn-danger">
                          Delete
                        </button>

                      </div>
                     </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>

<script>


export default {
  middleware: ['auth'],
  layout: 'main',
  data() {
    return {
      isUpdating: false,
      searching: false,
      filters: {
        q: ''
      }
    }
  },

  methods: {
    search(){
      this.searching = true;
      this.$axios.$get(`/search?${this.queryString}`)
                 .then(data => {
                   this.$store.commit('users/setUsers', data)
                 })
                 .catch(e => console.log(e))
                 .finally(() => this.searching = false);
    }
  },
 computed:{
   users(){
     return this.$store.getters['users/users'];
   },
  queryString(){
      return Object.keys(this.filters)
            .map(k => `${k}=${this.filters[k]}`)
            .join('&');
    },
 },
 beforeMount() {
   this.search()
 },
}
</script>

<style>

</style>
