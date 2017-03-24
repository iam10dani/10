/*==========================================================
    Author      : Ramarumo TL
    Date Created: 22 March 2017
    Description : Controller to handle Websites page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("WebsitesController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.websites = [
        {
            title: "DVT asset tracking",
            image: "AssetTracking",
            link:"https://thehive.aerobatic.io/login"
        },
        {
            title: " iam10dani",
            image: "iam10dani",
            link: "http://iam10dani.gq"
        }
    ];
    console.log("coming to Websites controller");

}]);

