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
            newNode.querySelector(".js-title").setAttribute('data-url', post.url);
            newNode.querySelector(".js-title").onclick = showPost;

            document.querySelector(".js-news-section").appendChild(newNode);
        }
    });

function showPost(event) {
    var url = event.srcElement.getAttribute('data-url');
    fetch(`/post?url=${url}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            document.querySelector(".js-post-title").innerText = result.title;
            document.querySelector(".js-post-date").innerText = result.date;
            document.querySelector(".js-post-image").src = result.image;
            document.querySelector(".js-post-content").innerHTML = result.content;
            document.querySelector('.js-post-section').setAttribute('style', 'display: block;');
            document.querySelector('.js-post-section').scrollIntoView();
        });
}