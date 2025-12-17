document.addEventListener("DOMContentLoaded", () => {

    const btn_checkTotal = document.getElementById("check_total");

    const nodChecks = document.querySelectorAll(".proyecto input[type='checkbox']");

    btn_checkTotal.addEventListener("change", () => {
      
        nodChecks.forEach((check,index) => {
            setTimeout(() => {
                check.checked = btn_checkTotal.checked;
            }, index * 300);
        });
    });
});