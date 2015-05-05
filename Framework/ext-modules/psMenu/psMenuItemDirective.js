(function() {

    'use strict';

    angular.module('psMenu').directive('psMenuItem', function() {
        return {
            require: '^psMenu', // Require controller from psMenu, which is its parent.
            scope: {
                label: '@'
            },
            templateUrl: 'ext-modules/psMenu/psMenuItemTemplate.html',
            link: function(scope, el, attr, ctrl) {

            }
        };
    });

})();