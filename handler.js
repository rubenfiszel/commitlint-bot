const { serverless } = require('@probot/serverless-gcf');
const appFn = require('./index.js')
module.exports.probotcommitlint = serverless(appFn)