const UserHome = {

props:["user","history"],

template:`

<div class="p-4 space-y-4">

<h3 class="font-bold text-lg">
Halo {{user.nama}}
</h3>

<div class="bg-white p-4 rounded-xl border">

<p class="text-sm text-gray-500">Kelas</p>
<p class="font-bold">{{user.kelas}}</p>

</div>

</div>

`

}
