function NumeroRandom(min, max) {
    
    min = Math.ceil(min);
    
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    let Dado = document.getElementById('dado').value;

    if(Dado.length <= 0) {alert('Digite Um Valor')}

    else{

        let res = document.querySelector('.res');

        res.innerText = NumeroRandom(0,Number(Dado));

    }
});

