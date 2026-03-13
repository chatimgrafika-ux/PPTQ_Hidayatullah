const {createApp,ref}=Vue;

createApp({

components:{
LoginView
},

setup(){

const session=ref(null);
const currentTab=ref("home");

function handleLogin(data){

session.value=data.user;

}

return{
session,
currentTab,
handleLogin
}

},

template:`

<div class="max-w-md mx-auto min-h-screen bg-white">

<LoginView
v-if="!session"
@login-success="handleLogin"
/>

<div v-if="session">

<h2 class="p-4 font-bold">
{{session.nama}}
</h2>

</div>

</div>

`

}).mount("#app");
