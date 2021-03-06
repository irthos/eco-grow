'use strict';

angular.module('EcossentialsApp')
    .controller('PStoryCtrl', function ($scope, angularFire) {
   
        var supUrl = new Firebase("https://ecogrow.firebaseio.com/suppliers");
        angularFire(supUrl, $scope, "suppliers");

        var newUrl = new Firebase("https://ecogrow.firebaseio.com/newItems");
        angularFire(newUrl, $scope, "newItems");

        var budUrl = new Firebase("https://ecogrow.firebaseio.com/budget");
        angularFire(budUrl, $scope, "budget");

        var stoUrl = new Firebase("https://ecogrow.firebaseio.com/story");
    	angularFire(stoUrl, $scope, "story");

        var sto1Url = new Firebase("https://ecogrow.firebaseio.com/story1");
        angularFire(sto1Url, $scope, "story1");

        var sto2Url = new Firebase("https://ecogrow.firebaseio.com/story2");
        angularFire(sto2Url, $scope, "story2");
        
    
  });
