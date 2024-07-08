
//  document.addEventListener('');

document.addEventListener("mousemove" , function(e) {
    // console.log(e.pageX , e.pageY);
    // rgb (0 , 0 , 0)
    // const r = e.pageX * 255 /window.innerWidth
    Math.round(e.pageX * 255 / window.innerWidth);
    const r = Math.round(e.pageX * 255 / window.innerWidth) ;
    // console.log(r);
    const b = Math.round(e.pageY * 255 / window.innerHeight);
    // console.log(b); 
    console.log(r , 0 , b);
    // "rgb(r , 0 , b)"
    const color = `rgb(${r} , 0 , ${b})`
    document.body.style.backgroundColor = color ;
    console.log(color);

})

// Window.innerWidth
// Window.innerHeight
// rgb(0 ,0 ,0) --> rgb(255, 255 , 255);
