var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('Data', ['$resource',
    function($resource) {
        return $resource('data/:dataFile.json', {}, {
            query: {method: 'GET', params: {dataFile: 'nav-bar'}, isArray: true}
        });
    }]);

appServices.factory('Home', ['$resource',
    function($resource) {
        return $resource('data/:dataFile.json', {}, {
            query: {method: 'GET', params: {dataFile: 'home'}}
        });
    }]);

appServices.factory('Brands', ['$resource',
    function($resource) {
        return $resource('data/:dataFile.json', {}, {
            query: {method: 'GET', params: {dataFile: 'brands'}, isArray: true}
        });
    }]);

appServices.factory('FamousBrands', ['$resource',
    function($resource) {
        return $resource('data/:dataFile.json', {}, {
            query: {method: 'GET', params: {dataFile: 'famous-brands'}, isArray: true}
        });
    }]);

appServices.factory('SaleOff', ['$resource',
    function($resource) {
        return $resource('data/:dataFile.json', {}, {
            query: {method: 'GET', params: {dataFile: 'sale-off'}, isArray: true}
        });
    }]);