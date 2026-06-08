const scenes=document.querySelectorAll(".scene");
const music=document.getElementById("music");

function show(i){
scenes.forEach(s=>s.classList.remove("active"));
scenes[i].classList.add("active");
}

function sleep(ms){return new Promise(r=>setTimeout(r,ms));}

window.addEventListener("click",()=>music.play(),{once:true});

/* 🔥 MOVING BACKGROUND PARTICLES */
const canvas=document.getElementById("bg");
const ctx=canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;

let particles=[];

for(let i=0;i<120;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
d:Math.random()*1.5
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="rgba(255,255,255,0.6)";

for(let p of particles){
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fill();

p.y+=p.d;
if(p.y>canvas.height){
p.y=0;
p.x=Math.random()*canvas.width;
}
}
}
setInterval(draw,30);

/* TYPE */
async function type(text,el){
el.innerHTML="";
for(let i=0;i<text.length;i++){
el.innerHTML+=text[i];
await sleep(25);
}
}

/* FLOW */
async function run(){

show(0);
await sleep(2500);

/* scene 2 */
show(1);
await type("Có thể hôm qua em hơi buồn một chút...",document.getElementById("t2"));
await sleep(2000);

/* scene 3 */
show(2);
await type("Nhưng anh không muốn điều đó làm em buồn lâu hơn...",document.getElementById("t3"));
await sleep(2000);

/* letter */
show(3);

await type(`
Anh không cần điều gì lớn lao.

Chỉ cần em thấy nhẹ hơn hôm qua một chút.

Nếu anh vô tình làm em buồn,
thì hôm nay anh muốn bù lại bằng tất cả sự dịu dàng.

Anh ở đây, không phải để giải thích…
mà để làm em vui lại ❤️
`,document.querySelector("#letter"));

await sleep(2500);

/* surprise */
show(4);
await sleep(2000);

/* question */
show(5);

document.getElementById("yes").onclick=()=>{
show(6);
document.getElementById("end").innerText="Vậy là đủ rồi ❤️ Anh chỉ cần em cười thôi.";
};

document.getElementById("no").onclick=()=>{
show(6);
document.getElementById("end").innerText="Không sao… anh sẽ làm tiếp cho đến khi em cười 😊";
};

}

run();
