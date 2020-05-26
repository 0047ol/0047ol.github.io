$(function() {
    Initialization(); //手机端适配
    setTabContent();
    goPC();
    //showTipsDialog('提示','这是个公告','我知道了','');
    //回到顶部
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('#fab-animation').removeClass('mdui-fab-hide');
        } else {
            $('#fab-animation').addClass('mdui-fab-hide');
        }
    });
    /*/屏蔽键盘事件
            document.onkeydown = function (){
                var e = window.event || arguments[0];
                //F12
                if(e.keyCode == 123){
                    return false;
                //Ctrl+Shift+I
                }else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)){
                    return false;
                //Shift+F10
                }else if((e.shiftKey) && (e.keyCode == 121)){
                    return false;
                //Ctrl+U
                }else if((e.ctrlKey) && (e.keyCode == 85)){
                    return false;
                }
            };
    //屏蔽鼠标右键
    document.oncontextmenu = function (){
      return false;
    }*/
});

//网页加载结束
window.onload = function() {
    setDisplay('outer', 'none');
    setDisplay('body-content', '');
    setDisplay('progress', 'none');
}

//声明弹窗
function showWarnDialog(url, text) {
    mdui.dialog({
        title: '<strong>免责声明</strong>',
        content: '根据《计算机软件保护条例》第十七条规定：“为了学习和研究软件内含的设计思想和原理，通过安装、显示、传输或者存储软件等方式使用软件的，可以不经软件著作权人许可，不向其支付报酬。”<br />我已知晓该站所有内容均来源于网络，仅限本人交流学习与研究使用，版权归属原版权方所有，版权争议与该站无关，我下载后不能用于商业或非法用途，并会在24小时之内删除，否则后果均由我本人负责承担。',
        buttons: [{
            text: '同意并继续',
            bold: true,
            onClick: function(inst) {
                showDownloadSnackbar(url, text);
                //showSnackbar("下载失败。当前正在维护中。");
            }
        },
        {
            text: '取消',
            onClick: function(inst) {}
        }],
        modal: true,
        history: false,
        closeOnEsc: false
    });
}

//公告弹窗
function showTipsDialog(tle, msg, btn, link) {
    mdui.dialog({
        title: tle,
        content: msg,
        buttons: [{
            text: btn,
            bold: true,
            onClick: function(inst) {
                if (link.length != 0) {
                    window.location.href = link;
                }
            }
        }],
        modal: true,
        history: false,
        closeOnEsc: false
    });
}

//下载提示
function showDownloadSnackbar(url, text) {
  if (url.indexOf("http") != -1){
    if (text.length == 0){
        showConfirmSnackbar(url,"已成功获取到下载链接。","点击下载");
    }else{
        copyToClipboard(text,url);
    }
  }else{
    showSnackbar("下载失败。未成功获取到下载链接。");
  }
}

//复制到剪贴板
function copyToClipboard(text,url) {
    if (text.indexOf('-') !== -1) {
        let arr = text.split('-');
        text = arr[0] + arr[1];
    }
    var textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        var successful = document.execCommand('copy');
        var msg = '已获取下载链接，密码' +text+ '将会自动复制。';
        showConfirmSnackbar(url,msg,"继续下载");
    } catch(err) {
        mdui.prompt('手机请长按选择复制，电脑请用鼠标选择后按键盘Ctrl+C复制','复制失败',
        function (value) {
          window.location.href = url;
        },function (value) {
        },{
          defaultValue: '密码：'+text,
          confirmText: '我已复制',
          cancelText: '',
          modal: true,
          history: false,
          closeOnEsc: false
        });
    }
    document.body.removeChild(textArea);
}

