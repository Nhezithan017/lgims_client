<template>
  <div>
        <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="">
            <div class="sidebar-brand-icon">
            <img style="width: 40px; height: 40px; border-radius: 50%;" src=""/>
            </div>
            <div class="sidebar-brand-text mx-3">LGIMS</div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">
    <!-- Navigation Menu -->
         <!-- Divider -->
    <hr class="sidebar-divider">

<!-- Heading -->
<div class="sidebar-heading">
    Admin
</div>

<!-- Tools  -->
<li class="nav-item">
<a class="nav-link collapsed" href="" data-toggle="collapse" data-target="#toolsUtilities" aria-expanded="true" aria-controls="collapseUtilities">
<i class="fas fa-fw fa-wrench"></i>
  <span>Users</span>
</a>
<div id="toolsUtilities" class="collapse" data-parent="#accordionSidebar">
  <div class="bg-white py-2 collapse-inner rounded">
    <h6 class="collapse-header">Custom Utilities:</h6>
    <nuxt-link to="/users" class="collapse-item" href="">Add User</nuxt-link>
  </div>
</div>
</li>


<!-- Divider -->
<hr class="sidebar-divider d-none d-md-block">


        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

    </ul>
    <!-- End of Sidebar -->


  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
