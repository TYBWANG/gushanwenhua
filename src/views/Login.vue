<template>
    <div class="login-warp">
        <div class="ms-title"> 鼓山ERP </div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<<script>
export default {
  data(){
      return {
          ruleForm:{
              username:'',
              password:''
          },
          rules:{
              username:[{required:true,message:'请输入用户名',trigger:'blur'}],
              password:[{required:true,message:'请输入密码',trigger:'blur'}]
          }
      }
  },
  methods:{
      submitForm(formName){
this.$refs[formName].validate((valid)=>{
    if (valid) {
        this.$http.post('/aaa/Token',{
            ////api/Vat/GetVats
            grant_type: 'password',
            username: 'manager',//this.ruleForm.username,
            password: '56b0fbc82e5050909a1fbd10de711dbd'//this.ruleForm.password

            //  type: "Search",
            //  Parameter: {
            // //   Conditions: [{ FieldName: "Code", Operation: "EQUAL", ConditionValue: vatCode }]
            //  } 
        })
        .then(response=> {
        localStorage.setItem('ms-username',this.ruleForm.username)
        this.$router.push('/home')
        console.log(response)
        })
        .catch(error=>{
        console.log(error)
        })

    }
    else{
        console.log('error')
        return false
    }
})
      }
  }
}
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
}

.ms-title {
    position: absolute;
    top: 50%;
    width: 100%;
    margin-top: -230px;
    text-align: center;
    font-size: 30px;
    color: #fff;
}

.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 300px;
    height: 160px;
    margin: -150px 0 0 -190px;
    padding: 40px;
    border-radius: 5px;
    background: #fff;
}

.login-btn {
    text-align: center;
}

.login-btn button {
    width: 100%;
    height: 36px;
}
</style>


