define([
    'ponyville/util/pony'
], function (UtilPony) {
    return {
        neigh: function () {
            return UtilPony.neigh().concat('ponyville pony');
        }
    };
});
