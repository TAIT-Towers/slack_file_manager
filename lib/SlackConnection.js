const slack_web_client = require('@slack/web-api');
const request = require('request-promise-native');

class SlackConnection {
    constructor (token){
        this.token = token;

        this.downloadFile = (url) => {

        }

        this.getFileInfo = (file_id) => {
            const slack_client = new slack_web_client(token);
            return slack_client.files.info({file: file_id});
        }

        this.uploadFile = () => {

        }
    }
}

module.exports = SlackConnection;