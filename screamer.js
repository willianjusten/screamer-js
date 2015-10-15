;(function() {
    // Define Global variables
    var Notification = window.Notification;

    // Define our constructor
    Screamer = function(options) {

        // Start the method requesting permission
        // to everything works
        Notification.requestPermission();

        if (typeof options.title !== 'string') {
            throw new Error('Notify(): first arg (title) must be a string.');
        }

        this.options = options;
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
            var notify = new Notification(this.options.title, this.options);

            if(this.options.fade){
                this.fadeNotification(notify, this.options.fade);
            }
        }
        else {
            console.log("Permission Denied!");
        }
    };

    Screamer.prototype.fadeNotification = function(notify, timeout) {
        setTimeout(notify.close.bind(notify), timeout);
    };
}());