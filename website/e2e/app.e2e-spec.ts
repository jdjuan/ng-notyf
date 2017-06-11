import { AppSeedPage } from './app.po';

describe('app-seed App', () => {
  let page: AppSeedPage;

  beforeEach(() => {
    page = new AppSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
