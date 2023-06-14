

var meses = [
    {"mes":"enero","ingreso" : 500,"egreso": 500},
    {"mes":"febrero","ingreso" : 2000,"egreso": 2000},
    {"mes":"marzo","ingreso" : 84683,"egreso": 2000},
    {"mes":"abril","ingreso" : 15000,"egreso": 1533},
    {"mes":"mayo","ingreso" : 1500,"egreso": 5400},
    {"mes":"junio","ingreso" : 43000,"egreso": 54000},
    {"mes":"julio","ingreso" : 43000,"egreso": 4500},
    {"mes":"agosto","ingreso" : 78000,"egreso": 7800},
    {"mes":"septiembre","ingreso" : 1800,"egreso": 95000},
    {"mes":"octubre","ingreso" : 48000,"egreso": 9400},
    {"mes":"noviembre","ingreso" : 35000,"egreso": 53000},
    {"mes":"diciembre","ingreso" : 3800,"egreso": 34000}
 ]
 for ( var i=0 ; i<meses.length ; i++) {
    
    var balance = (meses[i].ingreso - meses[i].egreso)

    if (balance < 0) {
        alert ("su balance de " + meses [i].mes + " es $"+ balance + ". Resultado =" + " -1")
    } else if (balance > 0) {
        alert ("su balance de " + meses [i].mes + " es $"+ balance + ". Resultado =" + " 1")
    } else if (balance == 0) {
        alert ("su balance de " + meses [i].mes + " es $"+ balance + ". Resultado =" + " 0")
    } 
}