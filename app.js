//Color Generator
let para=document.getElementById("para")
function change() {
    let r=Math.floor(Math.random() * 257)
    let g=Math.floor(Math.random() * 257)
    let b=Math.floor(Math.random() * 257)
    document.body.style.backgroundColor=`rgb(${r}, ${g}, ${b})`
    para.innerText=`rgb(${r}, ${g}, ${b})`
}