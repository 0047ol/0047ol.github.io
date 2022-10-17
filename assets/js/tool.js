/**
 * 工具类
 * by 0047ol
 * @time 20200824
 */
class Tool {
  /**
   * 加载CSS
   **/
  static loadCSS(a) {
    var b = document.createElement("link");
    b.href = a;
    b.rel = "stylesheet";
    b.type = "text/css";
    document.getElementsByTagName("head").item(0).appendChild(b);
  }
  /**
   * 选择器
   **/
  static setQuerySelector(a) {
    return document.querySelector(a);
  }
  /**
   * 获取文件路径
   **/
  static getObjectURL(a) {
    if (window.createObjectURL != undefined) {
      return window.createObjectURL(a);
    } else if (window.URL != undefined) {
      return window.URL.createObjectURL(a);
    } else if (window.webkitURL != undefined) {
      return window.webkitURL.createObjectURL(a);
    }
  }
  static replaceNewline(a) {
    a = a.replace(/(\r\n|\n|\r)/g, "<br/>");
	a = a.replace(/(\\r\\n|\\n|\\r)/g, "<br/>");
	return a;
  }
  /**
   * 获取元素是否在可视区域
   **/
  static isElementInViewport(a) {
    var b = a.getBoundingClientRect();
    return b.top > 0 && b.bottom < document.documentElement.clientHeight;
  }
  /**
   * 加载Script
   **/
  static loadJS(a) {
    var b = document.createElement("script");
    b.src = a;
    b.type = "text/javascript";
    document.getElementsByTagName("head").item(0).appendChild(b);
  }
  /**
   * 修改网页图标
   **/
  static setFavicon(a) {
    var b = document.querySelector('link[rel="shortcut icon"]');
    if (b !== null) {
      b.href = a;
    } else {
      b = document.createElement("link");
      b.rel = "shortcut icon";
      b.href = a;
      document.head.appendChild(b);
    }
  }
  /**
   * 取元素首元素
   **/
  static getFirstElement(a) {
    if (a.firstElementChild) {
      return a.firstElementChild;
    } else {
      var b = a.firstChild;
      while (b && 1 !== b.nodeType) {
        b = b.nextSibling;
      }
      return b;
    }
  }
  /**
   * 修改Head标签
   **/
  static setHeadMeta(a, b) {
    document.querySelector('meta[name="' + a + '"]').setAttribute("content", b);
  }
  /**
   * 修改网页标题
   **/
  static setHeadTitle(a) {
    document.title = a;
  }
  /**
   * 打开新窗口
   **/
  static openUrl(a, b) {
    setTimeout(function () {
      window.open(a);
    }, b);
  }
  /**
   * 重定向网页
   **/
  static locaUrl(a, b, c) {
    setTimeout(function () {
      b ? window.location.replace(a) : (window.location.href = a);
    }, c);
  }
  /**
   * 设置网页锚点
   **/
  static locaHash(a) {
    window.location.hash = a.replace("#", "");
  }
  /**
   * 返回上一页
   **/
  static goBack(a) {
    setTimeout(function () {
      window.history.go(-1);
    }, a);
  }
  /**
   * 刷新网页
   **/
  static reLoad(a) {
    setTimeout(function () {
      location.reload();
    }, a);
  }
  /**
   * 平滑的滚动
   **/
  static scrollIntoView(a, b, c) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.scrollIntoView({
      behavior: "smooth",
      block: b
    });
  }
  /**
   * 判断是否空
   **/
  static isEmpty(a) {
    return (
      a == "" ||
      a == "undefined" ||
      a == undefined ||
      a == "null" ||
      a == false ||
      a == 0 ||
      a == null ||
      a == "NaN" ||
      a == NaN ||
      a.length == 0
    );
  }
  /**
   * 判断内容是否相同
   **/
  static isSame(a, b) {
    return a == b || a.length == b.length;
  }
  /**
   * 是否包含文本
   **/
  static isExist(a, b) {
    return a.indexOf(b) != -1;
  }
  /**
   * 获取COOKIE
   **/
  static getCookies(a) {
    return (
      decodeURIComponent(
        document.cookie.replace(
          new RegExp(
            "(?:(?:^|.*;)\\s*" +
              encodeURIComponent(a).replace(/[-.+*]/g, "\\$&") +
              "\\s*\\=\\s*([^;]*).*$)|^.*$"
          ),
          "$1"
        )
      ) || null
    );
  }
  /**
   * 编辑COOKIE
   **/
  static setCookies(a, b, c) {
    a = a + "=" + escape(b);
    Tool.isEmpty(c)
      ? (a += "; expires=Fri,31 Dec 9999 23:59:59 GMT")
      : ((b = new Date()),
        b.setTime(b.getTime() + 1e3 * c),
        (a += "; expires=" + b.toGMTString()));
    document.cookie = a + "; path=/; ";
  }
  /**
   * 删除COOKIE
   **/
  static delCookies(a) {
    document.cookie = a + "=; expires=Thu,01 Jan 1970 00:00:00 UTC; path=/; ";
  }
  /**
   * 获取网址参数
   **/
  static getParam(a, b) {
	 if(Tool.isEmpty(a)){
		a = location.href;
	 }
    return new URL(a).searchParams.get(b);
  }
  /**
   * 解析网址参数为数组
   **/
  static parseUrlQuery(a) {
    if (a.substring(0, 1) == "?") {
      a = a.split("?")[1];
    }
    let b = a.split("#")[0].split("&");
    const c = {};
    b.forEach(function (d) {
      let [e, f = ""] = d.split("=");
      c[e] = f;
    });
    return c;
  }
  /**
   * 序列化数组为网址参数
   **/
  static buildUrlQuery(a) {
    return new URLSearchParams(Object.entries(a)).toString();
  }
  /**
   * 获取文件类型
   **/
  static getFileType(a) {
    var b = a.split("/");
    var c = b[b.length - 1];
    return c.substr(c.lastIndexOf(".") + 1);
  }
  /**
   * 获取网址域名
   **/
  static getUrlDomain(a) {
    return a.split("/")[2];
  }
  /**
   * 获取网页链接的锚点
   **/
  static getHash() {
    return window.location.hash.substr(1);
  }
  /**
   * 获取现在时间戳
   **/
  static getTimeStamp() {
    return parseInt(Date.parse(new Date()).toString().substr(0, 10));
  }
  /**
   * 获取文件后缀
   **/
  static getFileType(a) {
    var b = a.lastIndexOf(".");
    return b != -1 ? a.substring(b + 1, a.length).toLowerCase() : "";
  }
  /**
   * 日期转时间戳
   **/
  static dateToStamp(a) {
    return parseInt(new Date(a).getTime() / 1000);
  }
  /**
   * 时间戳转日期
   **/
  static stampToDate(a, b) {
	b = b || 'Y-m-d';
    var c = function(d) {
        if (d < 10) {
            return'0' + d;
        }
        return d;
    };
    var e = a ? new Date(a) : new Date();
    var f = e.getFullYear();
    var g = c(e.getMonth() + 1);
    var h = c(e.getDate());
    var i = c(e.getHours());
    var j = c(e.getMinutes());
    var k = c(e.getSeconds());
    return b.replace(/Y|m|d|H|i|s/ig,
    function(l) {
        return ({
            Y: f,
            m: g,
            d: h,
            H: i,
            i: j,
            s: k
        })[l];
    });
  }
  /**
   * 时间戳是否同一天
   **/
  static isSameDay(a) {
    return new Date(a).toDateString() === new Date().toDateString();
  }
  /**
   * 是否为电脑的UA
   **/
  static isPC() {
    var a = navigator.userAgent;
    var b = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var c = true;
    for (var i = 0; i < b.length; i++) {
      if (a.indexOf(b[i]) > 0) {
        c = false;
        break;
      }
    }
    if (window.screen.width < 599) {
      c = false;
    }
    return c;
  }
  /**
   * 是否为IOS的UA
   **/
  static isIOS() {
    return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
  }
  /**
   * 是否为QQ的UA
   **/
  static isQQ() {
    return /\sQQ\/\d/i.test(window.navigator.userAgent);
  }
  /**
   * 是否为微信的UA
   **/
  static isWeChat() {
    return /micromessenger/i.test(
      window.navigator.userAgent.match(/MicroMessenger/i)
    );
  }
  /**
   * 是否为支付宝的UA
   **/
  static isAlipay() {
    return /AlipayClient/i.test(window.navigator.userAgent);
  }
  /**
   * 是否为QQ号
   **/
  static isQQNum(a) {
    return /^[1-9][0-9]{4,9}$/gim.test(a);
  }
  /**
   * 是否为手机号
   **/
  static isPhoneNum(a) {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/.test(
      a
    );
  }
  /**
   * 是否为邮箱
   **/
  static isEmail(a) {
    return /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(
      a
    );
  }
  /**
   * 用户名是否合规
   **/
  static checkUserName(a) {
    return /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/.test(a);
  }
  /**
   * 密码是否安全
   **/
  static checkPassword(a) {
    return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,19}$/.test(a);
  }
  /**
   * Unicode编码
   **/
  static encodeUnicode(a) {
    for (var i = [], b = 0; b < a.length; b++)
      i[b] = ("00" + a.charCodeAt(b).toString(16)).slice(-4);
    return "\\u" + i.join("\\u");
  }
  /**
   * Unicode解码
   **/
  static decodeUnicode(a) {
    return unescape(a.replace(/\\/g, "%"));
  }
  /**
   * 去除全部空白
   **/
  static trim(a) {
    return a.replace(/[\r\n\t]/g, "");
  }
  /**
   * 在某后面追加
   **/
  static insertAfter(a, b) {
    var c = b.parentNode;
    if (c.lastChild == b) {
      c.appendChild(a, b);
    } else {
      c.insertBefore(a, b.nextSibling);
    }
  }
  /**
   * 字节大小转换
   **/
  static bytesToSize(a) {
    if (a === 0) return "0 B";
    var b = 1024,
      c = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      d = Math.floor(Math.log(a) / Math.log(b));
    return (a / Math.pow(b, d)).toPrecision(5) + " " + c[d];
  }
  /**
   * 格式化时间文本
   **/
  static formatTime(a) {
    var b = Tool.getTimeStamp() - parseInt(a);
    var c = "刚刚";
    if (b > 31536000) {
      c = Tool.stampToDate(new Date().getTime(), "Y-m-d").replace(new Date().getFullYear() + "-", "" );
    } else if (b > 2592000) {
      c = Math.ceil(b / 2592000) + "个月前";
    } else if (b > 604800) {
      c = Math.ceil(b / 604800) + "周前";
    } else if (b > 86400) {
      c = Math.ceil(b / 86400) + "天前";
    } else if (b > 3600) {
      c = Math.ceil(b / 3600) + "小时前";
    } else if (b > 60) {
      c = Math.ceil(b / 60) + "分钟前";
    } else if (b > 3) {
      c = b + "秒前";
    }
    return c;
  }
  /**
   * 获取文档顶部高度
   **/
  static getScrollTop() {
	return document.documentElement.scrollTop || document.body.scrollTop;
  }
  /**
   * 获取文档滑动高度
   **/
  static getScrollHeight() {
	return document.documentElement.scrollHeight || document.body.scrollHeight;
  }
  /**
   * 获取窗口高度
   **/
  static getClientHeight() {
    return document.documentElement.clientHeight || document.body.clientHeight;
  }
  /**
   * 是否在数组中存在
   **/
  static inArray(a, b) {
    for (var i = 0; i < a.length; i++) {
      if (b === a[i]) {
        return true;
      }
    }
    return false;
  }
  /**
   * 打开QQ
   **/
  static openQQ(a, b) {
    if (b == "group") {
      Tool.openUrl("mqq://card/show_pslcard?src_type=internal&source=sharecard&version=1&uin=" + a + "&type=group",0);
    } else {
      if(Tool.isPC()) {
		  Tool.locaUrl("tencent://message/?&uin=" + a, true, 0);
	  } else {
		  Tool.openUrl("mqq://card/show_pslcard?src_type=internal&source=sharecard&version=1&uin=" + a,0);
	  }
    }
  }
  /**
   * 打开邮箱
   **/
  static sendMail(a) {
    Tool.openUrl("mailto:" + a, 0);
  }
  static openCoolapk(a) {
    Tool.openUrl("coolmarket://u/" + a, 0);
  }
  static createElement(a) {
    return document.createElement(a);
  }
  static isHtmlElement(a) {
    var b = Tool.createElement('div');
    try {
      b.appendChild(a.cloneNode(true));
      return a.nodeType==1 ? true : false;
    } catch(e) {
      return a==window || a==document;
    }
  }
  /**
   * 修改节点HTML内容
   **/
  static setChildHtml(a, b) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.innerHTML = b;
  }
  /**
   * 修改节点TXT文本内容
   **/
  static setChildText(a, b) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.innerText = b;
  }
  /**
   * 隐藏节点
   **/
  static hideChild(a) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.style.display = "none";
  }
  /**
   * 设置节点SRC
   **/
  static setScriptResource(a, b) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    return (a.src = b);
  }
  /**
   * 显示节点
   **/
  static showChild(a) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.style.display = 'block';
  }
  /**
   * 设置display
   **/
  static setDisplay(a, b) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.style.display = b;
  }
  /**
   * 删除节点
   **/
  static removeChild(a) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.parentNode.removeChild(a);
  }
  /**
   * 追加节点内容
   **/
  static append(a, b) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.append(b);
  }
  /**
   * 追加节点内容
   **/
  static appendChild(a, b) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.appendChild(b);
  }
  /**
   * 添加类元素
   **/
  static addClass(a, b) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.classList.add(b);
  }
  /**
   * 替换类元素
   **/
  static toggleClass(a, b) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.classList.toggle(b);
  }
  /**
   * 替换类元素
   **/
  static replaceClass(a, b, c) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.classList.replace(b, c);
  }
  /**
   * 删除类元素
   **/
  static removeClass(a, b) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.classList.remove(b);
  }
  /**
   * 修改节点属性
   **/
  static setAttribute(a, b, c) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.setAttribute(b, c);
  }
  /**
   * 删除节点属性
   **/
  static removeAttribute(a, b) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.removeAttribute(b);
  }
  /**
   * 设置输入框内容
   **/
  static setValue(a, b) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.value = b;
  }
  /**
   * 设置选择框状态
   **/
  static setChecked(a, b) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.checked = b;
  }
  /**
   * 设置禁用状态
   **/
  static setDisabled(a) {
    Tool.setAttribute(a, "disabled", true);
  }
  /**
   * 设置启用状态
   **/
  static setEnabled(a) {
    Tool.removeAttribute(a, "disabled");
  }
  /**
   * 设置节点样式
   **/
  static setStyle(a, b) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.style = a.style.cssText + b;
  }
  /**
   * 设置节点宽度
   **/
  static setWidth(a, b) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.width = b;
  }
  /**
   * 设置节点高度
   **/
  static setHeight(a, b) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    Tool.setQuerySelector(a).height = b;
  }
  /**
   * 设置节点内边距  上 右 下 左
   **/
  static setPadding(a, b, c, d, e) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.style.padding = b + " " + c + " " + d + " " + e;
  }
  /**
   * 设置节点外边距  上 右 下 左
   **/
  static setMargin(a, b, c, d, e) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.style.margin = b + " " + c + " " + d + " " + e;
  }
  /**
   * 设置节点偏移  上 右 下 左
   **/
  static setOffset(a, b, c, d, e) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.style.offset = b + " " + c + " " + d + " " + e;
  }
  /**
   * 设置背景
   **/
  static setBackground(a, b) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    a.style.background = b;
  }
  /**
   * 随机生成UUID
   **/
  static getUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
  /**
   * 读取LocalStorage
   **/
  static getLocalStorage(a) {
    return localStorage.getItem(a);
  }
  /**
   * 修改LocalStorage
   **/
  static setLocalStorage(a, b) {
    localStorage.setItem(a, b);
  }
  /**
   * 删除LocalStorage
   **/
  static removeLocalStorage(a) {
    localStorage.removeItem(a);
  }
  /**
   * 读取SESSION
   **/
  static getSession(a) {
    return sessionStorage.getItem(a);
  }
  /**
   * 修改SESSION
   **/
  static setSession(a, b) {
    sessionStorage.setItem(a, b);
  }
  /**
   * Radio是否有遗漏的选择
   **/
  static checkedSelectRadio(a) {
    var chkObjs = document.getElementsByName(a);
    var isChecked = false;
    for (var i = 0; i < chkObjs.length; i++) {
      if (chkObjs[i].checked) {
        chk = i;
        isChecked = true;
        break;
      }
    }
    return isChecked;
  }
  /**
   * 合并数组去重
   **/
  static arrMergededup(a) {
    var c = new Set(a);
    for (i = 0; i < b.length; i++) {
      c.add(b[i]);
    }
    return Array.from(c).sort();
  }
  /**
   * 获取类元素
   **/
  static getClass(a) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    return a.className;
  }
  /**
   * 获取是否包含类元素
   **/
  static hasClass(a, b) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    return a.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)"));
  }
  /**
   * 获取节点内容
   **/
  static getChildText(a) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    return a.innerText;
  }
  /**
   * 获取输入框内容
   **/
  static getValue(a) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    return a.value;
  }
  /**
   * 获取输入框内容
   **/
  static getFiles(a) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    return a.files;
  }
  /**
   * 获取选择框状态
   **/
  static getChecked(a) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    return a.checked;
  }
  /**
   * 获取节点SRC
   **/
  static getScriptResource(a) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    return a.src;
  }
  /**
   * 获取节点属性
   **/
  static getAttribute(a, b) {
    if (!Tool.isHtmlElement(a)) {
      a = Tool.setQuerySelector(a);
    }
    return a.getAttribute(b);
  }
  /**
   * 获取Head标签
   **/
  static getHeadMeta(a, b) {
    if (!Tool.isHtmlElement(a)) {
      a = document.querySelector('meta[name="' + a + '"]');
    }
    return a.getAttribute(b);
  }
  /**
   * 是否链接url
   **/
  static isUrl(a) {
    var b = new RegExp(
      "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
      "i"
    );
    return b.test(a);
  }
  /**
   * 明文字符串打码
   **/
  static addStrMosaic(a) {
    if (a != null && a != undefined) {
      if (isPhoneNum(a)) {
        return regPhoneNum(a);
      } else if (isQQNum(a)) {
        return regQQNum(a);
      } else if (isEmails(a)) {
        return regEmails(a);
      } else {
        if (a.length <= 3) {
          return "*" + a.substring(1, a.length);
        } else {
          return a.substring(0, 2) + "*****" + a.substr(-2, 2);
        }
      }
    } else {
      return "";
    }
  }
  /**
   * 邮箱账号打码
   **/
  static regEmails(a) {
    if (String(a).indexOf("@") > 0) {
      var c = a.split("@"),
        d = "";
      if (c[0].length > 3) {
        for (var i = 0; i < c[0].length - 3; i++) {
          d += "*";
        }
      }
      var b = c[0].substr(0, 3) + d + "@" + c[1];
    }
    return b;
  }
  /**
   * 手机号打码
   **/
  static regPhoneNum(a) {
    return a.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
  }
  /**
   * QQ号码打码
   **/
  static regQQNum(a) {
    return a.replace(/(\d{3})\d{4,5}(\d{3})/, "$1****$2");
  }
  /**
   * 是否有HTML
   **/
  static isHTML(a) {
    var reg = /<[a-z][\s\S]*>/i;
    return reg.test(a);
  }
  /**
   * 是否为IP
   **/
  static isIPaddress(a) {
    var myreg =
      /^([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}$/gi;
    return myreg.test(a);
  }
  /**
   * 是否为网址链接
   **/
  static isWebsitelink(a) {
    var myreg =
      /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
    return myreg.test(a);
  }
  /**
   * 是否为正确的身份证号
   **/
  static isIDcard(a) {
    var myreg =
      /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
    return myreg.test(a);
  }
  /**
   * 是否为数字
   **/
  static isNumberss(a) {
    var myreg = /^\d+$/;
    return myreg.test(a);
  }
  /**
   * 是否存在中文
   **/
  static isChinese_index(a) {
    var myreg = /[\u4e00-\u9fa5]/gm;
    return myreg.test(a);
  }
  /**
   * 是否结尾
   **/
  static validationEnd(a, b) {
    a = a.toLowerCase();
    var c = a.length - b.length;
    if (a.substr(c, b.length) == b) {
      return true;
    }
    return false;
  }
  /**
   * 是否开头
   **/
  static validationStart(a, b) {
    a = a.toLowerCase();
    if (a.substr(0, b.length) == b) {
      return true;
    }
    return false;
  }
  /**
   * 转义
   **/
  static addslashes(a) {
    return a
      .replace(/\\/g, "\\\\")
      .replace(/\u0008/g, "\\b")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\f/g, "\\f")
      .replace(/\r/g, "\\r")
      .replace(/'/g, "\\'")
      .replace(/"/g, '\\"');
  }
  /**
   * 是否为JSON
   **/
  static isJSON(a) {
    if (typeof a == "string") {
      try {
        var b = JSON.parse(a);
        if (typeof b == "object" && b) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
  }
  /**
   * HTML转义
   **/
  static HtmlDecode(a) {
    var b = "";
    if (a.length == 0) {
      return "";
    }
    b = a.replace(/&/g, "&amp;");
    b = b.replace(/</g, "&lt;");
    b = b.replace(/>/g, "&gt;");
    b = b.replace(/ /g, "&nbsp;");
    b = b.replace(/\'/g, "&#39;");
    b = b.replace(/\"/g, "&quot;");
    b = b.replace(/\n/g, "<br/>");
    return b;
  }
  /**
   * HTML反转义
   **/
  static HtmlEncode(a) {
    var b = "";
    if (a.length == 0) {
      return "";
    }
    b = a.replace(/&amp;/g, "&");
    b = b.replace(/&lt;/g, "<");
    b = b.replace(/&gt;/g, ">");
    b = b.replace(/&nbsp;/g, " ");
    b = b.replace(/&#39;/g, "'");
    b = b.replace(/&quot;/g, '"');
    b = b.replace(/<br\/>/g, "\n");
    return b;
  }
  /**
   * Base64编码
   **/
  static decodeBase64(a) {
    var b = "";
    var c,
      d,
      e = "";
    var f,
      g,
      h,
      i = "";
    var j = 0;
    var k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    do {
      c = a.charCodeAt(j++);
      d = a.charCodeAt(j++);
      e = a.charCodeAt(j++);
      f = c >> 2;
      g = ((c & 3) << 4) | (d >> 4);
      h = ((d & 15) << 2) | (e >> 6);
      i = e & 63;
      if (isNaN(d)) {
        h = i = 64;
      } else if (isNaN(e)) {
        i = 64;
      }
      b = b + k.charAt(f) + k.charAt(g) + k.charAt(h) + k.charAt(i);
      c = d = e = "";
      f = g = h = i = "";
    } while (j < a.length);
    return b;
  }
  /**
   * Base64解码
   **/
  static encodeBase64(a) {
    var b = "";
    var c,
      d,
      e = "";
    var f,
      g,
      h,
      i = "";
    var j = 0;
    if (a.length % 4 != 0) {
      return "";
    }
    var k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var l = /[^A-Za-z0-9\+\/\=]/g;
    if (l.exec(a)) {
      return "";
    }
    do {
      f = k.indexOf(a.charAt(j++));
      g = k.indexOf(a.charAt(j++));
      h = k.indexOf(a.charAt(j++));
      i = k.indexOf(a.charAt(j++));
      c = (f << 2) | (g >> 4);
      d = ((g & 15) << 4) | (h >> 2);
      e = ((h & 3) << 6) | i;
      b = b + String.fromCharCode(c);
      if (h != 64) {
        b += String.fromCharCode(d);
      }
      if (i != 64) {
        b += String.fromCharCode(e);
      }
      c = d = e = "";
      f = g = h = i = "";
    } while (j < a.length);
    return b;
  }
  /**
   * 是否全由数字组成
   **/
  static isDigit(a) {
    return !/^[0-9]{1,20}$/.exec(a);
  }
  /**
   * 是否相同字符（如111、aaa）连续3位或3位以上
   **/
  static checkSame(a) {
    return /(\w)*(\w)\2{2}(\w)*/g.test(a);
  }
  /**
   * 是否连续字符（如123、abc）连续3位或3位以上
   **/
  static checkContinuous(a) {
    var b = a.split("");
    var c = true;
    for (var i = 1; i < b.length - 1; i++) {
      var firstIndex = b[i - 1].charCodeAt();
      var secondIndex = b[i].charCodeAt();
      var thirdIndex = b[i + 1].charCodeAt();
      thirdIndex - secondIndex == 1;
      secondIndex - firstIndex == 1;
      if (thirdIndex - secondIndex == 1 && secondIndex - firstIndex == 1) {
        c = false;
      }
    }
    return c;
  }
  /**
   * 去掉前后空格
   **/
  static setTrim(a) {
    return a.replace(/^\s+|\s+$/g, "");
  }
  /**
   * 创建XMLHttpRequest
   **/
  static createXMLHttpRequest() {
    if (window.XMLHttpRequest) {
      return new XMLHttpRequest();
      if (xmlHttp.overrideMimeType) xmlHttp.overrideMimeType("text/xml");
    } else if (window.ActiveXObject) {
      try {
        return new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
      }
    }
  }
  static sendHttpRequest(a, b, c, d, e, f) {
	let mXMLHttpRequest = Tool.createXMLHttpRequest();
	mXMLHttpRequest.open(a, b, true);
	if (!Tool.isEmpty(d)) {
		for(var key in d){
    		mXMLHttpRequest.setRequestHeader(key, d[key]);
		}
	} else {
		mXMLHttpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	};
	mXMLHttpRequest.send(c);
	mXMLHttpRequest.onloadend = function() {
		e(this.responseText);
	}
	mXMLHttpRequest.onerror = function() {
		f();
	}
  }
  static isPWApp(a) {
    if (Tool.isEmpty(a)) {
        a = 'standalone';
    };
    return (window.navigator[a] === true || window.matchMedia('(display-mode: ' + a + ')').matches || Tool.getParam('', 'pwa') == 'true');
  };
  static IframeUrlChangeEvent(a, b) {
      if (window.MutationObserver || window.webkitMutationObserver) {
        //Chrome
        var callback = function(MutationRecord, target) {
          MutationRecord.forEach(function(mutation) {
            b(mutation.oldValue,mutation.target.src);
          });
        };
		var observer;
        if (window.MutationObserver) {
          observer = new MutationObserver(callback);
        } else {
		  observer = new webkitMutationObserver(callback);
		}
        observer.observe(a, {
          attributes: true,
          childList: true,
          characterData: true,
          attributeOldValue: true
        });
      } else if (a.addEventListener) {
        //Firefox,Opera,Safari
        a.addEventListener("DOMAttrModified", function(event){
			b(event.prevValue,event.newValue,event.target);
		}, false);
      } else if (a.attachEvent) {
        //IE
        a.attachEvent("onpropertychange", function(event){
			b(event.prevValue,event.newValue);
		});
      }
   };
  static getDates(a) { 
      let b = new Date(); 
      b.setDate(new Date().getDate() + a);
      return Tool.stampToDate(b.getTime(), "Y-m-d"); 
   }
}