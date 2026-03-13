const AdminView = {

props:["payments"],

template:`

<div class="p-4 space-y-4">

<h2 class="font-bold text-lg">
Verifikasi Pembayaran
</h2>

<div
v-for="p in payments"
:key="p.id"
class="bg-white p-4 rounded-xl border">

<div class="flex justify-between">

<div>

<p class="font-bold">
{{p.nama}}
</p>

<p class="text-xs text-gray-400">
{{p.bulan}} {{p.tahun}}
</p>

</div>

<p class="text-green-600 font-bold">
{{formatRp(p.nominal)}}
</p>

</div>

</div>

</div>

`

}
