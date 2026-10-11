/* ===========================================
   PREMIUM PORTFOLIO JAVASCRIPT
   Muhammad Anas Portfolio
=========================================== */

// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';

    }else{

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    }

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

});

});

// ===============================
// Sticky Navbar
// ===============================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

header.classList.toggle("sticky",window.scrollY>50);

});

// ===============================
// Active Navigation
// ===============================

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;
const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

// ===============================
// Typing Effect
// ===============================

const words=[
"Frontend Developer",
"HTML Developer",
"CSS Developer",
"JavaScript Learner",
"Bootstrap Developer"
];

let wordIndex=0;
let letterIndex=0;
let isDeleting=false;

const typing=document.querySelector(".typing-text");

function typeEffect(){

let currentWord=words[wordIndex];

if(!isDeleting){

typing.textContent=currentWord.substring(0,letterIndex++);

if(letterIndex>currentWord.length){

isDeleting=true;

setTimeout(typeEffect,1200);

return;

}

}else{

typing.textContent=currentWord.substring(0,letterIndex--);

if(letterIndex<0){

isDeleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(typeEffect,isDeleting?60:120);

}

typeEffect();

// ===============================
// Scroll Reveal Animation
// ===============================

const reveals=document.querySelectorAll(
".home-content,.image-box,.about-left,.about-right,.info-box,.skill-box,.project-card,.contact-left,.contact-right"
);

function reveal(){

reveals.forEach(item=>{

const windowHeight=window.innerHeight;

const revealTop=item.getBoundingClientRect().top;

if(revealTop<windowHeight-100){

item.style.opacity="1";
item.style.transform="translateY(0px)";

}

});

}

reveals.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(60px)";
item.style.transition=".8s ease";

});

window.addEventListener("scroll",reveal);

reveal();

// ===============================
// Contact Form
// ===============================

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Thank You Muhammad Anas! Your message has been sent successfully.");

form.reset();

});

// ===============================
// Smooth Button Animation
// ===============================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px) scale(1)";

});

});

// ===============================
// Scroll To Top Button
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#00abf0";
topBtn.style.color="#fff";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ===============================
// Console Message
// ===============================

console.log("%cMuhammad Anas Premium Portfolio Loaded Successfully 🚀",
"color:#00abf0;font-size:20px;font-weight:bold;");
