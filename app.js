const { createApp } = Vue;

createApp({

components:{
LoginView,
UserHome,
UserRiwayat,
UserBayar,
AdminView
}
  
template:`
<LoginView />
`
  
}).mount("#app");
