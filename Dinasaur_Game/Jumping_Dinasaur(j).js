let score=0;
cross=true
audio=new Audio('music.mp3');
audiogo=new Audio('gameover.mp3');
setTimeout(()=>{
    audio.play();
},800);

document.addEventListener('keydown',function(e){
    const key = e.code;
    //console.log(key);
    if(key=='ArrowUp'){
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino');
        },700)
    }
    else if(key=='ArrowRight'){
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX+112+"px";
    }
    else if((key=='ArrowLeft')){
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dinoX-112)+"px";
    }
})

setInterval(()=>{
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX=Math.abs(dx-ox);//Math.abs gives the absolute value
    offsetY=Math.abs(dy-oy);//Math.abs gives the absolute value

    //console.log(offsetX,offsetY);

    if(offsetX<73 && offsetY<52){
        gameOver.innerHTML="Game Over-Reload to play again";
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(()=>{
            audiogo.pause();
            audio.pause();
        },1000)
    }
    else if(offsetX<145 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000);
        setTimeout(()=>{
            aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur=aniDur-0.04;
            obstacle.style.animationDuration=newDur+'s';
            console.log(newDur);
        },500);
    }
},10);

function updateScore(score){
    scoreCont=document.querySelector('.scoreCont');
    scoreCont.innerHTML="Your Score : "+score;
}