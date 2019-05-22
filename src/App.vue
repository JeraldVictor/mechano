<template>
<div class="">
  <template v-if="$route.path != '/' ">
     <nav>
      <div class="row">
        <div class="col menu" :class="{menuAct : side}"><i class="fa fa-bars" @click="side = !side"></i></div>
        <div class="col text-center">Mechano Valves</div>
        <div class="col text-right">
          <router-link class="link" to="/">Logout</router-link>
        </div>
      </div>
    </nav>
    <side-nav :class="{ sideAct : side ,  sideNrm : !side}"/>
  </template>
  <div @click="side = !side">
    <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp" appear mode="out-in" >
      <router-view></router-view>
    </transition>
  </div>
</div>
</template>

<script>
import login from './components/login'
import home from './components/home'
import sideNav from './components/sideBar'
export default {
  name: 'app',
  data() {
    return {
      side :false
    }
  },
  components:{
    login,
    home,
    'side-nav':sideNav
  }
}
</script>

<style>
.sideAct {
  width:200px;
}
.sideNrm{
  width: 0px;
}
nav{
  background: gray;
  padding: 20px;
  color: white;
}
.menu{
  margin-left: 10px;
  transition: 0.4s;
}
.menuAct{
  margin-left: 10%;
  margin-right: -9%;
  transition: 0.4s;
}
.link{
  color:white;
  text-decoration: none;
}
.link:hover {
  color:black;
  text-decoration: none;
}
</style>
