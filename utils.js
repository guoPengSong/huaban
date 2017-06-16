/**
 *　　　　　　　　┏┓　　　┏┓+ +
 *　　　　　　　┏┛┻━━━┛┻┓ + +
 *　　　　　　　┃　　　　　　　┃ 　
 *　　　　　　　┃　　　━　　　┃ ++ + + +
 *　　　　　　 ████━████ ┃+
 *　　　　　　　┃　　　　　　　┃ +
 *　　　　　　　┃　　　┻　　　┃
 *　　　　　　　┃　　　　　　　┃ + +
 *　　　　　　　┗━┓　　　┏━┛
 *　　　　　　　　　┃　　　┃　　　　　　　　　　　
 *　　　　　　　　　┃　　　┃ + + + +
 *　　　　　　　　　┃　　　┃　　　　Code is far away from bug with the animal protecting　　　　　　　
 *　　　　　　　　　┃　　　┃ + 　　　　神兽保佑,代码无bug　　
 *　　　　　　　　　┃　　　┃
 *　　　　　　　　　┃　　　┃　　+　　　　　　　　　
 *　　　　　　　　　┃　 　　┗━━━┓ + +
 *　　　　　　　　　┃ 　　　　　　　┣┓
 *　　　　　　　　　┃ 　　　　　　　┏┛
 *　　　　　　　　　┗┓┓┏━┳┓┏┛ + + + +
 *　　　　　　　　　　┃┫┫　┃┫┫
 *　　　　　　　　　　┗┻┛　┗┻┛+ + + +
 */
var utils = (function () {
    return {
        win: function (attr,value) {
            if (value==null){
                return document.documentElement[attr] || document.body[attr];;
            }
            document.documentElement[attr]=document.body[attr]=value;
        },
        jsonParse: function (str) {
            return "JSON" in window ? JSON.parse(str) : eval("(" + str + ")");
        },
        makeArray: function (arg) {
            try {
                return Array.prototype.slice.call(arg);
            } catch (e) {
                var ary = [];
                for (var i = 0; i < arg.length; i++) {
                    ary.push(arg[i]);
                }
                return ary;
            }
        },
        getCss: function (ele, attr) {
            var reg = /^([+-]?[1-9]\d+)(px|pt|em|rem|vh|vw|vmin|vmax|ex|ch)$/;
            var res;
            if (window.getComputedStyle) {
                res = getComputedStyle(ele)[attr];
                return reg.test(res) ? parseFloat(res) : res;
            }
            if (attr == "opacity") {
                attr = "filter";
                reg = /alpha\(opacity=(\d+)\)/;
                return reg.exec(ele.currentStyle[attr])[1] / 100;
            }
            res = ele.currentStyle[attr];
            return reg.test(res) ? parseFloat(res) : res;
        },
        offset: function (ele) {
            var left = ele.offsetLeft;
            var top = ele.offsetTop;
            var parent = ele.offsetParent;
            while (parent) {
                if (window.navigator.userAgent.toUpperCase().indexOf("MSIE 8.0") == -1) {
                    left += parent.clientLeft;
                    top += parent.clientTop;
                }
                left += parent.offsetLeft;
                top += parent.offsetTop;
                parent = parent.offsetParent;
            }
            return {
                left: left,
                top: top
            }
        },
        rnd:function (n, m) {
            n=Number(n);
            m=Number(m);
            if(isNaN(n)||isNaN(m)){
                return Math.random();
            }
            if(n>m){
                var temp=n;
                n=m;
                m=temp;
            }
            return Math.round(Math.random()*(m-n)+n);
        }
    }
})();