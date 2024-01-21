<template>
    
    <div class="wrapper">
        <NavBar/>
        <!-- <div class="preloader flex-column justify-content-center align-items-center">
            <img class="animation__shake" src="/adminlte/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
        </div> -->
        <SideBar/>

        <div class="content-wrapper"><!-- conetnt-wrapper  por ver -->
            <router-view/>
        </div><!-- conetnt-wrapper  por ver -->

    <footer class="main-footer">
        <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
        All rights reserved.
        <div class="float-right d-none d-sm-inline-block">
            <b>Version</b> 3.2.0
        </div>
    </footer>

    <aside class="control-sidebar control-sidebar-dark">

    </aside>

    </div>
</template>
<script>
import NavBar from './inc/NavBar'
import SideBar from './inc/Sidebar'

 export default{
    components:{
        NavBar,
        SideBar
    }
 }
</script>