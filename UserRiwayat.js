const UserRiwayat = {

props:["history"],

template:`

<div class="p-4 space-y-3">

<div
v-for="h in history"
:key="h.id"
class="bg-white p-4 rounded-xl border">

<div class="flex justify-between">

<div>
<p class="font-bold">{{h.bulan}} {{h.tahun}}</p>
<p class="text-xs text-gray-400">
{{formatDate(h.tanggal)}}
</p>
</div>

<p class="text-green-600 font-bold">
{{formatRp(h.nominal)}}
</p>

</div>

</div>

</div>

`

}
