var allData= JSON.parse(localStorage.getItem('rightdata'))

document.getElementById('welcome').innerHTML='Welcome '+allData.userName.charAt(0).toUpperCase()+allData.userName.slice(1)