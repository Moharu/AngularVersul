var app = angular.module('app', []);

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
        value = passedValue.replace(/^./, firstLetter); // this regex finds the first letter
        return value;
    };
});

app.controller('mainController', function($scope, Pay){

        Pay.findOrders().then(
            function(success){
                console.log(success);
                $scope.orders = success.data.hits.hits;
            },
            function(error){
                console.log("error");
            });

    });