/*==========================================================
    Author      : Ramarumo TL
    Date Created: 22 March 2017
    Description : Controller to handle Skills page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("SkillController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.skills = {};

    //development stack
    vm.skills.development = [

        {
            Software: "Angular JS",
            Percentage: "85",
            theme: "green",
            image: "angular"
        },
        {
            Software: "C#",
            Percentage: "83",
            theme: "purple",
            image: "c"
        },
        {
            Software: "Javascript",
            Percentage: "80",
            theme: "maroon",
            image: "javascript"
        },
        {
            Software: ".Net MVC",
            Percentage: "85",
            theme: "teal",
            image: ".net mvc"
        },
        {
            Software: "jQuery & AJAX",
            Percentage: "80",
            theme: "yellow",
            image: "jquery"
        }
    ];

    //Design Stack
    vm.skills.design = [
        {
            Software: "HTML 5",
            Percentage: "90",
            theme: "yellow",
            image: "html5"
        },
        {
            Software: "CSS 3",
            Percentage: "83",
            theme: "aqua",
            image: "css3"
        },
        {
            Software: "SAAS",
            Percentage: "72",
            theme: "green",
            image: "saas-css"
        },
        {
            Software: "Bootstrap",
            Percentage: "85",
            theme: "purple",
            image: "bootstrap"
        }
    ];

    //Other Stack
    vm.skills.others = [
        {
            Software: "Java",
            Percentage: "60",
            theme: "aqua",
            image: "java",
        },
        {
            Software: "SQL",
            Percentage: "70",
            theme: "purple",
            image: "sql"
        },
        {
            Software: "microsoft Azure",
            Percentage: "72",
            theme: "yellow",
            image: "azure"
        }
    ];
}]);

