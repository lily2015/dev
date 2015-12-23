var BoxOfficeTitle = React.createClass({displayName: "BoxOfficeTitle",
  render: function (){
    return (
      React.createElement("header", {className: "header"}, 
        React.createElement("div", {className: "header_title"}, "实时票房"), 
        React.createElement("a", {href: "javascript:;", className: "btn_back"}), 
        React.createElement("a", {href: "javascript:;", className: "btn_position"})
      )
    );
  }
});

var BoxOfficeDateChoose = React.createClass({displayName: "BoxOfficeDateChoose",
  render: function (){
    return (
      React.createElement("div", {className: "container_box"}, 
        React.createElement("ul", {className: "date"}, 
          React.createElement("li", {className: "pre_day"}, 
            React.createElement("p", {className: "btn_pre"}, "12-22")
          ), 
          React.createElement("li", {className: "now_day"}, 
            React.createElement("p", {className: "btn_now"}, "2015-12-23"), 
            React.createElement("div", {className: "img_now"}), 
            React.createElement("p", {className: "time_yet"}, "上次更新时间 11:30")
          ), 
          React.createElement("li", {className: "next_day"}, 
            React.createElement("p", {className: "btn_next remove-after"}, "12-24"), 
            React.createElement("div", {className: "img_next"})
          )
        )
      )
    );
  }
});

var BoxOfficeChartTitle = React.createClass({displayName: "BoxOfficeChartTitle",
  render: function(){
    return (
      React.createElement("ul", {className: "chart_title"}, 
        React.createElement("li", {className: "chart_title_li"}, 
          React.createElement("p", {className: "day_all day_max"}, "总票房"), 
          React.createElement("p", {className: "day_all_num day_min"}, "2880.7", 
            React.createElement("span", {className: "unit-num"}, "万")
          )
        ), 
        React.createElement("li", {className: "chart_title_li border"}, 
          React.createElement("p", {className: "day_max"}, "总排片"), 
          React.createElement("p", {className: "day_min"}, "15.11", 
            React.createElement("span", {className: "unit-num"}, "万"), 
            React.createElement("span", null, "场")
          )
        ), 
        React.createElement("li", {className: "chart_title_li"}, 
          React.createElement("p", {className: "day_all day_max"}, "新上映"), 
          React.createElement("p", {className: "day_min"}, "0", React.createElement("span", null, "部"))
        )
      )
    );
  }
});

var BoxOfficeTableTitle = React.createClass({displayName: "BoxOfficeTableTitle",
  render: function (){
    return (
      React.createElement("ul", {className: "box_office_ul box_office_firstUi"}, 
        React.createElement("li", {className: "box_office_li box_office_num"}), 
        React.createElement("li", {className: "box_office_li name"}, React.createElement("p", null, "影片名称")), 
        React.createElement("li", {className: "box_office_li day_office"}, 
          React.createElement("p", {className: "sort_p max sortDown_color", "data-ctrl": "sort", "data-mark": "rev"}, 
            "实时票房"
          )
        ), 
        React.createElement("li", {className: "box_office_li ratio"}, 
          React.createElement("p", {className: "sort_p max", "data-ctrl": "sort", "data-mark": "cnt-rate"}, 
            "排片占比"
          )
        ), 
        React.createElement("li", {className: "box_office_li seat"}, 
          React.createElement("p", {className: "sort_p min", "data-ctrl": "sort", "data-mark": "sale-rate"}, 
            "上座率"
          )
        ), 
        React.createElement("li", {className: "box_office_li all_office"}, 
          React.createElement("p", {className: "sort_p min", "data-ctrl": "sort", "data-mark": "sum-rev"}, 
            "累计票房"
          )
        )
      )
    );
  }
});

var BoxOfficeDateList = React.createClass({displayName: "BoxOfficeDateList",
  render: function (){
    return (
      React.createElement("ul", {className: "box_office_ul"}, 
        React.createElement("li", {className: "box_office_li box_office_num"}, "1"), 
        React.createElement("li", {className: "box_office_li name"}, 
          React.createElement("p", {className: "movie_name"}, 
            React.createElement("a", {href: "http://pro.mtime.cn/views/movie/movie_detail.html?movieId=196282", className: "movie-item-link"}, "寻龙诀"), 
            React.createElement("span", {className: "movie_yet"}, "已上映6天")
          )
        )
      )
    );
  }
});

var BoxOfficeFooter = React.createClass({displayName: "BoxOfficeFooter",
  render: function (){
    return (
      React.createElement("footer", {className: "footer"}, 
        React.createElement("p", {className: "p_attention"}, 
          "注意：实时票房包含今天未开映场次已售出的票房，数据每30分钟更新一次，上次更新时间11:30"
        ), 
        React.createElement("button", {className: "btn_yDay", "data-ctrl": "yesterday"}, "查看昨日全国票房"), 
        React.createElement("p", {className: "p_title"}, "Copyright 2006-2015 Mtime.com Inc. All rights reserved.")
      )
    );
  }
});

var FilmTicketBox = React.createClass({displayName: "FilmTicketBox",
  getInitialState: function() {
    var _this = this;
    return {data: []};
  },
  loadCommentsFromServer: function () {
    var _this = this;
    var dt = fmt.dateFormat(new Date(), 0, 'YYMMDD');
    requireFn.pageLoad(dt, '', function(){
      data = this.data;
      _this.setState({data: data});
    });
  },
  componentDidMount: function () {
    var _this = this;
    _this.loadCommentsFromServer();
  },
  render: function () {
    var _this = this;
    return (
      React.createElement("div", null, 
        React.createElement(BoxOfficeTitle, null), 
        React.createElement("div", {className: "index_tab"}, 
          React.createElement(BoxOfficeDateChoose, null), 
          React.createElement("div", {id: "calendar_out"}), 
          React.createElement("div", {className: "get-data-failed", "data-mark": "data-out"}, 
            React.createElement(BoxOfficeChartTitle, null), 
            React.createElement("div", {className: "box_office", id: "sort_out"}, 
              React.createElement(BoxOfficeTableTitle, null), 
              React.createElement("div", {id: "mymoives_box"}), 
              React.createElement(BoxOfficeDateList, null)
            ), 
            React.createElement(BoxOfficeFooter, null)
          )
        )
      )
    );
  }
});

ReactDOM.render(
  React.createElement(FilmTicketBox, null),
  document.getElementById('react_tpl_out')
);