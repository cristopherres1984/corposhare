import {AppPage} from './app.po';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display home page', () => {
        page.navigateTo();
        expect(page.getPageText()).toEqual('home works!');
    });
});
