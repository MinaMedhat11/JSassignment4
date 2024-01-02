email=document.getElementById('emailInput')
password=document.getElementById('passwordInput')

var usersData=[]
function login(){
    var userData={
        userEmail: email.value,
        userPassword: password.value,
    }
    usersData.push(userData)
    
    
    allInputsRequired()
}

function dateValidation(){
    var allData= JSON.parse(localStorage.getItem('user'))
    for(var i=0; i<allData.length; i++){
    if(allData[i].userEmail==email.value&&allData[i].userPassword==password.value)   {
            localStorage.setItem('rightdata',JSON.stringify(allData[i]))
            window.location.href = "../Home/index.html";
    }
        else{
            notFound()
        }
    }
    
}

function allInputsRequired(){
    if(email.value==''||password.value==''){
        document.getElementById('allinputsreq').classList.remove('d-none')

    }
    else{
        dateValidation()
    }
}
function notFound(){
    document.getElementById('notFound').classList.remove('d-none')
    document.getElementById('allinputsreq').classList.add('d-none')


}