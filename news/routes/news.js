var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json([
        {
            title: 'Cayenne Coupé: cómo es la nueva carrocería del SUV de Porsche',
            image: 'https://www.infobae.com/new-resizer/6SSv23u2w2UhWuarkOXV4ApkwVo=/999x751/filters:quality(100)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FOXNSZAMYBACLGEBDQJBMCMLS4.jpg',
            url: 'post?url=https://www.infobae.com/autos/2019/03/27/cayenne-coupe-como-es-la-nueva-carroceria-del-suv-de-porsche/'
        },
        {
            title: 'De América del Sur para todo el mundo: así será la expansión global de uno de los autos más vendidos en la región',
            image: 'https://www.infobae.com/new-resizer/3mlGlo72xnOpECWmBKhFNT97D2w=/999x751/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/22142452/Chevrolet-Onix-esta-es-la-versio%E2%95%A0%C3%BCn-original-del-modelo-que-ahora-es-marca-global..jpg',
            url: 'post?url=https://www.infobae.com/autos/2019/03/25/de-america-del-sur-para-todo-el-mundo-asi-sera-la-expansion-global-de-uno-de-los-autos-mas-vendidos-en-la-region/'
        },
        {
            title: 'Cuáles son los lugares del planeta con mayor y menor contaminación de NO2',
            image: 'https://www.infobae.com/new-resizer/TxvPTBO_IONuFFxp-orrHmQsVj0=/999x751/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/05/24085814/contaminacion-emisiones-co2-1920-2.jpg',
            url: 'post?url=https://www.infobae.com/autos/2019/03/24/cuales-son-los-lugares-del-planeta-con-mayor-y-menor-contaminacion-de-no2/'
        },
        {
            title: 'Más de 1.600 peatones murieron en la Argentina durante el 2018',
            image: 'https://www.infobae.com/new-resizer/cL6WyT2gKamphvpXqOZxxP1MSKU=/999x751/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/08/16203929/shutterstock_141229813.jpg',
            url: 'post?url=https://www.infobae.com/autos/2019/03/23/mas-de-1-600-peatones-murieron-en-la-argentina-durante-el-2018/'
        }
    ]);
});

module.exports = router;
