import {
    By,
  Target} from '@applitools/eyes-webdriverio';
import helper from '../config/helper';

let eyes = helper.setEyesConfig();

describe('category-tests ', () => {

  it('category-fullpage' , () => {
    eyes = helper.setLogs(eyes,'category');
    browser.url('/medical/?automated=true');
    browser.pause(5000);
    browser.call(() => eyes.open(browser, 'category','/medical'));
    browser.call(() => eyes.check('CategoryFullPage',Target.window().fully().scrollRootElement(By.css('body'))));
  });

  it('home-fullpage' , () => {
    eyes = helper.setLogs(eyes,'home');
    browser.url('/?automated=true');
    browser.pause(5000);
    browser.call(() => eyes.open(browser, 'home','home'));
    browser.call(() => eyes.check('home',Target.window().fully().scrollRootElement(By.css('body'))));
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
