;(function() {
    // Define Global variables
    var Notification = window.Notification;

    // Define our constructor
    Screamer = function() {

        // Start the method requesting permission
        // to everything works
        Notification.requestPermission();
    };

    // Public Methods
    Screamer.prototype.verifySupport = function() {
        return (!Notification) ? false : true;
    };

    Screamer.prototype.checkPermission = function(perm) {
        var permission = (perm === 'granted') ? perm : Notification.permission;

        if (this.verifySupport() === true) {
            if(permission === 'granted'){
                return true;
            }
            else if(permission !== 'denied'){
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

    Screamer.prototype.notify = function() {
        if(this.checkPermission()){
            var notify = new Notification();
        }
        else {
            console.log("Permission Denied!");
        }
    };

}());