(function() {
    function LandingCtrl(Room) {

        this.rooms = Room.all


        // this.rooms.$add({name: "Chat Room Name"})


        this.setActiveRoom = (room) => {
            this.activeRoom = room


            this.messages = Room.messages(room)


        }



        this.createRoom = () => {
            Room.all.$add(this.newRoom)
            this.newRoom = {}
        }

        this.createMessage = () => {

            this.newMessage.roomId = this.activeRoom.$id


            this.messages.$add(this.newMessage)
            this.newMessage = {}
        }

        this.deleteRoom = (room) => {
            Room.all.$remove(room)
        }



    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ["Room", LandingCtrl]);
})();
