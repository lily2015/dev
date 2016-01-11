var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var templatePath = path.normalize(__dirname + '/../templates');
var rev = '<%= date_rev %>';    
rev = rev.indexOf('%') < 0 ? '/' + rev : '';
var staticPath = path.normalize(__dirname + '/../dist');

var config = {
  dev: {
    root: rootPath,
    templatePath: templatePath,
    staticPath: staticPath,
    server: 'www.localhost.com',
    api_server: 'api.pro.mtime.cn',
    css_server: 'www.localhost.com',
    js_server: 'www.localhost.com',
    img_server: 'www.localhost.com',
    domain_site: '.localhost.com',
    rev: rev
  }
};
var env = process.env.NODE_ENV || 'dev';
module.exports = config[env];