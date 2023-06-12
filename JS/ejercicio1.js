

        var costoFijo = prompt("ingrese su costo fijo")
        var venta = prompt("ingrese su precio de venta")
        var costoVar = prompt("ingrese su costo variable")
        var resultado = costoFijo /  (venta - costoVar); 
        alert( "el resultado de su operacion es " + resultado )
        
        if (costoFijo>100) {
            alert("Su costo fijo es muy alto, es mayor a 100")
        } else {
            alert("Su costo fijo es bajo. Excelente!")
        }
