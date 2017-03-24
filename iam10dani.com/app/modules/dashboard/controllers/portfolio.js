/*==========================================================
    Author      : Ramarumo TL
    Date Created: 22 March 2017
    Description : Controller to handle Portfolio page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("PortfolioController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;


    vm.portfolioData = [
        {
            image: "AssetTracking",
            title: "AssetTracking website"
        },
        {
            image: "DVT",
            title: "Learnership Daily Register"
        }
    ];


    console.log("coming to Portfolio controller");


}]);

