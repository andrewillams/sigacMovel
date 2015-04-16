(function () {

    'use strict';

    var module = angular.module('app', ['onsen']);

//    module.controller('AppController', function ($scope, $data) {
    module.controller('AppController', function ($scope) {

        $scope.doSomething = function () {
            setTimeout(function () {
                alert('tappaed');
            }, 100);
        };

    });

    module.controller('DetailController', function ($scope, $data) {
//    module.controller('DetailController', function ($scope, $http) {
        console.log($data);
        $scope.item = $data.selectedItem;
//        $scope.item = $scope.selectedItem;
        console.log($scope);
    });

    module.controller('MasterController', function ($scope, $data,$http) {
//    module.controller('MasterController', function ($scope, $http) {

//        $scope.items = $data.items;
        $http.post('http://sigac/mobile/producao/')
                .success(function (retorno, status) {
                    $scope.items = retorno;
                }).
                error(function () {
                    console.log('Deu merda');
                });

        $scope.showDetail = function (index) {
//            var selectedItem = $data.items[index];
            var selectedItem = $scope.items[index];
            $data.selectedItem = selectedItem;
            console.log($data);
            $scope.ons.navigator.pushPage('detail.html', {title: selectedItem.title});
        };

//        $scope.showDetail = function (index) {
//            var selectedItem = $scope.items[index];
//            $scope.selectedItem = selectedItem;
//            console.log($scope);
//            $scope.ons.navigator.pushPage('detail.html', {title: selectedItem.status});
//        };
    });

    module.factory('$data', function () {

        var data = {};
        
        data.selectedItem = [];
////        
//        
//        //retorno = 
//        $http.post('http://sigac/mobile/producao/')
//                .success(function (retorno, status) {
//                    data.items = retorno;
//                    console.log(retorno);
//                    console.log(data.items);
////                    return retorno;
//                }).
//                error(function () {
//                    console.log('Deu merda');
//                });
//
//        /*
//         data.items = [
//         {
//         title: 'Aprovado',
//         valor: 'R$ ' + '1.600,00',
//         porcentagem: '80',
//         cor: 'blue',
//         },
//         {
//         title: 'Reprovado',
//         valor: 'R$ ' + '300,00',
//         porcentagem: '15',
//         cor: 'red',
//         },,
//         {
//         title: 'Cancelado',
//         valor: 'R$ ' + '100,00',
//         porcentagem: '5',
//         cor: 'orange',
//         }, ]/*
//         {
//         title: 'Yet Another Item Title',
//         label: '1day ago',
//         desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
//         },
//         {
//         title: 'Yet Another Item Title',
//         label: '1day ago',
//         desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
//         }
//         ];*/
//
//        console.log(data);
//        console.log(data.items);
//
        return data;
    });
})();

   
                      