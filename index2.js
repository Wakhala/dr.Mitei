let form = document.querySelector("form");
form.addEventListener('submit', (e)=> {
   e.preventDefault();
   document.querySelector("#sub").value="submitted...OK";
   let data = new FormData(form);
   fetch('https://script.google.com/macros/s/AKfycbyoh9G_kL4agc-wkq3BugZbisPz5x1K-iyQCxVWE4Nd-6UcD6EcoNMhxegvFVOTMYcH/exec', {
    method:"POST",
    body: data
   })
     .then(res => res.text())
     .then(data =>{
        document.querySelector("#msg").innerHTML= data;
        document.querySelector("#sub").value="submitted";
     });
})
