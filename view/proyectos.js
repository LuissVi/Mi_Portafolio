document.addEventListener("DOMContentLoaded", () => {

    const btn_checkTotal = document.getElementById("check_total");

    const nodChecks = document.querySelectorAll(".proyecto input[type='checkbox']");

    const verTodos=document.querySelector('.verTodos');

    btn_checkTotal.addEventListener("change", () => {
      verTodos.classList.toggle('cambio');
        nodChecks.forEach((check,index) => {
            setTimeout(() => {
                check.checked = btn_checkTotal.checked;
            }, index * 300);
        });
    });
});