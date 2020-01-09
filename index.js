const SlackConnection = require('./lib/SlackConnection');

function SFM({token}) {
    const slackConnection = new SlackConnection({token})

    this.setToken = token => {
        slackConnection.token = token;
    }

}

module.exports = SFM;