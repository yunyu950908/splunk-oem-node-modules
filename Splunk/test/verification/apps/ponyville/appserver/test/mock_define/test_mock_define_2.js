//for testing replacement of modules required by this module
define('ponyville/pony', ['ponyville/util/altPony'], function (AltUtilPony) {
    return {
        neigh: function () {
            return AltUtilPony.neigh();
        }
    };
});

//for testing replacement of modules required by modules required by this module
define('ponyville/util/pony', ['ponyville/mockAltPony'], function (MockAltPony) {
    return {
        neigh: function () {
            return MockAltPony.neigh();
        }
    };
});


define(['ponyville/pony', 'ponyville/altPony'], function (Pony, AltPony) {

    suite('Define-mocked ponies 2', function () {

        test('this module has mocked neigh', function () {
            assert.deepEqual(Pony.neigh(), ['ponyville alternative utility pony 3']);
        });

        test('foreign module has mocked neigh', function () {
            assert.deepEqual(AltPony.neigh(), ['mocked alternative neigh']);
        });
    });
});
