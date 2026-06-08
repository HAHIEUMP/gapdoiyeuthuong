const scenes=document.querySelectorAll(".scene");
const music=document.getElementById("music");

function show(i){
scenes.forEach(s=>s.classList.remove("active"));
scenes[i].classList.add("active");
}

function sleep(ms){return new Promise(r=>setTimeout(r,ms));}

window.addEventListener("click",()=>music.play(),{once:true});

/* typewriter */
async function type(text,el){
el.innerHTML="";
for(let i=0;i<text.length;i++){
el.innerHTML+=text[i];
await sleep(25);
}
}

/* FLOW */
async function run(){

// 1 intro
show(0);
await sleep(2500);

// 2 photos
show(1);
document.getElementById("photos").innerHTML="❤️ 📸 ❤️ 📸 ❤️";
await sleep(2000);

// 3 soft talk
show(2);
await type("Có những lúc anh chưa làm tốt, nhưng anh luôn nghĩ về em...",document.getElementById("text3"));
await sleep(2500);

// 4 letter
show(3);
await type(`
Anh không cần điều gì quá lớn.

Chỉ cần em vui hơn hôm qua một chút.

Nếu anh làm em buồn,
thì hãy để anh dùng hôm nay để bù lại nhé.

Anh ở đây ❤️
`,document.getElementById("letter"));

await sleep(2500);

// 5 surprise
show(4);
for(let i=0;i<40;i++){
let c=document.createElement("div");
c.innerHTML="✨";
c.style.position="absolute";
c.style.left=Math.random()*window.innerWidth+"px";
c.style.top=Math.random()*window.innerHeight+"px";
document.body.appendChild(c);
setTimeout(()=>c.remove(),2000);
}

await sleep(2000);

// 6 choice
show(5);

document.getElementById("ok").onclick=()=>{
show(6);
document.getElementById("end").innerText="Vậy là đủ rồi ❤️ Anh chỉ cần em cười.";
};

document.getElementById("no").onclick=()=>{
show(6);
document.getElementById("end").innerText="Thế anh làm tiếp cho đến khi em cười 😤❤️";
};

}

run();
