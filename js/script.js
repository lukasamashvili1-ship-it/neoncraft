const burger=document.getElementById("burger"),
nav=document.getElementById("nav-menu"),
header=document.getElementById("header"),
topBtn=document.getElementById("topBtn"),
posts=document.getElementById("posts-container"),
cookie=document.getElementById("cookie-banner"),
accept=document.getElementById("accept-cookies"),
form=document.getElementById("contactForm");

// burger menu
if(burger){
burger.onclick=()=>nav.classList.toggle("active")
}

// header scroll
window.onscroll=()=>{
if(header){
header.classList.toggle("active",window.scrollY>50)
}
}

// scroll to top
if(topBtn){
topBtn.onclick=()=>{
window.scrollTo({top:0,behavior:"smooth"})
}
}

// fetch posts
if(posts){
fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
.then(r=>r.json())
.then(d=>{
d.forEach(p=>{
posts.innerHTML+=`<div class="post"><h3>${p.title}</h3><p>${p.body}</p></div>`
})
})
}

// cookies localStorage
if(cookie){
if(localStorage.getItem("cookiesAccepted")){
cookie.style.display="none"
}

if(accept){
accept.onclick=()=>{
localStorage.setItem("cookiesAccepted","true")
cookie.style.display="none"
}
}
}

// form validation
if(form){
const name=document.getElementById("name"),
email=document.getElementById("email"),
password=document.getElementById("password"),
message=document.getElementById("message"),
error=document.getElementById("error"),
toggle=document.getElementById("togglePassword");

if(toggle){
toggle.onclick=()=>{
password.type=password.type==="password"?"text":"password";
toggle.textContent=password.type==="password"?"Show":"Hide"
}
}

form.onsubmit=(e)=>{
e.preventDefault()

let emailR=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
let passR=/^(?=.*[A-Z])(?=.*[0-9]).{6,}$/

if(!name.value||!email.value||!password.value||!message.value){
error.textContent="All fields are required!"
return
}

if(!emailR.test(email.value)){
error.textContent="Invalid email!"
return
}

if(!passR.test(password.value)){
error.textContent="Password must have 1 uppercase and number!"
return
}

error.style.color="lightgreen"
error.textContent="Message sent successfully!"
form.reset()
}
}
