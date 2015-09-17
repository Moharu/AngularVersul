var app = angular.module('app', []);   // estamos declarando o módulo (mesmo nome que no ng-app, no layout)

// Nosso primeiro controller
app.controller('mainController', function($scope){

        // Ao invés de usar ng-init, estamos atribuindo essas variáveis ao $scope
        $scope.costumers=[
            {name:'José', city: 'Novo Hamburgo'}, 
            {name:'Alfredo', city:'Sao Leopoldo'}, 
            {name:'Silva', city:'Porto Alegre'}
        ];

    });