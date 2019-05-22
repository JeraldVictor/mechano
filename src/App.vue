<template>
<div class="">
  <template v-if="$route.path != '/' ">
     <nav>
      <div class="row">
        <div class="col menu" :class="{menuAct : side}">
          <div class="cont" @click="side = !side">
            <div class="bar1" :class="{changebar1:side}"></div>
            <div class="bar2" :class="{changebar2:side}"></div>
            <div class="bar3" :class="{changebar3:side}"></div>
          </div>
        </div>
        <div class="col text-center">Mechano Valves</div>
        <div class="col text-right">
          <router-link class="link" to="/" exact>Logout</router-link>
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
import sideNav from './components/sideBar'
export default {
  name: 'app',
  data() {
    return {
      side :false
    }
  },
  components:{
    'side-nav':sideNav
  }
}
</script>

<style>
body  {
  background-color: black;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.sideAct {
  width:200px;
}
.sideNrm{
  width: 0px;
}
nav{
  background: #393939;
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

.cont {
  display: inline-block;
  cursor: pointer;
}

.bar1, .bar2, .bar3 {
  width: 30px;
  height: 3px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
}

.changebar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.changebar2 {opacity: 0;}

.changebar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
</style>
