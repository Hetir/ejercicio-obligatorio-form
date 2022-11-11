    function calculoParcial(){    
    let cant = document.getElementById("cantidad").value;
    let descuento = document.getElementById("categoria").value;
    let resultado =  cant * ((descuento/100) * 200);
   // console.log(document.getElementById("total").value + resultado);
   document.getElementById("total").value = document.getElementById("total").value + resultado;
  }
