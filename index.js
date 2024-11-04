// Your code goes here
document.addEventListener(`DOMContentLoaded`, ()=>{
    document.getElementById("text").innerHTML = "This is really cool!"
    /*if (text.innerHTML === `JavaScript is so cool. It lets me add text to my page programmatically.`){
        text.innerHTML === `This is really cool!`
    } else {
        text.innerHTML === `JavaScript is so cool. It lets me add text to my page programmatically.`
    }*/
    text.target.textContent = (`This is really cool!`);
})