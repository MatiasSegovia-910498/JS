var planes = [
    {"plan":"plan01","capital" : 15000,"plazo": 30, "tasa": 0.15},
    {"plan":"plan02","capital" : 30000,"plazo": 180, "tasa": 0.10},
    {"plan":"plan03","capital" : 48500,"plazo": 60, "tasa": 0.23}
]
var resultados = []

console.log(resultados)

resultados.push({"plan": planes[0].plan, "interesgenerado": ((planes[0].capital * planes[0].plazo *planes[0].tasa) / 100 )} );
resultados.push({"plan": planes[1].plan, "interesgenerado": ((planes[1].capital * planes[1].plazo *planes[1].tasa) / 100 )} );
resultados.push({"plan": planes[2].plan, "interesgenerado": ((planes[2].capital * planes[2].plazo *planes[2].tasa) / 100 )} );

console.log(resultados)

alert("el interes del mes " + resultados[0].plan + " es: " + resultados[0].interesgenerado)
alert("el interes del mes " + resultados[1].plan + " es: " + resultados[2].interesgenerado)
alert("el interes del mes " + resultados[2].plan + " es: " + resultados[2].interesgenerado)