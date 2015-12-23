/* 数据请求 */
;var requireFnMain = function (){
  this.pageName = 'ticket';
};
requireFnMain.prototype = {
  pageLoad: function (dt, movieIds, cback) {
    var _data = {"params": JSON.stringify({"targetDate":dt, "movieIds":movieIds})},
      _url = dataInfo.apiUrl + '/GetOneDayMovieRevenues.api';
    dataInfo.getAjax({
      "Jurl": _url,
      "Param": _data,
      "Jdat": _data,
      "Jcall": cback
    });
  },
  //影院,请求
  GetHotTheaters: function (cityId, cinemaLineId, cback){
    var _data = {"params": JSON.stringify({"cityId":cityId, "cinemaLineId":cinemaLineId})},
      _url = dataInfo.apiUrl + '/GetHotTheaters.api';
    dataInfo.getAjax({
      "Jurl": _url,
      "Param": _data,
      "Jdat": _data,
      "Jcall": cback
    });
  },
  //院线，请求
  GetAllCinemaLines: function (cback){
    var _data = {"params": JSON.stringify({})},
      _url = dataInfo.apiUrl + '/GetAllCinemaLines.api';
    dataInfo.getAjax({
      "Jurl": _url,
      "Param": _data,
      "Jdat": _data,
      "Jcall": cback
    });
  },
  //获取城市
  GetCities:function (cback){
    var _data = {"params": JSON.stringify({})},
      _url = dataInfo.apiUrl + '/pro-data-webapp/GetCities.api';
    dataInfo.getAjax({
      "Jurl": _url,
      "Param": _data,
      "Jdat": _data,
      "Jcall": cback
    });
  },
  //影院排片对比
  GetTheaterScheduleRates:function(dt, theaterIds, cback){
    var _data = {"params": JSON.stringify({"targetDate": dt, "theaterIds": theaterIds})},
      _url = dataInfo.apiUrl + '/GetTheateMovieRevenuesCompare2.api';
    dataInfo.getAjax({
      "Jurl": _url,
      "Param": _data,
      "Jdat": _data,
      "Jcall": cback
    });
  },
  //单选时，影院数据分析
  GetTheaterMovieSchedules:function(dt, theaterId, movieIds, cback){
    var _data = {"params": JSON.stringify({"targetDate": dt, "theaterId": theaterId, "movieIds": movieIds})},
      _url = dataInfo.apiUrl + '/GetTheaterMovieRevenues.api';
    dataInfo.getAjax({
      "Jurl": _url,
      "Param": _data,
      "Jdat": _data,
      "Jcall": cback
    });
  },
  //院线排片对比
  GetCinemaLineScheduleRates:function(dt, cinemaLineIds, cback){
    var _data = {"params": JSON.stringify({"targetDate": dt, "cinemaLineIds": cinemaLineIds})},
      _url = dataInfo.apiUrl + '/GetCinemaLineMovieRevenueCompare2.api';
    dataInfo.getAjax({
      "Jurl": _url,
      "Param": _data,
      "Jdat": _data,
      "Jcall": cback
    });
  },
  //单选时，院线数据分析
  GetCinemaLineMovieSchedules:function(dt, cinemaLineId, movieIds, cback){
    var _data = {"params": JSON.stringify({"targetDate": dt, "cinemaLineId": cinemaLineId, "movieIds": movieIds})},
      _url = dataInfo.apiUrl + '/GetCinemaLineMovieRevenues.api';
    dataInfo.getAjax({
      "Jurl": _url,
      "Param": _data,
      "Jdat": _data,
      "Jcall": cback
    });
  },
  //城市排片对比
  GetCityScheduleRates:function (dt, cityIds, cback){
    var _data = {"params": JSON.stringify({"targetDate": dt, "cityIds": cityIds})},
      _url = dataInfo.apiUrl + '/GetCityMovieRevenueCompare2.api';
    dataInfo.getAjax({
      "Jurl": _url,
      "Param": _data,
      "Jdat": _data,
      "Jcall": cback
    });
  },
  //单选时，城市数据分析
  GetCityMovieSchedules:function (dt, cityId, movieIds, cback){
    var _data = {"params": JSON.stringify({"targetDate": dt, "cityId": cityId, "movieIds": movieIds})},
      _url = dataInfo.apiUrl + '/GetCityMovieRevenues.api';
    dataInfo.getAjax({
      "Jurl": _url,
      "Param": _data,
      "Jdat": _data,
      "Jcall": cback
    });
  },
  //input索引结果
  SearchRecommend:function(kw, mtype, cback){
    var _data = {"params": JSON.stringify({"keyWord": kw, "topn":100, "mtype": mtype})},
      _url = dataInfo.apiUrl + '/SearchRecommend.api';
    dataInfo.getAjax({
      "Jurl": _url,
      "Param": _data,
      "Jdat": _data,
      "Jcall": cback
    });
  },
  //查询最新数据日期
  getNewestDate:function(cback){
    var _data = {"params": JSON.stringify({})},
      _url = dataInfo.apiUrl + '/GetDataDate.api';
    dataInfo.getAjax({
      "Jurl": _url,
      "Param": _data,
      "Jdat": _data,
      "Jcall": cback
    });
  }
};
var requireFn = new requireFnMain();