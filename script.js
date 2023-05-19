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
const c = document.getElementById("c");
const punto = document.getElementById("punto");
const multiplicacion = document.getElementById("multiplicacion");
const resta = document.getElementById("resta");
const division = document.getElementById("division");
const suma = document.getElementById("suma");
const igual = document.getElementById("igual");
let calculo = "0";
let resultado = [];

const imprimir =() => {
    if(calculo.length < 18 || calculo.length === undefined){
    pantalla.textContent = calculo;
};}

ac.addEventListener("click",() => {
    calculo = "0";
    resultado = [];
    imprimir();
});
c.addEventListener("click",() => {
    calculo = calculo.slice(0,-1);
    imprimir();
})
punto.addEventListener("click",() => {
    if(calculo == "0"){
        return;
    }else{
        calculo = calculo + ".";
        imprimir();
    }
})

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
    calculo = "";
    imprimir();
})
resta.addEventListener("click", () => {
    if(calculo !== "0"){
    resultado.push(calculo);}
    resultado.push("-");
    calculo = "";
    imprimir();
})
division.addEventListener("click", () => {
    if(calculo !== "0"){
    resultado.push(calculo);}
    resultado.push("/");
    calculo = "";
    imprimir();
})
multiplicacion.addEventListener("click", () => {
    if(calculo !== "0"){
    resultado.push(calculo);}
    resultado.push("*");
    calculo = "";
    imprimir();
})
igual.addEventListener("click", () => {
    if(calculo !== "0" || calculo === undefined){
        resultado.push(calculo);
        if(resultado[1] == "+"){
            console.log("he entrado aqui")
            calculo = parseFloat(resultado[0]) + parseFloat(resultado[2]);
            imprimir();
            resultado = [];
            resultado.push(calculo);
            calculo = "0";
        }
        if(resultado[1] == "/"){
            calculo = parseFloat(resultado[0]) / parseFloat(resultado[2])
            imprimir();
            resultado = [];
            resultado.push(calculo);
            calculo = "0";
        }
        if(resultado[1] == "*"){
            calculo = parseFloat(resultado[0]) * parseFloat(resultado[2])
            imprimir();
            resultado = [];
            resultado.push(calculo);
            calculo = "0";
        }
        if(resultado[1] == "-"){
            calculo = parseFloat(resultado[0]) - parseFloat(resultado[2])
            imprimir();
            resultado = [];
            resultado.push(calculo);
            calculo = "0";
        }
    }
        
});


imprimir();