var Name=document.getElementById('nameInput')
var email=document.getElementById('emailInput')
var password=document.getElementById('passwordInput')




var usersDate=[]
function getInputs() {
    var signupData={
        userName: Name.value,
        userEmail: email.value,
        userPassword: password.value,
        
        
    }
    if(checkNameInput(Name.value)&&checkEmailInput(email.value)&&checkPasswordInput(password.value)){

        usersDate.push(signupData)
        localStorage.setItem('user',JSON.stringify(usersDate))
        window.location.href = "../Login/index.html";
    }
else{
    allInputsRequired()
}


}

function checkNameInput(input){
    var nameRegex=/[a-z||A-Z].{3,}/
    
   return nameRegex.test(input)
    
}
function checkEmailInput(input){
    var emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return emailRegex.test(input)
}
function checkEmailInput(input){
    var emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return emailRegex.test(input)
}
function checkPasswordInput(input){
    var passwordRegex=/^[0-9||a-z||A-Z].{3,}/
    return passwordRegex.test(input)
}
function allInputsRequired(){
    if(email.value==''||password.value==''||Name.value==''){
        document.getElementById('allinputsreq').classList.remove('d-none')
    }
}