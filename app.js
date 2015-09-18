var app = angular.module('app', ['ngRoute']);

app.factory('Pay', function($http){
    var pay = {};
    pay.findOrders = function(){
        var req = {
            method: 'GET',
            url: 'http://elasticsearch.waferpie.com:9200/feeds/orders/_search',
        };
        return $http(req);
    }
    return pay;
});

app.filter('beautify', function(){
    return function beautifier(passedValue){
        passedValue = passedValue.toLowerCase();
        firstLetter = passedValue.charAt(0);
        firstLetter = firstLetter.toUpperCase();
        value = passedValue.replace(/^./, firstLetter);
        return value;
    };
});

app.controller('mainController', function($scope, Pay){

        Pay.findOrders().then(
            function(success){
                $scope.orders = success.data.hits.hits;
            },
            function(error){
                console.log("error");
            });

    });

app.config(function($routeProvider){
    //configuração do provedor de rotas
    $routeProvider
        .otherwise({
            templateUrl: 'fragments/home.html',
            controller: 'mainController'
        })
});