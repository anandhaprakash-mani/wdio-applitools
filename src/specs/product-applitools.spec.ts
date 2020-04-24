import {
    By,
  Target} from '@applitools/eyes-webdriverio';
import helper from '../config/helper';

let eyes = helper.setEyesConfig();

describe('product-tests', () => {

  it('product-fullpage' , () => {
    eyes = helper.setLogs(eyes,'product');
    browser.url('/hr/rippling-profile/?automated=true');
    browser.pause(5000);
    browser.call(() => eyes.open(browser, 'product','rippling-profile'));
    browser.call(() => eyes.check('product',Target.window().fully().scrollRootElement(By.css('body'))));
  });

  it('reviews-fullpage' , () => {
    eyes = helper.setLogs(eyes,'reviews');
    browser.url('/hr/bamboohr-profile/reviews/?automated=true');
    browser.pause(5000);
    browser.call(() => eyes.open(browser, 'reviews','bamboohr-profile-reviews'));
    browser.call(() => eyes.check('reviews',Target.window().fully().scrollRootElement(By.css('body'))));
  });

  afterEach( () => {
    if (browser.call(() =>  eyes.getIsOpen() )) {
      browser.call(() => eyes.close(false));
    }
  });

  afterAll(() => {
    browser.call(() => eyes.abortIfNotClosed());
  });

});
