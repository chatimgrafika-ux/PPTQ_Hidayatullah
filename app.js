const { createApp } = Vue;

createApp({

components:{
LoginView,
UserHome,
UserRiwayat,
UserBayar,
AdminView
},   // ← koma penting

template:`
<LoginView />
`

}).mount("#app");
