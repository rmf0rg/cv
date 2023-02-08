var variable1, variable2, operand, resultado;
        var pantalla = document.getElementById("screen");
        var dispSumar=document.getElementById("dispSumar");
        var dispRestar=document.getElementById("dispRestar");
        var dispMult=document.getElementById("dispMult");
        var dispDivid=document.getElementById("dispDivid");
        var opDisplay=document.getElementById("opDisplay");
        pantalla.value = "";
            variable1 = 0;
            variable2 = 0;
            operand = "";
            resultado = 0;
        function writeNumber(numeroBoton) {
            var escribir;
            escribir = pantalla.value + numeroBoton;
            pantalla.value = escribir;
        }
        function vaciarCampo() {
            pantalla.value = "";
        }
        function resetear() {
            pantalla.value = "";
            variable1 = 0;
            variable2 = 0;
            operand = "";
            resultado = 0;
            dispSumar.style.color="rgb(202, 202, 202)";
            dispRestar.style.color="rgb(202, 202, 202)";
            dispMult.style.color="rgb(202, 202, 202)";
            dispDivid.style.color="rgb(202, 202, 202)";
        }
        function sumar() {
            dispSumar.style.color="gray";
            dispRestar.style.color="rgb(202, 202, 202)";
            dispMult.style.color="rgb(202, 202, 202)";
            dispDivid.style.color="rgb(202, 202, 202)";
            if (variable1!=0){
                variable2 = parseFloat(pantalla.value);
                if (operand == "+") {
                variable1 = variable1 + variable2;
            }
            if (operand == "-") {
                variable1 = variable1 - variable2;
            }
            if (operand == "*") {
                variable1 = variable1 * variable2;
            }
            if (operand == "/") {
                variable1 = variable1 / variable2;
            }
            }
            else {
            variable1 = parseFloat(pantalla.value);
        }
            pantalla.value = "";
            operand = "+"
        }
        function restar() {
            dispSumar.style.color="rgb(202, 202, 202)";
            dispRestar.style.color="gray";
            dispMult.style.color="rgb(202, 202, 202)";
            dispDivid.style.color="rgb(202, 202, 202)";
            if (variable1!=0){
                variable2 = parseFloat(pantalla.value);
                if (operand == "+") {
                variable1 = variable1 + variable2;
            }
            if (operand == "-") {
                variable1 = variable1 - variable2;
            }
            if (operand == "*") {
                variable1 = variable1 * variable2;
            }
            if (operand == "/") {
                variable1 = variable1 / variable2;
            }
            }
            else {
            variable1 = parseFloat(pantalla.value);
        }
            pantalla.value = "";
            operand = "-"
        }
        function multiplicar() {
            dispSumar.style.color="rgb(202, 202, 202)";
            dispRestar.style.color="rgb(202, 202, 202)";
            dispMult.style.color="gray";
            dispDivid.style.color="rgb(202, 202, 202)";
            if (variable1!=0){
                variable2 = parseFloat(pantalla.value);
                if (operand == "+") {
                variable1 = variable1 + variable2;
            }
            if (operand == "-") {
                variable1 = variable1 - variable2;
            }
            if (operand == "*") {
                variable1 = variable1 * variable2;
            }
            if (operand == "/") {
                variable1 = variable1 / variable2;
            }
            }
            else {
            variable1 = parseFloat(pantalla.value);
        }
            pantalla.value = "";
            operand = "*"
        }
        function dividir() {
            dispSumar.style.color="rgb(202, 202, 202)";
            dispRestar.style.color="rgb(202, 202, 202)";
            dispMult.style.color="rgb(202, 202, 202)";
            dispDivid.style.color="gray";
            if (variable1!=0){
                variable2 = parseFloat(pantalla.value);
                if (operand == "+") {
                variable1 = variable1 + variable2;
            }
            if (operand == "-") {
                variable1 = variable1 - variable2;
            }
            if (operand == "*") {
                variable1 = variable1 * variable2;
            }
            if (operand == "/") {
                variable1 = variable1 / variable2;
            }
            }
            else {
            variable1 = parseFloat(pantalla.value);
        }
            pantalla.value = "";
            operand = "/"
        }
        function calcular() {
            dispSumar.style.color="rgb(202, 202, 202)";
            dispRestar.style.color="rgb(202, 202, 202)";
            dispMult.style.color="rgb(202, 202, 202)";
            dispDivid.style.color="rgb(202, 202, 202)";
            variable2 = parseFloat(pantalla.value);
            if (operand == "+") {
                variable1 = variable1 + variable2;
            }
            if (operand == "-") {
                variable1 = variable1 - variable2;
            }
            if (operand == "*") {
                variable1 = variable1 * variable2;
            }
            if (operand == "/") {
                variable1 = variable1 / variable2;
            }
            else {
                pantalla.value = 0;
            }
            pantalla.value = variable1;
            variable1=0;
            variable2=0;
        }