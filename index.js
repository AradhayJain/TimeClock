const hourE1=document.getElementById("hours");
const minuteE1=document.getElementById("minutes");
const secondE1=document.getElementById("seconds");
const ampmE1=document.getElementById("AMPM");



function updateClock(){
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()

    let ampm='AM'


if(h>12){
    h=h-12;
    ampm='PM';
}

hourE1.innerText=h;
minuteE1.innerText=m;
secondE1.innerText=s;
ampmE1.innerText=ampm;

setTimeout(()=>{
    updateClock()
   
},1000)

}

updateClock()

const hq=document.getElementById("ha");
const mq=document.getElementById("ma");
const sq=document.getElementById("sa");

function newClock(){
    let date=new Date();

    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hrotation=30*hh+mm/2;
    let mrotation=6*mm;
    let srotation=6*ss;

    hq.style.transform=`rotate(${hrotation}deg)`;
    mq.style.transform=`rotate(${mrotation}deg)`;
    sq.style.transform=`rotate(${srotation}deg)`;
}

setInterval(newClock,1000)

newClock()
