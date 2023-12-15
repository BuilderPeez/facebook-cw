const float = document.querySelectorAll(".float");
float.forEach(float => {
    float.addEventListener("click",() =>{
        float.classList.toggle("active");
    });
});