import {ClassicRunner,
    Eyes,
    FileLogHandler,
    StitchMode,
    By,
  Target} from '@applitools/eyes-webdriverio';  

  const dateTime = Date.now();
  const batchInfo =  'category-page-tests' ;
  const batchId = 'category-page-' + '-' + dateTime;
  const runner = new ClassicRunner();
  const eyes = new Eyes(runner);
  
  describe('category-page : tests-applitools :: ', () => {

    beforeAll(() => {
      eyes.setMatchLevel('Layout');
      eyes.setStitchMode(StitchMode.CSS);
      eyes.setLogHandler(new FileLogHandler(true, './eyes-logs/' + batchId + '.log'));
      eyes.setApiKey(browser.config['APPLITOOLS_API_KEY']);
      eyes.addProperty('Spec', 'category-page.spec');
      if ( process.env.APPLITOOLS_BATCH_NAME === undefined &&  process.env.APPLITOOLS_BATCH_ID === undefined ) {
          eyes.setBatch({id: batchId, name: batchInfo});
        } else {
          eyes.setBatch(process.env.APPLITOOLS_BATCH_NAME, process.env.APPLITOOLS_BATCH_ID);
        }
    });
  
    
    it('should check that if there are any visual differences on :: FullPage ' , () => {
      
      browser.url('/medical/?automated=true');
      
      $('app-footer').scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
      $('app-header-with-search').scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
      
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
  