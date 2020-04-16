import {ClassicRunner,
    Eyes,
    FileLogHandler,
    StitchMode,
    By,
  Target} from '@applitools/eyes-webdriverio';
import {mkdirSync} from 'fs'
import {resolve} from 'path'

const dateTime = Date.now();
const batchInfo =  'category-page-tests' ;
const batchId = 'category-page-' + '-' + dateTime;
const folder = resolve(__dirname, `../../../eyes-logs/${batchId}`)
mkdirSync(folder);
const logHandler = new FileLogHandler(true, `${folder}/eyes.log`);
logHandler.open();
const runner = new ClassicRunner();
const eyes = new Eyes(runner);

describe('category-page : tests-applitools :: ', () => {

  beforeAll(() => {
    eyes.setMatchLevel('Layout');
    eyes.setStitchMode(StitchMode.CSS);
    eyes.setLogHandler(logHandler);
    eyes.setMatchTimeout(0);
    eyes.setLogHandler(new FileLogHandler(true, './eyes-logs/' + batchId + '.log'));
    eyes.setApiKey(browser.config['APPLITOOLS_API_KEY']);
    eyes.setBatch({id: batchId, name: batchInfo});
    eyes.setStitchOverlap(60);
    eyes.setSaveDebugScreenshots(true);
    eyes.setDebugScreenshotsPath(folder)
  });

  it('should check that if there are any visual differences on :: FullPage ' , () => {
    browser.url('/medical/?automated=true');
    $('app-footer').scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
    $('app-header-with-search').scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
    browser.pause(5000);
    browser.call(() => eyes.open(browser, 'Category Page','/medical'));
    browser.call(() => eyes.check('CategoryFullPage',Target.window().fully().scrollRootElement(By.css('body'))));
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
