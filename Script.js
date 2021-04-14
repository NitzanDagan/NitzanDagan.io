let pack1 = 0;
let pack2 = 0;
let pack3 = 0;
let sum6 = 0;
let sum12 = 0;
let sum24 = 0;
let totalAll = 0;

function calc(add, num) {
   
    if (add) {
        eval("pack" + num + "++");

        if (num == 1) {
            sum6 = pack1 * 2.5;
            document.getElementById("total6-sm").innerHTML = pack1;
            document.getElementById("total6-bg").innerHTML = pack1;
            document.getElementById("price6").innerHTML = sum6;
            document.getElementById("row1").style.visibility = "visible";
        }

        else if (num == 2) {
            sum12 = pack2 * 4.66;
            document.getElementById("total12-sm").innerHTML = pack2;
            document.getElementById("total12-bg").innerHTML = pack2;
            document.getElementById("price12").innerHTML = sum12;
            document.getElementById("row2").style.visibility = "visible";
        }

        else if (num == 3) {
            sum24 = pack3 * 9;
            document.getElementById("total24-sm").innerHTML = pack3;
            document.getElementById("total24-bg").innerHTML = pack3;
            document.getElementById("price24").innerHTML = sum24;
            document.getElementById("row3").style.visibility = "visible";
        }
    }
    else {
        if (eval("pack" + num) > 0) {
            eval("pack" + num + "--");

            if (num == 1) {
                sum6 = pack1 * 2.5;
                document.getElementById("total6-sm").innerHTML = pack1;
                document.getElementById("total6-bg").innerHTML = pack1;
                document.getElementById("price6").innerHTML = sum6;
                document.getElementById("row1").style.visibility = "visible";
            }

            else if (num == 2) {
                sum12 = pack2 * 4.66;
                document.getElementById("total12-sm").innerHTML = pack2;
                document.getElementById("total12-bg").innerHTML = pack2;
                document.getElementById("price12").innerHTML = sum12;
                document.getElementById("row2").style.visibility = "visible";
            }

            else if (num == 3) {
                sum24 = pack3 * 9;
                document.getElementById("total24-sm").innerHTML = pack3;
                document.getElementById("total24-bg").innerHTML = pack3;
                document.getElementById("price24").innerHTML = sum24;
                document.getElementById("row3").style.visibility = "visible";
            }
        }

        if (num == 1 && pack1 == 0) {
            document.getElementById("row1").style.visibility = "hidden";
        }
        if (num == 2 && pack2 == 0) {
            document.getElementById("row2").style.visibility = "hidden";
        }
        if (num == 3 && pack3 == 0) {
            document.getElementById("row3").style.visibility = "hidden";
        }
    }

    document.getElementById("spn" + num).innerHTML = eval("pack" + num);
    document.getElementById("spnAll").innerHTML = sum6 + sum12 + sum24;
    sessionStorage.setItem("quantity1", pack1);
    sessionStorage.setItem("quantity2", pack2);
    sessionStorage.setItem("quantity3", pack3);
}

function modal() {
    let modal = document.getElementById("popup-modal");
    let btn = document.getElementById("checkout");
    let span = document.getElementsByClassName("close")[0];

    if (validationform) {
        btn.onclick = function () {
            modal.style.display = "block";
            document.getElementById("message").innerHTML = sessionStorage.getItem("firstname") + " " + sessionStorage.getItem("lastname") + " you ordered <br>" +
                sessionStorage.getItem("quantity1") + " packages of 6 PACK bottles pack <br>" +
                sessionStorage.getItem("quantity2") + " packages of 12 PACK bottles pack <br>" +
                sessionStorage.getItem("quantity3") + " packages of 24 PACK bottles pack <br>" +
                "<b> Thank you!</b>";
        }
        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}

function validationform() {

    let inpObj = document.getElementById("billing-form");
    let namemessage = "Name shuold contain only letters between 2-70";
    let emailmessage = "Email is not valid";

    if (!inpObj.first_name.checkValidity()) {
        document.getElementById("firstname-error-message").innerHTML = namemessage;
       
    } else if (!inpObj.last_name.checkValidity()) {
        document.getElementById("lastname-error-message").innerHTML = namemessage;
       
    } else if (!inpObj.email.checkValidity()) {
        document.getElementById("email-error-message").innerHTML = emailmessage;
       
    }
    inpObj.checkValidity();
    if (inpObj.checkValidity()) {
        sessionStorage.setItem("lastname", inpObj.last_name.value);
        sessionStorage.setItem("firstname", inpObj.first_name.value);
        return true;
    }
} 




        
