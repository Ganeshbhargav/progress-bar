let barElement = document.querySelector(".bar");
let barContainer = document.querySelector(".bar-container");
let imgContainer = document.querySelector(".image");
let width=0;
let increaseWidthInterval;
function widthIncrease(){
    increaseWidthInterval = setInterval(()=>{
        console.log(width)
        width=width+10;
       barElement.style.width=width+"%";
       barElement.textContent="Loading "+width+"%";
       if(width>100){
        clearInterval(increaseWidthInterval)
        barElement.textContent="Successfully Loaded";;
        barContainer.style.display = "none";
        imgContainer.style.display="block";
       }
},500)
}
widthIncrease();
