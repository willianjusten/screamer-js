/*
 * Authors: Paulo Oliveira and Willian Justen
 * https://github.com/willianjsuten/screamer-js
 * License: MIT license
 */


;(function() {
    // Define Global variables
    var Notification = window.Notification;

    /**
     * Our constructor
     * 
     * @param {object}
     */
    Screamer = function(options) {

        /**
         * Start the method requesting permission
         * to everything works
         */
        Notification.requestPermission();

        /**
         * Notification API requires title to work properly,
         * if title not defined or not string we throw an error.
         */
        if (options.title !== undefined && typeof options.title !== 'string') {
            throw new Error('Notify(): first arg (title) must be a string.');
        }

        /**
         * Our options passed to Notification
         * look at https://developer.mozilla.org/en-US/docs/Web/API/notification
         * to more options.
         * 
         * @type {object}
         */
        this.options = options;
    };

    /**
     * This method should return if browser supports
     * Web Notifications.
     * 
     * @return {boolean}
     */
    Screamer.prototype.verifySupport = function() {
        return (!Notification) ? false : true;
    };

    /**
     * Check if support exists and verify if permission exists,
     * if not, requests a permission and verify if granted.
     * 
     * @param  {string} - just for test purposes
     * @return {boolean}
     */
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

    /**
     * This fade the notification.
     * 
     * @param  {object} - object created by notify
     * @param  {int} - time in miliseconds
     */
    Screamer.prototype.fadeNotification = function(notify, timeout) {
        setTimeout(notify.close.bind(notify), timeout);
    };

    /**
     * It should be create a notification if permission is granted.
     * If not allowed. should fail sillently and logs that.
     */
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

}());
