;var formateMain = function () {};
formateMain.prototype = {
  dateFormat: function (d, type, f) {
    /**
     * d: 两种类型可传；1，new Date()对象；2，'20151101'，字符串；
     * type: 返回值类型，0为当前日期，-1为当前日期前一天，1为当前日期后一天；注：type值范围为正负28之间；
     * f: 返回值格式，'YY-MM-DD'为年-月-日，'MM-DD'为月-日；返回值格式，'YYMMDD'为年月日，'MMDD'为月日；
     */
    // var d = typeof(d) == 'object' ? d : new Date();
    var yy, mm, dd;
    if (d == null) {
      d = new Date();
      yy = d.getFullYear();
      mm = d.getMonth() + 1;
      dd = d.getDate();
    } else if (typeof (d) == 'object') {
      yy = d.getFullYear();
      mm = d.getMonth() + 1;
      dd = d.getDate();
    } else if (typeof (d) == 'string' || typeof (d) == 'number') {
      d = String(d);
      yy = Number(d.substr(0, 4));
      mm = Number(d.substr(4, 2));
      dd = Number(d.substr(6));
    };
    var str = [],
      k,
      dt = dd + type,
      val = [];

    if(f.indexOf('-') == -1){
      str[0] = f.substr(0, 2);
      str[1] = f.substr(2, 2);
      if(f.split('').length >= 6){
        str[2] = f.substr(4, 2);
      };
    }else{
      str = f.split('-')
    };

    var ds = new Date(yy, mm, 0).getDate();

    if (dt > ds) {
      yy = mm == 12 ? (yy + 1) : yy;
      mm = mm == 12 ? 1 : (mm + 1);
      dd = dt - ds;
    } else if (dt <= 0) {
      mm = mm == 1 ? 12 : (mm - 1);
      yy = mm == 1 ? (yy - 1) : yy;
      dd = (new Date(yy, mm, 0).getDate()) + dt;
    } else {
      dd = dd + type;
    };
    //保证yy mm dd 占两位字符
    mm = mm < 10 ? '0' + mm : mm;
    dd = dd < 10 ? '0' + dd : dd;    

    for (k in str) {
      switch (str[k]) {
        case 'YY':
          val[k] = yy;
          break;
        case 'MM':
          val[k] = mm;
          break;
        case 'DD':
          val[k] = dd;
          break;
      };
    };

    if(f.indexOf('-') == -1){
      return val.join('');
    }else{
      return val.join('-');
    };
  },
  unitFormat: function (num, decimal) {
      /**
       * 可用数值小于1万时，不显示单位“万”的情况。
       * decimal: 保留小数位数，-1为默认值（万，保留1位；亿保留两位；）。如果不为-1，则统一保留decimal设定的小数位数。
       */
      var dw = decimal == -1 ? 1 : decimal,
        dy = decimal == -1 ? 2 : decimal,
        val;
      var c = {
        w: '\u4E07',
        y: '\u4EBF'
      };
      if ((num / Math.pow(10, 8)).toFixed(dy) >= 1) {
        val = (num / Math.pow(10, 8)).toFixed(dy) + '<span class="unit-num">' + c.y + '</span>';
      } else if ((num / Math.pow(10, 4)).toFixed(dw) >= 1) {
        val = (num / Math.pow(10, 4)).toFixed(dw) + '<span class="unit-num">' + c.w + '</span>';
      } else {
        val = num;
      };
      return val;
  },
  boxOfficeFormat: function (num, decimal) {
      /**
       * 用于大于100且小于1000的仍以“万”为单位,显示0.1万；
       * decimal: 保留小数位数，-1为默认值（万，保留1位；亿保留两位；）。如果不为-1，则统一保留decimal设定的小数位数。
       * 
       */
      var dw = decimal == -1 ? 1 : decimal,
        dy = decimal == -1 ? 2 : decimal,
        val;
      var c = {
        w: '\u4E07',
        y: '\u4EBF'
      };
      if ((num / Math.pow(10, 8)).toFixed(dy) >= 1) {
        val = (num / Math.pow(10, 8)).toFixed(dy) + '<span class="unit-num">' + c.y + '</span>';
      } else if ((num / Math.pow(10, 4)).toFixed(dw) >= 0.1) {
        val = (num / Math.pow(10, 4)).toFixed(dw) + '<span class="unit-num">' + c.w + '</span>';
      }else if(num > 0){
        val = '<0.1' + '<span class="unit-num">' + c.w + '</span>';
      }else{
        // val = (num / Math.pow(10, 4)).toFixed(dw);
        // val = val == '0.0' ? 0 : val;
        // c.w = val == 0 ? '' : c.w;
        val = '0' + '<span class="unit-num"> </span>';
      };
      return val;
  },
  percentFormat: function (num, decimal) {
    /**
     * decimal:默认2小数，可以不传
     */
    var dec = decimal != null ? decimal : 2;
    var val = (num * 100).toFixed(dec);
    return val;
  },
  //对数据数据做快排
  dataSort: function (arr, kw) {
    function quickSort(arr) {
      if (arr.length <= 1) {
        return arr;
      };
      var num = Math.floor(arr.length / 2);
      var arrV = arr.splice(num, 1)[0];
      var numValue = arrV[kw];
      var left = [];
      var right = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][kw] < numValue) {
          left.push(arr[i]);
        }
        else {
          right.push(arr[i]);
        }
      }
      return quickSort(left).concat(arrV, quickSort(right));
    };
    return quickSort(arr);
  },
  //按字节截取
  byteCut: function (str, limit) {  
    var _c = str;
    var c = _c.replace(/[^\u0000-\u00ff]/g,"aa"),
      count = 0, i = 0;
    if(c.length > limit){
      for(i; i<str.length; i++){
        var _clen = str.charAt(i).replace(/[^\u0000-\u00ff]/g,"aa").length;
        if(_clen == 1){
          count ++;
        }else if(_clen == 2){
          count += 2;
        };
        if(count > limit){
          break;
        };
      };
    };
    return str.substring(0,i);
  }
};
var fmt = new formateMain();