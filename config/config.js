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
    server: "node.pro.mtime.com",
    api_server: "api.pro.mtime.cn",
    css_server: "node.pro.mtime.com",
    js_server: 'node.pro.mtime.com',
    img_server: 'img21.mtimeimg.com',
    domain_site: ".mtime.cn",
    rev: rev
  },
  pre: {
    root: rootPath,
    templatePath: templatePath,
    staticPath: staticPath,
    server: "data1.pro.mtime.com",
    api_server: "api.pro.mtime.cn",
    css_server: "data1.pro.mtime.com",
    js_server: 'data1.pro.mtime.com',
    img_server: 'img21.mtimeimg.com',
    domain_site: ".mtime.cn",
    rev: rev
  },
  prod: {
    root: rootPath,
    templatePath: templatePath,
    staticPath: staticPath,
    server: "pro.mtime.cn",
    api_server: "api.pro.mtime.cn",
    css_server: "static1.mtime.cn/prodata",
    js_server: 'static1.mtime.cn/prodata',
    img_server: 'img21.mtimeimg.com',
    domain_site: ".mtime.cn",
    rev: rev
  }
};
var env = process.env.NODE_ENV || 'dev';
module.exports = config[env];