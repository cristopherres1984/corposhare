import {browser, by, element} from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getPageText() {
        return element(by.tagName('app-home')).getText();
    }
}
