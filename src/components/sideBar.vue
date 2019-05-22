<template>
    <div class="sidenav">
    <br>  
    <router-link class="home" to="/dashboard" active-class="active">DashBoard</router-link>
    <p class="heading">Components</p>
    <ul >
      <li><router-link to="/components/add" active-class="active">Add</router-link></li>
      <li><router-link to="/components/update" active-class="active">Update</router-link></li>
      <li><router-link to="/components/delete" active-class="active">Delete</router-link></li>
    </ul>
    <p class="heading">Value</p>
    <ul >
      <li><router-link to="/value/add" active-class="active">Add</router-link></li>
      <li><router-link to="/value/update" active-class="active">Update</router-link></li>
      <li><router-link to="/value/delete" active-class="active">Delete</router-link></li>
    </ul>
    <p class="heading">Report</p>
    <ul>
       <li><router-link to="/report/project" active-class="active">Project</router-link></li>
    </ul>
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
  background-color: #393939;
  overflow-x: hidden; 
  margin-top: 4%;
  transition: 0.5s;
}
.sidenav a{
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 18px;
  color: gray;
  display: block;
  transition: 0.3s;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0; 
  padding-left: 2rem;
}
li a ,.home{
  color: gray;
  display: block;
  width: 60px;
}
li a:hover ,.home:hover {
  color: white;
  text-decoration: none;
}

.heading{
  color:white;
  text-decoration: underline;
  padding: 8px 8px 0px 32px;
  font-size: 18px;
}
.active{
  color: black;
}
</style>