import { TestDeliveryAppPage } from './app.po';

describe('test-delivery-app App', () => {
  let page: TestDeliveryAppPage;

  beforeEach(() => {
    page = new TestDeliveryAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
