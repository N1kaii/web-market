'use strict'

const catalog = document.getElementById("catalog")

fetch("./data/products.json").then( uploadProducts )

function uploadProducts(data){
    data.json().then( getProducts )
}

function getProducts(data){
    for(let guitarName in data){
        const guitarData = data[guitarName]
        const guitarCard = getProductCard(guitarName, guitarData)
        catalog.append(guitarCard)
    }
}
