function gerar(){
    var numero = document.getElementById("num")
    var tabuada = document.getElementById("seltab")
    c = 1
    tabuada.innerHTML = ''
    for(var num = Number(numero.value); c < 11; c++){
        item = document.createElement("option")
        item.text = `${num} x ${c} = ${num * c}`
        tabuada.appendChild(item)
    }
}