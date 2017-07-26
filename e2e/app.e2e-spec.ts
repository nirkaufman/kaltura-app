import { KalturaAppPage } from './app.po';

describe('kaltura-app App', () => {
  let page: KalturaAppPage;

  beforeEach(() => {
    page = new KalturaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
