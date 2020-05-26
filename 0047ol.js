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



//Photoshop
addPanelItem("tab-content-adobe", "https://www.adobe.com/content/dam/cc/cn/ccpp-related/Adobe_Photoshop_logo_RGB.svg", "Adobe Photoshop", "Win/Mac", "简体中文", "21.1.2.136", "集成破解", "2020-04-15", "TitlePs", "TooltipPs", "listPs");
addPanelList("listPs", "Adobe Photoshop CC 2020", "https://cloud189-henan-person.oos-hazz.ctyunapi.cn/1306ad8b-9aa6-481e-bbc6-02e768a818a0?x-amz-UFID=8151228760771254&x-amz-CLIENTNETWORK=UNKNOWN&x-amz-SHID=169098942&x-amz-FSIZE=1866888181&Expires=1590499858&x-amz-UID=262174363&response-content-disposition=attachment%3Bfilename%3D%22Adobe_Photoshop_2020_21.1.3.190_ACR12.2.1_SP_20200518.rar%22&AWSAccessKeyId=532482dfdc85e5d60592&x-amz-limitrate=61440&x-amz-CLOUDTYPEIN=PERSON&x-amz-CLIENTTYPEIN=WEB&Signature=zojPH87LIo%2BTDWZAMX2tv4x6K9Y%3D", "", "MAC", "", "ps20");
addPanelList("listPs", "Adobe Photoshop CC 2019", "https://cloud189-shandong-person.oos-sdqd.ctyunapi.cn/b1f0630e-1da8-4117-b6a3-3d7281af9b66?x-amz-UFID=1131137414383895&x-amz-CLIENTNETWORK=UNKNOWN&x-amz-SHID=169098942&x-amz-FSIZE=1905346326&Expires=1590496769&x-amz-UID=262174363&response-content-disposition=attachment%3Bfilename%3D%22Adobe_Photoshop_CC_2019_20.0.9.113_ACR12.1_SP_20200329.rar%22&AWSAccessKeyId=caf5e6901807aca55a45&x-amz-limitrate=61440&x-amz-CLOUDTYPEIN=PERSON&x-amz-CLIENTTYPEIN=WEB&Signature=nxWViWHhvKHQF6l2bhnY/BuSUKk%3D", "", "MAC", "", "ps19");
addPanelList("listPs", "Adobe Photoshop CC 2018", "WIN", "", "MAC", "", "ps18");
addPanelList("listPs", "Adobe Photoshop CC 2017", "WIN", "", "MAC", "", "ps17");
addPanelList("listPs", "Adobe Photoshop CS6", "WIN", "", "MAC", "", "ps6");




//Illustrator
addPanelItem("tab-content-adobe", "https://www.adobe.com/content/dam/cc/icons/illustrator.svg", "Adobe Illustrator", "Win/Mac", "简体中文", "24.1.2.408", "集成破解", "2020-04-16", "TitleAi", "TooltipAi", "listAi");
addPanelList("listAi", "Adobe Illustrator CC 2020", "https://cloud189-anhui-person.oos-ahwh.ctyunapi.cn/c5f52e6e-2256-41af-bb81-a0eb5db33296?x-amz-UFID=6132227595060501&x-amz-CLIENTNETWORK=UNKNOWN&x-amz-SHID=169098942&x-amz-FSIZE=1404840067&Expires=1590509111&x-amz-UID=262174363&response-content-disposition=attachment%3Bfilename%3D%22Adobe_Illustrator_2020_24.1.2.408_SP_20200416.rar%22&AWSAccessKeyId=caf5e6901807aca55a45&x-amz-limitrate=61440&x-amz-CLOUDTYPEIN=PERSON&x-amz-CLIENTTYPEIN=WEB&Signature=acHySFTUqBKZKytj%2BbTSkQs1NMQ%3D", "", "MAC", "", "ai20");
addPanelList("listAi", "Adobe Illustrator CC 2019", "WIN", "", "MAC", "", "ai19");
addPanelList("listAi", "Adobe Illustrator CC 2018", "WIN", "", "MAC", "", "ai18");
addPanelList("listAi", "Adobe Illustrator CC 2017", "WIN", "", "MAC", "", "ai17");
addPanelList("listAi", "Adobe Illustrator CS6", "WIN", "", "MAC", "", "ai6");



