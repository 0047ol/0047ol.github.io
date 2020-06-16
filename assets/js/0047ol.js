var link = window.location.href;
//var web = link.match(/(\S*)\//)[1];
var web = "https://www.0047ol.com";
if (link.indexOf('&url=') != -1){
   url = link.match(/\&url=(\S*)/)[1];
}
window.onload=function(){
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
function mb(istf){
	document.body.innerHTML = "";
	document.body.style.backgroundColor = "#28254C";
    var box = document.createElement("div");
    box.className = "box";
    document.body.appendChild(box);
	var box_ghost = document.createElement("div");
    box_ghost.className = "box__ghost";
    box.appendChild(box_ghost);
	var symbol1 = document.createElement("div");
    symbol1.className = "symbol";
	box_ghost.appendChild(symbol1);
	var symbol2 = document.createElement("div");
    symbol2.className = "symbol";
	box_ghost.appendChild(symbol2);
	var symbol3 = document.createElement("div");
    symbol3.className = "symbol";
	box_ghost.appendChild(symbol3);
	var symbol4 = document.createElement("div");
    symbol4.className = "symbol";
	box_ghost.appendChild(symbol4);
	var symbol5 = document.createElement("div");
    symbol5.className = "symbol";
	box_ghost.appendChild(symbol5);
	var symbol6 = document.createElement("div");
    symbol6.className = "symbol";
	box_ghost.appendChild(symbol6);
	var box_ghost_container = document.createElement("div");
    box_ghost_container.className = "box__ghost-container";
	box_ghost.appendChild(box_ghost_container);
	var box_ghost_eyes = document.createElement("div");
    box_ghost_eyes.className = "box__ghost-eyes";
	box_ghost_container.appendChild(box_ghost_eyes);
	var box_eye_left = document.createElement("div");
    box_eye_left.className = "box__eye-left";
	box_ghost_eyes.appendChild(box_eye_left);
	var box_eye_right = document.createElement("div");
    box_eye_right.className = "box__eye-right";
	box_ghost_eyes.appendChild(box_eye_right);
	var box_ghost_bottom = document.createElement("div");
    box_ghost_bottom.className = "box__ghost-bottom";
	box_ghost_container.appendChild(box_ghost_bottom);
	var div1 = document.createElement("div");
	box_ghost_bottom.appendChild(div1);
	var div2 = document.createElement("div");
	box_ghost_bottom.appendChild(div2);
	var div3 = document.createElement("div");
	box_ghost_bottom.appendChild(div3);
	var div4 = document.createElement("div");
	box_ghost_bottom.appendChild(div4);
	var div5 = document.createElement("div");
	box_ghost_bottom.appendChild(div5);
	var box_ghost_shadow = document.createElement("div");
    box_ghost_shadow.className = "box__ghost-shadow";
	box_ghost.appendChild(box_ghost_shadow);
	var box_description = document.createElement("div");
    box_description.className = "box__description";
    box.appendChild(box_description);
	var box_description_container = document.createElement("div");
    box_description_container.className = "box__description-container";
    box_description.appendChild(box_description_container);
	var description_title = document.createElement("div");
    description_title.className = "box__description-title";
    box_description_container.appendChild(description_title);
	var description_text = document.createElement("div");
    description_text.className = "box__description-text";
    box_description_container.appendChild(description_text);
	var description_msg = document.createElement("div");
    description_msg.className = "box_description-msg";
    box_description_container.appendChild(description_msg);
	if (istf == true){
	changeFavicon("https://www.0047ol.com/logo.png");
	document.title = "使用电脑访问";
	description_title.innerHTML = "嘿咻";
	description_text.innerHTML = "<div id=\"typed-strings\"><p>当前手机端在完善中，请晚点再来哦~</p><p>使用电脑浏览器打开品尝，体验更佳哦~</p></div><span id=\"typed\"></span>";
	}else if (istf == false){
	changeFavicon("https://www.0047ol.com/logo.png");
	document.title = "错误";
	description_title.id = "description_title";
	description_text.id = "description_text";
	description_msg.innerHTML = "<span class=\"cell\"><div class=\"num\">3 2 1 0</div></span>&nbsp;&nbsp;&nbsp;&nbsp;秒后返回<dot>...</dot>";
    var tle = ["阿哦", "我天", "哎呀", "OMG", "噗～", "oh no...", "抱歉", "END", "ERROR"];
    var msg = ["看来是找不到你要的那一页了", "你要找的那一页可能在宇宙中漂泊", "你要找的那一页可能已经去火星了", "你要找的那页可能被外星人绑架了", "你要找的那一页可能被黑客盗走了", "你要找的那一页可能在银河中漂流", "你要找的那页可能已经飞出大气层", "你要找的那页可能已经穿过太阳系", "当前页面正在努力完善中ing..."];
    description_title.innerHTML = tle[parseInt(Math.random() * tle.length)];
    description_text.innerHTML = msg[parseInt(Math.random() * msg.length)];
	  setTimeout(function(){
		window.location.href = 'index.html';
	  },3000);
	}
}
    
	function vx(){
	changeFavicon("https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico");
	document.title = "添加好友";
	document.body.innerHTML = "";
    document.body.style.backgroundColor = "#333333";
	var preloader = document.createElement("div");
    preloader.className = "preloader";
    document.body.appendChild(preloader);
	var loader_34 = document.createElement("div");
    loader_34.className = "loader_34";
    preloader.appendChild(loader_34);
	var ytp_spinner = document.createElement("div");
    ytp_spinner.className = "ytp-spinner";
    loader_34.appendChild(ytp_spinner);
	var ytp_spinner_container = document.createElement("div");
    ytp_spinner_container.className = "ytp-spinner-container";
    ytp_spinner.appendChild(ytp_spinner_container);
	var ytp_spinner_rotator = document.createElement("div");
    ytp_spinner_rotator.className = "ytp-spinner-rotator";
    ytp_spinner_container.appendChild(ytp_spinner_rotator);
	var ytp_spinner_left = document.createElement("div");
    ytp_spinner_left.className = "ytp-spinner-left";
    ytp_spinner_rotator.appendChild(ytp_spinner_left);
	var ytp_spinner_circle1 = document.createElement("div");
    ytp_spinner_circle1.className = "ytp-spinner-circle";
    ytp_spinner_left.appendChild(ytp_spinner_circle1);
	var ytp_spinner_right = document.createElement("div");
    ytp_spinner_right.className = "ytp-spinner-right";
    ytp_spinner_rotator.appendChild(ytp_spinner_right);
	var ytp_spinner_circle2 = document.createElement("div");
    ytp_spinner_circle2.className = "ytp-spinner-circle";
    ytp_spinner_right.appendChild(ytp_spinner_circle2);
	var containers = document.createElement("div");
    containers.className = "container";
	containers.style = "padding: 50px;";
    document.body.appendChild(containers);
	var old_template = document.createElement("div");
    old_template.className = "old-template";
    containers.appendChild(old_template);
	var main_impowerBox = document.createElement("div");
    main_impowerBox.className = "main impowerBox";
    old_template.appendChild(main_impowerBox);
	var loginPanel_normalPanel = document.createElement("div");
    loginPanel_normalPanel.className = "loginPanel normalPanel";
    main_impowerBox.appendChild(loginPanel_normalPanel);
	var titles = document.createElement("div");
    titles.className = "title";
	titles.style = "color:#FFFFFF";
	titles.innerHTML = "我的微信二维码";
    loginPanel_normalPanel.appendChild(titles);
	var waiting_panelContent = document.createElement("div");
    waiting_panelContent.className = "waiting panelContent";
    loginPanel_normalPanel.appendChild(waiting_panelContent);
	var wrp_code = document.createElement("div");
    wrp_code.className = "wrp_code";
	waiting_panelContent.appendChild(wrp_code);
	var qrcode_lightBorder = document.createElement("img");
    qrcode_lightBorder.className = "qrcode lightBorder";
	qrcode_lightBorder.src = "https://www.0047ol.com/wechat.jpg";
	wrp_code.appendChild(qrcode_lightBorder);
	var info = document.createElement("div");
    info.className = "info";
	waiting_panelContent.appendChild(info);
	var wx_default_tip = document.createElement("div");
    wx_default_tip.className = "status status_browser js_status js_wx_default_tip normal";
	wx_default_tip.id = "wx_default_tip";
	info.appendChild(wx_default_tip);
	var p1 = document.createElement("p");
	p1.innerHTML = "请用微信扫描此二维码加我为好友";
    p1.style = "color:#FFFFFF";
	wx_default_tip.appendChild(p1);
  }
	
	function qq(){
	changeFavicon("https://im.qq.com/favicon.ico");
	document.title = "打开浏览器";
	document.body.innerHTML = "";
	document.body.style.backgroundColor = "#f2f2f2";
	var ui_containers = document.createElement("section");
    ui_containers.className = "ui-container ui-row ui-whitespace";
    document.body.appendChild(ui_containers);
	var notice = document.createElement("section");
    notice.id = "notice";
    ui_containers.appendChild(notice);
	var block = document.createElement("div");
    block.className = "demo-block";
    notice.appendChild(block);
	var ui_dialog = document.createElement("div");
    ui_dialog.className = "ui-dialog";
	ui_dialog.id = "dialog"
    block.appendChild(ui_dialog);
	var ui_dialog_cnt = document.createElement("div");
    ui_dialog_cnt.className = "ui-dialog-cnt";
    ui_dialog.appendChild(ui_dialog_cnt);
	var ui_dialog_bd = document.createElement("div");
    ui_dialog_bd.className = "ui-dialog-bd";
	ui_dialog_cnt.appendChild(ui_dialog_bd);
	var title = document.createElement("h3");
	title.innerHTML = "复制成功";
	ui_dialog_bd.appendChild(title);
	var message = document.createElement("p");
	message.innerHTML = "网址链接已成功复制，请打开浏览器粘贴访问。";
	ui_dialog_bd.appendChild(message);
	var ui_dialog_ft = document.createElement("div");
    ui_dialog_ft.className = "ui-dialog-ft";
	ui_dialog_cnt.appendChild(ui_dialog_ft);
	var button = document.createElement("button");
	button.id = "btn"
	button.setAttribute("data-role","button");
	button.setAttribute("type","button");
	button.innerHTML = "我知道了";
    ui_dialog_ft.appendChild(button);
	var sections = document.createElement("section");
    block.appendChild(sections);
	var containers = document.createElement("div");
    containers.id = "container";
	containers.className = "container";
	containers.style = "margin-top: 5.0625rem;";
    sections.appendChild(containers);
	var picon = document.createElement("div");
	picon.style = "width: 80px; height: 80px; margin: 0 auto; display: block; margin-top: 1px;";
	containers.appendChild(picon);
	var icon = document.createElement("img");
	icon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAYAAABwWUfkAAAKxUlEQVR4nO2dW2wU1xnH/7O79trrK2CwDTEQAgSDw00KVAXloRXkpVGThifymiK1yoVA27RqQXaitg9Vn1qpalUJ3oqStBVBqlSiioYkoKRV3ADmYggyxjdssL2+e727p/q8O2Z2Pbtzdj0zO/Pt/CRkYy1mdn77nXPmO985Bx7FgULvUgjB7s0e74XojgCjcWAsBoRjj7/OAahSgGo/UB0AanyJ7+sCQHMQeLs+cV+4oCiK+0W/0QNxexbojQB9UWAkCsRN+L1BH9AYAFaXAGtLga3lwAmXfgBcKfqVLoj2aWA4GaHTZliVwEctQDLy15QAB6qAtkZ3iHeN6Ld6Ic6MAANzDriYNPZXAp9scrZwR4tu7Yf4eBL4fNK+qM0XH4Ang8D+CuD0OudJd6Tow10QFyaAoTkg5oDryQW6mRU+oKkUuN7sHOGOEv1qN8TpYSDG5AGAbiwN4K5tKbxwR4g+ch/iwzDwwIH9rxnQDd5bAVzeXDjhBRe9tgOiJwLwe4pfDDXpu0PAxQIM3Aom+hudEDTIKkZI+I/qgdYG+4TbLvpYL8SpYWA0ast/51j8CrAnBFyyqTm3VfTumxDXZoC5YminJVkRAF6rA1otTrzYJrruKsSjIo/iTJCAQ8uA99ZbJ5tE+6z65UjmoZdd8SRng0Ls/RFg501rx6SWRfSBryEujPN5LrYaErGqBBhoMT+yLWu6n78D8dF4cTw2mQ0N1KI7zZVtSdO9/zbEeU9y3lALWHXF/NtnakRvvp6YG/ZYOiEfMLnDnMg2NaJ33/Ikm8lUHFDazYtsU0RTc90+ZcZv8kin6itzZC9Z9L5OiM8mzLgUDz0m4kCtCX32kkQfvgdxuUhz1nZCBY1lS4zsvEX/oh/igxFvdG0Xs3FgQ0f+tzvvUXfoKwinl/hwg6LyOzXA2Q25jcbzTpg0JeeRPeyHhMV35S4656b7xbsQfZ7kgiGSrWmu/39Oot99APGPMXMK5D3yh7rMjddzk52T6F8OePPJTuHuLPCD+/KypUUf/Bpi1gtlx0CGPxiVvxpp0V5SxHk8jAK7JOexAzIvevYWxBSXaPYnv9LtYfCe/jct9zpD0W0DEF9yyGMHgR8vAyrKEs8osSjwr3Hg0pj7hVPZdPe27I9chs/RlGcNu21tTBrPVQO/XgPsCQKB5O2gdzwYA86EgaPdcHWKj4oVflIP/CpDkaHhc/TRHvdLrgsCJxuBb5Y9lozkJ7zeD7y5HHi9Uf3IuxMqVjhrMDDLKvrvYfe+eZWXVgDfCmV/zfHlwCaD1zidGwa1ABlFvzsA0cdgPdTRWuNgbQgAB1wumnrfVVczd0AZRZ8NA1EGyZG1JcZvolQBlvuNXuV8hqJA64C+7Iyir0gO251OR8S486WUYj+T2vO/juj/XFf097oguKQ6fzZs/JqeGPA+k1Kongzdra7oczmk1pzOlWHg3ETmR+UZAfxmCBhjIpqekmjrrfSfLxL9zgAEh75Z5dEccLIPOBUG4mnvqyMC/LQf+PNgAS/QZOgtXtRJVy9KmGy/CXGVSf+spcIPrAsBW6qBLX7g7AwQHgP6Zhd/ANxOiQJENKs9dCtMaIg+5C2Kcz1H6oA/NiX86mbG3J4J80hwfiz1RqSIpo1jIl5hAQvupZV7pYi+xrBvLlbS4zVFtFG+1JVQL0VTk+Wpf5QQUBYCfCHNHDUzqCpIfUcp89EcN5F5czXw/Vr92Sl/cir6xrTAoXu0MLkQV2gddzSBuyD6tR6eiy7aVgjU+LOnQasVBS20y9+4bZdlC5OagfVC093BtH+OS0w00/2YYvgx166kWRBNW0NxZEyiTIgk32dY4Tqt+fAuiH7INEkikxcgxxzr1SmVrea9Ld1+ygmEZQQyqQjVQy0emRf9uyG+q1/DMgKLRXQ/0y2UISsafEWrXde8aOmb4UJGizyi1QHZvOgxxhMZwzKDMZq9Y9p5zSQ/wOxFD0pE6kic1XlmKUwXi+huCdEyUe9WUiOacR/dJSFxmPH7T+mjOROTkPioCIot5kVXc9Zd5KLLk8OPhGim87HzSIiWGbC5lbJkEM9/qeEsWiJaBxgXQ5ZrRbOOaAnRdzg33Smii7yPvstYdJm2j24sKfDVWEncOOklMzJ3K2q3PC/69ZW8jrrXQsFqWMLMOKJXJ4OY/XM0LbeZ8UQ/Fl0ntRGV+4gljy3IClPRtGfLb9ckWusF0S1lBb0my4gVcUSXazrkBdHbygt0NRYTSyuSS2cqzneKslzTMS98+/sneA7IYmllr+lwnqKs0ORHUgZjtQz7aWq6s9Vsc56i3Bh8/H2K6OagzqtdTtSgOJ+z6PNPPW6lU0S3MOynqbZ5MkvTzXXmKr1DShH9pyYopcy6LCpwHc0S0UNMs2LrSlP/vihhwm0mi0bc/VlkDjKN6IPVqX9fJJpb3lsg+w6IPQxF02Y16v4lKotEv1xr92XZQBbRNxiK3qEz1lok+mQDlACnflpkF82tMJDUPVe5+Oe6kxovcIvqbDKZRTSNsdT8thZd0X9bD6WES1QbRDQ30U9kGGNlnKbczumZuogi+uVl+j/PKPq7NalHE7gWkdi0PCOMCgNXBoDWBv05i4yiTzRAWc3kUWsuLnSDmvLggslgTFGAwWcyT0xlrTB5qcaSa7KdzjkF4zpCb0b4LEcymqcoiuOQ6F0+WwvsLU8kT2i/kjEB/HscGGKwT7fMcUiGoumAs3f6vRNmnUxTKZDtgDPpg8LpyML/MtmhniPC4OBw6YPC//M0lBD7elF3slPyMVha3z6dtJpHYaHK3fYtciVg0qKpWiHoRbVjILuHckhV56Tu5w2JKTCPwrMhCPyhSb6gU2owpuXFuxDnwt4ovJBQGe/Ujhwky46602nqgOiJ5PRPPEyChMUNRtl6ovPqde9vg1Lu9de2Q7f8hTyzlXnrOrbK66/thgr+zm7Ib6FFXk23yuF7EGeG2a5ocRT0xDOTQ7+sJe8+Wsu+TohLk667b66CqkZGt+e/ZCrvPlrLZ5uheMkU66j0LU2yypIjWmX3LYh2Lx9uOkZ5bBlMiWiVL5+Gsonh2q1CQXMLZkhWMfUhqXOr14ybQaUfmMxz4JUJ05+GP90E5WCV7nliHhJQEcG4CX1yOpakPf65Ecq3qxMX7SEH3ar6EiC605oYsSy/9dFTUH5YB9Ry3pXQRKi8eqDFuobQtFF3NuquQjzyDh/XZX66cRnw3noLJZs56s7Gw2eg7Cr3UqbprAjMr3WzVLKKLRGtcqwX4tQwz1Ntc4HGLntCwKXN9oxZTUmB5sPeTogvijRtWuEDjtcDbRlWVFhBwUSrrE3OaxfDpAgJ3h0CLm6y/8mz4KKJI/chPgwDD5iepkc3eG8FcNmmZlr3GpwgWuXVbojTw4n1UBygG7uVDh+XrNK0EkeJVjncBXFhAhiac9+KViXZRNPKievNzkkOOlK0Sms/xMeTwOeT2bd4dAL0jPpkENhfAZxe57zsr6NFa3mrF+IvI87sx/dXAp8UYICVC64RreWVLoj26cTWjnTUol3R7lMSZ4/QQTNrSoADVUBbhtWLTsOVotN5owfi9izQGwH6osBI1Jyac6rRagwkdrBfW5oYWJ2od+ekHAvRmTjeC3Evkjg/eiyaWPBOLQCt9aYeoEpJRKf2z0o/0FwGvO1SoZkg0R7FAID/A1qLoBB9zAV1AAAAAElFTkSuQmCC";
	icon.style = "width: 80px; height: 80px; margin: 0 auto; display: block; margin-top: 1px;";
	picon.appendChild(icon);
	var titles = document.createElement("h3");
	titles.innerHTML = "<strong>使用外部浏览器访问</strong>";
	titles.style = "font-size: 1.25rem; margin-top: 21px; text-align: center;";
	containers.appendChild(titles);
	var messages = document.createElement("p");
	messages.style = "font-size: 0.875rem; line-height: 1.45rem; margin-top: 0.7rem; color: #878B99;text-align: center;";
	messages.innerHTML = "由于QQ内置浏览器的限制，建议<br/>复制链接后使用外部浏览器打开。";
	containers.appendChild(messages);
	var footer = document.createElement("div");
    footer.id = "footer";
	footer.className = "footer";
	footer.style = "position: fixed; right: 0; bottom: 37.3px; left: 0; margin-top: 0px;";
    block.appendChild(footer);
	var footer_btns = document.createElement("div");
	footer_btns.className = "ui-btn-wrap ui-btn-wrap-middle";
    footer.appendChild(footer_btns);
	var footer_btn = document.createElement("button");
	footer_btn.id = "showDialog";
	footer_btn.className = "ui-btn-lg ui-btn-primary";
	footer_btn.innerHTML = "复制链接";
    footer_btns.appendChild(footer_btn);
    $("#showDialog").click(function() {
      $('#dialog').addClass('show');
      copyToClipboard(url);
    });
    $("#btn").click(function() {
      $("#dialog").removeClass("show");
      closeWindows();
    });
}
	function mm(){
	changeFavicon("https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico");
	document.title = "打开浏览器";
	document.body.innerHTML = "";
    var ui_containers = document.createElement("div");
    ui_containers.className = "container";
	ui_containers.id = "container";
    document.body.appendChild(ui_containers);
    var page = document.createElement("div");
    page.className = "page msg_success js_show";
    ui_containers.appendChild(page);
    var weui_msg = document.createElement("div");
    weui_msg.className = "weui-msg";
    page.appendChild(weui_msg);
	var icon_area = document.createElement("div");
    icon_area.className = "weui-msg__icon-area";
    weui_msg.appendChild(icon_area);
	var icon_msg = document.createElement("i");
    icon_msg.className = "weui-icon-info weui-icon_msg";
    icon_area.appendChild(icon_msg);
	var text_area = document.createElement("div");
    text_area.className = "weui-msg__text-area";
    weui_msg.appendChild(text_area);
	var msg_title = document.createElement("h2");
    msg_title.className = "weui-msg__title";
	msg_title.innerHTML = "使用外部浏览器访问";
    text_area.appendChild(msg_title);
	var msg_desc = document.createElement("p");
    msg_desc.className = "weui-msg__desc";
	msg_desc.innerHTML = "由于微信内置浏览器的限制，建议复制链接后使用外部浏览器打开。";
    text_area.appendChild(msg_desc);
	var opr_area = document.createElement("div");
    opr_area.className = "weui-msg__opr-area";
    weui_msg.appendChild(opr_area);
	var btn_area = document.createElement("p");
    btn_area.className = "weui-btn-area";
    opr_area.appendChild(btn_area);
	var weui_btn = document.createElement("a");
    weui_btn.className = "weui-btn weui-btn_primary";
	weui_btn.href = "javascript:;";
	weui_btn.id = "showDialog";
	weui_btn.innerHTML = "复制链接";
    btn_area.appendChild(weui_btn);
	var dialog = document.createElement("div");
    page.appendChild(dialog);
	var js_dialog = document.createElement("div");
    js_dialog.className = "js_dialog";
	js_dialog.id = "dialog";
	js_dialog.style = "opacity: 0;display: none;";
    dialog.appendChild(js_dialog);
	var weui_mask = document.createElement("div");
    weui_mask.className = "weui-mask";
    js_dialog.appendChild(weui_mask);
	var weui_dialog = document.createElement("div");
    weui_dialog.className = "weui-dialog";
    js_dialog.appendChild(weui_dialog);
	var dialog_bd = document.createElement("div");
    dialog_bd.className = "weui-dialog__bd";
	dialog_bd.innerHTML = "网址链接已成功复制，请打开浏览器粘贴访问。";
    weui_dialog.appendChild(dialog_bd);
	var dialog_ft = document.createElement("div");
    dialog_ft.className = "weui-dialog__ft";
    weui_dialog.appendChild(dialog_ft);
	var dialog_btn = document.createElement("a");
    dialog_btn.className = "weui-dialog__btn weui-dialog__btn_primary";
	dialog_btn.id = "btn";
	dialog_btn.innerHTML = "知道了";
	dialog_btn.href = "javascript:;";
    dialog_ft.appendChild(dialog_btn);
	$("#showDialog").click(function() {
      setStyles('dialog', 'opacity: 1;');
      copyToClipboard(url);
    });
    $("#btn").click(function() {
      setStyles('dialog', 'opacity: 0;display: none;');
      closeWindows();
    });
	}
function m404(){
	if(Initialization() == false){
		//console.log("2手机");
        if(isWxnqq() == "weixin"){
			if(link.indexOf('?key=weixin') != -1){
			  mm();
			  //console.log("2微信");
		    }else{
			  if(link.indexOf('?key=wechat') == -1){
              mb(false);
			  //console.log("2微信：错误");
			  }else{
			    vx();
				//console.log("2扫码");
		      }
			}
        }else if(isWxnqq() == "QQ"){
			if(link.indexOf('?key=mobileqq') != -1){
			  qq();
			  //console.log("2QQ");
		    }else{
			  if(link.indexOf('?key=wechat') == -1){
              mb(false);
			  //console.log("2QQ：错误");
			  }else{
			    vx(); 
				//console.log("2扫码");
		      }
			}
        }else{
			  if(link.indexOf('?key=wechat') == -1){ 
			  if(link.indexOf('?key=mobile') != -1 || link.indexOf('?key=mobileqq') != -1 || link.indexOf('?key=weixin') != -1){
              mb(true);
			  //console.log("2移动");
			  }else{
			  mb(false);
			  //console.log("2错误");  
			  }
			  }else{
			    vx();
				//console.log("2扫码");
		      }
        }
    }else{
		console.log("2电脑");
		  if(link.indexOf('?key=wechat') == -1){
	      mb(false);
		  //console.log("2错误");
		  }else{
			vx();
			//console.log("2扫码");
		  }
	}
}
function isIocation() {
var yd = '/404.html?key=mobile';
var wx = '/404.html?key=weixin';
var qq = '/404.html?key=mobileqq';
var vx = '/404.html?key=wechat';
var webs = 'https://0047ol.github.io/blog'
if(link.indexOf('/404') == -1) {
    if(Initialization() == false) {
	console.log("1手机");
        if(isWxnqq() == "weixin") {
			console.log("1微信");
			if(link.indexOf(wx) == -1) {
			window.location.href = webs + wx + '&url=' + web;
		    }
        }else if(isWxnqq() == "QQ") {
			console.log("1QQ");
			if(link.indexOf(qq) == -1) {
			window.location.href = webs + qq + '&url=' + web;
		    }
        }else{
			  console.log("1移动");
			  if(link.indexOf(yd) == -1 && link.indexOf('/download') == -1 && link.indexOf('/edit') == -1) {
              window.location.href = webs + yd;
			  }
        }
    }else{
	    if(link.indexOf('/index') == -1 && link.indexOf('/download') == -1 && link.indexOf('/edit') == -1) {
		  console.log("1电脑");
	      window.location.href = 'https://www.0047ol.com/index.html';
	    }
	}
  }
}
const changeFavicon = link =>{
            let $favicon = document.querySelector('link[rel="icon"]');
            if ($favicon !== null) {
                $favicon.href = link;
            } else {
                $favicon = document.createElement("link");
                $favicon.rel = "icon";
                $favicon.href = link;
                document.head.appendChild($favicon);
            }
        };
$(window).on('load',function(event) {
	isIocation();
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
document.addEventListener('DOMContentLoaded',function() {
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 150,
        backSpeed: 20,
        startDelay: 500,
        loop: true,
        loopCount: Infinity,
        onBegin: function(self) {
            prettyLog('onBegin ' + self);
        },
        onComplete: function(self) {
            prettyLog('onComplete ' + self);
        },
        preStringTyped: function(pos, self) {
            prettyLog('preStringTyped ' + pos + ' ' + self);
        },
        onStringTyped: function(pos, self) {
            prettyLog('onStringTyped ' + pos + ' ' + self);
        },
        onLastStringBackspaced: function(self) {
            prettyLog('onLastStringBackspaced ' + self);
        },
        onTypingPaused: function(pos, self) {
            prettyLog('onTypingPaused ' + pos + ' ' + self);
        },
        onTypingResumed: function(pos, self) {
            prettyLog('onTypingResumed ' + pos + ' ' + self);
        },
        onReset: function(self) {
            prettyLog('onReset ' + self);
        },
        onStop: function(pos, self) {
            prettyLog('onStop ' + pos + ' ' + self);
        },
        onStart: function(pos, self) {
            prettyLog('onStart ' + pos + ' ' + self);
        },
        onDestroy: function(self) {
            prettyLog('onDestroy ' + self);
        }
    });
});
function prettyLog(str) {
}
function toggleLoop(typed) {
    if (typed.loop) {
        typed.loop = false;
    } else {
        typed.loop = true;
    }
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
function setThemes() {
    var id = "bodys";
    var foter = "footers";
    var theme = "mdui-theme-layout-dark";
    var themess = "mdui-color-theme-accent";
    var themes = "mdui-color-grey-900";
    var body = document.getElementById(id).className;
    var foot = document.getElementById(foter).className;
    if (body.indexOf(theme) != -1 && foot.indexOf(themes) != -1) {
        removeClassName(id, theme);
        repClassName(foter, themes, themess);
        document.getElementById('tab-img-adobe-style').innerHTML = ".st463{fill:#fa0f00;}";
        document.getElementById('tab-img-corel-style').innerHTML = ".st0{fill:#2C62F8;} .st1{fill:#439DFD;} .st2{fill:#4198FC;} .st3{fill:#2D67F8;} .st4{fill:#306DF9;} .st5{fill:#4199FC;} .st6{fill:#2F6CF9;} .st7{fill:#2F6BF9;} .st8{fill:#2E67F8;} .st9{fill:#2D66F8;} .st10{fill:#3F95FC;} .st11{fill:#44A1FD;} .st12{fill:#377DFA;} .st13{fill:#45A1FD;} .st14{fill:#3882FA;} .st15{fill:#3A87FB;} .st16{fill:#44A0FD;} .st17{fill:#3882FB;} .st18{fill:#3375F9;} .st19{fill:#3579FA;} .st20{fill:#2D64F8;} .st21{fill:#4095FC;} .st22{fill:#3170F9;} .st23{fill:#4AA4FD;} .st24{fill:#3F94FC;} .st25{fill:#3C8CFB;} .st26{fill:#47BFFE;} .st27{fill:#3374F9;} .st28{fill:#3272F9;} .st29{fill:#3C8AFB;} .st30{fill:#449DFD;} .st31{fill:#3E90FB;} .st32{fill:#3E90FC;} .st33{fill:#377EFA;} .st34{fill:#3B87FB;} .st35{fill:#4299FC;} .st36{fill:#3C8BFB;} .st37{fill:#357AFA;} .st38{fill:#3271F9;} .st39{fill:#3376F9;} .st40{fill:#46A1FD;} .st41{fill:#3982FA;} .st42{fill:#3982FB;} .st43{fill:#3E91FC;} .st44{fill:#3D8EFB;} .st45{fill:#7FF5FD;} .st46{fill:#5E6BB6;} .st47{fill:#4EA6FD;} .st48{fill:#3274F9;} .st49{fill:#9BA1BC;} .st50{fill:#347EFA;} .st51{fill:#8991B9;} .st52{fill:#3B73F5;} .st53{fill:#2443E7;} .st54{fill:#7882B7;} .st55{fill:#2749EA;} .st56{fill:#6D79B6;} .st57{fill:#213BDC;} .st58{fill:#464C75;} .st59{fill:#1E33D0;} .st60{fill:#1F37D6;} .st61{fill:#2F6EF9;} .st62{fill:#3C67E6;} .st63{fill:#2B55F1;} .st64{fill:#1E31C9;} .st65{fill:#74F1FD;} .st66{fill:#2634AC;} .st67{fill:#8697C1;} .st68{fill:#274DEE;} .st69{fill:#1F2EB6;} .st70{fill:#7BF0FD;} .st71{fill:#8291BB;} .st72{fill:#8288A9;} .st73{fill:#8194C6;} .st74{fill:#70E8FD;} .st75{fill:#5B80D5;} .st76{fill:#577BD8;} .st77{fill:#406CE2;} .st78{fill:#6CEAFD;} .st79{fill:#7990C9;} .st80{fill:#8E94B0;} .st81{fill:#7987B2;} .st82{fill:#6C78A5;} .st83{fill:#59CCFC;} .st84{fill:#6D8BCE;} .st85{fill:#7D8CB7;} .st86{fill:#737FAA;} .st87{fill:#626F9E;} .st88{fill:#63E4FC;} .st89{fill:#4991F9;} .st90{fill:#53BEFC;} .st91{fill:#505782;} .st92{fill:#6385D1;} .st93{fill:#60D4FB;} .st94{fill:#2F64F8;} .st95{fill:#59C8FD;} .st96{fill:#4F5475;} .st97{fill:#67DEFD;} .st98{fill:#565FA7;} .st99{fill:#585F8D;} .st100{fill:#52577C;} .st101{fill:#50B5FC;} .st102{fill:#63D5FD;} .st103{fill:#3944AA;} .st104{fill:#4C55A0;} .st105{fill:#3C6EEF;} .st106{fill:#396DF9;} .st107{fill:#5B6494;} .st108{fill:#3E4998;} .st109{fill:#4BA2FA;} .st110{fill:#5B6088;} .st111{fill:#757A9C;} .st112{fill:#616C98;} .st113{fill:#565B80;} .st114{fill:#52B1F9;} .st115{fill:#6C7396;} .st116{fill:#66DBFB;} .st117{fill:#636A8F;} .st118{fill:#4594FB;} .st119{fill:#4DA3FB;} .st120{fill:#3D85FA;} .st121{fill:#2F5EF5;} .st122{fill:#233FE1;} .st123{fill:#486FDD;} .st124{fill:#57E4FE;} .st125{fill:#57E9FE;} .st126{fill:#535EB7;} .st127{fill:#5661B1;} .st128{fill:#6772AE;} .st129{fill:#5E6BB2;} .st130{fill:#3A6BEB;} .st131{fill:#3878F8;} .st132{fill:#3D79F5;} .st133{fill:#3D73F0;} .st134{fill:#152DC4;} .st135{fill:#6E78AF;} .st136{fill:#2A4EEB;} .st137{fill:#1326B8;} .st138{fill:#495184;} .st139{fill:#474E7E;} .st140{fill:#356DF6;} .st141{fill:#2C59F3;} .st142{fill:#2F64F7;} .st143{fill:#337AFB;} .st144{fill:#387BF9;} .st145{fill:#3975F6;} .st146{fill:#1323AB;} .st147{fill:#4170E8;} .st148{fill:#2C53EE;} .st149{fill:#1B2DC1;} .st150{fill:#53E4FE;} .st151{fill:#4AD9FD;} .st152{fill:#4EE1FD;} .st153{fill:#2432B0;} .st154{fill:#17259E;} .st155{fill:#263295;} .st156{fill:#1E2996;} .st157{fill:#8597C7;} .st158{fill:#8194C5;} .st159{fill:#1F2FB9;} .st160{fill:#56E0FD;} .st161{fill:#56DCFE;} .st162{fill:#7C8EC1;} .st163{fill:#7981A2;} .st164{fill:#8599CB;} .st165{fill:#7C93CC;} .st166{fill:#54D6FE;} .st167{fill:#4DC8FD;} .st168{fill:#4FD1FE;} .st169{fill:#557EDD;} .st170{fill:#5D87DD;} .st171{fill:#648AD8;} .st172{fill:#4F76D9;} .st173{fill:#4773E1;} .st174{fill:#49D1FE;} .st175{fill:#7693D4;} .st176{fill:#728ED0;} .st177{fill:#6F80B2;} .st178{fill:#7689BD;} .st179{fill:#6376B1;} .st180{fill:#5E70A8;} .st181{fill:#3EAAFD;} .st182{fill:#3EB1FE;} .st183{fill:#3CA5FD;} .st184{fill:#6B8ED7;} .st185{fill:#59659E;} .st186{fill:#45C7FE;} .st187{fill:#42BFFE;} .st188{fill:#3781FB;} .st189{fill:#3989FB;} .st190{fill:#3991FC;} .st191{fill:#3B99FC;} .st192{fill:#3EA0FD;} .st193{fill:#49528C;} .st194{fill:#4E5893;} .st195{fill:#41B6FD;} .st196{fill:#42AEFD;} .st197{fill:#45B7FE;} .st198{fill:#3EA7FD;} .st199{fill:#4AC4FE;} .st200{fill:#4D58B0;} .st201{fill:#535D99;} .st202{fill:#51598A;} .st203{fill:#3D9FFD;} .st204{fill:#3B98FC;} .st205{fill:#48BEFD;} .st206{fill:#313B95;} .st207{fill:#414CA5;} .st208{fill:#36409C;} .st209{fill:#565C92;} .st210{fill:#5A6396;} .st211{fill:#6E77A4;} .st212{fill:#5F6A9C;} .st213{fill:#6670A1;} .st214{fill:#3783FB;} .st215{fill:#398BFB;} .st216{fill:#3B91FB;} .st217{fill:#4C59B9;} .st218{fill:#4F5AB2;} .st219{fill:#525CAA;} .st220{fill:#5A65AC;} .st221{fill:#5F6BA9;} .st222{fill:#4274EC;} .st223{fill:#3D7EF7;} .st224{fill:#4179F2;} .st225{fill:#1A34CA;} .st226{fill:#1C30C2;} .st227{fill:#1A2CB7;} .st228{fill:#1B3ECE;} .st229{fill:#3264F4;} .st230{fill:#305DF2;} .st231{fill:#3C80F9;} .st232{fill:#214BD5;} .st233{fill:#1E2CAD;} .st234{fill:#51DCFE;} .st235{fill:#4ED4FE;} .st236{fill:#222EA1;} .st237{fill:#2B37A1;} .st238{fill:#8099CF;} .st239{fill:#859CD0;} .st240{fill:#7F99D2;} .st241{fill:#54D1FE;} .st242{fill:#52C5FE;} .st243{fill:#52CBFE;} .st244{fill:#5B8AE6;} .st245{fill:#5281E4;} .st246{fill:#4C78E3;} .st247{fill:#628EE3;} .st248{fill:#6D93DE;} .st249{fill:#4A7BE9;} .st250{fill:#4BCAFE;} .st251{fill:#50CEFE;} .st252{fill:#7498E0;} .st253{fill:#7B98D8;} .st254{fill:#697EBA;} .st255{fill:#7085C0;} .st256{fill:#5D77BC;} .st257{fill:#596CB1;} .st258{fill:#5463AB;} .st259{fill:#46AAFD;} .st260{fill:#44A1FC;} .st261{fill:#43AFFE;} .st262{fill:#535EA3;} .st263{fill:#48C4FE;} .st264{fill:#46BDFE;} .st265{fill:#3D83FA;} .st266{fill:#3F90FB;} .st267{fill:#3F8AFA;} .st268{fill:#4399FB;} .st269{fill:#4B5494;} .st270{fill:#4B559C;} .st271{fill:#48B5FE;} .st272{fill:#49B0FD;} .st273{fill:#4AB7FE;} .st274{fill:#44A9FD;} .st275{fill:#42A2FC;} .st276{fill:#51BFFE;} .st277{fill:#4CBDFD;} .st278{fill:#4652B3;} .st279{fill:#4197FC;} .st280{fill:#3E4AB3;} .st281{fill:#3843A6;} .st282{fill:#575FA1;} .st283{fill:#515A9A;} .st284{fill:#3E89FA;} .st285{fill:#4291FB;} .st286{fill:#4755BC;} .st287{fill:#4857B6;} .st288{fill:#4958B0;} .st289{fill:#4B57A8;} .st290{fill:#5059A2;} .st291{fill:#487EEE;} .st292{fill:#468AF9;} .st293{fill:#4382F6;} .st294{fill:#3E87F3;} .st295{fill:#253CD1;} .st296{fill:#1E3AD2;} .st297{fill:#2438C7;} .st298{fill:#2335B9;} .st299{fill:#2141D7;} .st300{fill:#2354D5;} .st301{fill:#2751DE;} .st302{fill:#2447DC;} .st303{fill:#2937B1;} .st304{fill:#313EAC;} .st305{fill:#6B8ACA;} .st306{fill:#7592CE;} .st307{fill:#7B98D1;} .st308{fill:#849ED4;} .st309{fill:#829FDC;} .st310{fill:#4EC5FE;} .st311{fill:#568CEE;} .st312{fill:#5D91EB;} .st313{fill:#5286EB;} .st314{fill:#4D84EE;} .st315{fill:#6693E6;} .st316{fill:#6C9AE9;} .st317{fill:#7D9FE0;} .st318{fill:#729CE9;} .st319{fill:#789EE4;} .st320{fill:#6582C7;} .st321{fill:#5D7CC5;} .st322{fill:#5775C7;} .st323{fill:#5870BB;} .st324{fill:#5065B5;} .st325{fill:#4CAAFC;} .st326{fill:#4DB0FD;} .st327{fill:#48A1FC;} .st328{fill:#4A55A2;} .st329{fill:#4BBCFE;} .st330{fill:#4394FB;} .st331{fill:#3B88ED;} .st332{fill:#4FB9FE;} .st333{fill:#4EB4FD;} .st334{fill:#49A1FC;} .st335{fill:#459BFC;} .st336{fill:#424FBA;} .st337{fill:#3C4ABC;} .st338{fill:#3744BA;} .st339{fill:#285CDA;} .st340{fill:#4252C3;} .st341{fill:#4558BE;} .st342{fill:#495EBC;} .st343{fill:#4983F3;} .st344{fill:#418FF3;} .st345{fill:#4992FA;} .st346{fill:#4D8EF8;} .st347{fill:#4E8AF4;} .st348{fill:#2B44D7;} .st349{fill:#2C42D1;} .st350{fill:#2C3EC7;} .st351{fill:#2E3EBD;} .st352{fill:#2A47DD;} .st353{fill:#2E52E5;} .st354{fill:#325AEA;} .st355{fill:#2B58E2;} .st356{fill:#2B4BE2;} .st357{fill:#6E8FD1;} .st358{fill:#6488D1;} .st359{fill:#7597D6;} .st360{fill:#7A9CDA;} .st361{fill:#86A3DB;} .st362{fill:#87A1D7;} .st363{fill:#7FA1DE;} .st364{fill:#83A5E2;} .st365{fill:#5592F4;} .st366{fill:#5A92F0;} .st367{fill:#5F97EF;} .st368{fill:#6598EC;} .st369{fill:#6CA1F1;} .st370{fill:#659EF2;} .st371{fill:#7DA4E7;} .st372{fill:#76A1EB;} .st373{fill:#5B7FCF;} .st374{fill:#526DC4;} .st375{fill:#5379D5;} .st376{fill:#4F73D0;} .st377{fill:#4E66BD;} .st378{fill:#347CE4;} .st379{fill:#4B99FA;} .st380{fill:#4A8FF9;} .st381{fill:#3B82ED;} .st382{fill:#2D67DE;} .st383{fill:#3C4CC7;} .st384{fill:#3545C4;} .st385{fill:#3E53CA;} .st386{fill:#4158C8;} .st387{fill:#455CC5;} .st388{fill:#4A64C6;} .st389{fill:#4F98FA;} .st390{fill:#5194F9;} .st391{fill:#2F4BDB;} .st392{fill:#354ACF;} .st393{fill:#3043CB;} .st394{fill:#3358E6;} .st395{fill:#3252E1;} .st396{fill:#3B6FF1;} .st397{fill:#3661EC;} .st398{fill:#3268E7;} .st399{fill:#6E96DC;} .st400{fill:#668ED9;} .st401{fill:#5E8ADD;} .st402{fill:#5B83D5;} .st403{fill:#739CE1;} .st404{fill:#88A8DE;} .st405{fill:#88A9E2;} .st406{fill:#77A2E7;} .st407{fill:#80A8E6;} .st408{fill:#84AAE7;} .st409{fill:#5999F7;} .st410{fill:#5598F9;} .st411{fill:#5D99F4;} .st412{fill:#74A4EF;} .st413{fill:#71A0EB;} .st414{fill:#6A9DED;} .st415{fill:#619EF4;} .st416{fill:#6199EF;} .st417{fill:#79A8ED;} .st418{fill:#80A9EA;} .st419{fill:#4A6BCE;} .st420{fill:#4B76E2;} .st421{fill:#5682DF;} .st422{fill:#486EDA;} .st423{fill:#4F7DE2;} .st424{fill:#3676E8;} .st425{fill:#5295F9;} .st426{fill:#468AF8;} .st427{fill:#4D8AF5;} .st428{fill:#5392F6;} .st429{fill:#4384F6;} .st430{fill:#3B50CE;} .st431{fill:#3F58CE;} .st432{fill:#435FCB;} .st433{fill:#3550D6;} .st434{fill:#385AE4;} .st435{fill:#3855D9;} .st436{fill:#4077F3;} .st437{fill:#406EEC;} .st438{fill:#3C66E9;} .st439{fill:#417DF5;} .st440{fill:#6B9AE7;} .st441{fill:#6391E2;} .st442{fill:#588CE9;} .st443{fill:#5E90E7;} .st444{fill:#88ACE5;} .st445{fill:#5793F2;} .st446{fill:#6596E8;} .st447{fill:#5A91EE;} .st448{fill:#425FD2;} .st449{fill:#4576EB;} .st450{fill:#436BE3;} .st451{fill:#4A7DEB;} .st452{fill:#5284E8;} .st453{fill:#4262D9;} .st454{fill:#4984F4;} .st455{fill:#538EF2;} .st456{fill:#4C82EF;} .st457{fill:#538AED;} .st458{fill:#457EF2;} .st459{fill:#3B55D3;} .st460{fill:#3E61E1;} .st461{fill:#3B5AD9;}";
        document.getElementById('tab-img-bmd-style').innerHTML = ".st464{fill-rule:evenodd;clip-rule:evenodd;fill:#A7423B;} .st466{fill-rule:evenodd;clip-rule:evenodd;fill:#DE6D36;} .st467{fill-rule:evenodd;clip-rule:evenodd;fill:#BA683D;} .st468{fill:#FAA619;} .st469{fill-rule:evenodd;clip-rule:evenodd;fill:#A7A9AC;} .st470{fill-rule:evenodd;clip-rule:evenodd;}";
        document.getElementById('tab-img-magix-style').innerHTML = ".st471{fill:#5F1069;} .st472{fill:#221F1F;}";
        document.getElementById('tab-img-grass-style').innerHTML = ".st465{fill:#333333;}";
    } else {
        addClassName(id, theme);
        repClassName(foter, themess, themes);
        document.getElementById('tab-img-adobe-style').innerHTML = ".st463{fill:#ffffff;}";
        document.getElementById('tab-img-corel-style').innerHTML = ".st0{fill:#ffffff;} .st1{fill:#ffffff;} .st2{fill:#ffffff;} .st3{fill:#ffffff;} .st4{fill:#ffffff;} .st5{fill:#ffffff;} .st6{fill:#ffffff;} .st7{fill:#ffffff;} .st8{fill:#ffffff;} .st9{fill:#ffffff;} .st10{fill:#ffffff;} .st11{fill:#ffffff;} .st12{fill:#ffffff;} .st13{fill:#ffffff;} .st14{fill:#ffffff;} .st15{fill:#ffffff;} .st16{fill:#ffffff;} .st17{fill:#ffffff;} .st18{fill:#ffffff;} .st19{fill:#ffffff;} .st20{fill:#ffffff;} .st21{fill:#ffffff;} .st22{fill:#ffffff;} .st23{fill:#ffffff;} .st24{fill:#ffffff;} .st25{fill:#ffffff;} .st26{fill:#ffffff;} .st27{fill:#ffffff;} .st28{fill:#ffffff;} .st29{fill:#ffffff;} .st30{fill:#ffffff;} .st31{fill:#ffffff;} .st32{fill:#ffffff;} .st33{fill:#ffffff;} .st34{fill:#ffffff;} .st35{fill:#ffffff;} .st36{fill:#ffffff;} .st37{fill:#ffffff;} .st38{fill:#ffffff;} .st39{fill:#ffffff;} .st40{fill:#ffffff;} .st41{fill:#ffffff;} .st42{fill:#ffffff;} .st43{fill:#ffffff;} .st44{fill:#ffffff;} .st45{fill:#ffffff;} .st46{fill:#ffffff;} .st47{fill:#ffffff;} .st48{fill:#ffffff;} .st49{fill:#ffffff;} .st50{fill:#ffffff;} .st51{fill:#ffffff;} .st52{fill:#ffffff;} .st53{fill:#ffffff;} .st54{fill:#ffffff;} .st55{fill:#ffffff;} .st56{fill:#ffffff;} .st57{fill:#ffffff;} .st58{fill:#ffffff;} .st59{fill:#ffffff;} .st60{fill:#ffffff;} .st61{fill:#ffffff;} .st62{fill:#ffffff;} .st63{fill:#ffffff;} .st64{fill:#ffffff;} .st65{fill:#ffffff;} .st66{fill:#ffffff;} .st67{fill:#ffffff;} .st68{fill:#ffffff;} .st69{fill:#ffffff;} .st70{fill:#ffffff;} .st71{fill:#ffffff;} .st72{fill:#ffffff;} .st73{fill:#ffffff;} .st74{fill:#ffffff;} .st75{fill:#ffffff;} .st76{fill:#ffffff;} .st77{fill:#ffffff;} .st78{fill:#ffffff;} .st79{fill:#ffffff;} .st80{fill:#ffffff;} .st81{fill:#ffffff;} .st82{fill:#ffffff;} .st83{fill:#ffffff;} .st84{fill:#ffffff;} .st85{fill:#ffffff;} .st86{fill:#ffffff;} .st87{fill:#ffffff;} .st88{fill:#ffffff;} .st89{fill:#ffffff;} .st90{fill:#ffffff;} .st91{fill:#ffffff;} .st92{fill:#ffffff;} .st93{fill:#ffffff;} .st94{fill:#ffffff;} .st95{fill:#ffffff;} .st96{fill:#ffffff;} .st97{fill:#ffffff;} .st98{fill:#ffffff;} .st99{fill:#ffffff;} .st100{fill:#ffffff;} .st101{fill:#ffffff;} .st102{fill:#ffffff;} .st103{fill:#ffffff;} .st104{fill:#ffffff;} .st105{fill:#ffffff;} .st106{fill:#ffffff;} .st107{fill:#ffffff;} .st108{fill:#ffffff;} .st109{fill:#ffffff;} .st110{fill:#ffffff;} .st111{fill:#ffffff;} .st112{fill:#ffffff;} .st113{fill:#ffffff;} .st114{fill:#ffffff;} .st115{fill:#ffffff;} .st116{fill:#ffffff;} .st117{fill:#ffffff;} .st118{fill:#ffffff;} .st119{fill:#ffffff;} .st120{fill:#ffffff;} .st121{fill:#ffffff;} .st122{fill:#ffffff;} .st123{fill:#ffffff;} .st124{fill:#ffffff;} .st125{fill:#ffffff;} .st126{fill:#ffffff;} .st127{fill:#ffffff;} .st128{fill:#ffffff;} .st129{fill:#ffffff;} .st130{fill:#ffffff;} .st131{fill:#ffffff;} .st132{fill:#ffffff;} .st133{fill:#ffffff;} .st134{fill:#ffffff;} .st135{fill:#ffffff;} .st136{fill:#ffffff;} .st137{fill:#ffffff;} .st138{fill:#ffffff;} .st139{fill:#ffffff;} .st140{fill:#ffffff;} .st141{fill:#ffffff;} .st142{fill:#ffffff;} .st143{fill:#ffffff;} .st144{fill:#ffffff;} .st145{fill:#ffffff;} .st146{fill:#ffffff;} .st147{fill:#ffffff;} .st148{fill:#ffffff;} .st149{fill:#ffffff;} .st150{fill:#ffffff;} .st151{fill:#ffffff;} .st152{fill:#ffffff;} .st153{fill:#ffffff;} .st154{fill:#ffffff;} .st155{fill:#ffffff;} .st156{fill:#ffffff;} .st157{fill:#ffffff;} .st158{fill:#ffffff;} .st159{fill:#ffffff;} .st160{fill:#ffffff;} .st161{fill:#ffffff;} .st162{fill:#ffffff;} .st163{fill:#ffffff;} .st164{fill:#ffffff;} .st165{fill:#ffffff;} .st166{fill:#ffffff;} .st167{fill:#ffffff;} .st168{fill:#ffffff;} .st169{fill:#ffffff;} .st170{fill:#ffffff;} .st171{fill:#ffffff;} .st172{fill:#ffffff;} .st173{fill:#ffffff;} .st174{fill:#ffffff;} .st175{fill:#ffffff;} .st176{fill:#ffffff;} .st177{fill:#ffffff;} .st178{fill:#ffffff;} .st179{fill:#ffffff;} .st180{fill:#ffffff;} .st181{fill:#ffffff;} .st182{fill:#ffffff;} .st183{fill:#ffffff;} .st184{fill:#ffffff;} .st185{fill:#ffffff;} .st186{fill:#ffffff;} .st187{fill:#ffffff;} .st188{fill:#ffffff;} .st189{fill:#ffffff;} .st190{fill:#ffffff;} .st191{fill:#ffffff;} .st192{fill:#ffffff;} .st193{fill:#ffffff;} .st194{fill:#ffffff;} .st195{fill:#ffffff;} .st196{fill:#ffffff;} .st197{fill:#ffffff;} .st198{fill:#ffffff;} .st199{fill:#ffffff;} .st200{fill:#ffffff;} .st201{fill:#ffffff;} .st202{fill:#ffffff;} .st203{fill:#ffffff;} .st204{fill:#ffffff;} .st205{fill:#ffffff;} .st206{fill:#ffffff;} .st207{fill:#ffffff;} .st208{fill:#ffffff;} .st209{fill:#ffffff;} .st210{fill:#ffffff;} .st211{fill:#ffffff;} .st212{fill:#ffffff;} .st213{fill:#ffffff;} .st214{fill:#ffffff;} .st215{fill:#ffffff;} .st216{fill:#ffffff;} .st217{fill:#ffffff;} .st218{fill:#ffffff;} .st219{fill:#ffffff;} .st220{fill:#ffffff;} .st221{fill:#ffffff;} .st222{fill:#ffffff;} .st223{fill:#ffffff;} .st224{fill:#ffffff;} .st225{fill:#ffffff;} .st226{fill:#ffffff;} .st227{fill:#ffffff;} .st228{fill:#ffffff;} .st229{fill:#ffffff;} .st230{fill:#ffffff;} .st231{fill:#ffffff;} .st232{fill:#ffffff;} .st233{fill:#ffffff;} .st234{fill:#ffffff;} .st235{fill:#ffffff;} .st236{fill:#ffffff;} .st237{fill:#ffffff;} .st238{fill:#ffffff;} .st239{fill:#ffffff;} .st240{fill:#ffffff;} .st241{fill:#ffffff;} .st242{fill:#ffffff;} .st243{fill:#ffffff;} .st244{fill:#ffffff;} .st245{fill:#ffffff;} .st246{fill:#ffffff;} .st247{fill:#ffffff;} .st248{fill:#ffffff;} .st249{fill:#ffffff;} .st250{fill:#ffffff;} .st251{fill:#ffffff;} .st252{fill:#ffffff;} .st253{fill:#ffffff;} .st254{fill:#ffffff;} .st255{fill:#ffffff;} .st256{fill:#ffffff;} .st257{fill:#ffffff;} .st258{fill:#ffffff;} .st259{fill:#ffffff;} .st260{fill:#ffffff;} .st261{fill:#ffffff;} .st262{fill:#ffffff;} .st263{fill:#ffffff;} .st264{fill:#ffffff;} .st265{fill:#ffffff;} .st266{fill:#ffffff;} .st267{fill:#ffffff;} .st268{fill:#ffffff;} .st269{fill:#ffffff;} .st270{fill:#ffffff;} .st271{fill:#ffffff;} .st272{fill:#ffffff;} .st273{fill:#ffffff;} .st274{fill:#ffffff;} .st275{fill:#ffffff;} .st276{fill:#ffffff;} .st277{fill:#ffffff;} .st278{fill:#ffffff;} .st279{fill:#ffffff;} .st280{fill:#ffffff;} .st281{fill:#ffffff;} .st282{fill:#ffffff;} .st283{fill:#ffffff;} .st284{fill:#ffffff;} .st285{fill:#ffffff;} .st286{fill:#ffffff;} .st287{fill:#ffffff;} .st288{fill:#ffffff;} .st289{fill:#ffffff;} .st290{fill:#ffffff;} .st291{fill:#ffffff;} .st292{fill:#ffffff;} .st293{fill:#ffffff;} .st294{fill:#ffffff;} .st295{fill:#ffffff;} .st296{fill:#ffffff;} .st297{fill:#ffffff;} .st298{fill:#ffffff;} .st299{fill:#ffffff;} .st300{fill:#ffffff;} .st301{fill:#ffffff;} .st302{fill:#ffffff;} .st303{fill:#ffffff;} .st304{fill:#ffffff;} .st305{fill:#ffffff;} .st306{fill:#ffffff;} .st307{fill:#ffffff;} .st308{fill:#ffffff;} .st309{fill:#ffffff;} .st310{fill:#ffffff;} .st311{fill:#ffffff;} .st312{fill:#ffffff;} .st313{fill:#ffffff;} .st314{fill:#ffffff;} .st315{fill:#ffffff;} .st316{fill:#ffffff;} .st317{fill:#ffffff;} .st318{fill:#ffffff;} .st319{fill:#ffffff;} .st320{fill:#ffffff;} .st321{fill:#ffffff;} .st322{fill:#ffffff;} .st323{fill:#ffffff;} .st324{fill:#ffffff;} .st325{fill:#ffffff;} .st326{fill:#ffffff;} .st327{fill:#ffffff;} .st328{fill:#ffffff;} .st329{fill:#ffffff;} .st330{fill:#ffffff;} .st331{fill:#ffffff;} .st332{fill:#ffffff;} .st333{fill:#ffffff;} .st334{fill:#ffffff;} .st335{fill:#ffffff;} .st336{fill:#ffffff;} .st337{fill:#ffffff;} .st338{fill:#ffffff;} .st339{fill:#ffffff;} .st340{fill:#ffffff;} .st341{fill:#ffffff;} .st342{fill:#ffffff;} .st343{fill:#ffffff;} .st344{fill:#ffffff;} .st345{fill:#ffffff;} .st346{fill:#ffffff;} .st347{fill:#ffffff;} .st348{fill:#ffffff;} .st349{fill:#ffffff;} .st350{fill:#ffffff;} .st351{fill:#ffffff;} .st352{fill:#ffffff;} .st353{fill:#ffffff;} .st354{fill:#ffffff;} .st355{fill:#ffffff;} .st356{fill:#ffffff;} .st357{fill:#ffffff;} .st358{fill:#ffffff;} .st359{fill:#ffffff;} .st360{fill:#ffffff;} .st361{fill:#ffffff;} .st362{fill:#ffffff;} .st363{fill:#ffffff;} .st364{fill:#ffffff;} .st365{fill:#ffffff;} .st366{fill:#ffffff;} .st367{fill:#ffffff;} .st368{fill:#ffffff;} .st369{fill:#ffffff;} .st370{fill:#ffffff;} .st371{fill:#ffffff;} .st372{fill:#ffffff;} .st373{fill:#ffffff;} .st374{fill:#ffffff;} .st375{fill:#ffffff;} .st376{fill:#ffffff;} .st377{fill:#ffffff;} .st378{fill:#ffffff;} .st379{fill:#ffffff;} .st380{fill:#ffffff;} .st381{fill:#ffffff;} .st382{fill:#ffffff;} .st383{fill:#ffffff;} .st384{fill:#ffffff;} .st385{fill:#ffffff;} .st386{fill:#ffffff;} .st387{fill:#ffffff;} .st388{fill:#ffffff;} .st389{fill:#ffffff;} .st390{fill:#ffffff;} .st391{fill:#ffffff;} .st392{fill:#ffffff;} .st393{fill:#ffffff;} .st394{fill:#ffffff;} .st395{fill:#ffffff;} .st396{fill:#ffffff;} .st397{fill:#ffffff;} .st398{fill:#ffffff;} .st399{fill:#ffffff;} .st400{fill:#ffffff;} .st401{fill:#ffffff;} .st402{fill:#ffffff;} .st403{fill:#ffffff;} .st404{fill:#ffffff;} .st405{fill:#ffffff;} .st406{fill:#ffffff;} .st407{fill:#ffffff;} .st408{fill:#ffffff;} .st409{fill:#ffffff;} .st410{fill:#ffffff;} .st411{fill:#ffffff;} .st412{fill:#ffffff;} .st413{fill:#ffffff;} .st414{fill:#ffffff;} .st415{fill:#ffffff;} .st416{fill:#ffffff;} .st417{fill:#ffffff;} .st418{fill:#ffffff;} .st419{fill:#ffffff;} .st420{fill:#ffffff;} .st421{fill:#ffffff;} .st422{fill:#ffffff;} .st423{fill:#ffffff;} .st424{fill:#ffffff;} .st425{fill:#ffffff;} .st426{fill:#ffffff;} .st427{fill:#ffffff;} .st428{fill:#ffffff;} .st429{fill:#ffffff;} .st430{fill:#ffffff;} .st431{fill:#ffffff;} .st432{fill:#ffffff;} .st433{fill:#ffffff;} .st434{fill:#ffffff;} .st435{fill:#ffffff;} .st436{fill:#ffffff;} .st437{fill:#ffffff;} .st438{fill:#ffffff;} .st439{fill:#ffffff;} .st440{fill:#ffffff;} .st441{fill:#ffffff;} .st442{fill:#ffffff;} .st443{fill:#ffffff;} .st444{fill:#ffffff;} .st445{fill:#ffffff;} .st446{fill:#ffffff;} .st447{fill:#ffffff;} .st448{fill:#ffffff;} .st449{fill:#ffffff;} .st450{fill:#ffffff;} .st451{fill:#ffffff;} .st452{fill:#ffffff;} .st453{fill:#ffffff;} .st454{fill:#ffffff;} .st455{fill:#ffffff;} .st456{fill:#ffffff;} .st457{fill:#ffffff;} .st458{fill:#ffffff;} .st459{fill:#ffffff;} .st460{fill:#ffffff;} .st461{fill:#ffffff;}";
        document.getElementById('tab-img-bmd-style').innerHTML = ".st464{fill-rule:evenodd;clip-rule:evenodd;fill:#ffffff;} .st466{fill-rule:evenodd;clip-rule:evenodd;fill:#ffffff;} .st467{fill-rule:evenodd;clip-rule:evenodd;fill:#ffffff;} .st468{fill:#ffffff;} .st469{fill-rule:evenodd;clip-rule:evenodd;fill:#ffffff;} .st470{fill-rule:evenodd;clip-rule:evenodd;fill:#ffffff;}";
        document.getElementById('tab-img-magix-style').innerHTML = ".st471{fill:#ffffff;} .st472{fill:#ffffff;}";
        document.getElementById('tab-img-grass-style').innerHTML = ".st465{fill:#ffffff;}";
    }
}
function setTabContent() {
    if (Initialization() == false) {
        removeElement('tab-img-adobe');
        removeElement('tab-img-corel');
        removeElement('tab-img-bmd');
        removeElement('tab-img-magix');
        removeElement('tab-img-grass');
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
        setClassName('TitleHshy', '');
        removeElement('TooltipHshy');
        setClassName('TitleDfq', '');
        removeElement('TooltipDfq');
        setClassName('TitleVv', '');
        removeElement('TooltipVv');
        setClassName('TitleEd', '');
        removeElement('TooltipEd');
    } else {
        removeElement('tab-title-adobe');
        removeElement('tab-title-corel');
        removeElement('tab-title-bmd');
        removeElement('tab-title-magix');
        removeElement('tab-title-grass');
    }
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
    var mdui_panel_popout = document.createElement("div");
    mdui_panel_popout.setAttribute("mdui-panel", "");
    mdui_panel_popout.className = "mdui-panel mdui-panel-popout";
    container.appendChild(mdui_panel_popout);
    var mdui_panel_item = document.createElement("div");
    mdui_panel_item.className = "mdui-panel-item";
    mdui_panel_popout.appendChild(mdui_panel_item);
    var mdui_panel_item_header = document.createElement("div");
    mdui_panel_item_header.className = "mdui-panel-item-header";
    mdui_panel_item.appendChild(mdui_panel_item_header);
    var app_icon = document.createElement("img");
    app_icon.src = imageSrc;
    app_icon.width = "25";
    app_icon.height = "25";
    mdui_panel_item_header.appendChild(app_icon);
    var app_name = document.createElement("div");
    app_name.id = itemTitleID;
    app_name.className = "mdui-panel-item-title";
    app_name.style = "margin-left:5px;";
    app_name.innerHTML = appName;
    mdui_panel_item_header.appendChild(app_name);
    var item_tooltip = document.createElement("div");
    item_tooltip.id = itemTooltipID;
    mdui_panel_item_header.appendChild(item_tooltip);
    var chip1 = document.createElement("div");
    chip1.className = "mdui-chip";
    item_tooltip.appendChild(chip1);
    var device_system = document.createElement("a");
    device_system.setAttribute("mdui-tooltip", "{content:'" + isdeviceSystem + "'}");
    chip1.appendChild(device_system);
    var device_system_text = document.createElement("span");
    device_system_text.className = "mdui-chip-title mdui-text-color-black-secondary mdui-text-color-theme-text";
    device_system_text.innerHTML = toIcon("computer") + deviceSystem;
    device_system.appendChild(device_system_text);
    var chip2 = document.createElement("div");
    chip2.className = "mdui-chip";
    chip2.style = "margin-left:5px;";
    item_tooltip.appendChild(chip2);
    var app_Language = document.createElement("a");
    app_Language.setAttribute("mdui-tooltip", "{content:'" + appLanguage + " supported.'}");
    chip2.appendChild(app_Language);
    var app_Language_text = document.createElement("span");
    app_Language_text.className = "mdui-chip-title mdui-text-color-black-secondary mdui-text-color-theme-text";
    app_Language_text.innerHTML = toIcon("language") + appLanguage;
    app_Language.appendChild(app_Language_text);
    var chip3 = document.createElement("div");
    chip3.className = "mdui-chip";
    chip3.style = "margin-left:5px;";
    item_tooltip.appendChild(chip3);
    var latest_version = document.createElement("a");
    latest_version.setAttribute("mdui-tooltip", "{content: 'Latest version " + latestVersion + ".'}");
    chip3.appendChild(latest_version);
    var latest_version_text = document.createElement("span");
    latest_version_text.className = "mdui-chip-title mdui-text-color-black-secondary mdui-text-color-theme-text";
    latest_version_text.innerHTML = toIcon("update") + latestVersion;
    latest_version.appendChild(latest_version_text);
    var chip4 = document.createElement("div");
    chip4.className = "mdui-chip";
    chip4.style = "margin-left:5px;";
    item_tooltip.appendChild(chip4);
    var is_to_crack = document.createElement("a");
    is_to_crack.setAttribute("mdui-tooltip", "{content:'" + isCrack + "'}");
    chip4.appendChild(is_to_crack);
    var is_to_crack_text = document.createElement("span");
    is_to_crack_text.className = "mdui-chip-title mdui-text-color-black-secondary mdui-text-color-theme-text";
    is_to_crack_text.innerHTML = toIcon(isCrackicon) + toCrack;
    is_to_crack.appendChild(is_to_crack_text);
    var chip5 = document.createElement("div");
    chip5.className = "mdui-chip";
    chip5.style = "margin-left:5px;";
    item_tooltip.appendChild(chip5);
    var lastUpdate_time = document.createElement("a");
    lastUpdate_time.setAttribute("mdui-tooltip", "{content:'Last update time " + lastUpdatetime + ".'}");
    chip5.appendChild(lastUpdate_time);
    var lastUpdate_time_text = document.createElement("span");
    lastUpdate_time_text.className = "mdui-chip-title mdui-text-color-black-secondary mdui-text-color-theme-text";
    lastUpdate_time_text.innerHTML = toIcon("access_time") + lastUpdatetime;
    lastUpdate_time.appendChild(lastUpdate_time_text);
    var mdui_panel_item_down_icon = document.createElement("i");
    mdui_panel_item_down_icon.className = "mdui-panel-item-arrow mdui-icon material-icons";
    mdui_panel_item_down_icon.innerHTML = "keyboard_arrow_down";
    mdui_panel_item_header.appendChild(mdui_panel_item_down_icon);
    var mdui_panel_item_body = document.createElement("div");
    mdui_panel_item_body.className = "mdui-panel-item-body";
    mdui_panel_item.appendChild(mdui_panel_item_body);
    var mdui_lists = document.createElement("ul");
    mdui_lists.id = mduiListID;
    mdui_lists.className = "mdui-list";
    mdui_panel_item_body.appendChild(mdui_lists);
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
    var mdui_list_item = document.createElement("li");
    mdui_list_item.className = "mdui-list-item";
    ID.appendChild(mdui_list_item);
    var mdui_list_item_content = document.createElement("div");
    mdui_list_item_content.className = "mdui-list-item-content";
    mdui_list_item_content.innerHTML = appVersion;
    mdui_list_item.appendChild(mdui_list_item_content);
    var download_button = document.createElement("button");
    download_button.className = "mdui-btn mdui-color-theme-accent mdui-ripple";
    download_button.setAttribute("mdui-menu", "{target: '#" + downloadMenuID + "'}");
    download_button.innerHTML = "Download";
    mdui_list_item.appendChild(download_button);
    var mdui_menu = document.createElement("ul");
    mdui_menu.className = "mdui-menu";
    mdui_menu.id = downloadMenuID;
    mdui_menu.style = menuDisplay;
    mdui_list_item.appendChild(mdui_menu);
    var mdui_menu_item1 = document.createElement("li");
    mdui_menu_item1.className = "mdui-menu-item";
    mdui_menu_item1.style = winDisplay;
    mdui_menu.appendChild(mdui_menu_item1);
    var windows = document.createElement("a");
    windows.className = "mdui-ripple";
    windows.innerHTML = toIcon("file_download") + "Windows";
    windows.setAttribute("onclick", "showWarnDialog('" + winDownloadUrl + "','" + winDownloadMa + "');");
    mdui_menu_item1.appendChild(windows);
    var mdui_menu_item2 = document.createElement("li");
    mdui_menu_item2.className = "mdui-menu-item";
    mdui_menu_item2.style = winCrackDisplay;
    mdui_menu.appendChild(mdui_menu_item2);
    var win_backup = document.createElement("a");
    win_backup.className = "mdui-ripple";
    win_backup.innerHTML = toIcon("file_download") + "Win Backup";
    win_backup.setAttribute("onclick", "showWarnDialog('" + winCrackDownloadUrl + "','" + winCrackDownloadMa + "');");
    mdui_menu_item2.appendChild(win_backup);
    var mdui_menu_item3 = document.createElement("li");
    mdui_menu_item3.className = "mdui-menu-item";
    mdui_menu_item3.style = macDisplay;
    mdui_menu.appendChild(mdui_menu_item3);
    var mac_os = document.createElement("a");
    mac_os.className = "mdui-ripple";
    mac_os.innerHTML = toIcon("file_download") + "Mac OS";
    mac_os.setAttribute("onclick", "showWarnDialog('" + macDownloadUrl + "','" + macDownloadMa + "');");
    mdui_menu_item3.appendChild(mac_os);
    var mdui_menu_item4 = document.createElement("li");
    mdui_menu_item4.className = "mdui-menu-item";
    mdui_menu_item4.style = macCrackDisplay;
    mdui_menu.appendChild(mdui_menu_item4);
    var mac_backup = document.createElement("a");
    mac_backup.className = "mdui-ripple";
    mac_backup.innerHTML = toIcon("file_download") + "Mac Backup";
    mac_backup.setAttribute("onclick", "showWarnDialog('" + macCrackDownloadUrl + "','" + macCrackDownloadMa + "');");
    mdui_menu_item4.appendChild(mac_backup);

}
function addItems(id, content, links, imgSrc, widths, heights, mtop, mbottom) {
    var container = document.getElementById(id);
    var buttons = document.createElement("li");
    buttons.className = "scaleBox image-shadow";
    buttons.setAttribute("mdui-tooltip", "{content:'" + content + "'}");
    container.appendChild(buttons);
    var button_link = document.createElement("a");
    button_link.setAttribute("onclick", "window.open('" + links + "','_blank');");
	if (imgSrc.indexOf("<path d=\"") != -1) {
    button_link.innerHTML = "<svg t=\"1591345853097\" class=\"icon isScale\" viewbox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"19670\" width=\"" + widths + "\" height=\"" + heights + "\" style=\"margin-top:" + mtop + "px;margin-bottom:" + mbottom + "px;\">" + imgSrc + "</svg>";
	}else{
	button_link.innerHTML = "<img class=\"isScale\" src=\""+imgSrc+"\" width=\"" + widths + "\" height=\"" + heights + "\" style=\"margin-top:" + mtop + "px;margin-bottom:" + mbottom + "px;\" align=\"middle\"/>";
	}
    buttons.appendChild(button_link);
}
function addFriendLinks(id, url, contmsg, contle) {
    var container = document.getElementById(id);
    var links_button = document.createElement("a");
    links_button.className = "mdui-btn mdui-btn-dense grey-text text-lighten-4 mdui-text-capitalize";
    links_button.innerHTML = contle;
    links_button.style = "font-weight:350;";
    links_button.setAttribute("onclick", "window.open('" + url + "','_blank');");
    links_button.setAttribute("mdui-tooltip", "{content:'" + contmsg + "'}");
    container.appendChild(links_button);
}
function toIcon(icon) {
    return "<i class=\"mdui-icon material-icons\">" + icon + "</i>";
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
function htmlClick(dfs) {
jQuery(document).ready(function($) {
    $("html,body").click(function(e) {
        var n = Math.floor(Math.random() * dfs.length + 1) - 1;
        var $i = $("<p/>").text(dfs[n]);
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 99999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-size": "15px",
            "cursor": "default",
			"color": "transparent",
            "-moz-user-select": "none",
            "-webkit-user-select": "none",
            "-ms-user-select": "none",
            "-khtml-user-select": "none",
            "user-select": "none",
			"background-image": "linear-gradient(to right,#4DA0B0,#D39D38)",
			"-webkit-background-clip": "text",
			"-webkit-text-fill-color": "transparent",
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
        e.stopPropagation();
    });
});
}