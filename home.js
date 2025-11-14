let home = document.querySelector("#home");
let payment = document.querySelector("#payment");
let contactUs = document.querySelector("#contactUs")
let contact = document.querySelector("#contact");
let about = document.querySelector("#about");
home.addEventListener("click",()=>{
    window.location.href = "home.html";
});
payment.addEventListener("click",()=>{
    window.location.href = "payment.html";
});
contactUs.addEventListener("click",()=>{
    window.location.href = "contactUs.html";
});
contact.addEventListener("click",()=>{
    window.location.href = "contactUs.html";
});
about.addEventListener("click",()=>{
    window.location.href = "aboutUs.html";
});