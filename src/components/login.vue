<template>
  <div id="back">
    <div class="head margin-top">
      <h3 class="text-center">
        <span class="red">Mechano</span>
        <span class="white">Valves</span>
      </h3>
      <h5 class="text-center blue">© Dev</h5>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="main card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-center">Log In</h5>
              <div v-if="invalid" class="alert alert-danger text-center" role="alert">Incorrect User Id or Password</div>
              <form class="form-group" action="#">
                <div class="form-group input-group">
                  <input
                    type="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="User ID"
                    required
                    autofocus
                    v-model="userid"
                    :class="{'is-invalid':useridInvalid}"
                  >
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupPrepend3"><i class="fa fa-user"></i></span>
                  </div>
                  <div class="invalid-feedback">
                      Please Enter UserId
                    </div>
                </div>

                <div class="form-group input-group">
                  <input
                    type="password"
                    id="inputPassword"
                    class="form-control"
                    placeholder="Password"
                    required
                    v-model="pass"
                    :class="{'is-invalid':passInvalid}"
                  >
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupPrepend3"><i class="fa fa-lock"></i></span>
                  </div>
                   <div class="invalid-feedback">
                      Please Enter Password
                    </div>
                </div>
                <div class="input-group">
                  <button
                    class="btn btn-primary btn-block text-uppercase"
                    type="submit"
                    @click.prevent="cclick"
                  >Log In</button>
                  <div class="in-ico">
                    <i class="fa fa-key"></i>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <hr style="height:3px; border:none; color:white; background-color:white">
      <div class="text-center white">© Team Mechano All Rights received</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userid:'',
      pass:'',
      passInvalid:false,
      useridInvalid:false,
      invalid : false,
    }
  },
  methods: {
    cclick() {
      if(this.userid == ''){
        this.useridInvalid=true;
      }else if(this.pass== ''){
        this.passInvalid=true;
      }else {
        if(this.userid ==='admin' && this.pass=== 'admin'){
          this.$router.push('/dashboard')
        }else{
          this.invalid = true;
        }
        // alert(`user id ${this.userid} password ${this.pass}`);
        // this.userid=''
        // this.pass=''
        // this.passInvalid=false;
        // this.useridInvalid=false;
      }
    }
  }
};
</script>

<style scoped>
#back {
  background: #393939;
  height: 100vh;
}
.red {
  color: #dd5a43;
}
.white {
  color: white;
}
.blue {
  color: #478fca;
}
.main {
  border: 6px solid gray;
  background: white;
}
form {
  text-align: center;
  padding: 10%;
}
.in-ico {
  position: absolute;
  margin-left: 90%;
  height: 35px;
  display: flex;
  align-items: center;
}
.margin-top {
  padding-top: 2rem;
}
.fa-key {
  color: white;
  transform: rotate(130deg);
}
input{
-webkit-border-radius: 50px;
-moz-border-radius: 50px;
border-radius: 50px;
}
</style>
