import AppLocal from 'models/services/AppLocal';
import AppLocals from 'collections/services/AppLocals';

const invisibleApp = new AppLocal();
invisibleApp.entry.set('name', 'invisibleApp');
invisibleApp.entry.content.set('visible', false);

const notShowInNavApp = new AppLocal();
notShowInNavApp.entry.set('name', 'notShowInNavApp');
notShowInNavApp.entry.content.set('show_in_nav', false);

const disabledApp = new AppLocal();
disabledApp.entry.set('name', 'disabledApp');
disabledApp.entry.content.set('disabled', true);

const launcherApp = new AppLocal();
launcherApp.entry.set('name', 'launcher');

const internalApp = new AppLocal();
internalApp.entry.set('name', 'framework');

const normalApp = new AppLocal();
normalApp.entry.set('name', 'normal_app');
normalApp.entry.content.set({
    visible: true,
    show_in_nav: true,
    label: 'normalApp',
});

export default new AppLocals([
    invisibleApp, notShowInNavApp, disabledApp, launcherApp, internalApp, normalApp,
]);