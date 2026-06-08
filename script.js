const scenes=document.querySelectorAll(".scene");
const music=document.getElementById("music");

function show(i){
scenes.forEach(s=>s.classList.remove("active"));
scenes[i].classList.add("active");
}

function sleep(ms){return new Promise(r=>setTimeout(r,ms));}

window.addEventListener("click",()=>music.play(),{once:true});

/* background particles */
const canvas=document.getElementById("bg");
const ctx=canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;

let p=[];
for(let i=0;i<120;i++){
p.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";
for(let i of p){
ctx.beginPath();
ctx.arc(i.x,i.y,i.r,0,Math.PI*2);
ctx.fill();

i.y+=1;
if(i.y>canvas.height)i.y=0;
}
}
setInterval(draw,30);

/* typewriter */
async function type(text,el){
el.innerHTML="";
for(let i=0;i<text.length;i++){
el.innerHTML+=text[i];
await sleep(25);
}
}

/* FLOW */
async function start(){

show(0);
await sleep(2000);

show(1);
await type("Có thể hôm nay em hơi buồn một chút...",document.getElementById("t2"));
await sleep(2000);

show(2);
await type("Nhưng anh không muốn điều đó kéo dài đâu...",document.getElementById("t3"));
await sleep(2000);

show(3);
await type(`
Anh không muốn em buồn lâu hơn.

Anh chỉ muốn em nhẹ lòng lại.

Nếu có điều gì chưa tốt,
thì anh ở đây để bù lại ❤️
`,document.getElementById("letter"));

await sleep(2000);

/* QUESTION */
show(4);

/* CLICK FIXED */
document.getElementById("yesBtn").onclick=()=>{

show(5);
document.getElementById("result").innerHTML=`
✨ Vậy là anh yên tâm rồi ❤️<br><br>
Anh chỉ cần em cười thôi là đủ rồi.
`;

for(let i=0;i<60;i++){
let d=document.createElement("div");
d.innerHTML="❤️";
d.style.position="absolute";
d.style.left=Math.random()*innerWidth+"px";
d.style.top=Math.random()*innerHeight+"px";
document.body.appendChild(d);
setTimeout(()=>d.remove(),2000);
}
};

document.getElementById("noBtn").onclick=()=>{

show(5);
document.getElementById("result").innerHTML=`
🌧 Không sao đâu...<br><br>
Anh sẽ làm tiếp cho đến khi em cười 😊
`;

document.body.style.background="linear-gradient(#000,#111,#000)";
};

}

start();
