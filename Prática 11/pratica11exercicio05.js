
var idade = parseInt(document.getElementById("input1").value);

    if(idade<18){
        document.getElementsById("input2").disabled = true;
    }
    else{
        document.getElementsById("input2").disabled = false;
    }
