var app = angular.module('app', []);

app.controller('mainController', function($scope, $http){

        var req = {
            method: 'GET',
            url: 'http://elasticsearch.waferpie.com:9200/'
        }

        $http(req).then(
            function(data){
                console.log('Success!');
                console.log(data);
            },
            function(error){
                console.log('Error!');
                console.log(error);
            });

        $scope.costumers=[
            {name:'José', city: 'Novo Hamburgo'}, 
            {name:'Alfredo', city:'Sao Leopoldo'}, 
            {name:'Silva', city:'Porto Alegre'}
        ];

    });