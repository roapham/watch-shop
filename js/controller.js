var appControllers = angular.module('appControllers', []);

app.controller('floatController', function($scope) {
    $scope.scroll = 0;
});

app.controller('navController', ['$scope', 'Data', '$location',
    function($scope, Data, $location) {
        $scope.navs = Data.query();
        $scope.isActive = function(route) {
            return route === $location.path();
        };
    }
]);

app.controller('homeController', ['$scope', 'Home', 'Brands', 'FamousBrands', 'SaleOff',
    function($scope, Home, Brands, FamousBrands, SaleOff) {
        $scope.homes = Home.query();
        $scope.brands = Brands.query();
        $scope.famous_brands = FamousBrands.query();
        $scope.sale_off_products = SaleOff.query();
    }
]);

app.controller('saleOffController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('data/products.json').success(function(data) {
            $scope.products = data;
        });
    }
]);

app.controller('bestsellerController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('data/products.json').success(function(data) {
            $scope.products = data;
        });
    }
]);

app.controller('brandsController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('data/brands.json').success(function(data) {
            $scope.brands = data;
        });
    }
]);

app.controller('productDetailsController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('data/' + $routeParams.productId + '.json').success(function(data) {
            $scope.product = data;
        });
        $scope.go_back = function() {
            window.history.back();
        };
    }
]);

app.controller('watchFinderController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('data/watch-finder.json').success(function(data) {
            $scope.field = data;
        });
        $http.get('data/products.json').success(function(data) {
            $scope.products = data;
        });
    }
]);

app.controller('brandDetailsController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('data/' + $routeParams.brandName + '.json').success(function(data){
            $scope.data = data;
        });
    }
]);

app.controller('registerController', ['$scope', '$routeParams', '$http',
    function($scope) {
    }
]);