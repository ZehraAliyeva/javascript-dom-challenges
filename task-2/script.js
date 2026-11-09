const message = document.querySelector("#message");
const counter = document.querySelector("#counter");
const remaining = document.querySelector("#remaining");
const clearBtn = document.querySelector("#clearBtn");
const progressBar = document.querySelector("#progressBar");
const MAX_LENGTH = 100;
function updateCounter() {
    if (message.value.length > MAX_LENGTH) {
        message.value = message.value.slice(0, MAX_LENGTH);
    }

    const length = message.value.length;

    counter.textContent = `${length} / ${MAX_LENGTH}`;
    remaining.textContent = `Remaining: ${MAX_LENGTH - length}`;
    progressBar.style.width = `${(length / MAX_LENGTH) * 100}%`;

    counter.classList.remove("warning", "danger");
    progressBar.classList.remove("warning", "danger");

    if (length >= MAX_LENGTH) {
        counter.classList.add("danger");
        progressBar.classList.add("danger");     
    } else if (length > 80) {
        counter.classList.add("warning");
        progressBar.classList.add("warning");    
    }
}

message.addEventListener("input", updateCounter);

clearBtn.addEventListener("click", () => {
    message.value = "";
    updateCounter();
});