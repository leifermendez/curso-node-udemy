const { IncomingWebhook } = require('@slack/webhook');
const url = 'https://hooks.slack.com/services/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';
const webhook = new IncomingWebhook(url);

exports.loggerSlack = {
  write: message => {
    if (process.env.NODE_ENV === 'production') {
      webhook.send({
        text: stripAnsi('```' + message + '```')
      })
    } else if (process.env.NODE_ENV === 'development') {
      console.log('ERROR', message)
    }
  },
};
