import { AmpPage } from './app.po';

describe('amp App', () => {
  let page: AmpPage;

  beforeEach(() => {
    page = new AmpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
