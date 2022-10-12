const cursorElm = document.getElementById('cursor');

let tmrId = null;

addEventListener('mousemove', (eventData)=>{
    // if(tmrId !=null){
    //     clearTimeout(tmrId);
    //     tmrId = null;
    // }
    if(tmrId){ //truthy ,falsy
        clearTimeout(tmrId);
        tmrId = null;
    }
    cursorElm.style.opacity = 1;
    cursorElm.style.left = `${eventData.pageX}px`
    cursorElm.style.top = `${eventData.pageY}px`

    tmrId =  setTimeout(()=> {
        cursorElm.style.opacity = 0;
    }, 3000);
    
    
    
    //console.log(eventData.pageX, eventData.pageY);
    // console.log(eventData.screenX, eventData.screenY);
});

document.body.addEventListener('mouseleave', ()=>
{
    cursorElm.style.opacity = 0;
    

});
document.body.addEventListener('mouseenter', ()=>
{
    cursorElm.style.opacity = '1';
});

let x=0;

// const tmrId1 = setInterval(()=> {
//     console.log("Print this...!");
// }, 500);
// const btnStopTimer1 = document.querySelector('#btnStopTimer1');
// btnStopTimer1.addEventListener('click', () => clearInterval(tmrId1));

// const tmrId2 = setTimeout(()=> {
//     console.log("Bomb Blast...!");
// }, 5000);
// const btnStopTimer1 = document.querySelector('#btnStopTimer1');
// btnStopTimer1.addEventListener('click', () => {
//     clearTimeout(tmrId2);
//     console.log('Nishkreeya kala')});

// const tmrId2 = setTimeout(()=> {
//     cursorElm.style.opacity = 0;
// }, 3000);
// document.body.addEventListener('mousemove', ()=>{
//     clearTimeout(tmrId2);
//     // cursorElm.style.opacity = '1';
// });




