;(function() {
    // Define Global variables
    var Notification = window.Notification;

    // Define our constructor
    Screamer = function() {
    
    };

    // Public Methods

    Screamer.verifySupport = function() {
        if (!Notification){
            return false;
        }
        else {
            return true;
        }
    };

    Screamer.checkPermission = function() {
        if (this.verifySupport() === true) {
            if(Notification.permission === 'granted'){
                return true;
            }
            else if(Notification.permission !== 'denied'){
                Notification.requestPermission(function(permission){
                    if (permission == 'granted'){
                        return true;
                    }
                });
            }
        }
        else {
            return false;
        }
    };

    Screamer.notify = function() {};

}());