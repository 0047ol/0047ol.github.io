window.οnlοad = function() {
    Initialization();
    document.onkeydown = function() {
        var e = window.event || arguments[0];
        if (e.keyCode == 123) {
            return false;
        } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
            return false;
        } else if ((e.shiftKey) && (e.keyCode == 121)) {
            return false;
        } else if ((e.ctrlKey) && (e.keyCode == 85)) {
            return false;
        }
    };
    document.oncontextmenu = function() {
        return false;
    }
}
$(window).on('load',
function(event) {
    $('.preloader').delay(500).fadeOut(500);
});
if ($('.progress-line').length) {
    $('.progress-line').appear(function() {
        var el = $(this);
        var percent = el.data('width');
        $(el).css('width', percent + '%');
    },
    {
        accY: 0
    });
}
function isCloses() {
    window.close();
    window.location="about:blank";
}
function ck() {
    console.profile();
    console.profileEnd();
    if (console.clear) {
        console.clear()
    };
    if (typeof console.profiles == "object") {
        return console.profiles.length > 0;
    }
}
function isExits() {
    if ((window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) || (typeof opera == 'object' && typeof opera.postError == 'function' && console.profile.length > 0)) {
        isCloses();
    }
    if (typeof console.profiles == "object" && console.profiles.length > 0) {
        isCloses();
    }
}
isExits();
window.onresize = function() {
    if ((window.outerHeight - window.innerHeight) > 200) isCloses()
};
function closeWindows() {
    window.open('', '_self', '');
    window.close();
}
function showHelp() {
    showSnackbar('If you have any questions, please send an email to support@0047ol.com, thank you.');
}
function showWarnDialog(url, text) {
    mdui.dialog({
        title: '<strong>免责声明</strong>',
        content: '根据《计算机软件保护条例》第十七条规定：“为了学习和研究软件内含的设计思想和原理，通过安装、显示、传输或者存储软件等方式使用软件的，可以不经软件著作权人许可，不向其支付报酬。”<br />我已知晓该站所有内容均来源于网络，仅限本人交流学习与研究使用，版权归属原版权方所有，版权争议与该站无关，我下载后不能用于商业或非法用途，并会在24小时之内删除，否则后果均由我本人负责承担。',
        buttons: [{
            text: '同意并继续',
            bold: true,
            onClick: function(inst) {
                showDownloadSnackbar(url, text);
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
function showDownloadSnackbar(url, text) {
    if (url.indexOf("http") != -1) {
        if (text.length == 0) {
            showConfirmSnackbar(url, "The download link has been successfully obtained.", "Download");
        } else {
            copyToUrl(text, url);
        }
    } else {
        showSnackbar("download failed. The link address was not successfully obtained.");
    }
}
function copyToUrl(text, url) {
    copyToClipboard(text);
    var msg = '获取成功，密码' + text + '已自动复制，请手动粘贴。';
    showConfirmSnackbar(url, msg, "继续下载");
}
function copyToClipboard(text) {
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
    } catch(err) {
        alert('自动复制失败，请手动复制！');
    }
    document.body.removeChild(textArea);
}
function addPanelItem(tabContent, imageSrc, appName, deviceSystem, appLanguage, latestVersion, toCrack, lastUpdatetime, itemTitleID, itemTooltipID, mduiListID) {
    var container = document.getElementById(tabContent);
    var isCrackicon;
    if (deviceSystem.indexOf("/") == -1) {
        isdeviceSystem = deviceSystem + " only."
    } else {
        isdeviceSystem = " Supported Windows and Mac OS."
    }
    if (toCrack.indexOf("Cracked") == -1) {
        isCrack = "No crack.";
        isCrackicon = " cancel";
    } else {
        isCrack = "Cracked, please check the instructions to install.";
        isCrackicon = " check_circle";
    }
    container.innerHTML = container.innerHTML + "<div class=\"mdui-panel mdui-panel-popout\" mdui-panel><div class=\"mdui-panel-item\"><div class=\"mdui-panel-item-header\"><img src=\"" + imageSrc + "\" width=\"25\" height=\"25\" />&nbsp;<div id=\"" + itemTitleID + "\" class=\"mdui-panel-item-title\">" + appName + "</div><div id=\"" + itemTooltipID + "\"><div class=\"mdui-chip\"><a mdui-tooltip=\"{content: '" + isdeviceSystem + "'}\"><span class=\"mdui-chip-title mdui-text-color-black-secondary mdui-text-color-theme-text\"><i class=\"mdui-icon material-icons\">computer</i>" + deviceSystem + "</span></a></div>&nbsp;<div class=\"mdui-chip\"><a mdui-tooltip=\"{content: '" + appLanguage + " supported.'}\"><span class=\"mdui-chip-title mdui-text-color-black-secondary mdui-text-color-theme-text\"><i class=\"mdui-icon material-icons\">language</i>" + appLanguage + "</span></a></div>&nbsp;<div class=\"mdui-chip\"><a mdui-tooltip=\"{content: 'Latest version " + latestVersion + ".'}\"><span class=\"mdui-chip-title mdui-text-color-black-secondary mdui-text-color-theme-text\"><i class=\"mdui-icon material-icons\">update</i>" + latestVersion + "</span></a></div>&nbsp;<div id=\"thisCrack\" class=\"mdui-chip\"><a mdui-tooltip=\"{content: '" + isCrack + "'}\"><span class=\"mdui-chip-title mdui-text-color-black-secondary mdui-text-color-theme-text\"><i class=\"mdui-icon material-icons\">" + isCrackicon + "</i>" + toCrack + "</span></a></div>&nbsp;<div class=\"mdui-chip\"><a mdui-tooltip=\"{content: 'Last update time " + lastUpdatetime + ".'}\"><span class=\"mdui-chip-title mdui-text-color-black-secondary mdui-text-color-theme-text\"><i class=\"mdui-icon material-icons\">access_time</i>" + lastUpdatetime + "</span></a></div>&nbsp;</div><i class=\"mdui-panel-item-arrow mdui-icon material-icons\">keyboard_arrow_down</i></div><div class=\"mdui-panel-item-body\"><ul id=\"" + mduiListID + "\" class=\"mdui-list\"></ul></div></div>";
}
function addPanelList(divID, appVersion, winDownloadUrl, winDownloadMa, winCrackDownloadUrl, winCrackDownloadMa, macDownloadUrl, macDownloadMa, macCrackDownloadUrl, macCrackDownloadMa, downloadMenuID) {
    var ID = document.getElementById(divID);
    var menuDisplay;
    var winDisplay;
    var macDisplay;
    var winCrackDisplay;
    var macCrackDisplay;
    if (winDownloadUrl.length == 0 && macDownloadUrl.length == 0) {
        menuDisplay = "display :none;";
    }
    if (winDownloadUrl.length == 0) {
        winDisplay = "display :none;";
    }
    if (winCrackDownloadUrl.length == 0) {
        winCrackDisplay = "display :none;";
    }
    if (macDownloadUrl.length == 0) {
        macDisplay = "display :none;";
    }
    if (macCrackDownloadUrl.length == 0) {
        macCrackDisplay = "display :none;";
    }
    ID.innerHTML = ID.innerHTML + "<li class=\"mdui-list-item\"><div class=\"mdui-list-item-content\">" + appVersion + "</div><button class=\"mdui-btn mdui-color-theme-accent mdui-ripple\" mdui-menu=\"{target: '#" + downloadMenuID + "'}\">Download</button><ul class=\"mdui-menu\" id=\"" + downloadMenuID + "\" style=\"" + menuDisplay + "\"><li class=\"mdui-menu-item\" style=\"" + winDisplay + "\"><a onclick=\"showWarnDialog('" + winDownloadUrl + "','" + winDownloadMa + "');\" class=\"mdui-ripple\" ><i class=\"mdui-menu-item-icon mdui-icon material-icons\">file_download</i>Windows</a></li><li class=\"mdui-menu-item\" style=\"" + winCrackDisplay + "\"><a onclick=\"showWarnDialog('" + winCrackDownloadUrl + "','" + winCrackDownloadMa + "');\" class=\"mdui-ripple\" ><i class=\"mdui-menu-item-icon mdui-icon material-icons\">file_download</i>Win Backup</a></li><li class=\"mdui-menu-item\" style=\"" + macDisplay + "\"><a onclick=\"showWarnDialog('" + macDownloadUrl + "','" + macDownloadMa + "');\" class=\"mdui-ripple\" ><i class=\"mdui-menu-item-icon mdui-icon material-icons\">file_download</i>Mac OS</a></li><li class=\"mdui-menu-item\" style=\"" + macCrackDisplay + "\"><a onclick=\"showWarnDialog('" + macCrackDownloadUrl + "','" + macCrackDownloadMa + "');\" class=\"mdui-ripple\" ><i class=\"mdui-menu-item-icon mdui-icon material-icons\">file_download</i>Mac Backup</a></li></ul></li>";
}
function showConfirmSnackbar(url, text, buton) {
    var positionss;
    if (Initialization() != false) {
        positionss = 'right-top';
    } else {
        positionss = 'bottom';
    }
    mdui.snackbar({
        message: text,
        buttonText: buton,
        onClick: function() {},
        onButtonClick: function() {
            window.location.href = url;
        },
        onClose: function() {},
        position: positionss,
        timeout: 0,
        closeOnOutsideClick: false
    });
}
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
function goPC() {
    if (Initialization() == false) {
        mdui.dialog({
            title: '建议使用电脑端浏览器进行访问。',
            buttons: [{
                text: '我知道了'
            }],
            history: false
        });
    }
}
function toCode(str) {
    var c = z.length;
    var a = z.split("");
    var s = "",
    b, b1, b2, b3;
    for (var i = 0; i < str.length; i++) {
        b = str.charCodeAt(i);
        b1 = b % c;
        b = (b - b1) / c;
        b2 = b % c;
        b = (b - b2) / c;
        b3 = b % c;
        s += a[b3] + a[b2] + a[b1];
    }
    return s;
}
function abcd(str) {
    var c = z.length;
    var b, b1, b2, b3, d = 0,
    s;
    s = new Array(Math.floor(str.length / 3));
    b = s.length;
    for (var i = 0; i < b; i++) {
        b1 = z.indexOf(str.charAt(d));
        d++;
        b2 = z.indexOf(str.charAt(d));
        d++;
        b3 = z.indexOf(str.charAt(d));
        d++;
        s[i] = b1 * c * c + b2 * c + b3
    }
    b = eval("String.fromCharCode(" + s.join(',') + ")");
    return b;
}
function isWxnqq() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger\/[0-9]/i)) {
        return "weixin";
    }
    if (ua.match(/QQ\/[0-9]/i)) {
        return "QQ";
    }
    return false;
}
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
function repClassName(id, someClass, otherClass) {
    document.getElementById(id).classList.replace(someClass, otherClass);
}
function setClassName(id, name) {
    document.getElementById(id).className = name;
}
function removeClassName(id, name) {
    document.getElementById(id).classList.remove(name);
}
function addClassName(id, name) {
    document.getElementById(id).classList.add(name);
}
function setDisplay(id, displays) {
    document.getElementById(id).style.display = displays;
}
function setStyles(id, styles) {
    document.getElementById(id).style = styles;
}
function removeElement(id) {
    document.getElementById(id).style.display = "none";
}
$(window).on('load',
function(event) {
    $('.preloader').delay(500).fadeOut(500);
});
function parallaxMouse() {
    if ($('#parallax').length) {
        var scene = document.getElementById('parallax');
        var parallax = new Parallax(scene);
    };
};
if ($('.progress-line').length) {
    $('.progress-line').appear(function() {
        var el = $(this);
        var percent = el.data('width');
        $(el).css('width', percent + '%');
    },
    {
        accY: 0
    });
}
