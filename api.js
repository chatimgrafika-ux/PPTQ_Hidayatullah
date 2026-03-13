const API_URL="https://script.google.com/macros/s/AKfycbxWbxxLd4wDJ13x9LnZuLpjHPMHAymK3rxeHSE6c350t6wjH35-cht2SFfubzanB426Hg/exec";

async function execute(action,payload){

const res=await fetch(`${API_URL}?action=${action}`,{
method:'POST',
body:JSON.stringify(payload)
});

return await res.json();
}
