const btn=document.getElementById("btn");
const img=document.getElementById("img");
const container=document.getElementById("breed-sel");
btn.addEventListener('click',()=>{
  let breedlist = container.value.toLowerCase().split(' ').reverse().join('/');
  fetch('https://dog.ceo/api/breed/'+breedlist+'/images/random')
 .then((res)=>{
   return res.json();
 })
 .then((data)=>
 {
  img.src=data.message;
 })
 .catch((err)=>{
  console.log("error")
 })
})
    function image(){
    fetch('https://dog.ceo/api/breeds/image/random')
   .then((res)=>{
      return res.json();
      })
   .then((data)=>{
   img.src=data.message;
  })
   .catch(error=>{
      console.log("something went wrong")
 })  
    }
 image();
container.addEventListener('click',()=>{
// let list=''

fetch('https://dog.ceo/api/breeds/list/all')
.then((res)=>{
     return res.json();
})
.then((data)=>{
    breed=data.message;
   for(let key in breed)
   {
      const opt = document.createElement('option');
     if(breed[key].length===0)
     {
     key=key[0].toUpperCase()+key.substring(1);
     opt.innerText=key;
     opt.value=key;
   //   list+=`<option value=${key}>${key}</option>`;
      }
       else
       {
         for(let sbreed of breed[key])
        {
           key=key[0].toUpperCase()+key.substring(1);  
           sbreed=sbreed[0].toUpperCase()+sbreed.substring(1); 
           opt.innerText = sbreed+" "+key;
           opt.value = sbreed+" "+key;
            // list+=`<option value=${sbreed+" "+key}>${sbreed+" "+key}</option>`;
         }
                }
                container.appendChild(opt);
     }
     
  })
 })
