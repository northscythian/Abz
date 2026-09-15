document.getElementById("year").textContent=new Date().getFullYear();
const b=document.querySelector(".hamb"),n=document.querySelector(".links");
b.addEventListener("click",()=>{const o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});
document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>n.classList.remove("open")));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
window.addEventListener("scroll",()=>{const d=document.documentElement,s=d.scrollTop/(d.scrollHeight-d.clientHeight)*100;document.querySelector(".progress").style.width=s+"%"});
