(function() {
    function LandingCtrl() {
        this.heroTitle = "Turn the Music Up!";
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', LandingCtrl);
})();
