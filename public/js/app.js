var app = angular.module('app',['ui.router','ngAnimate','ui.bootstrap']);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
	$urlRouterProvider.otherwise('/home');
	$locationProvider.html5Mode({enabled: true,requireBase:false});
	$stateProvider
	.state('home',{
		url:'/home',
		templateUrl:'views/pHome.html'
		});		
});

angular.module('app').controller('mainCtrl', function ($scope) {
  $scope.isCollapsed = false;
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 750;
    slides.push({
      image: '//placehold.it/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i = 0; i < 4; i++) {
                $scope.addSlide();
            }
			
    //Dropdown code
    $scope.status = {isopen: false};
    $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
    };
	
	//tab code
	$scope.tabSel = 0;
	console.log($scope.tabSel);
});
