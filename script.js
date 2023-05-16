const pantalla = document.getElementById("pantalla");
const b1 = document.getElementById("1");
const b2 = document.getElementById("2");
const b3 = document.getElementById("3");
const b4 = document.getElementById("4");
const b5 = document.getElementById("5"); 
const b6 = document.getElementById("6");
const b7 = document.getElementById("7");
const b8 = document.getElementById("8");
const b9 = document.getElementById("9");
const b0 = document.getElementById("0");
const ac = document.getElementById("ac");
const multiplicacion = document.getElementById("multiplicacion");
const resta = document.getElementById("resta");
const division = document.getElementById("division");
const suma = document.getElementById("suma");
const igual = document.getElementById("igual");
let calculo = "0";
let resultado = [];

const imprimir =() => {
    pantalla.textContent = calculo;
};

ac.addEventListener("click",() => {
    calculo = "0";
    resultado = [];
    imprimir();
});

b1.addEventListener("click", () => {
    if(calculo === "0"){
        calculo = "1";
    }else{
    calculo =  calculo + "1";
    };
    imprimir();
});

b2.addEventListener("click", () => {
    if(calculo === "0"){
        calculo = "2";
    }else{
    calculo =  calculo + "2";
    };
    imprimir();
});


b3.addEventListener("click", () => {
    if(calculo === "0"){
        calculo = "3";
    }else{
    calculo =  calculo + "3";
    };
    imprimir();
});


b4.addEventListener("click", () => {
    if(calculo === "0"){
        calculo = "4";
    }else{
    calculo =  calculo + "4";
    };
    imprimir();
});


b5.addEventListener("click", () => {
    if(calculo === "0"){
        calculo = "5";
    }else{
    calculo =  calculo + "5";
    };
    imprimir();
});


b6.addEventListener("click", () => {
    if(calculo === "0"){
        calculo = "6";
    }else{
    calculo =  calculo + "6";
    };
    imprimir();
});


b7.addEventListener("click", () => {
    if(calculo === "0"){
        calculo = "7";
    }else{
    calculo =  calculo + "7";
    };
    imprimir();
});


b8.addEventListener("click", () => {
    if(calculo === "0"){
        calculo = "8";
    }else{
    calculo =  calculo + "8";
    };
    imprimir();
});

b9.addEventListener("click", () => {
    if(calculo === "0"){
        calculo = "9";
    }else{
    calculo =  calculo + "9";
    };
    imprimir();
});

b0.addEventListener("click", () => {
    if(calculo === "0"){
        calculo = "0";
    }else{
    calculo =  calculo + "0";
    };
    imprimir();
});

suma.addEventListener("click", () => {
    if(calculo !== "0"){
    resultado.push(calculo);}
    resultado.push("+");
    calculo = "0";
    imprimir();
})
resta.addEventListener("click", () => {
    if(calculo !== "0"){
    resultado.push(calculo);}
    resultado.push("-");
    calculo = "0";
    imprimir();
})
division.addEventListener("click", () => {
    if(calculo !== "0"){
    resultado.push(calculo);}
    resultado.push("/");
    calculo = "0";
    imprimir();
})
multiplicacion.addEventListener("click", () => {
    if(calculo !== "0"){
    resultado.push(calculo);}
    resultado.push("*");
    calculo = "0";
    imprimir();
})
igual.addEventListener("click",() => {
    if(calculo !== "0" || calculo === undefined){
        resultado.push(calculo);
        if(resultado[1] == "+"){
            calculo = parseInt(resultado[0]) + parseInt(resultado[2])
            imprimir();
            resultado = [];
            resultado.push(calculo);
            calculo = "0";
        }
        if(resultado[1] == "/"){
            calculo = parseInt(resultado[0]) / parseInt(resultado[2])
            imprimir();
            resultado = [];
            resultado.push(calculo);
            calculo = "0";
        }
        if(resultado[1] == "*"){
            calculo = parseInt(resultado[0]) * parseInt(resultado[2])
            imprimir();
            resultado = [];
            resultado.push(calculo);
            calculo = "0";
        }
        if(resultado[1] == "-"){
            calculo = parseInt(resultado[0]) - parseInt(resultado[2])
            imprimir();
            resultado = [];
            resultado.push(calculo);
            calculo = "0";
        }
    }
        
});

imprimir();