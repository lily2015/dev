/* 数据请求 */
//调用小花
dialogs.loadingBegin();
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
      "Jcall": this.mustPath,
      "Jback": cback,
      "RqId": true
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
      "Jcall": this.mustPath,
      "Jback": cback,
      "RqId": true
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
      "Jcall": this.mustPath,
      "Jback": cback
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
      "Jcall": this.mustPath,
      "Jback": cback
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
      "Jcall": this.mustPath,
      "Jback": cback,
      "RqId": true
    });
  },
  //单选时，影院数据分析
  GetTheaterMovieSchedules:function(dt, theaterId, movieIds, cback){
    var _data = {"params": JSON.stringify({"targetDate": dt, "theaterId": theaterId, "movieIds": movieIds})},
        _url = dataInfo.apiUrl + '/GetTheaterMovieRevenues.api';
    if(movieIds == ''){
      dataInfo.getAjax({
        "Jurl": _url,
        "Param": _data,
        "Jdat": _data,
        "Jcall": this.mustPath,
        "Jback": cback
      });
    }else{
      dataInfo.getAjax({
        "Jurl": _url,
        "Param": _data,
        "Jdat": _data,
        "Jcall": this.mustPath,
        "Jback": cback,
        "RqId": true
      });
    }
  },
  //院线排片对比
  GetCinemaLineScheduleRates:function(dt, cinemaLineIds, cback){
    var _data = {"params": JSON.stringify({"targetDate": dt, "cinemaLineIds": cinemaLineIds})},
        _url = dataInfo.apiUrl + '/GetCinemaLineMovieRevenueCompare2.api';
    dataInfo.getAjax({
      "Jurl": _url,
      "Param": _data,
      "Jdat": _data,
      "Jcall": this.mustPath,
      "Jback": cback,
      "RqId": true
    });
  },
  //单选时，院线数据分析
  GetCinemaLineMovieSchedules:function(dt, cinemaLineId, movieIds, cback){
    var _data = {"params": JSON.stringify({"targetDate": dt, "cinemaLineId": cinemaLineId, "movieIds": movieIds})},
        _url = dataInfo.apiUrl + '/GetCinemaLineMovieRevenues.api';
    if(movieIds == ''){
      dataInfo.getAjax({
        "Jurl": _url,
        "Param": _data,
        "Jdat": _data,
        "Jcall": this.mustPath,
        "Jback": cback
      });
    }else{
      dataInfo.getAjax({
        "Jurl": _url,
        "Param": _data,
        "Jdat": _data,
        "Jcall": this.mustPath,
        "Jback": cback,
        "RqId": true
      });
    }
  },
  //城市排片对比
  GetCityScheduleRates:function (dt, cityIds, cback){
    var _data = {"params": JSON.stringify({"targetDate": dt, "cityIds": cityIds})},
        _url = dataInfo.apiUrl + '/GetCityMovieRevenueCompare2.api';
    dataInfo.getAjax({
      "Jurl": _url,
      "Param": _data,
      "Jdat": _data,
      "Jcall": this.mustPath,
      "Jback": cback,
      "RqId": true
    });
  },
  //单选时，城市数据分析
  GetCityMovieSchedules:function (dt, cityId, movieIds, cback){
    var _data = {"params": JSON.stringify({"targetDate": dt, "cityId": cityId, "movieIds": movieIds})},
        _url = dataInfo.apiUrl + '/GetCityMovieRevenues.api';
    if(movieIds == ''){
      dataInfo.getAjax({
        "Jurl": _url,
        "Param": _data,
        "Jdat": _data,
        "Jcall": this.mustPath,
        "Jback": cback
      });
    }else{
      dataInfo.getAjax({
        "Jurl": _url,
        "Param": _data,
        "Jdat": _data,
        "Jcall": this.mustPath,
        "Jback": cback,
        "RqId": true
      });
    }
  },
  /*//城市级别排片对比
  GetCityLevelScheduleRates:function (dt, cityLevels, cback){
    var _data = {"params": JSON.stringify({"targetDate": dt, "cityLevels": cityLevels})},
        _url = dataInfo.apiUrl + '/GetCityLevelScheduleRates.api';
    dataInfo.getAjax({
      "Jurl": _url,
      "Param": _data,
      "Jdat": _data,
      "Jcall": this.mustPath,
      "Jback": cback
    });
  },
  //单选时，城市级别数据分析
  GetCityLevelMovieSchedules:function(dt, cityLevel, cback){
    var _data = {"params": JSON.stringify({"targetDate": dt, "cityLevel": cityLevel})},
        _url = dataInfo.apiUrl + '/GetCityLevelMovieSchedules.api';
    dataInfo.getAjax({
      "Jurl": _url,
      "Param": _data,
      "Jdat": _data,
      "Jcall": this.mustPath,
      "Jback": cback
    });
  },*/
  //input索引结果
  SearchRecommend:function(kw, mtype, cback){
    //mtype:搜索类型；2，影院；3，院线；4，城市；
    var rqId;
    switch (mtype) {
      case 2: rqId = $("#cinema_out"); break;
      case 3: rqId = $("#company_out"); break;
      case 4: rqId = $("#city_out"); break;
    }
    var _data = {"params": JSON.stringify({"keyWord": kw, "topn":100, "mtype": mtype})},
        _url = dataInfo.apiUrl + '/SearchRecommend.api';
    dataInfo.getAjax({
      "Jurl": _url,
      "Param": _data,
      "Jdat": _data,
      "Jcall": this.mustPath,
      "Jback": cback,
      "RqId": rqId
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
      "Jcall": this.mustPath,
      "Jback": cback,
      "RqId": true
    });
  },
  mustPath: function () {
    if (this.data && this.data.errCd) {
      if(this.data.errCd == 404 || this.data.errCd == 500){
        //关闭小花
        dialogs.loadingEnd();
        if(this.requireid && typeof(this.requireid) == 'boolean'){
          if(this.callback){
            this.callback.apply(this);
          };
        }else if(this.requireid && typeof(this.requireid) == 'object'){
          this.requireid.html('<p class="date-none-inhtml">'+this.data.errMsg+'</p>');
        }else{
          var dt = sessionStorage.getItem('mark-date');
          dt = dt ? dt : new Date();
          this.data.dtP = fmt.dateFormat(dt, -1, 'MM-DD');
          this.data.dtN = fmt.dateFormat(dt, 1, 'MM-DD');
          this.data.dt = fmt.dateFormat(dt, 0, 'YY-MM-DD');
          var max_day = sessionStorage.getItem('maxday');
          max_day = max_day ? fmt.dateFormat(JSON.parse(max_day), 0, 'YY-MM-DD') : null;
          if(this.data.dt == max_day){
            this.data.dtDis = true;
          };
          dataInfo.ajaxTemp({temp: result_failed, dat: this.data, box: $("#ticket_out")});
        };
      }
      console.log(this.data.errMsg)
      return;
    }else{
      if(this.callback){
        this.callback.apply(this);
      };
    };
  }
};
var requireFn = new requireFnMain();
/* 初始化模板加载 */
var domInit = {
  /*页面加载完成*/
  domBegin: function () {
    sessionStorage.removeItem('mark-date');
    var d = new Date();
    var dt = fmt.dateFormat(d, 0, 'YY-MM-DD').split('-').join('');
    sessionStorage.setItem('mark-date', fmt.dateFormat(new Date(), 0, 'YY-MM-DD').split('-').join(''))
    sessionStorage.setItem('maxday', JSON.stringify(dt));

    //页面URL处理
    var urlParams =  window.location.href.split('?')[1];
    urlParams = (urlParams && urlParams.length > 1) ? urlParams.split('&&') : null;
    if(urlParams){
      var paramsIdArr = urlParams[0].split('='),
        paramsNameArr = urlParams[1].split('=');
      var urlType = paramsIdArr[0] == 'cinemaLineId' ? 'company' : 'cinema',
        urlId = paramsIdArr[1],
        urlName = decodeURIComponent(paramsNameArr[1]);

      var choosed_data = {"type":urlType,"data":[{"id":urlId,"name":urlName}]}
      sessionStorage.setItem('choosed-data',JSON.stringify(choosed_data));
      domInit.filterSinglePage(urlType, dt, [urlId]);
    }else{
      domInit.pageTemplate(dt);
      sessionStorage.removeItem('choosed-data');
      sessionStorage.removeItem('searchGetHotTheaters');
    };
  },
  dataTemplate:function(dt, data, fn){
    $('[data-ctrl="filter-btn"]').show();
    var today = new Date();
    today = fmt.dateFormat(today, 0, 'YY-MM-DD');
    this.data = data;
    //记录时间
    sessionStorage.setItem('mark-date', dt);
    //时间数据格式化
    this.data.dt = fmt.dateFormat(dt, 0, 'YY-MM-DD');
    this.data.dtP = fmt.dateFormat(dt, -1, 'MM-DD');
    this.data.dtN = fmt.dateFormat(dt, 1, 'MM-DD');
    //是否是今天
    if(today == this.data.dt){
      this.data.today = true;
    };
    //是否是是大可用日期
    var maxday = sessionStorage.getItem('maxday');
    maxday = maxday ? fmt.dateFormat(JSON.parse(maxday), 0, 'YY-MM-DD') : fmt.dateFormat(new Date, 0, 'YY-MM-DD');
    if(maxday == this.data.dt){
      this.data.maxday = true;
    };
    //请求非全国数据时，不可请求当天。时间需要推前一天
    var _yday = fmt.dateFormat(new Date(), -1, 'YY-MM-DD');
    if(this.data.name != '全国' && this.data.dt == _yday){
      this.data.today = true;
    };

    //数值格式化
    this.data.sumRev = fmt.boxOfficeFormat(this.data.sumRev/100, -1);
    this.data.sumSCnt = fmt.unitFormat(this.data.sumSCnt, 2);
    //数据列表格式化
    var dat = this.data.data, i;
    var len = this.data.data instanceof Array ? dat.length : 0;
    for(i=0; i<len; i++){
      this.data.data[i].rev = fmt.boxOfficeFormat(dat[i].rev/100, -1);
      this.data.data[i].sumRev = fmt.boxOfficeFormat(dat[i].sumRev/100, -1);
      this.data.data[i].sCnt = fmt.unitFormat(dat[i].sCnt, 2) + '场';
      this.data.data[i].revRate = fmt.percentFormat(dat[i].revRate);
      this.data.data[i].sCntRate = fmt.percentFormat(dat[i].sCntRate);
      this.data.data[i].saledRate = fmt.percentFormat(dat[i].saledRate);
    };
    var page_data = this.data;

    if(fn){
      fn.call(page_data);
    }else{
      dataInfo.ajaxTemp({temp: ticket_out, dat: page_data, box: $("#ticket_out")});
      //图表
      pieChart.pie_chart(page_data, true);
    };
  },
  //票房页，我关注的影片和前10影片数据展示
  pageTemplate: function(dt){
    sessionStorage.removeItem('ac_choosed');
    sessionStorage.removeItem('cl_choosed');
    requireFn.pageLoad(dt, '', function () {
      if(!this.data.data){
        var dt = sessionStorage.getItem('mark-date') || new Date();
        var max_day = sessionStorage.getItem('maxday');
        max_day = max_day ? JSON.parse(max_day) : new Date();
        this.data.dtP = fmt.dateFormat(dt, -1, 'MM-DD');
        this.data.dtN = fmt.dateFormat(dt, 1, 'MM-DD');
        this.data.dt = fmt.dateFormat(dt, 0, 'YY-MM-DD');
        if(max_day == dt){
          this.data.dtDis = true;
        }
        $("#ticket_out").html('<div id="film_scheduling_out"></div>')
        dataInfo.ajaxTemp({temp: result_failed, dat: this.data, box: $("#film_scheduling_out")});
      }else{
        dt = this.data.dt;
        sessionStorage.removeItem('cl_choosed');
        sessionStorage.removeItem('ac_choosed');
        sessionStorage.setItem('pie_page_data', JSON.stringify(this.data));

        //1:单日票房，2：单日票房倒序；3：场次，4：场次倒；5：上座，6：上座倒；7：总票房，8：总票倒；
        this.data.sortId = 1;
        domInit.dataTemplate(dt, this.data);
        
        /*$.cookie('mytheaters', JSON.stringify([{
          'id':'2642',
          'name':'广州白云万达广场店'
        },{
          'id':'2110',
          'name':'UME国际影城（双井）'
        },{
          'id':'4249',
          'name':'上海百丽宫影城（环贸iapm店）'
        }]));*/
        //请求我的影片数据
        var my_movies = cookie.get('mymovies'),
          movieIds = [];

        my_movies = my_movies ? JSON.parse(my_movies) : null;

        if(my_movies){
          for(i in my_movies){
            movieIds[i] = my_movies[i].id;
          };
        };
        movieIds = my_movies ? movieIds.join(',') : '';
        if(my_movies){
          requireFn.pageLoad(dt, movieIds, function(){
            if(this.data.data && this.data.data.length > 0){
              sessionStorage.setItem('pie_page_data_mymoives', JSON.stringify(this.data));
              domInit.dataTemplate(dt, this.data, function(){
                var my_movies_dat = this;
                dataInfo.ajaxTemp({temp: my_movies_tpl, dat: my_movies_dat, box: $("#mymoives_box")});
              });
            }else{
              sessionStorage.removeItem('pie_page_data_mymoives')
            }
          });
        };
      };
      //关闭小花
      dialogs.loadingEnd();
    });
  },
  //选中项目为1个时，数据分析页面请求和模板
  filterSinglePage:function (typ, dt, ids, isDate){
    $('[data-mark="date-out"]').show();
    //如果是票房分布请求，并且不是日期选择操作，则需要先请求确认有数据的日期;
    var today = new Date(),
      yesterday;
    yesterday = fmt.dateFormat(today, -1, 'YY-MM-DD').split('-').join('');
    today = fmt.dateFormat(today, 0, 'YY-MM-DD').split('-').join('');
    if(requireFn.pageName == 'ticket' && !isDate){
      requireFn.getNewestDate(function(){
        if(this.data){
          //如果传入的日期为当日，则需要把返回的日期传入
          dt = (today == dt || yesterday == dt) ? this.data : dt;
          sessionStorage.setItem('mark-date', dt);
          sessionStorage.setItem('maxday', this.data);
          singleChoosedItem();
        };
      });
    }else{
      singleChoosedItem();
    };
    function singleChoosedItem (){
      if(typ == 'cinema'){
        requireFn.GetTheaterMovieSchedules(dt, ids[0], '', function(){
          var data = this.data;
          sessionStorage.setItem('pie_page_data', JSON.stringify(data));
          data.sortId = 1;
          domInit.dataTemplate(dt, data);
          //请求我的影片数据
          var my_movies = cookie.get('mymovies'),
            movieIds = [];
          my_movies = my_movies ? JSON.parse(my_movies) : null;
          if(my_movies){
            for(i in my_movies){
              movieIds[i] = my_movies[i].id;
            };
          };
          movieIds = my_movies ? movieIds.join(',') : '';
          if(my_movies){
            requireFn.GetTheaterMovieSchedules(dt, ids[0], movieIds, function(){
              myMovies(this.data);
            });
          };
          //关闭小花
          dialogs.loadingEnd();
        });
      }else if(typ == 'company'){
        requireFn.GetCinemaLineMovieSchedules(dt, ids[0], '', function(){
          var data = this.data;
          sessionStorage.setItem('pie_page_data', JSON.stringify(data));
          data.sortId = 1;
          domInit.dataTemplate(dt, data);
          //请求我的影片数据
          var my_movies = cookie.get('mymovies'),
            movieIds = [];
          my_movies = my_movies ? JSON.parse(my_movies) : null;
          if(my_movies){
            for(i in my_movies){
              movieIds[i] = my_movies[i].id;
            };
          };
          movieIds = my_movies ? movieIds.join(',') : '';
          if(my_movies){
            requireFn.GetCinemaLineMovieSchedules(dt, ids[0], movieIds, function(){
              myMovies(this.data);
            });
          };
          //关闭小花
          dialogs.loadingEnd();
        });
      }else if(typ == 'city'){
        requireFn.GetCityMovieSchedules(dt, ids[0], '', function(){
          var data = this.data;
          sessionStorage.setItem('pie_page_data', JSON.stringify(data));
          data.sortId = 1;
          domInit.dataTemplate(dt, data);
          //请求我的影片数据
          var my_movies = cookie.get('mymovies'),
            movieIds = [];
          my_movies = my_movies ? JSON.parse(my_movies) : null;
          if(my_movies){
            for(i in my_movies){
              movieIds[i] = my_movies[i].id;
            };
          };
          movieIds = my_movies ? movieIds.join(',') : '';
          if(my_movies){
            requireFn.GetCityMovieSchedules(dt, ids[0], movieIds, function(){
              myMovies(this.data);
            });
          };
          //关闭小花
          dialogs.loadingEnd();
        });
      }else{
        requireFn.GetCityLevelMovieSchedules(dt, ids[0], '', function(){
          var data = this.data;
          sessionStorage.setItem('pie_page_data', JSON.stringify(data));
          data.sortId = 1;
          domInit.dataTemplate(dt, data);
          //请求我的影片数据
          var my_movies = cookie.get('mymovies'),
            movieIds = [];
          my_movies = my_movies ? JSON.parse(my_movies) : null;
          if(my_movies){
            for(i in my_movies){
              movieIds[i] = my_movies[i].id;
            };
          };
          movieIds = my_movies ? movieIds.join(',') : '';
          if(my_movies){
            requireFn.GetCityLevelMovieSchedules(dt, ids[0], movieIds, function(){
              myMovies(this.data);
            });
          };
          //关闭小花
          dialogs.loadingEnd();
        });
      };
      function myMovies(data) {
        if(data.data && data.data.length > 0){
          sessionStorage.setItem('pie_page_data_mymoives', JSON.stringify(data));
          domInit.dataTemplate(dt, data, function(){
            var my_movies_dat = this;
            dataInfo.ajaxTemp({temp: my_movies_tpl, dat: my_movies_dat, box: $("#mymoives_box")});
          });
        }else{
          sessionStorage.removeItem('pie_page_data_mymoives');
        }
      }
    };
  }
};
/* 启动方法 */
domInit.domBegin();