//增加表头
function addPanelItem(tabContent, imageSrc, appName, deviceSystem, appLanguage, latestVersion, toCrack, lastUpdatetime, itemTitleID, itemTooltipID, mduiListID) {
    var container = document.getElementById(tabContent);
    var isCrackicon;
    //判断平台
    if (deviceSystem.indexOf("/") == -1) {
        isdeviceSystem = " 仅支持" + deviceSystem + "平台。"
    } else {
        isdeviceSystem = " 支持Win与Mac双平台。"
    }
    //修改图标
    if (toCrack.indexOf("集成") == -1) {
        isCrack = " 需按照说明，进行手动破解。";isCrackicon = " info";
    } else {
        isCrack = " 已集成破解，一键安装即可。";isCrackicon = " check_circle";
    }
    container.innerHTML = container.innerHTML + "<div class=\"mdui-panel mdui-panel-popout\" mdui-panel><div class=\"mdui-panel-item\"><div class=\"mdui-panel-item-header\"><img src=\"" + imageSrc + "\" width=\"25\" height=\"25\" />&nbsp;<div id=\"" + itemTitleID + "\" class=\"mdui-panel-item-title\">" + appName + "</div><div id=\"" + itemTooltipID + "\"><div class=\"mdui-chip\"><a mdui-tooltip=\"{content: '" + isdeviceSystem + "'}\"><span class=\"mdui-chip-title mdui-text-color-black-secondary\"><i class=\"mdui-icon material-icons\">computer</i>" + deviceSystem + "</span></a></div>&nbsp;<div class=\"mdui-chip\"><a mdui-tooltip=\"{content: '已支持" + appLanguage + "。'}\"><span class=\"mdui-chip-title mdui-text-color-black-secondary\"><i class=\"mdui-icon material-icons\">language</i>" + appLanguage + "</span></a></div>&nbsp;<div class=\"mdui-chip\"><a mdui-tooltip=\"{content: '最新版本号：" + latestVersion + "'}\"><span class=\"mdui-chip-title mdui-text-color-black-secondary\"><i class=\"mdui-icon material-icons\">update</i>" + latestVersion + "</span></a></div>&nbsp;<div class=\"mdui-chip\"><a mdui-tooltip=\"{content: '" + isCrack + "'}\"><span class=\"mdui-chip-title mdui-text-color-black-secondary\"><i class=\"mdui-icon material-icons\">" + isCrackicon + "</i>" + toCrack + "</span></a></div>&nbsp;<div class=\"mdui-chip\"><a mdui-tooltip=\"{content: '最近更新时间：" + lastUpdatetime + "'}\"><span class=\"mdui-chip-title mdui-text-color-black-secondary\"><i class=\"mdui-icon material-icons\">access_time</i>" + lastUpdatetime + "</span></a></div>&nbsp;</div><i class=\"mdui-panel-item-arrow mdui-icon material-icons\" mdui-tooltip=\"{content: '点击展开',position: 'left'}\">keyboard_arrow_down</i></div><div class=\"mdui-panel-item-body\"><ul id=\"" + mduiListID + "\" class=\"mdui-list\"></ul><div class=\"mdui-panel-item-actions\"><button class=\"mdui-btn mdui-ripple\" mdui-panel-item-close=\"\"  mdui-tooltip=\"{content: '点击收起',position: 'left'}\">收起</button></div></div></div>";
}

//增加一列
function addPanelList(divID, appVersion, winDownloadUrl, winDownloadMa, macDownloadUrl, macDownloadMa, downloadMenuID) {
    var ID = document.getElementById(divID);
    var winDisplay;
    var macDisplay;
    var menuDisplay;
    if (winDownloadUrl.length == 0) {
        winDisplay = "display :none;";
    }
    if (macDownloadUrl.length == 0) {
        macDisplay = "display :none;";
    }
    if (winDownloadUrl.length == 0 && macDownloadUrl.length == 0) {
        menuDisplay = "display :none;";
    }
    ID.innerHTML = ID.innerHTML + "<li class=\"mdui-list-item\"><div class=\"mdui-list-item-content\">" + appVersion + "</div><button class=\"mdui-btn mdui-color-theme-accent mdui-ripple\" mdui-menu=\"{target: '#" + downloadMenuID + "'}\">下载</button><ul class=\"mdui-menu\" id=\"" + downloadMenuID + "\" style=\"" + menuDisplay + "\"><li class=\"mdui-menu-item\" style=\"" + winDisplay + "\"><a onclick=\"showWarnDialog('" + winDownloadUrl + "','" + winDownloadMa + "');\" class=\"mdui-ripple\" ><i class=\"mdui-menu-item-icon mdui-icon material-icons\">file_download</i>Win版本下载</a></li><li class=\"mdui-menu-item\" style=\"" + macDisplay + "\"><a onclick=\"showWarnDialog('" + macDownloadUrl + "','" + macDownloadMa + "');\" class=\"mdui-ripple\" ><i class=\"mdui-menu-item-icon mdui-icon material-icons\">file_download</i>Mac版本下载</a></li></ul></li>";
}

