<template>

        <!-- Page Wrapper -->
<div id="wrapper">
    <SideBar/>
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

        <!-- Main Content -->
        <div id="content">

            <!-- Topbar -->
              <Navigation/>
            <!-- End of Topbar -->

            <!-- Begin Page Content -->
            <div class="container-fluid">
               <Nuxt/>
            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
          <Footer/>
        <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

</div>

</template>

<script>
import Header from './partials/header';
import Footer from './partials/footer';
import SideBar from './partials/sidebar';
import Navigation from './partials/navigation';
export default {
  components: {
    Header,
    Footer,
    SideBar,
    Navigation
  }

}
</script>

<style>

</style>>
