(function () {

    'use strict';

    var module = angular.module('app', ['onsen']);

    module.controller('AppController', function ($scope) {

        $scope.doSomething = function () {
            setTimeout(function () {
                alert('tappaed');
            }, 100);
        };

    });

    module.controller('DetailController', function ($scope, $data) {
        $scope.item = $data.selectedItem;
    });

    module.controller('MasterController', function ($scope, $data,$http) {

        //$http.post('https://www.sigacbr.com.br/mobile/producao/')
        $http.post('http://sigac/mobile/producao/')
                .success(function (retorno, status) {
                    $scope.items = retorno;
                }).
                error(function () {
                    console.log('Deu merda');
                });

        $scope.showDetail = function (index) {

            var selectedItem = $scope.items[index];
            $data.selectedItem = selectedItem;
            $scope.ons.navigator.pushPage('detail.html', {title: selectedItem.title});
        };


    });

    module.factory('$data', function () {

        var data = {};
        
        data.selectedItem = [];

        return data;
    });
})();

   
                      