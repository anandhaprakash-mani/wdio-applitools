require('dotenv').config();
import {ClassicRunner,
    Eyes,
    FileLogHandler,
    StitchMode,
} from '@applitools/eyes-webdriverio';
import {mkdirSync} from 'fs'
import {resolve} from 'path'

const date= new Date();
const dateTime = date.getDate() + '-' + date.getMinutes();

class helper{

    public setEyesConfig():Eyes {

        const batchName = 'applitools-'
        const batchInfo =  batchName + '-' + dateTime;
        const batchId = batchName + '-' + dateTime;

        const runner = new ClassicRunner();
        const eyes = new Eyes(runner);

        eyes.setApiKey(process.env.APPLITOOLS_API_KEY);
        eyes.setBatch({id: batchId, name: batchInfo});

        eyes.setMatchLevel('Layout');
        eyes.setStitchMode(StitchMode.CSS);

        eyes.setMatchTimeout(0);
        eyes.setStitchOverlap(60);
        eyes.setSaveDebugScreenshots(true);

        return eyes;
    }

    public setLogs(eyes:Eyes, appName): Eyes{
        const batchId = appName + '-' + dateTime;
        const folder = resolve(__dirname, `../../eyes-logs/${batchId}`)
        mkdirSync(folder);
        const logHandler = new FileLogHandler(true, `${folder}/eyes-${batchId}.log`);
        logHandler.open();

        eyes.setDebugScreenshotsPath(folder);
        eyes.setLogHandler(logHandler);
        // eyes.setLogHandler(new FileLogHandler(true, './eyes-logs/' + batchId + '.log'));
        return eyes;
    }

    public scrollUpDown(){
        $('app-footer').scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
        $('app-header-with-search').scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
    }
}


export default new helper();
