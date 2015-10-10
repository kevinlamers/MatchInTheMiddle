
    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute','firebase']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });



 
            
            
            
            
    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', ["$scope","$firebaseArray","$firebaseAuth",function($scope,$firebaseArray,$firebaseAuth) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
                 //CREATE A FIREBASE REFERENCE
        $scope.nameController = "myController";
        var ref = new Firebase("https://matchinthemiddle.firebaseio.com/5616366f3f99038249723fc4/matches");
        // GET MESSAGES AS AN ARRAY
        $scope.matches = $firebaseArray(ref);
        
        
          // login with Facebook
          var auth = $firebaseAuth(ref); auth.$authWithOAuthPopup("facebook").then(function(authData) {
            console.log("Logged in as:", authData.uid);
          }).catch(function(error) {
            console.log("Authentication failed:", error);
          });
    }]);

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });