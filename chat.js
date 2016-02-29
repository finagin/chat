angular.module('chat', ['firebase'])

.value('fbURL', 'https://chatbyxoma.firebaseio.com/')

.factory('Messages', function($firebase, fbURL) {
    return $firebase(new Firebase(fbURL));
})

.controller('MainCtrl', function($scope, Messages) {
    $scope.messages = Messages;
    $scope.data = {};
    $scope.text = '';
    
    $scope.send = function(){
        if(/^\s*$/.test($scope.text)){
            return '';
        }
        var obj = USER;
        obj.text = $scope.text;
        obj.time = new Date().getTime();
        Messages.$add(obj);
        $scope.text = '';
        $scope.scroll();
    };
    $scope.scroll = function(){
        setTimeout(function(){$('.myClass')[0].scrollByPages(100);},100);
        console.log('scroll')
    }
})
