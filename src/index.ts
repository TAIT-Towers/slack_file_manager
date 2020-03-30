import SlackConnection from "./lib/SlackConnection";

export default class SlackFileManager {
    public slack: SlackConnection;
    
    constructor (slack_token: string){
        this.slack = new SlackConnection(slack_token);
    }

    public changeToken(slack_token: string):void {
        this.slack = new SlackConnection(slack_token);        
    }
    
}