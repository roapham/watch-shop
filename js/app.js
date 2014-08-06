var app = angular.module('watch shop', [
    'ngRoute',
    'appAnimations',
    'appControllers',
    'appServices',
    'appDirective'
]);


app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'partials/home.html',
                    controller: 'homeController'
                }).
                when('/sale_off', {
                    templateUrl: 'partials/sale-off.html',
                    controller: 'saleOffController'
                }).
                when('/brands', {
                    templateUrl: 'partials/all-brands.html',
                    controller: 'brandsController'
                }).
                when('/men-watches', {
                    templateUrl: 'partials/products.html',
                    controller: 'menWatchesController'
                }).
                when('/contact_us', {
                    templateUrl: 'partials/contact_us.html',
                    //controller: 'contactUsController'
                }).
                when('/watch_finder', {
                    templateUrl: 'partials/watch_finder.html',
                    controller: 'watchFinderController'
                }).
                when('/store_location', {
                    templateUrl: 'partials/store_location.html',
                    //controller: 'storeLocationController'
                }).
                when('/bestseller', {
                    templateUrl: 'partials/bestseller.html',
                    controller: 'bestsellerController'
                }).
                when('/product/:productId', {
                    templateUrl: 'partials/product_details.html',
                    controller: 'productDetailsController'
                }).
                when('/login', {
                    templateUrl: 'partials/login.html',
                    controller: 'loginController'
                }).
                when('/forgot_pass', {
                    templateUrl: 'partials/forgot_pass.html',
                    controller: 'forgotPassController'
                }).
                when('/register', {
                    templateUrl: 'partials/register.html',
                    controller: 'registerController'
                }).
                when('/brand/:brandName', {
                    templateUrl: 'partials/brand_details.html',
                    controller: 'brandDetailsController'
                }).
                otherwise({
//                    redirectTo: '/index'
                });
    }]);

//app.controller('indexController', function($scope) {
//    $scope.footer_intro = {title: "watches",
//        content: "Welcome to Watch Shop - the UK's No.1 online retailer of designer watches. As an official stockist of all brands, we offer watches for men, ladies and children from famous watch brands such as Michael Kors, Casio, Seiko, Citizen and Diesel. Watch Shop is the UK's most popular watch website, receiving more traffic than any other."};
//});

