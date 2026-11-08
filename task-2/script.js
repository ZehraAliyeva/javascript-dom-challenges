const message = document.querySelector("#message");
const counter = document.querySelector("#counter");
const remaining = document.querySelector("#remaining");
const clearBtn = document.querySelector("#clearBtn");
const Max_Length = 100;
function updateCounter(){
    if (message.value.length > Max_Length){
        message.value = message.value.slice(0, Max_Length);
    }
    const length = message.value.length;
    counter.textContent = `${length} / ${Max_Length}`;
    remaining.textContent = `Remaining:${Max_Length-length}`;
    
    counter.classList.remove("warning", "danger");

    if (length >= Max_Length){
        counter.classList.add("danger");
    } else if (length > 80){
        counter.classList.add("warning");
    } else {
        counter.classList.add("normal");
    }
}
message.addEventListener("input", updateCounter);
clearBtn.addEventListener("click",() => {
    message.value = "";
    updateCounter();
});

