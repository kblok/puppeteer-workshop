fetch('/dolar')
    .then(function (response) {
        return response.json();
    })
    .then(function (result) {
        document.getElementsByClassName("js-cotizacion-dolar")[0].innerText = result.dolar;
    });