var planes = [
    {"plan":"plan01","capital" : 15000,"plazo": 30, "tasa": 0.15},
    {"plan":"plan02","capital" : 30000,"plazo": 180, "tasa": 0.10},
    {"plan":"plan03","capital" : 48500,"plazo": 60, "tasa": 0.23}
]
for ( var i=0 ; i<planes.length ; i++) {
    alert ("su tasa de interes de " + planes [i].plan + " es "+ ((planes[i].capital*planes[i].plazo*planes[i].tasa) / 100 ))
}