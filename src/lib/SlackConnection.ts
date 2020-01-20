import { WebClient } from '@slack/web-api';

import * as fs from 'fs';
import requestPromise = require('request-promise-native');

/**
 * Wrapper for the Slack Client/Request packages
 */
export default class SlackConnection {
    public readonly token: string;
    public readonly slack_client: WebClient;

    constructor (token: string){
        this.token = token;
        this.slack_client = new WebClient(token);
    }    

    public getFileInfo(file_id:string):Promise<object> {
        return this.slack_client.files.info({file: file_id});
    }

    public uploadFile(filepath:string, filename:string):Promise<object> {
        return this.slack_client.files.upload({filename: filename, file: fs.createReadStream(filepath)});
    }
    
    public downloadFile(url:string):Promise<object> {
        let options = {
            method: 'GET',
            uri: url,
            headers: {
                Authorization: 'Bearer ' + this.token
            }
        }

        return requestPromise(options)
    }
}