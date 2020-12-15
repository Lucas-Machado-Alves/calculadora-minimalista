alert("Seja Bem Vindo!")
/*Pega numero digitado eguarda na variavel*/
function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}

/*Mostrar resultado*/
function equal(){
    exp = document.form.textview.value;
    if(exp){
       document.form.textview.value = eval(exp);
    }
}

/*Limpar números*/
function c(){
    document.form.textview.value = "";
}

/*apagar numero um por um*/
function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}