//After Effects
addPanelItem("tab-content-adobe", "https://www.adobe.com/content/dam/cc/icons/aftereffects.svg", "After Effects", "Win/Mac", "简体中文", "17.0.6.35", "集成破解", "2020-04-14", "TitleAe", "TooltipAe", "listAe");
addPanelList("listAe", "After Effects CC 2020", "https://cloud189-henan-person.oos-hazz.ctyunapi.cn/238fa3d7-20c8-4495-b305-b823e8974e10?x-amz-UFID=8150328757752447&x-amz-CLIENTNETWORK=UNKNOWN&x-amz-SHID=169098942&x-amz-FSIZE=2030799562&Expires=1590513864&x-amz-UID=262174363&response-content-disposition=attachment%3Bfilename%3D%22Adobe_After_Effects_2020_17.1.0.72_ACR12.2.1_SP_20200518.rar%22&AWSAccessKeyId=532482dfdc85e5d60592&x-amz-limitrate=61440&x-amz-CLOUDTYPEIN=PERSON&x-amz-CLIENTTYPEIN=WEB&Signature=E3/GZcSudSAoXc%2BUvdqDib2ezX8%3D", "", "MAC", "", "ae20");
addPanelList("listAe", "After Effects CC 2019", "WIN", "", "MAC", "", "ae19");
addPanelList("listAe", "After Effects CC 2018", "WIN", "", "MAC", "", "ae18");
addPanelList("listAe", "After Effects CC 2017", "WIN", "", "MAC", "", "ae17");
addPanelList("listAe", "After Effects CS6", "WIN", "", "MAC", "", "ae6");



//Premiere
addPanelItem("tab-content-adobe", "https://www.adobe.com/content/dam/cc/icons/pr_cc_app_RGB.svg", "Adobe Premiere Pro", "Win/Mac", "简体中文", "14.1.0.116", "集成破解", "2020-04-15", "TitlePr", "TooltipPr", "listPr");
addPanelList("listPr", "Adobe Premiere Pro CC 2020", "https://cloud189-anhui-person.oos-ahwh.ctyunapi.cn/c2d2152c-7ca7-44c5-b2ce-817c0ebee8f2?x-amz-UFID=5150328816074457&x-amz-CLIENTNETWORK=UNKNOWN&x-amz-SHID=169098942&x-amz-FSIZE=1567559521&Expires=1590510500&x-amz-UID=262174363&response-content-disposition=attachment%3Bfilename%3D%22Adobe_Premiere_Pro_2020_14.2.0.47_SP_20200518.rar%22&AWSAccessKeyId=caf5e6901807aca55a45&x-amz-limitrate=61440&x-amz-CLOUDTYPEIN=PERSON&x-amz-CLIENTTYPEIN=WEB&Signature=byhNhXhLfiXEiHBu/RUciEfW/zs%3D", "", "MAC", "", "pr20");
addPanelList("listPr", "Adobe Premiere Pro CC 2019", "WIN", "", "MAC", "", "pr19");
addPanelList("listPr", "Adobe Premiere Pro CC 2018", "WIN", "", "MAC", "", "pr18");
addPanelList("listPr", "Adobe Premiere Pro CC 2017", "WIN", "", "MAC", "", "pr17");
addPanelList("listPr", "Adobe Premiere Pro CS6", "WIN", "", "MAC", "", "pr6");



//Dreamweaver
addPanelItem("tab-content-adobe", "https://www.adobe.com/content/dam/cc/icons/dw_cc_app_RGB.svg", "Adobe Dreamweaver", "Win/Mac", "简体中文", "20.1.0.15211", "集成破解", "2020-02-12", "TitleDw", "TooltipDw", "listDw");
addPanelList("listDw", "Adobe Dreamweaver CC 2020", "https://cloud189-anhui-person.oos-ahwh.ctyunapi.cn/c5ff4d0a-2392-4ba7-9b90-eb3a3e9ab38d.rar?x-amz-UFID=1131137414383711&x-amz-CLIENTNETWORK=UNKNOWN&x-amz-SHID=169098942&x-amz-FSIZE=1101537082&Expires=1590506873&x-amz-UID=262174363&response-content-disposition=attachment%3Bfilename%3D%22Adobe_Dreamweaver_2020_20.1.0.15211_SP_20200212.rar%22&AWSAccessKeyId=caf5e6901807aca55a45&x-amz-limitrate=61440&x-amz-CLOUDTYPEIN=PERSON&x-amz-CLIENTTYPEIN=WEB&Signature=1kQtOSAy65N0PWhcmle7vlNsn7Y%3D", "", "MAC", "", "dw20");
addPanelList("listDw", "Adobe Dreamweaver CC 2019", "WIN", "", "MAC", "", "dw19");
addPanelList("listDw", "Adobe Dreamweaver CC 2018", "WIN", "", "MAC", "", "dw18");
addPanelList("listDw", "Adobe Dreamweaver CC 2017", "WIN", "", "MAC", "", "dw17");
addPanelList("listDw", "Adobe Dreamweaver CS6", "WIN", "", "MAC", "", "dw6");




