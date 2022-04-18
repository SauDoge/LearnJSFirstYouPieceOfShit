let count_display = document.getElementById("count_display");
let count = 0;


function increment(){
    count++;
    console.log("Increment Clicked")
    count_display.innerText = count;
}

function decrement(){
    if (count !== 0){
        count--;
    }
    console.log("Decrement Clicked");
    count_display.innerText = count;
}

function reset(){
    count = 0;
    console.log("Reset Clicked");
    count_display.innerText = count;
}