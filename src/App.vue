<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
    import axios from "axios";
    import banner from "./components/banner/banner.vue";
    export default{
      data() { 
          return {
            seller:{}
          }   
      }
    }
    
</script>

<style>

</style>
