let score=0;
let idCall;
function imageCall(){
    let err=true;
    const a=(Math.round(Math.random()*11))+1;
    document.getElementById(`block_${a}`).style.backgroundImage='linear-gradient(to right, rgba(245, 222, 179, 0.72),rgba(245, 222, 179, 0.72)),url("mole.webp")';
    setTimeout(()=>{
        document.getElementById(`block_${a}`).style.backgroundImage='none'
    },200);
    idCall=`block_${a}`;
}
const interval=setInterval(imageCall,600);

document.addEventListener('click',(e)=>{
    if(idCall==e.target.id){
        score++;
    }
    else{
        clearInterval(interval);
        document.getElementsByClassName('result')[0].style.display='block';
        document.getElementsByClassName('result_declare')[0].innerHTML=`Your Score: ${score}`;
    }
})
