import { JanusAngular2Page } from './app.po';

describe('janus-angular2 App', function() {
  let page: JanusAngular2Page;

  beforeEach(() => {
    page = new JanusAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
