import {ClassicRunner,
    Eyes,
    FileLogHandler,
    StitchMode,
    By,
  Target} from '@applitools/eyes-webdriverio';  

// import {mkdirSync} from 'fs'
// import {resolve} from 'path'

  const dateTime = Date.now();
  const batchInfo =  'home-page-tests' ;
  const batchId = 'home-page-' + '-' + dateTime;
  // const folder = resolve(__dirname, `../../../eyes-logs/${batchId}`)
  // mkdirSync(folder)
  const runner = new ClassicRunner();
  const eyes = new Eyes(runner);
  eyes.setStitchOverlap(60);
  // eyes.setSaveDebugScreenshots(true);
  // eyes.setDebugScreenshotsPath(folder)
  // const logHandler = new FileLogHandler(true, `${folder}/eyes.log`);
  // logHandler.open()
  
  describe('home-page : tests-applitools :: ', () => {

    beforeAll(() => {
      eyes.setMatchLevel('Layout');
      eyes.setStitchMode(StitchMode.CSS);
      // eyes.setLogHandler(logHandler);
      eyes.setApiKey(browser.config['APPLITOOLS_API_KEY']);
      eyes.addProperty('Spec', 'home-page.spec');
      if ( process.env.APPLITOOLS_BATCH_NAME === undefined &&  process.env.APPLITOOLS_BATCH_ID === undefined ) {
          eyes.setBatch({id: batchId, name: batchInfo});
        } else {
          eyes.setBatch(process.env.APPLITOOLS_BATCH_NAME, process.env.APPLITOOLS_BATCH_ID);
        }
    });
  
    
    it('should check that if there are any visual differences on :: FullPage ' , () => {
      
      browser.url('/?automated=true');

      browser.call(() => eyes.open(browser, 'Category Page','homePage'));
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
  