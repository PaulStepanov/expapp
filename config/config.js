/**
 * Created by pili on 9/26/16.
 */
let nconf=require('nconf');
let path=require('path');
nconf.argv()
    .env()
    .file({ file: path.join(__dirname,'config.json') });
module.exports=nconf;