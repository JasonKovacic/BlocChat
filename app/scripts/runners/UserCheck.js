(function() {
  function BlocChatCookies($cookies, $rootScope) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        currentUser = prompt("What is your username?");
        $cookies.put("blocChatCurrentUser", currentUser)
    }



    $rootScope.currentUser = currentUser


  }

  angular
    .module('blocChat')
    .run(['$cookies', "$rootScope", BlocChatCookies]);
})();
