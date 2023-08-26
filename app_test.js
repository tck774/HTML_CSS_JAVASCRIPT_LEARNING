const change = () => {
    console.log("hi")
    const demo = document.getElementById("box")
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    demo.style.backgroundColor = `rgb(${r},${g},${b})`


    
    
}