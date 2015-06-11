/*global requirejs, amplify, console*/
requirejs(['../../src/js/paths','../utils'], function (paths, Utils) {

    'use strict';

    var FENIX_CDN = "//fenixapps.fao.org/repository",
        baseUrl = '../../src/js/';

    // replace placeholders and baseUrl
    paths = Utils.replacePlaceholders(paths, FENIX_CDN);
    paths.baseUrl = baseUrl;

    console.log(paths);

    requirejs.config(paths);

    requirejs(['fx-m-c/start', 'jquery', 'amplify'], function (MapCreator, $) {

        var mapCreator = new MapCreator();

        mapCreator.render({
            container: '.content',
            model: {}
        });

        // TODO: add map to existing map

        // TODO: add JOIN from catalog to the map
        amplify.subscribe('fx.component.map.ready', function () {
            //$.get("http://faostat3.fao.org/d3s2/v2/msd/resources/uid/UAE_CropProduction10?dsd=true&full=true&order=time", function (model) {
            //    console.log(model);
            //    mapCreator.addLayer(model)
            //})

            //$.get("../tests/dataset/FAOSTAT_QC.json", function (model) {
            //    mapCreator.addLayer(model);
            //    mapCreator.addCountryBoundaries()
            //})
            //
            $.get('http://fenix.fao.org/d3s_fenix/msd/resources/uid/CSTAT_Kenya_AreaHarvested_PrimaryCrops_GeoDistribution_2008?full=true&dsd=true', function (model) {
                mapCreator.addLayer(model);
                mapCreator.addCountryBoundaries();
            });

        });
    });

});
