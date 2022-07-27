
const onRegister = async (data) => {
try{
    const response= await fetch ('http://localhost:8080/api/auth/register',
    {method: "POST",
body:JSON.stringify(data),
headers:{
    'Content-Type':'application/json'
} })
const responseJson= await response.json()
return responseJson
} catch(err) {
    alert('error')
    console.log(err) }

}

document.querySelector('form').addEventListener('submit', async ( event ) =>{
    event.preventDefault()
const input={
    full_name: event.target.elements.fullName.value,
    email: event.target.elements.email.value,
    password: event.target.elements.password.value,
    repeatPassword: event.target.elements.repeatPassword.value

}
console.log("input fields", input, repeatPassword)
if (input.password !== input.repeatPassword) {
    alert ('incorrect password');
    return;
}

const userData = await onRegister(input)

if(userData?.db?.insertId){
    location.replace('../login/login.html')
}else{
    alert('Not Registered! ')
}

})