//Snackbar提示跳转
function showConfirmSnackbar(url, text,buton) {
    var positionss;
    if (Initialization() != false) {
        positionss = 'right-top';
    } else {
        positionss = 'bottom';
    }
    mdui.snackbar({
        message: text,
        buttonText: buton,
        onClick: function() {
            //触碰
        },
        onButtonClick: function() {
          window.location.href = url;
        },
        onClose: function() {
            //关闭
        },
        position: positionss,
        timeout: 0,
        closeOnOutsideClick: false
    });
}

//Snackbar提示
function showSnackbar(message) {
    var positions;
    if (Initialization() != false) {
        positions = 'right-top'
    } else {
        positions = 'bottom';
    }
    mdui.snackbar({
        message: message,
        position: positions
    });
}

//手机弹窗
function goPC() {
    if (Initialization() == false) {
      mdui.alert('建议使用电脑端浏览器进行访问。',
      function(){
      },{
          confirmText: '我知道了'
      });
        //window.close(); //关闭窗口
    }
}

//选项卡适配
function setTabContent() {
    if (Initialization() == false) {
        //选项卡图标
        removeElement('tab-img-adobe'); //Adobe选项卡
        removeElement('tab-img-corel'); //Corel选项卡
        removeElement('tab-img-bmd'); //DFQ选项卡
        removeElement('tab-img-magix'); //Magix选项卡
        removeElement('tab-img-grass'); //Grass选项卡
        //Adobe选项卡
        setClassName('TitlePs', '');
        setClassName('TitleAi', '');
        setClassName('TitleAe', '');
        setClassName('TitlePr', '');
        setClassName('TitleDw', '');
        setClassName('TitleAu', '');
        setClassName('TitleLr', '');
        setClassName('TitleMe', '');
        removeElement('TooltipPs');
        removeElement('TooltipAi');
        removeElement('TooltipAe');
        removeElement('TooltipPr');
        removeElement('TooltipDw');
        removeElement('TooltipAu');
        removeElement('TooltipLr');
        removeElement('TooltipMe');
        //Corel选项卡
        setClassName('TitleHshy', '');
        removeElement('TooltipHshy');
        //DFQ选项卡
        setClassName('TitleDfq', '');
        removeElement('TooltipDfq');
        //Magix选项卡
        setClassName('TitleVv', '');
        removeElement('TooltipVv');
        //Grass选项卡
        setClassName('TitleEd', '');
        removeElement('TooltipEd');
    } else {
        //选项卡标题
        removeElement('tab-title-adobe'); //Adobe选项卡
        removeElement('tab-title-corel'); //Corel选项卡
        removeElement('tab-title-bmd'); //DFQ选项卡
        removeElement('tab-title-magix'); //Magix选项卡
        removeElement('tab-title-grass'); //Grass选项卡
    }
}

//判断浏览器
function Initialization() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

//设置Class
function setClassName(id, name) {
    document.getElementById(id).className = name;
}

//设置Display
function setDisplay(id, displays) {
    document.getElementById(id).style.display = displays;
}

//删除元素
function removeElement(id) {
    document.getElementById(id).style.display = "none";
}
