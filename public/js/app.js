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

angular.module('app').controller('mainCtrl', function ($scope,$interval) {
  $scope.isCollapsed = false;
  $scope.myInterval = 4000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 768;
    slides.push({
      image: '//lorempixel.com/' + newWidth + '/400',
      text: ['Ramaiya Institue of Engineering','Dyanand Sagar Eng and Medical College','PESIT Medical and Eng College','Son John College of Science'][slides.length % 4]
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
	
	//Center Banner Div hide and show code:
	var divSeq;
	$scope.divId = 1;
	$scope.divDisplay = function() {
          // Don't start a new fight if we are already fighting
          if ( angular.isDefined(divSeq) ) return;
          divSeq = $interval(function(){		
		if($scope.divId === 3) $scope.divId = 1;
		else $scope.divId ++;
	},1000*3);
	
	console.log(divSeq);
        }; 
		$scope.divDisplay();
	$scope.divMouseover = function() {		
	console.log(divSeq);
          if (angular.isDefined(divSeq)) {
            $interval.cancel(divSeq);
            divSeq = undefined;
          }
    };
});
