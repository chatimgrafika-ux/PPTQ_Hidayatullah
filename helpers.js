function formatRp(v){
return new Intl.NumberFormat('id-ID',{
style:'currency',
currency:'IDR',
minimumFractionDigits:0
}).format(v || 0);
}

function formatDate(s){
return new Date(s).toLocaleDateString(
'id-ID',
{
day:'2-digit',
month:'short',
year:'numeric',
hour:'2-digit',
minute:'2-digit'
});
}

function getThumbnailUrl(url){
if(!url) return '';

let id='';
const matchD=url.match(/\/d\/([a-zA-Z0-9_-]+)/);
const matchId=url.match(/id=([a-zA-Z0-9_-]+)/);

if(matchD) id=matchD[1];
else if(matchId) id=matchId[1];

return id ? `https://drive.google.com/thumbnail?id=${id}` : url;
}
