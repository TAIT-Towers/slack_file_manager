import { WebClient } from '@slack/web-api';

import * as request from 'request-promise-native';
import * as fs from 'fs';

/**
 * Wrapper for the Slack Client/Request packages
 */
export default class SlackConnection {
    private _token: string;
    private _slack_client: WebClient;

    constructor (token: string){
        this._token = token;
        this._slack_client = new WebClient(token);
    }

    get token():string{
        return this._token;
    }

    public getFileInfo(file_id:string):Promise<object> {
        return this._slack_client.files.info({file: file_id});
    }

    public uploadFile(filepath:string, filename:string):Promise<object> {
        return this._slack_client.files.upload({filename: filename, file: fs.createReadStream(filepath)});
    }
    
    public downloadFile(url:string):Promise<object> {
        let options = {
            method: 'GET',
            uri: url,
            headers: {
                Authorization: 'Bearer ' + this._token
            }
        }

        return request(options)
    }
}