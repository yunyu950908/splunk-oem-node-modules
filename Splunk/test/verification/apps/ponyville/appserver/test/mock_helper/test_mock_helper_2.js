//for testing replacement of modules required by this module
mockModuleLocationsGen(['ponyville/pony'], 'ponyville/mockPony');

//for testing replacement of modules required by modules required by this module
mockModuleLocationsGen(['ponyville/util/pony'], 'ponyville/mockPony');

//for testing replacement of modules required by modules required by modules required by this module
mockModuleLocationsGen(['ponyville/util/altPony3'], 'ponyville/mockPony');


define(['ponyville/pony', 'ponyville/altPony', 'ponyville/util/altPony'], function (Pony, AltPony, AltUtilPony) {

    suite('Mocked ponies 2', function () {

        test('this module has mocked neigh', function () {
            assert.deepEqual(Pony.neigh(), ['mocked neigh']);
        });

        test('foreign module has mocked neigh', function () {
            assert.deepEqual(AltPony.neigh(), ['mocked neigh']);
        });

        test('foreign module has a module which has a mocked neigh', function () {
            assert.deepEqual(AltUtilPony.neigh(), ['mocked neigh']);
        });
    });
});