//Audition
addPanelItem("tab-content-adobe", "https://www.adobe.com/content/dam/cc/icons/audition.svg", "Adobe Audition", "Win/Mac", "简体中文", "13.0.5.36", "集成破解", "2020-04-14", "TitleAu", "TooltipAu", "listAu");
addPanelList("listAu", "Adobe Audition CC 2020", "https://cloud189-henan-person.oos-hazz.ctyunapi.cn/89197dc6-4d01-4575-925b-ea1675a7c5c3?x-amz-UFID=9154128804202033&x-amz-CLIENTNETWORK=UNKNOWN&x-amz-SHID=169098942&x-amz-FSIZE=414852047&Expires=1590501659&x-amz-UID=262174363&response-content-disposition=attachment%3Bfilename%3D%22Adobe_Audition_2020_13.0.6.38_SP_20200518.rar%22&AWSAccessKeyId=532482dfdc85e5d60592&x-amz-limitrate=61440&x-amz-CLOUDTYPEIN=PERSON&x-amz-CLIENTTYPEIN=WEB&Signature=PSndWF2yltIhyjqlDnc3W2/ZCxU%3D", "", "MAC", "", "au20");
addPanelList("listAu", "Adobe Audition CC 2019", "WIN", "", "MAC", "", "au19");
addPanelList("listAu", "Adobe Audition CC 2018", "WIN", "", "MAC", "", "au18");
addPanelList("listAu", "Adobe Audition CC 2017", "WIN", "", "MAC", "", "au17");
addPanelList("listAu", "Adobe Audition CS6 v", "WIN", "", "MAC", "", "au6");



//Lightroom
addPanelItem("tab-content-adobe", "https://www.adobe.com/content/dam/cc/icons/lightroom-classic.svg", "Adobe Lightroom Classic", "Win/Mac", "简体中文", "9.2.1.202004070813", "集成破解", "2020-04-14", "TitleLr", "TooltipLr", "listLr");
addPanelList("listLr", "Adobe Lightroom Classic CC 2020", "https://cloud189-shandong-person.oos-sdqd.ctyunapi.cn/2ee98510-484e-4480-a9b9-405cb4bc68c1?x-amz-UFID=6130127112421340&x-amz-CLIENTNETWORK=UNKNOWN&x-amz-SHID=169098942&x-amz-FSIZE=1084988880&Expires=1590506673&x-amz-UID=262174363&response-content-disposition=attachment%3Bfilename%3D%22Adobe_Lightroom_Classic_9.2.1.202004070813_SP_20200414.rar%22&AWSAccessKeyId=caf5e6901807aca55a45&x-amz-limitrate=61440&x-amz-CLOUDTYPEIN=PERSON&x-amz-CLIENTTYPEIN=WEB&Signature=v0zckOL69C9cUOVutvR8zluudMs%3D", "", "MAC", "", "lr20");
addPanelList("listLr", "Adobe Lightroom Classic CC 2019", "WIN", "", "MAC", "", "lr19");
addPanelList("listLr", "Adobe Lightroom Classic CC 2018", "WIN", "", "MAC", "", "lr18");




//Media Encoder
addPanelItem("tab-content-adobe", "https://www.adobe.com/content/dam/cc/us/en/products/media-encoder/media-encoder.svg", "Adobe Media Encoder", "Win/Mac", "简体中文", "14.1.0.155", "集成破解", "2020-04-14", "TitleMe", "TooltipMe", "listMe");
addPanelList("listMe", "Adobe Media Encoder CC 2020", "WIN", "", "https://cloud189-anhui-person.oos-ahwh.ctyunapi.cn/edf23e8f-ae24-46b2-808c-71de5651da88?x-amz-UFID=2151228798072289&x-amz-CLIENTNETWORK=UNKNOWN&x-amz-SHID=169098942&x-amz-FSIZE=939375020&Expires=1590505658&x-amz-UID=262174363&response-content-disposition=attachment%3Bfilename%3D%22Adobe_Media_Encoder_2020_14.2.0.45_SP_20200518.rar%22&AWSAccessKeyId=caf5e6901807aca55a45&x-amz-limitrate=61440&x-amz-CLOUDTYPEIN=PERSON&x-amz-CLIENTTYPEIN=WEB&Signature=TMoMoGdgPJltzkjomIDA/wYYfq4%3D", "", "me20");
addPanelList("listMe", "Adobe Media Encoder CC 2019", "WIN", "", "MAC", "", "me19");
addPanelList("listMe", "Adobe Media Encoder CC 2018", "WIN", "", "MAC", "", "me18");
addPanelList("listMe", "Adobe Media Encoder CC 2017", "WIN", "", "MAC", "", "me17");
addPanelList("listMe", "Adobe Media Encoder CS6", "WIN", "", "MAC", "", "me6");




