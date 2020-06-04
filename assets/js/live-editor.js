var LiveEditor = (function () {
  'use strict';
  var $ = {};
  $.isArray = function (arr) {
    return Object.prototype.toString.apply(arr) === '[object Array]';
  };
  $.toArray = function (nodeList) {
    var i;
    var arr = [];
    for (i = 0; i < nodeList.length; i++) {
      if (nodeList[i]) {
        arr.push(nodeList[i]);
      }
    }
    return arr;
  };
  $.each = function (obj, callback) {
    var i;
    var prop;
    if (!obj) {
      return;
    }
    if ($.isArray(obj)) {
      // Array
      for (i = 0; i < obj.length; i++) {
        if (callback(i, obj[i]) === false) {
          break;
        }
      }
    } else {
      // Object
      for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          if (callback(prop, obj[prop]) === false) {
            break;
          }
        }
      }
    }
  };
  $.throttle = function (fn, delay) {
    var timer = null;

    return function () {
      var _this = this;
      var args = arguments;

      if (timer === null) {
        timer = setTimeout(function () {
          fn.apply(_this, args);
          timer = null;
        }, delay);
      }
    };
  };
  $.ajax = function(data) {
    if (typeof data === "object") {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
          data.success(xmlhttp);
        }
      };
      xmlhttp.open(data.type, data.url, false);
      xmlhttp.send();
    }
  };
  var dom = {
    controlsDrag: document.querySelector('.editor-controls-drag'),
    preview: document.querySelector('.preview-container'),
    panel: document.querySelector('.editor-panel'),
    controls: document.querySelector('.editor-controls'),
    editorContainers: document.querySelectorAll('.editor-container'),
    editorContainerHTML: document.querySelector('.editor-container-html'),
    editorContainerCSS: document.querySelector('.editor-container-css'),
    editorContainerJS: document.querySelector('.editor-container-js'),
    controlHTML: document.querySelector('.editor-control-html'),
    controlCSS: document.querySelector('.editor-control-css'),
    controlJS: document.querySelector('.editor-control-js'),
    controlLiveMode: document.querySelector('.editor-controls-live-mode input[type="checkbox"]'),
  };
  var editor = {
    html: ace.edit('editor-ace-html'),
    css: ace.edit('editor-ace-css'),
    js: ace.edit('editor-ace-js'),
  };
  var editors = [
    {
      inst: editor.html,
      mode: 'html'
    },
    {
      inst: editor.css,
      mode: 'css'
    },
    {
      inst: editor.js,
      mode: 'javascript'
    }
  ];
  function LiveEditor () {
    var _this = this;
    ace.require("ace/ext/language_tools");
    _this.init();
  }
  LiveEditor.prototype.init = function () {
    var _this = this;
    _this.resizePanel();
    $.each(editors, function (i, editor) {
      editor.inst.setTheme('ace/theme/chrome');
      editor.inst.getSession().setMode('ace/mode/' + editor.mode);
      editor.inst.getSession().setTabSize(2);
      editor.inst.getSession().setUseSoftTabs(true); 
      editor.inst.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
      });
      editor.inst.setShowPrintMargin(false);
      editor.inst.setFontSize(14);
      editor.inst.renderer.setShowGutter(false);  
      editor.inst.resize(true);
    });
    _this.hotkey();
    _this.isShowHTML = true;
    _this.isShowCSS = true;
    _this.isShowJS = true;
    if (dom.controlHTML.classList.contains('editor-control-active')) {
      _this.showHTML();
    } else {
      _this.hideHTML();
    }
    if (dom.controlCSS.classList.contains('editor-control-active')) {
      _this.showCSS();
    } else {
      _this.hideCSS();
    }
    if (dom.controlJS.classList.contains('editor-control-active')) {
      _this.showJS();
    } else {
      _this.hideJS();
    }
    _this.isLiveMode = dom.controlLiveMode.checked;
    _this.liveMode();
    _this.resizePanelEvent();

    window.addEventListener('resize', function () {
      _this.resizePanel();
    });

    _this.run();
  };
  LiveEditor.prototype.hotkey = function () {
    var _this = this;

    // Ctrl + enter 运行
    document.addEventListener('keydown', function (e) {
      e = e || window.event;
      var keyCode = e.keyCode || e.charCode;
      if (keyCode === 13 && e.ctrlKey) {
        _this.run();
      }
    });
  };
  LiveEditor.prototype.liveMode = function () {
    var _this = this;

    $.each(editors, function (i, editor) {
      editor.inst.on('change', $.throttle(function () {
        if (_this.isLiveMode) {
          _this.run();
        }
      }, 500));
    });
  };
  LiveEditor.prototype.resizePanel = function (Top) {
    var _this = this;
    if (typeof Top === 'undefined') {
      // 在小屏幕设备上隐藏面板
      if (window.innerWidth < 600) {
       // dom.preview.style.height = document.body.offsetHeight + 'px';
       // dom.panel.style.display = 'none';
        return;
      }
      Top = document.body.offsetHeight / 2;
    }
    var previewHeight = Top;
    var panelHeight = document.body.offsetHeight - Top;
    var controlsHeight = dom.controls.offsetHeight;
    dom.preview.style.height = previewHeight + 'px';
    dom.panel.style.display = 'block';
    dom.panel.style.height = panelHeight + 'px';
    $.each(dom.editorContainers, function (i, editorContainer) {
      editorContainer.style.height = panelHeight - controlsHeight + 'px';
    });
    $.each(editors, function (e, editor) {
      editor.inst.resize();
    });
  };
  LiveEditor.prototype.resizePanelEvent = function () {
    var _this = this;

    dom.controlsDrag.onmousedown = function (e) {
      var panelTopOrigin = dom.panel.offsetTop;
      var tempHeight = e.clientY - panelTopOrigin;
      document.onmousemove = function (e) {
        e.preventDefault();
        var mouseTop = e.clientY;
        var Top = mouseTop - tempHeight;
        if (Top + dom.controls.offsetHeight + 40 < document.body.offsetHeight && Top >= 0) {
          _this.resizePanel(Top);
        }
      };
      document.onmouseup = function (e) {
        document.onmousemove = null;
      };
    };
  };
  LiveEditor.prototype._setEditorWidth = function (width) {
    dom.editorContainerHTML.style.width =
      dom.editorContainerCSS.style.width =
        dom.editorContainerJS.style.width = width;
  };
  LiveEditor.prototype.resizeEditor = function () {
    var _this = this;
    var showCount = 0;
    _this.isShowHTML && showCount++;
    _this.isShowCSS && showCount++;
    _this.isShowJS && showCount++;

    if (showCount === 3) {
      _this._setEditorWidth('33.333333%');
    } else if (showCount === 2) {
      _this._setEditorWidth('50%');
    } else if (showCount === 1) {
      _this._setEditorWidth('100%');
    }
    _this.isShowHTML && editor.html.resize();
    _this.isShowCSS && editor.css.resize();
    _this.isShowJS && editor.js.resize();
  };
  LiveEditor.prototype.showHTML = function () {
    var _this = this;
    dom.controlHTML.classList.add('editor-control-active');
    dom.editorContainerHTML.style.display = 'block';
    editor.html.resize();
    _this.isShowHTML = true;
    _this.resizeEditor();
  };
  LiveEditor.prototype.hideHTML = function () {
    var _this = this;
    dom.controlHTML.classList.remove('editor-control-active');
    dom.editorContainerHTML.style.display = 'none';
    _this.isShowHTML = false;
    _this.resizeEditor();
  };
  LiveEditor.prototype.toogleHTML = function () {
    var _this = this;
    if (dom.controlHTML.classList.contains('editor-control-active')) {
      _this.hideHTML();
    } else {
      _this.showHTML();
    }
  };
  LiveEditor.prototype.showCSS = function () {
    var _this = this;
    dom.controlCSS.classList.add('editor-control-active');
    dom.editorContainerCSS.style.display = 'block';
    editor.css.resize();
    _this.isShowCSS = true;
    _this.resizeEditor();
  };
  LiveEditor.prototype.hideCSS = function () {
    var _this = this;
    dom.controlCSS.classList.remove('editor-control-active');
    dom.editorContainerCSS.style.display = 'none';
    _this.isShowCSS = false;
    _this.resizeEditor();
  };
  LiveEditor.prototype.toogleCSS = function () {
    var _this = this;
    if (dom.controlCSS.classList.contains('editor-control-active')) {
      _this.hideCSS();
    } else {
      _this.showCSS();
    }
  };
  LiveEditor.prototype.showJS = function () {
    var _this = this;
    dom.controlJS.classList.add('editor-control-active');
    dom.editorContainerJS.style.display = 'block';
    editor.js.resize();
    _this.isShowJS = true;
    _this.resizeEditor();
  };
  LiveEditor.prototype.hideJS = function () {
    var _this = this;
    dom.controlJS.classList.remove('editor-control-active');
    dom.editorContainerJS.style.display = 'none';
    _this.isShowJS = false;
    _this.resizeEditor();
  };
  LiveEditor.prototype.toogleJS = function () {
    var _this = this;
    if (dom.controlJS.classList.contains('editor-control-active')) {
      _this.hideJS();
    } else {
      _this.showJS();
    }
  };
  LiveEditor.prototype.toogleLiveMode = function () {
    var _this = this;
    dom.controlLiveMode.checked = _this.isLiveMode = !_this.isLiveMode;
    _this.liveMode();
  };
  LiveEditor.prototype.run = function () {
    var _this = this;
    var html = editor.html.getValue();
    var css = editor.css.getValue();
    var js = editor.js.getValue();
    // 移除旧的 iframe
    var iframeEle = document.getElementById('preview-iframe');
    if (iframeEle) {
      iframeEle.parentNode.removeChild(iframeEle);
    }
    var tempParent = document.createElement('div');
    tempParent.innerHTML = '<iframe id="preview-iframe" sandbox="allow-modals allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts" name="iframe" frameborder="0"></iframe>';
    iframeEle = $.toArray(tempParent.childNodes)[0];
    dom.preview.appendChild(iframeEle);
    const changeFavicon = link => {
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
    var ico = html.match(/shortcut icon\" href=\"(\S*)\"/)[1];
    var tle = html.match(/title\>(\S*)\<\/title/)[1];
    changeFavicon(ico);
    document.title = tle;
    var iframe = iframeEle.contentDocument || iframeEle.contentWindow.document;
    iframe.open();
    iframe.write(html + '<style>' + css + '</style>' + '<script>' + js + '</script>');
    iframe.close();
  };
  LiveEditor.prototype.download = function () {
	  window.location.href='/index.html';
  };
  return LiveEditor;
})();