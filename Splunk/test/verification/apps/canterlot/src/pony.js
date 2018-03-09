define([
    'canterlot/util/pony'
], function (UtilPony) {
    return {
        neigh: function () {
            return UtilPony.neigh().concat('canterlot pony');
        }
    };
});
