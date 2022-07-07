const fetch = require('node-fetch')


const cripto = async() => {
    const url = 'https://api.coincap.io/v2/assets?limit=10';
    const moedas = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.data)
      .catch((e) => console.log(e));

    return moedas
}

const targetCoin = async (final) => {
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/${final}.json`;
    const moedas = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.brl)
      .catch((e) => console.log(e));

    return moedas
}

const convert = async () => {
    const a = [];
    try {
        const listCriptos = await cripto();
        const coinValue = await targetCoin('brl');
        // const coinsList = document.getElementById('coins-list');
        listCriptos.forEach(moeda => {
            // const newLi = document.createElement('li');
            // newLi.innerText = `${moeda.name} ${moeda.symbol} ${moeda.priceUsd * coinValue}`
            a.push(`${moeda.name} ${moeda.symbol} ${moeda.priceUsd * coinValue}`)
            // coinsList.appendChild(newLi);      
        });
    } catch (e) {
        console.log(e);
    }
    return a;
}

convert();

