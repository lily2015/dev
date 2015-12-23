var BoxOfficeTitle = React.createClass({
  render: function (){
    return (
      <header className="header">
        <div className="header_title">实时票房</div>
        <a href="javascript:;" className="btn_back"></a>
        <a href="javascript:;" className="btn_position"></a>
      </header>
    );
  }
});

var BoxOfficeDateChoose = React.createClass({
  render: function (){
    return (
      <div className="container_box">
        <ul className="date">
          <li className="pre_day">
            <p className="btn_pre">12-22</p>
          </li>
          <li className="now_day">
            <p className="btn_now">2015-12-23</p>
            <div className="img_now"></div>
            <p className="time_yet">上次更新时间 11:30</p>
          </li>
          <li className="next_day">
            <p className="btn_next remove-after">12-24</p>
            <div className="img_next"></div>
          </li>
        </ul>
      </div>
    );
  }
});

var BoxOfficeChartTitle = React.createClass({
  render: function(){
    return (
      <ul className="chart_title">
        <li className="chart_title_li">
          <p className="day_all day_max">总票房</p>
          <p className="day_all_num day_min">2880.7
            <span className="unit-num">万</span>
          </p>
        </li>
        <li className="chart_title_li border">
          <p className="day_max">总排片</p>
          <p className="day_min">15.11
            <span className="unit-num">万</span>
            <span>场</span>
          </p>
        </li>
        <li className="chart_title_li">
          <p className="day_all day_max">新上映</p>
          <p className="day_min">0<span>部</span></p>
        </li>
      </ul>
    );
  }
});

var BoxOfficeTableTitle = React.createClass({
  render: function (){
    return (
      <ul className="box_office_ul box_office_firstUi">
        <li className="box_office_li box_office_num"></li>
        <li className="box_office_li name"><p>影片名称</p></li>
        <li className="box_office_li day_office">
          <p className="sort_p max sortDown_color" data-ctrl="sort" data-mark="rev">
            实时票房
          </p>
        </li>
        <li className="box_office_li ratio">
          <p className="sort_p max" data-ctrl="sort" data-mark="cnt-rate">
            排片占比
          </p>
        </li>
        <li className="box_office_li seat">
          <p className="sort_p min" data-ctrl="sort" data-mark="sale-rate">
            上座率
          </p>
        </li>
        <li className="box_office_li all_office">
          <p className="sort_p min" data-ctrl="sort" data-mark="sum-rev">
            累计票房
          </p>
        </li>
      </ul>
    );
  }
});

var BoxOfficeDateList = React.createClass({
  render: function (){
    return (
      <ul className="box_office_ul">
        <li className="box_office_li box_office_num">1</li>
        <li className="box_office_li name">
          <p className="movie_name">
            <a href="http://pro.mtime.cn/views/movie/movie_detail.html?movieId=196282" className="movie-item-link">寻龙诀</a>
            <span className="movie_yet">已上映6天</span>
          </p>
        </li>
      </ul>
    );
  }
});

var BoxOfficeFooter = React.createClass({
  render: function (){
    return (
      <footer className="footer">
        <p className="p_attention">
          注意：实时票房包含今天未开映场次已售出的票房，数据每30分钟更新一次，上次更新时间11:30
        </p>
        <button className="btn_yDay" data-ctrl="yesterday">查看昨日全国票房</button>
        <p className="p_title">Copyright 2006-2015 Mtime.com Inc. All rights reserved.</p>
      </footer>
    );
  }
});

var FilmTicketBox = React.createClass({
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
      <div>
        <BoxOfficeTitle />
        <div className="index_tab">
          <BoxOfficeDateChoose />
          <div id="calendar_out"></div>
          <div className="get-data-failed" data-mark="data-out">
            <BoxOfficeChartTitle />
            <div className="box_office" id="sort_out">
              <BoxOfficeTableTitle />
              <div id="mymoives_box"></div>
              <BoxOfficeDateList />
            </div>
            <BoxOfficeFooter />
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <FilmTicketBox />,
  document.getElementById('react_tpl_out')
);