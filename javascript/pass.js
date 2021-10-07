const psField = document.querySelector(".form input[type='password']"),
toggleBtn = document.querySelector(".form .field i");

toggleBtn.onclick = () => {
    if(psField.type == "password"){
        psField.type = "text";
        toggleBtn.classList.add("active");
    }else{
        psField.type = "password";
        toggleBtn.classList.remove("active");
    }

}