const sign_inn = document.getElementById("Sign_in")
const sign_upp = document.getElementById("Sign_up")
const side_1 = document.getElementById("Sign_inbg");
const side_2 = document.getElementById("Sign_upbg")

function sign_in() {
    sign_inn.style.display='block'
    sign_upp.style.display='none'
    side_1.style.display='none'
    side_2.style.display='block'
}
function sign_up() {
    sign_inn.style.display='none'
    sign_upp.style.display='block'
    side_1.style.display='block'
    side_2.style.display='none'
}