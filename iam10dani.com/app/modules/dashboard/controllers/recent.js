/*==========================================================
    Author      : Ramarumo TL
    Date Created: 22 March 2017
    Description : Controller to handle Recent Projects page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("RecentController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.recents = [
      {
          id: 1,
          heading: "DVT",
          title: "Asset Tracking Application",
          description: "The main functions of the system is to keep track of the company assets(laptops, screen etc..)",
          image: "AssetTracking",
          theme: "warning",
          url:"fp360.us:830",
          roles: [
              {
                  theme: "success",
                  myRole:".Net Developer"
              },
              {
                  theme: "info",
                  myRole: "UI Development"
              },
              {
                  theme: "warning",
                  myRole: "Service Integration"
              },
              {
                  theme: "warning",
                  myRole: "Angular JS"
              },
              {
                  theme: "red",
                  myRole: "Java Script"
              },
              {
                  theme: "warning",
                  myRole: "C#"
              }
          ]
      }
    ];

    console.log("coming to Recent controller");

}]);

