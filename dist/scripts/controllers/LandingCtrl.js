(function() {
    function LandingCtrl(Room) {

        this.rooms = Room.all


        window.foo = this.rooms


        // this.rooms.$add({name: "Chat Room Name"})



        this.createRoom = () => {
            Room.all.$add(this.newRoom)
            this.newRoom = {}
        }

        this.deleteRoom = (room) => {
            Room.all.$remove(room)
        }




    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ["Room", LandingCtrl]);
})();
