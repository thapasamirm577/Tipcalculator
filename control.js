let button = document.getElementById("calculate");
let showTips = document.querySelector(".showtips");
let wrongMessage = document.querySelector(".wrong");

let tip = document.getElementById("tip");
let n = document.getElementById("people");
let service = document.getElementById("service");
let wrongAa = document.getElementById("wrongAa");

button.addEventListener("click", function(){
    showTips.classList.remove("hide");
    calculation();
    setTimeout(function(){
        tip.value = " ";
        n.value = " ";
        service.value = " ";
        showTips.value = " ";
        showTips.classList.add("hide");
    },5000);
})

function calculation(){
    let totalAmout = parseFloat(tip.value);
    let nPerson= parseFloat(n.value);

    if(service.value === "5"){
        yourTip = Math.round(0.5 * totalAmout).toFixed(1);
    }
    else if(service.value === "2"){
        yourTip = (0.02 * totalAmout).toFixed(1);
    }
    else{
        yourTip = 0;
    }

    perAmount = Math.round(totalAmout / nPerson);
    if(isNaN(yourTip) || yourTip == ""){
        showTips.innerHTML = "Please! Input valid number";
        showTips.style.backgroundColor = "red";
    }
    else{
        showTips.innerHTML = `Total amount: $${totalAmout}<br> Your Tip: $${yourTip}<br> Each person gets: $${perAmount}`;
        let getAmount = showTips.innerHTML;
        return getAmount;
    }
}



    
