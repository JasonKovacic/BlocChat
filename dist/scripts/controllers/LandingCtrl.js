(function() {
    function LandingCtrl(Room) {
        // this.rooms = [{name: 'Blue'},{name: 'Red'},{name: 'Yellow'}]

        this.rooms = Room.all
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ["Room", LandingCtrl]);
})();
