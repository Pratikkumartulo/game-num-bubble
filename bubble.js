let select2=document.querySelector(".bubble");

function formation(){
    let bubble="";
    for(let i=1;i<=120;i++){
    let sc= Math.floor(Math.random()*10);
    bubble +=`<div class="bub">${sc}</div>`
}
let select2=document.querySelector(".bubble");
select2.innerHTML=bubble;

}

function hit(){
    let rn = Math.floor(Math.random()*10)
    document.querySelector("#hitno").textContent=rn;
    
}
scorenum=0;
let ti=document.querySelector("#timer");
let btn=document.querySelector("#startbtn");
let brn2=document.querySelector("#restartbtn")
btn.addEventListener("click",function(){
    select2.addEventListener("click",function(detail){
        console.log(detail.target.innerText);
        let comp=Number(detail.target.innerText);
        let quan=document.querySelector("#hitno").textContent;
        if (comp==quan){
            scorenum+=10;
            console.log(scorenum);
            document.querySelector("#lscore").innerText=scorenum;
            hit();
            formation();

        }else{
            let pg=document.querySelector("#playground");
            pg.style.backgroundColor="red";
            setTimeout(() => {
                pg.style.backgroundColor="white";
            }, 80);
    }});
    btn.style.display="none";
    // brn2.style.display="inline";
    let timerr=60;
    const inter=setInterval(function(){
        if(timerr>0){
            timerr--;
            ti.textContent=timerr;
        }else{
            clearInterval(inter);
            document.querySelector(".bubble").innerHTML=`<h1>Gameover</h1><h1> and your score is ${scorenum}</h1>`;
            document.querySelector("#hitno").textContent=0;
        }
    },1000)
});
// brn2.addEventListener("click",function(){
//     brn2.style.display="none";
//     btn.style.display="inline";
//     clearInterval(inter);
// })


formation();
hit();
    
