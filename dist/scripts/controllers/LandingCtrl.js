(function() {
    function LandingCtrl(Room) {
        // this.rooms = [{name: 'Blue'},{name: 'Red'},{name: 'Yellow'}]

        this.rooms = Room.all


        window.foo = this.rooms


        // this.rooms.$add({name: "Chat Room Name"})



        this.clickFunction = function(){
            console.log(1)
        }


    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ["Room", LandingCtrl]);
})();
