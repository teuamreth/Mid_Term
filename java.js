var form = document.getElementById("form")
var message = []

form.addEventListener("click", function(e){

    e.preventDefault()

    var user = document.getElementById("username")
    var pass = document.getElementById("password")
    var error = document.getElementById("errormessage")

    if(user.value=="Marwin")
    {
        if(pass.value=="12345")
        {
            location="Profile.html"
        }
        else
        {
            message.push("Incorrect Password")
        }
    }
    else
    {
        message.push("Login fail")
    }

    error.innerText=message;

})



var click = document.getElementById("clickme")
const hid = document.getElementById("hide")
var b = document.getElementById("back")
var night = document.getElementById("nightmode")
var background_change = document.getElementById("bg-body")
var daymode = document.getElementById("daymode")
var label = document.getElementById("label1")
var label1 = document.getElementById("label2")

// const myTimeout = setTimeout(myGreeting, 3000)

// function myStopFunction() {
//   clearTimeout(myTimeout);
// }

click.onclick=function(){
    click.classList=("hide")
    b.classList=("back-open")
    myStopFunction()
}

hid.onclick=function(){

    b.classList=("hide")
    click.classList=("back-open")

}

night.onclick=function(){

    background_change.style.background="black"
    label.style.color="white"   
}

daymode.onclick=function(){
    background_change.style.background="white"
    label.style.color="black"
}