fetch('/dolar')
    .then(function (response) {
        return response.json();
    })
    .then(function (result) {
        document.getElementsByClassName("js-cotizacion-dolar")[0].innerText = result.dolar;
    });

fetch('/news')
    .then(function (response) {
        return response.json();
    })
    .then(function (result) {
        var template = document.getElementById('news-template');

        for (post of result) {
            newNode = document.importNode(template.content, true);

            newNode.querySelector(".js-post").setAttribute('style', 'background-image: url(\'' + post.image + '\');');
            newNode.querySelector(".js-title").innerText = post.title;
            newNode.querySelector(".js-title").href = post.url;
            
            document.querySelector(".js-news-section").appendChild(newNode);
        }
    });