//会声会影
addPanelItem("tab-content-corel", "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=70304127,2974181107&amp;fm=11&amp;gp=0.jpg", "Corel VideoStudio Pro", "Windows", "简体中文", "23.1.0.482", "手动破解", "2020-03-31", "TitleHshy", "TooltipHshy", "listHshy");
addPanelList("listHshy", "Corel VideoStudio Pro 2020", "https://pan.masuit.com/%E4%BC%9A%E5%A3%B0%E4%BC%9A%E5%BD%B1/?rootId=0ABNyUlpZBcXVUk9PVA", "", "", "", "hshy20");
addPanelList("listHshy", "Corel VideoStudio Pro 2019", "https://node4.mkdmirror.workers.dev/VideoStudio/videostudio.zip", "", "", "", "hshy19");
addPanelList("listHshy", "Corel VideoStudio Pro 2018", "https://odobagg-my.sharepoint.com/personal/ph4fpnnul8_od_obagg_com/_layouts/15/onedrive.aspx?originalPath=aHR0cHM6Ly9vZG9iYWdnLW15LnNoYXJlcG9pbnQuY29tLzpmOi9nL3BlcnNvbmFsL3BoNGZwbm51bDhfb2Rfb2JhZ2dfY29tL0V1bUFfc1RSRXpWRHBpVmJjN2xiU3ZnQmpYb0pBMkpzeGZEVGZoY3MwQl9aUFE_cnRpbWU9TGFLRUtXY0IyRWc&id=%2Fpersonal%2Fph4fpnnul8_od_obagg_com%2FDocuments%2F%E4%BC%9A%E5%A3%B0%E4%BC%9A%E5%BD%B1%2F2018", "", "", "", "hshy18");
addPanelList("listHshy", "Corel VideoStudio Pro X10", "WIN", "", "", "", "hshy10");
addPanelList("listHshy", "Corel VideoStudio Pro X9", "WIN", "", "", "", "hshy9");
addPanelList("listHshy", "Corel VideoStudio Pro X8", "WIN", "", "", "", "hshy8");




//达芬奇
addPanelItem("tab-content-bmd", "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=942019405,3671026692&fm=26&gp=0.jpg", "DaVinci Resolve Studio", "Win/Mac", "简体中文", "16.2.2.11", "手动破解", "2020-05-20", "TitleDfq", "TooltipDfq", "listDfq");
addPanelList("listDfq", "DaVinci Resolve Studio v16", "WIN", "", "MAC", "", "dfq16");
addPanelList("listDfq", "DaVinci Resolve Studio v15", "WIN", "", "MAC", "", "dfq15");
addPanelList("listDfq", "DaVinci Resolve Studio v14", "WIN", "", "MAC", "", "dfq14");
addPanelList("listDfq", "DaVinci Resolve Studio v13", "WIN", "", "MAC", "", "dfq13");
addPanelList("listDfq", "DaVinci Resolve Studio v12", "WIN", "", "MAC", "", "dfq12");
addPanelList("listDfq", "DaVinci Resolve Studio v11", "WIN", "", "MAC", "", "dfq11");
addPanelList("listDfq", "DaVinci Resolve Studio v10", "WIN", "", "MAC", "", "dfq10");




//Vegas
addPanelItem("tab-content-magix", "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1450597258,1630441204&fm=26&gp=0.jpg", "Magix Vegas Pro", "Windows", "简体中文", "17.0.0.421", "手动破解", "2020-02-20", "TitleVv", "TooltipVv", "listVv");
addPanelList("listVv", "Magix Vegas Pro v17", "https://node4.mkdmirror.workers.dev/VegasPro/vegaspro17.zip", "", "", "", "vv17");
addPanelList("listVv", "Magix Vegas Pro v16", "https://node4.mkdmirror.workers.dev/VegasPro/vegaspro16.zip", "", "", "", "vv16");
addPanelList("listVv", "Magix Vegas Pro v15", "WIN", "", "", "", "vv15");
addPanelList("listVv", "Magix Vegas Pro v14", "WIN", "", "", "", "vv14");
addPanelList("listVv", "Magix Vegas Pro v13", "WIN", "", "", "", "vv13");




//Edius
addPanelItem("tab-content-grass", "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3772118960,2431841205&fm=26&gp=0.jpg", "Grass Valley Edius Pro", "Windows", "简体中文", "9.20.3340", "手动破解", "2018-12-09", "TitleEd", "TooltipEd", "listEd");
addPanelList("listEd", "Grass Valley Edius Pro v9", "https://node4.mkdmirror.workers.dev/Edius9/crack.zip", "", "", "", "ed9");
addPanelList("listEd", "Grass Valley Edius Pro v8", "WIN", "", "", "", "ed8");
addPanelList("listEd", "Grass Valley Edius Pro v7", "WIN", "", "", "", "ed7");
addPanelList("listEd", "Grass Valley Edius Pro v6", "WIN", "", "", "", "ed6");


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
