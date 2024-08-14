const convertbutton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function async data (){

const data = esperar (esperar buscar ("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"))    
console.log(data)
}pegar (errar){
    console.error(errar)
}
dados()

function convertvalues() {
    const inputcurrencyValue = document.querySelector(".input-currency").value;
    const currencyValuetoconvert = document.querySelector(".currency-Value-to-convert");
    const currencyValuetoconverted = document.querySelector(".currency-value");

console.log(currencySelect)

    const dolarToday = 5.2
    const euroToday = 6.2
    

if(currencySelect == "dolar"){
    currencyValuetoconverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedavalue)

}
if(currencySelect.value == "euro"){

    currencyValuetoconverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputcurrencyValue/euroToday)

}

    currencyValuetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "curreny",
        currency: "BRL"
    })
        .format(inputcurrencyValue),

        currencyValuetoconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedavalue),



        convertbutton.addEventListener("click", convertvalues);
}

function changeCurrency(){
const currencyName = document.getElementById("currency-name")
const currencyImage = document.querySelector(".currency-img")


if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dolar americano"
}
if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
}

}

currencySelect.addEventListener("change")
convertbutton.addEventListener("click", convertValue)
