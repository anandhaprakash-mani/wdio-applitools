import {
    By,
  Target} from '@applitools/eyes-webdriverio';
import helper from '../config/helper';

let eyes = helper.setEyesConfig();

describe('versus-page-tests :: ', () => {

  it('versus-1-fullpage' , () => {
    eyes = helper.setLogs(eyes,'versus1');
    browser.url('/crm/netsuite-crm-software-profile/vs/?automated=true');
    browser.pause(5000);
    browser.call(() => eyes.open(browser, 'versus-1','versus-1'));
    browser.call(() => eyes.check('versus-1',Target.window().fully().scrollRootElement(By.css('body'))));
  });

  it('versus-2-fullpage' , () => {
    eyes = helper.setLogs(eyes,'versus2');
    browser.url('/crm/netsuite-crm-software-profile/vs/hubspot/?automated=true');
    browser.pause(5000);
    browser.call(() => eyes.open(browser, 'versus-2','versus-2'));
    browser.call(() => eyes.check('versus-2',Target.window().fully().scrollRootElement(By.css('body'))));
  });

  it('versus-2-fullpage' , () => {
    eyes = helper.setLogs(eyes,'versus3');
    browser.url('/crm/netsuite-crm-software-profile/vs/hubspot/?automated=true');
    browser.pause(5000);
    browser.call(() => eyes.open(browser, 'versus-3','versus-3'));
    browser.call(() => eyes.check('versus-3',Target.window().fully().scrollRootElement(By.css('body'))));
  });

  afterEach( () => {
    if (browser.call(async () =>  eyes.getIsOpen() )) {
      browser.call(() => eyes.close(false));
    }
  });

  afterAll(() => {
    browser.call(() => eyes.abortIfNotClosed());
  });

});
