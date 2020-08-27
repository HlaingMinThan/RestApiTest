

fetch('http://localhost:5000/api/users').then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
// console.log('start');