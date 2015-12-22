/**
 * @return {[type]} [description]
 */
var dataInfoMain = function () {
  /* 通用动态域名 */
  this.apiUrl = 'http://' + api_server;
};

/* 主信息板块通用ajax事件 _d:{data:"响应的信息",callback:"回调设定的函数",param:"回调函数需要继承的参数值"} */
dataInfoMain.prototype = {
  getAjax: function (dat) {
    var _d = {};
    _d.data = undefined;
    var _t = this;
    var p = [], k;
    var params = JSON.parse(dat.Jdat.params);
    for (k in params) {
      p.push(k + "=" + params[k]);
    };
    params = p.join('&');
    var _ajax = dat.JdataType == 'jsonp' ? $.ajax({
      type: dat.Jtype || 'get',
      url: dat.Jurl,
      data: params,
      cache: true,
      dataType: 'jsonp',
      // jsonpCallback: "success_jsonp",
      jsonpName: "callback"
    }) : $.ajax({
      type: dat.Jtype || 'get',
      url: dat.Jurl,
      data: params,
      dataType: dat.JdataType || 'json'
    });
    _ajax.success(function (data) {
      _d.data = data;
      _d.obj = _t;
      if (dat.Param) {
          _d.param = dat.Param;
      }
      if (dat.Jback) {
          _d.callback = dat.Jback;
      }
      if (dat.RqId) {
          _d.requireid = dat.RqId;
      }
      dat.Jcall.apply(_d);
    });
    if(!dat.Jerr){
      _ajax.error(function (xhr, status) {
        dialogs.alert('请求发生错误，请稍后刷新！', '刷新', function(){
          window.location.reload();
        }); 
      });
    };    

    return _ajax;
  }
};
/* 事件初始化 */
var dataInfo = new dataInfoMain();