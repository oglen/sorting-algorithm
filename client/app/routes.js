/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'angular'
], function () {

    angular.module(APP_NAME + '.routes', [
            APP_NAME + '.constants'
    ])
        .config([
            '$stateProvider',
            '$urlRouterProvider',
            'ALGORITHMS',
            function ($stateProvider, $urlRouterProvider, ALGORITHMS) {

                $urlRouterProvider.otherwise('/' + ALGORITHMS[0].key);

                ALGORITHMS.reduce(function ($stateProvider, algorithm) {
                    return $stateProvider
                        .state(algorithm.key, {
                            url: '/' + algorithm.key,
                            views: {
                                'code': {
                                    templateUrl: 'app/partials/' + algorithm.key + '.html',
                                    controller: ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
                                        console.log($stateParams);
                                    }]
                                },
                                'canvas': {
                                    templateUrl: 'app/partials/' + algorithm.key + '.html',
                                    controller: ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
                                        console.log($stateParams);
                                    }]
                                }
                            }
                        })
                }, $stateProvider);

//                ALGORITHMS.reduce(function ($stateProvider, algorithm) {
//                    return $stateProvider
////                        .state(algorithm.key, {
////                            url: '/' + algorithm.key,
////                            templateUrl: 'app/views/' + algorithm.key + '.html',
////                            controller: ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
//////                                console.log($stateParams)
////                            }]
////                        })
//                        .state('algorithm.' + algorithm.key + '.delay', {
//                            url: '/:time',
//                            views: {
//                                templateUrl: 'app/views/' + algorithm.key + '.html',
//                                controller: ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
//                                    console.log($stateParams.time)
//                                }]
//                            }
//                        });
//                }, $stateProvider);

//                $stateProvider
//                    .state('state1', {
//                        url: "/state1",
//                        templateUrl: "partials/state1.html"
//                    })
//                    .state('state1.list', {
//                        url: "/list",
//                        templateUrl: "partials/state1.list.html",
//                        controller: function ($scope) {
//                            $scope.items = ["A", "List", "Of", "Items"];
//                        }
//                    })
//                    .state('state2', {
//                        url: "/state2",
//                        templateUrl: "partials/state2.html"
//                    })
//                    .state('state2.list', {
//                        url: "/list",
//                        templateUrl: "partials/state2.list.html",
//                        controller: function ($scope) {
//                            $scope.things = ["A", "Set", "Of", "Things"];
//                        }
//                    });
            }]);
});

