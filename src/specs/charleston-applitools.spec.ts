import {
    By,
  Target} from '@applitools/eyes-webdriverio';
import helper from '../config/helper';

let eyes = helper.setEyesConfig();

describe('charleston-tests ', () => {

  it('category-fullpage' , () => {
    eyes = helper.setLogs(eyes,'charleston');
    browser.url('/property/?automated=true&blue_experiment=2&gtm=false');
    browser.pause(5000);
    browser.call(() => eyes.open(browser, 'charleston','/property'));
    browser.call(() => eyes.check('CharlestonullPage',Target.window().fully().scrollRootElement(By.css('body'))));
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
