createApp({

components:{
LoginView,
UserHome,
UserRiwayat,
UserBayar,
AdminView
}

}).mount("#app")
<div v-if="session">

<h2 class="p-4 font-bold">
{{session.nama}}
</h2>

</div>

</div>

`

}).mount("#app");
