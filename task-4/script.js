const questions = document.querySelectorAll(".faq-question");

function closeQuestion(question) {
    question.classList.remove("active");
    question.nextElementSibling.classList.remove("show");
    question.querySelector("span").textContent = "+";
}

function openQuestion(question) {
    question.classList.add("active");
    question.nextElementSibling.classList.add("show");
    question.querySelector("span").textContent = "-";
}

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const wasOpen = question.classList.contains("active");

        questions.forEach(closeQuestion);

        if (!wasOpen) {
            openQuestion(question);
        }
    });
});