const LoginView={
template:`

<div class="flex-1 flex flex-col justify-center px-8">

<h2 class="text-2xl font-bold text-center mb-6">
SPP Hidayatullah
</h2>

<input v-model="username" placeholder="Username" class="input input-bordered mb-3">

<input type="password" v-model="password" placeholder="Password" class="input input-bordered mb-4">

<button @click="login" class="btn btn-success w-full">
Masuk
</button>

</div>

`,

data(){
return{
username:'',
password:''
}
},

methods:{

async login(){

const res=await execute('doLogin',{
username:this.username,
password:this.password
})

if(res.status==="success"){
this.$emit("login-success",res)
}else{
alert(res.message)
}

}

}
}
