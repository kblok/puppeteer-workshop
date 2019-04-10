var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({
        title: 'Confortable y dinámica: así es la Nissan Frontier fabricada en Argentina',
        image: 'http://infobae-thumbnails.s3.amazonaws.com/04-04-2019/t_b189f96b24ea49b8aaff933097aaac83_name_Nissan_Frontier.jpg',
        date: '10 de abril de 2019',
        content: '<p class="element element-paragraph"> El segmento de las <i>pick-up</i> medianas es uno de los más movedizos en los últimos tiempos, y una de sus novedades fue la producción local de la <b>Nissan Frontier</b>, que reemplazó a la que se importaba de México. <b>Se fabrica en Córdoba en la planta de Renault en Santa Isabel</b>, que recibió una inversión de 600 millones de dólares por parte de Nissan, Renault y Mercedes-Benz. Por lo que las tres tendrán su propia <i>pick-up</i>, pero por el momento, la de la marca japonesa es la única que sale de las lineas de montaje en su versión denominada LE 4x4 AT.</p>'
    });
});

module.exports = router;
