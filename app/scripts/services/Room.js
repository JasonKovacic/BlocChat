(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("/rooms");
    var rooms = $firebaseArray(ref);





    function retrieveMessages(room){
        var ref = firebase.database().ref().child("/messages");

        ref = ref.orderByChild("roomId").equalTo(room.$id)

        var messages = $firebaseArray(ref);

        return messages
    }

    // window.foo = messages;

    return {
      all: rooms,
      messages: retrieveMessages
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
