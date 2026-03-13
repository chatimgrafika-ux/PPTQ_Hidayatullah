const UserBayar = {

props:["user"],

data(){
return{

bulan:'',
nominal:0

}
},

template:`

<div class="p-4 space-y-4">

<select v-model="bulan" class="select select-bordered w-full">
<option>Januari</option>
<option>Februari</option>
<option>Maret</option>
</select>

<input
v-model="nominal"
class="input input-bordered w-full"
placeholder="Nominal">

<button
class="btn btn-success w-full"
@click="submit">

Kirim Pembayaran

</button>

</div>

`,

methods:{

submit(){

this.$emit("submit-bayar",{
bulan:this.bulan,
nominal:this.nominal
})

}

}

}
