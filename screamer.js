/*
 * Authors: Paulo Oliveira and Willian Justen
 * https://github.com/willianjsuten/screamer-js
 * License: MIT license
 */

/* global define, exports: true, module*/
;(function(root, factory) {
    'use strict';

    if(typeof define === 'function' && define.amd) {
        define('Screamer', factory);
    }
    else if(typeof exports === 'object') {
        exports = module.exports = factory();
    }
    else {
        root.Screamer = factory();
    }
})(this, function() {
    'use strict';
    // Define Global variables
    var Notification = window.Notification;

    /**
     * Our constructor
     *
     * @param {object}
     */
    var Screamer = function(options) {

        /**
         * Auto initialize the object
         * when new operator was forgoten
         */
        if (!(this instanceof Screamer)) {
            return new Screamer(options);
        }

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
    Screamer.verifySupport = function() {
        return (!Notification) ? false : true;
    };

    /**
     * Check if support exists and verify if permission exists,
     * if not, requests a permission and verify if granted.
     *
     * @param  {string} - just for test purposes
     * @return {boolean}
     */
    Screamer.checkPermission = function(perm) {
        var permission = (perm === 'granted') ? perm : Notification.permission;

        if (!Screamer.verifySupport()) {
            return false;
        }

        if (permission === 'granted') {
            return true;
        }
        else if (permission !== 'denied') {
            Notification.requestPermission(function(permission) {
                if (permission == 'granted') {
                    return true;
                }
            });
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
     * This handle the 'onclose' event, which came from Notification
     */
    Screamer.onClose = function(options) {
        if (typeof options.after === 'function') {
            options.after();
        }
    }

    Screamer.before = function(options) {
        if (typeof options.before === 'function') {
            options.before();
        }
    }

    /**
     * It should be create a notification if permission is granted.
     * If not allowed. should fail sillently and logs that.
     */
    Screamer.prototype.notify = function() {
        if (Screamer.checkPermission()) {
            var notify, options = this.options;

            Screamer.before(options);

            notify = new Notification(options.title, options);
            notify.onclose = function() {
                Screamer.onClose(options)
            }

            if (options.fade) {
                this.fadeNotification(notify, options.fade);
            }
        }
        else {
            console.log('Permission Denied!');
        }
    };

    return Screamer;
});
