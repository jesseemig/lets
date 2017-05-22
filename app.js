angular.module("routingApp", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "spa/home/home.html",
            controler: "HomeController"
        })

    .when("/places", {
        templateUrl: "spa/places/places.html",
        controler: "placesController"
    })

    .when("/post", {
        templateUrl: "spa/post/post.html",
        controller: "postController"
    })

    .otherwise({
        redirectTo: "/home"
    });

}]);