<template>
    <div class="sidenav">
    <router-link class="link" to="/home">DashBoard</router-link>
    <a href="#">Components</a>
    <a href="#">Value</a>
    <a href="#">Report</a>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1; 
  top: 0;
  left: 0;
  background-color: gray;
  overflow-x: hidden; 
  margin-top: 4%;
  transition: 0.5s;
}
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 18px;
  color: white;
  display: block;
  transition: 0.3s;
}
.sidenav a:hover {
  color: black;
  text-decoration: none;
}
</style>