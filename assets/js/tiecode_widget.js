window.addEventListener('load',
function() {
	/**
 	 *tie-tab
 	 */
	let _tie_tab_title = document.querySelectorAll('.tie-tab-title');
	for (let i = 0; i < _tie_tab_title.length; i++) {
		let _hash = window.location.hash;
		let __tie_tab_title = _tie_tab_title[i];
		let _active_tle = __tie_tab_title.parentElement.querySelector('.tie-tab-title.tie-tab-active');
		if(_hash){
			document.querySelector(_hash).style.display = 'block';
			_active_tle.classList.remove('tie-tab-active');
			__tie_tab_title.parentElement.querySelector('.tie-tab-title[tie-tab-cont="' + _hash + '"]').classList.add('tie-tab-active');
		}else{
			let _cont_id = _active_tle.getAttribute('tie-tab-cont');
			let _active_cont = document.querySelector(_cont_id);
			_active_cont.removeAttribute('id');
			window.location.hash = _cont_id;
			_active_cont.setAttribute('id', _cont_id.replace('#',''));
			_active_cont.style.display = 'block';
		}
		__tie_tab_title.addEventListener('click',
		function(event) {
			let _title_id = this.getAttribute('tie-tab-cont');
			_active_cont = document.querySelector(_title_id);
			_active_tle = this.parentElement.querySelector('.tie-tab-title.tie-tab-active');
			if(__tie_tab_title != _active_tle){
				_active_cont.removeAttribute('id');
				window.location.hash = _title_id;
				document.querySelector(_active_tle.getAttribute('tie-tab-cont')).style.display = 'none';
				_active_tle.classList.remove('tie-tab-active');
				this.classList.add('tie-tab-active');
				_active_cont.setAttribute('id', _title_id.replace('#',''));
				_active_cont.style.display = 'block';
			}
		});
	}
});
var longPressTimer = null;
var touchStartX = 0;
var touchStartY = 0;
var _hasPointerEvents = (('PointerEvent' in window) || (window.navigator && 'msPointerEnabled' in window.navigator));
var _isTouch = (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
var _mouseDown = _hasPointerEvents ? 'pointerdown' : _isTouch ? 'touchstart' : 'mousedown';
var _mouseUp = _hasPointerEvents ? 'pointerup' : _isTouch ? 'touchend' : 'mouseup';
var _mouseMove = _hasPointerEvents ? 'pointermove' : _isTouch ? 'touchmove' : 'mousemove';
document.addEventListener(_mouseDown, _touchStartHandler, true);
document.addEventListener(_mouseUp, _clearLongPressTimer, true);
document.addEventListener('touchcancel', _clearLongPressTimer, true);
document.addEventListener('wheel', _clearLongPressTimer, true);
document.addEventListener('scroll', _clearLongPressTimer, true);
document.addEventListener(_mouseMove, _touchMoveHandler, true);
function _touchStartHandler(e) {
	touches = _unifyEvent(e);
	touchStartX = touches.clientX;
    touchStartY = touches.clientY;
	e.preventDefault();
	longPressTimer = setTimeout(function() {
		_longPressEvent(e);
	}, ((e.buttons == 2)?0:500));
}
function _unifyEvent(e) {
    if (e.changedTouches !== undefined) {
        return e.changedTouches[0];
    }
    return e;
}
function _longPressEvent(e) {
	e.target.oncontextmenu = function(){ return false; };
	touches = _unifyEvent(e);
	let allowClickEvent = e.target.dispatchEvent(new CustomEvent('longClick', {
        bubbles: true,
        cancelable: true,
        detail: {
            clientX: touches.clientX,
            clientY: touches.clientY
        },
        clientX: touches.clientX,
        clientY: touches.clientY,
        offsetX: touches.offsetX,
		offsetY: touches.offsetY,
        pageX: touches.pageX,
        pageY: touches.pageY,
        screenX: touches.screenX,
        screenY: touches.screenY
    }));
	if (!allowClickEvent) {
        document.addEventListener('click', function suppressEvent(e) {
            document.removeEventListener('click', suppressEvent, true);
            _clearLongPressTimer();
			e.stopImmediatePropagation();
        	e.preventDefault();
        	e.stopPropagation();
        }, true);
    }
}
function _clearLongPressTimer() {
    clearTimeout(longPressTimer);
    longPressTimer = null;
}
function _touchMoveHandler(e) {
	touches = _unifyEvent(e);
    if (Math.abs(touchStartX - touches.clientX) >= 10 || Math.abs(touchStartY - touches.clientY) >= 10) {
        _clearLongPressTimer();
    }
}
/**
 *TieMessage
 */
class TieMessage {
	constructor() {
		this.MESSAGE_TYPE_INFO = 0;
		this.MESSAGE_TYPE_SUCCESS = 1;
		this.MESSAGE_TYPE_WARNING = 2;
		this.MESSAGE_TYPE_ERROR = 3;
		this.type = 0;
		this.time = 1500;
		this.is_show = false;
		this.#create();
	}
	#create() {
		this.message = document.createElement('div');
		this.panel = document.createElement('div');
		this.icon = document.createElement('i');
		this.#addClass();
	}
	#addClass() {
		this.message.classList.add('tie-message', 'fade-in');
		this.panel.classList.add('tie-message-panel');
		this.icon.classList.add('tie-message-icon');
	}
	setMessage(message) {
		this.message_text = message;
		this.content = document.createElement('div');
		this.content.classList.add('tie-message-text');
		this.content.innerHTML = message;
		return this;
	}
	getMessage() {
		return this.content;
	}
	setType(type) {
		this.type = type;
		return this;
	}
	setTime(time) {
		this.time = time;
		return this;
	}
	#init() {
		if (this.type == 1) {
			this.icon.classList.add('icon-success');
			this.panel.style.backgroundColor = 'rgb(75 151 79 / 95%)';
		} else if (this.type == 2) {
			this.icon.classList.add('icon-warning');
			this.panel.style.backgroundColor = 'rgb(213 163 14 / 95%)';
		} else if (this.type == 3) {
			this.icon.classList.add('icon-error');
			this.panel.style.backgroundColor = 'rgb(244 67 54 / 95%)';
		} else {
			this.icon.classList.add('icon-info');
			this.panel.style.backgroundColor = 'rgb(1 169 244 / 95%)';
		}
		this.panel.append(this.icon);
		this.panel.append(this.content);
		this.message.append(this.panel);
		if(document.querySelector('header.tie-appbar') && document.querySelector('header.tie-appbar').style.display != 'none'){
			this.message.style.marginTop = '55px';
		}
	}
	onOpen(message) {
		
	}
	onOpened(message) {
		
	}
	onClose(message) {
		
	}
	onClosed(message) {
		
	}
	show() {
		this.#init();
		let this1 = this;
		this.onOpen(this.message);
		if (this.message_text) {
			if (document.querySelector('.tie-message')) {
				var _interval = setInterval(function() {
					if (!document.querySelector('.tie-message')) {
						document.body.appendChild(this1.message);
						this1.message.style.display = 'block';
						setTimeout(function() {
							this1.#close();
						},
						this1.time);
						this1.onOpen(this.message);
						this1.is_show = true;
						clearInterval(_interval);
					}
				},
				1);
			} else {
				document.body.appendChild(this.message);
				this.message.style.display = 'block';
				setTimeout(function() {
					this1.#close();
				},
				this1.time);
				this.onOpened(this.message);
				this.is_show = true;
			}
		}
	}
	getShow() {
		return (this.is_show && (this.message.parentNode || this.message.parentNode.nodeType != 11));
	}
	#close() {
		let this1 = this;
		this.onClose(this.message);
		if (document.querySelector('.tie-message')) {
			this.message.classList.add('fade-out');
			setTimeout(function() {
				if (this1.message.parentNode) {
					this1.message.parentNode.removeChild(this1.message);
					this1.is_show = false;
					this1.onClosed(this1.message);
				}
			},
			200);
		}
	}
};
/**
 *TieBottomDialog
 */
class TieBottomDialog {
	constructor() {
		this.set_negative_button = false;
		this.set_positive_button = false;
		this.set_extra_button = false;
		this.is_show = false;
		this.#create();
		this.cancelable = true;
		this.ontouch_cancel = true;
	}
	#create() {
		this.title = document.createElement('div');
		this.message = document.createElement('div');
		this.content = document.createElement('div');
		this.action = document.createElement('div');
		this.panel = document.createElement('div');
		this.mask = document.createElement('div');
		this.bottom_dialog = document.createElement('div');
		this.#addClass();
	}
	#addClass() {
		this.title.classList.add('tie-dialog-bottom-title');
		this.message.classList.add('tie-dialog-bottom-message');
		this.content.classList.add('tie-dialog-bottom-content');
		this.action.classList.add('tie-dialog-bottom-action');
		this.panel.classList.add('tie-dialog-bottom-panel', 'swipe-up');
		this.mask.classList.add('tie-dialog-bottom-mask', 'fade-in');
		this.bottom_dialog.classList.add('tie-dialog-bottom', 'dialog-show');
	}
	setTitle(title) {
		this.title_text = title;
		this.title.innerHTML = title;
		return this;
	}
	getTitle() {
		return this.title;
	}
	setContent(message) {
		this.message_text = message;
		this.message.innerHTML = message;
		return this;
	}
	getContent() {
		return this.message;
	}
	setCanceledOnTouchOutside(cancel) {
		this.ontouch_cancel = cancel;
		return this;
	}
	setCancelable(cancel) {
		this.cancelable = cancel;
		return this;
	}
	setNegativeButton(text, onClick) {
		let this1 = this;
		this.set_negative_button = true;
		this.negative_button = document.createElement('button');
		this.negative_button.classList.add('tie-dialog-bottom-button-negative', 'tie-button', 'tie-button-primary', 'action-button');
		this.negative_button.innerText = text;
		this.negative_button.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.negative_button);
			}else if (this1.cancelable) {
				this1.dismiss();
			}
		});
		return this;
	}
	setPositiveButton(text, onClick) {
		let this1 = this;
		this.set_positive_button = true;
		this.positive_button = document.createElement('button');
		this.positive_button.classList.add('tie-dialog-bottom-button-positive', 'tie-button', 'action-button');
		this.positive_button.innerText = text;
		this.positive_button.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.positive_button);
			}else if (this1.cancelable) {
				this1.dismiss();
			}
		});
		return this;
	}
	setExtraButton(text, onClick) {
		let this1 = this;
		this.set_extra_button = true;
		this.extra_button = document.createElement('button');
		this.extra_button.classList.add('tie-dialog-bottom-button-negative', 'tie-button', 'action-button');
		this.extra_button.innerText = text;
		this.extra_button.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.extra_button);
			}else if (this1.cancelable) {
				this1.dismiss();
			}
		});
		return this;
	}
	getNegativeButton() {
		return this.negative_button;
	}
	getPositiveButton() {
		return this.positive_button;
	}
	getExtraButton() {
		return this.extra_button;
	}
	onOpen(bottom_dialog) {
		
	}
	onOpened(bottom_dialog) {
		
	}
	onClose(bottom_dialog) {
		
	}
	onClosed(bottom_dialog) {
		
	}
	#init() {
		if(document.querySelector('header.tie-appbar') && document.querySelector('header.tie-appbar').style.display != 'none'){
			this.mask.style.marginTop = '55px';
		}
		this.bottom_dialog.append(this.mask);
		if (this.title_text) {
			this.panel.append(this.title);
		}
		if (this.message_text) {
			this.panel.append(this.message);
		}
		this.panel.append(this.content);
		if (this.set_negative_button) {
			this.action.append(this.negative_button);
		}
		if (this.set_extra_button) {
			this.action.append(this.extra_button);
		}
		if (this.set_positive_button) {
			this.action.append(this.positive_button);
		}
		this.panel.append(this.action);
		this.bottom_dialog.append(this.panel);
	}
	#event() {
		let this1 = this;
		this.mask.addEventListener('click',
		function(event) {
			if (this1.ontouch_cancel && this1.cancelable) {
				this1.dismiss();
			}
		});
	}
	getShow() {
		return (this.is_show && (this.bottom_dialog.parentNode || this.bottom_dialog.parentNode.nodeType != 11));
	}
	show() {
		this.onOpen(this.bottom_dialog);
		if (!this.is_show) {
			this.#init();
			if (this.title_text) {
				document.body.appendChild(this.bottom_dialog);
				this.bottom_dialog.style.display = 'block';
				this.#event();
				document.body.classList.add('open-dialog');
				this.is_show = true;
				this.onOpened(this.bottom_dialog);
			}
		}
		return this;
	}
	dismiss() {
		let this1 = this;
		this.onClose(this.bottom_dialog);
		if (this.is_show && document.querySelector('.tie-dialog-bottom')) {
			this1.panel.classList.add('swipe-down');
			this1.mask.classList.add('fade-out');
			setTimeout(function() {
				if (this1.bottom_dialog.parentNode) {
					this1.bottom_dialog.parentNode.removeChild(this1.bottom_dialog);
					this1.is_show = false;
					this1.onClosed(this1.bottom_dialog);
				}
			},
			200);
			if (document.querySelectorAll('.dialog-show').length < 2) {
				document.body.classList.remove('open-dialog');
			}
		}
		return this;
	}
};
/**
 *TieBottomInputDialog
 */
class TieBottomInputDialog {
	constructor() {
		this.singleline = true;
		this.required = false;
		this.input_type = 'text';
		this.input_value = '';
		this.set_negative_button = false;
		this.set_positive_button = false;
		this.set_extra_button = false;
		this.is_show = false;
		this.#create();
		this.cancelable = true;
		this.ontouch_cancel = true;
	}
	#create() {
		this.title = document.createElement('div');
		this.message = document.createElement('div');
		this.content = document.createElement('div');
		this.action = document.createElement('div');
		this.panel = document.createElement('div');
		this.mask = document.createElement('div');
		this.bottom_dialog = document.createElement('div');
		this.input_div = document.createElement('div');
		this.textarea_div = document.createElement('div');
		this.input = document.createElement('input');
		this.textarea = document.createElement('textarea');
		this.#addClass();
	}
	#addClass() {
		this.title.classList.add('tie-dialog-bottom-title');
		this.message.classList.add('tie-dialog-bottom-message', 'tie-dialog-bottom-message-fix');
		this.content.classList.add('tie-dialog-bottom-content', 'tie-dialog-bottom-content-fix', 'tie-dialog-bottom-content-prompt');
		this.action.classList.add('tie-dialog-bottom-action');
		this.panel.classList.add('tie-dialog-bottom-panel', 'swipe-up');
		this.mask.classList.add('tie-dialog-bottom-mask', 'fade-in');
		this.bottom_dialog.classList.add('tie-dialog-bottom', 'dialog-show');
		this.input_div.classList.add('tie-input');
		this.textarea_div.classList.add('tie-textarea');
	}
	setTitle(title) {
		this.title_text = title;
		this.title.innerHTML = title;
		return this;
	}
	getTitle() {
		return this.title;
	}
	setInputTitle(message) {
		this.message_text = message;
		this.message.innerText = message;
		return this;
	}
	setCanceledOnTouchOutside(cancel) {
		this.ontouch_cancel = cancel;
		return this;
	}
	setCancelable(cancel) {
		this.cancelable = cancel;
		return this;
	}
	setHintText(text) {
		this.hint_text = text;
		this.input.setAttribute('placeholder', text);
		this.textarea.setAttribute('placeholder', text);
		return this;
	}
	getEditView() {
		if (this.singleline) {
			return this.input;
		} else {
			return this.textarea;
		}
	}
	setValue(value) {
		this.input_value = value;
		if (this.singleline) {
			this.input.value = value;
		} else {
			this.textarea.value = value;
		}
		return this;
	}
	setMaxLength(maxlength) {
		this.maxlength = maxlength;
		if (this.singleline) {
			this.input.setAttribute('maxlength', maxlength);
		} else {
			this.textarea.setAttribute('maxlength', maxlength);
		}
		return this;
	}
	setSingleLine(singleline) {
		this.singleline = singleline;
		return this;
	}
	setInputType(type) {
		this.input_type = type;
		if (this.singleline) {
			this.input.setAttribute('type', type);
		} else {
			this.textarea.setAttribute('type', type);
		}
		return this;
	}
	setRequired(required) {
		this.required = required;
		return this;
	}
	setNegativeButton(text, onClick) {
		let this1 = this;
		this.set_negative_button = true;
		this.negative_button = document.createElement('button');
		this.negative_button.classList.add('tie-dialog-bottom-button-negative', 'tie-button', 'tie-button-primary', 'action-button');
		this.negative_button.innerText = text;
		this.negative_button.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.input_value);
			}else if (this1.cancelable) {
				if (!this1.required || (this1.required && this1.input_value)) {
					this1.dismiss();
				}
			}
		});
		return this;
	}
	setPositiveButton(text, onClick) {
		let this1 = this;
		this.set_positive_button = true;
		this.positive_button = document.createElement('button');
		this.positive_button.classList.add('tie-dialog-bottom-button-positive', 'tie-button', 'action-button');
		this.positive_button.innerText = text;
		this.positive_button.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.input_value);
			}else if (this1.cancelable) {
				if (!this1.required || (this1.required && this1.input_value)) {
					this1.dismiss();
				}
			}
		});
		return this;
	}
	setExtraButton(text, onClick) {
		let this1 = this;
		this.set_extra_button = true;
		this.extra_button = document.createElement('button');
		this.extra_button.classList.add('tie-dialog-bottom-button-negative', 'tie-button', 'action-button');
		this.extra_button.innerText = text;
		this.extra_button.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.input_value);
			}else if (this1.cancelable) {
				if (!this1.required || (this1.required && this1.input_value)) {
					this1.dismiss();
				}
			}
		});
		return this;
	}
	getNegativeButton() {
		return this.negative_button;
	}
	getPositiveButton() {
		return this.positive_button;
	}
	getExtraButton() {
		return this.extra_button;
	}
	onInput(value) {
		
	}
	onOpen(bottom_dialog) {
		
	}
	onOpened(value) {
		
	}
	onClose(value) {
		
	}
	onClosed(bottom_dialog) {
		
	}
	#init() {
		if(document.querySelector('header.tie-appbar') && document.querySelector('header.tie-appbar').style.display != 'none'){
			this.mask.style.marginTop = '55px';
		}
		this.bottom_dialog.append(this.mask);
		if (this.title_text) {
			this.panel.append(this.title);
		}
		if (this.message_text) {
			this.panel.append(this.message);
		}
		if (this.singleline) {
			this.input_div.append(this.input);
			this.content.append(this.input_div);
		} else {
			this.textarea_div.append(this.textarea);
			this.content.append(this.textarea_div);
		}
		this.panel.append(this.content);
		if (this.set_negative_button) {
			this.action.append(this.negative_button);
		}
		if (this.set_extra_button) {
			this.action.append(this.extra_button);
		}
		if (this.set_positive_button) {
			this.action.append(this.positive_button);
		}
		this.panel.append(this.action);
		this.bottom_dialog.append(this.panel);
	}
	#event() {
		let this1 = this;
		this.mask.addEventListener('click',
		function(event) {
			if (this1.ontouch_cancel && this1.cancelable) {
				this1.dismiss();
			}
		});
		this.input.addEventListener('input',
		function(event) {
			let _input_value = this.value;
			if (this1.singleline) {
				this1.input_value = _input_value;
				this1.onInput(_input_value);
			}
		});
		this.textarea.addEventListener('input',
		function(event) {
			let _input_value = this.value;
			if (!this1.singleline) {
				this1.input_value = _input_value;
				this1.onInput(_input_value);
			}
		});
	}
	getShow() {
		return (this.is_show && (this.bottom_dialog.parentNode || this.bottom_dialog.parentNode.nodeType != 11));
	}
	show() {
		this.onOpen(this.bottom_dialog);
		if (!this.is_show) {
			this.#init();
			if (this.title_text && (this.input_value || this.hint_text)) {
				document.body.appendChild(this.bottom_dialog);
				this.content.style.display = 'block';
				this.bottom_dialog.style.display = 'block';
				this.#event();
				document.body.classList.add('open-dialog');
				this.is_show = true;
				this.onOpened(this.input_value);
			}
		}
		return this;
	}
	dismiss() {
		let this1 = this;
		this.onClose(this.input_value);
		if (this.is_show && document.querySelector('.tie-dialog-bottom')) {
			this1.panel.classList.add('swipe-down');
			this1.mask.classList.add('fade-out');
			setTimeout(function() {
				if (this1.bottom_dialog.parentNode) {
					this1.bottom_dialog.parentNode.removeChild(this1.bottom_dialog);
					this1.is_show = false;
					this1.onClosed(this1.bottom_dialog);
				}
			},
			200);
			if (document.querySelectorAll('.dialog-show').length < 2) {
				document.body.classList.remove('open-dialog');
			}
		}
		return this;
	}
};
/**
 *TieSheetDialog
 */
class TieSheetDialog {
	constructor(_querySelector) {
		this.is_show = false;
		this.cancelable = true;
		this.ontouch_cancel = true;
		this.onscroll_cancel = true;
		this.onscroll_slide_up = false;
		this._is_create = false;
		this.panel_height = 0;
		this.theResizeObserver;
		this.#create(_querySelector);
	}
	#create(_querySelector) {
		if (_querySelector && Object.prototype.toString.call(_querySelector) === '[object String]') {
			this.header_bar = document.querySelector(_querySelector + ' .tie-dialog-bottom-header-bar');
			this.header_bar_cnt = document.querySelector(_querySelector + ' .tie-dialog-bottom-header-bar-cont');
			this.header = document.querySelector(_querySelector + ' .tie-dialog-bottom-header');
			this.panel = document.querySelector(_querySelector + ' .tie-dialog-bottom-panel');
			this.title = document.querySelector(_querySelector + ' .tie-dialog-bottom-title');
			this.title_text = this.title.innerText;
			this.content = document.querySelector(_querySelector + ' .tie-dialog-bottom-content');
			this.mask = document.querySelector(_querySelector + ' .tie-dialog-bottom-mask');
			this.bottom_dialog = document.querySelector(_querySelector + '.tie-dialog-bottom');
		} else {
			this._is_create = true;
			this.header_bar = document.createElement('div');
			this.header_bar_cnt = document.createElement('div');
			this.header = document.createElement('div');
			this.panel = document.createElement('div');
			this.title = document.createElement('div');
			this.content = document.createElement('div');
			this.mask = document.createElement('div');
			this.bottom_dialog = document.createElement('div');
		}
		this.#addClass();
	}
	#addClass() {
		if (this._is_create) {
			this.bottom_dialog.classList.add('tie-dialog-bottom', 'dialog-show');
			this.mask.classList.add('tie-dialog-bottom-mask');
			this.content.classList.add('tie-dialog-bottom-content', 'tie-dialog-bottom-action-content-fix');
			this.title.classList.add('tie-dialog-bottom-title', 'tie-dialog-bottom-title-fix');
			this.panel.classList.add('tie-dialog-bottom-panel');
			this.header.classList.add('tie-dialog-bottom-header');
			this.header_bar_cnt.classList.add('tie-dialog-bottom-header-bar-cont');
			this.header_bar.classList.add('tie-dialog-bottom-header-bar');
		} else {
			this.bottom_dialog.classList.add('dialog-show');
			this.title.classList.add('tie-dialog-bottom-title-fix');
			this.content.classList.add('tie-dialog-bottom-action-content-fix');
		}
	}
	setCanceledOnTouchOutside(cancel) {
		this.ontouch_cancel = cancel;
		return this;
	}
	setCanceledonScrollOutside(cancel) {
		this.onscroll_cancel = cancel;
		return this;
	}
	setCancelable(cancel) {
		this.cancelable = cancel;
		return this;
	}
	setOnScrollUpside(cancel) {
		this.onscroll_slide_up = cancel;
		return this;
	}
	setTitle(text) {
		this.title_text = text;
		this.title.innerHTML = text;
		return this;
	}
	getTitle() {
		return this.title;
	}
	setContent(_querySelector) {
		this._layout_querySelector = _querySelector;
		let __querySelector = document.querySelector(_querySelector);
		var _children = __querySelector.children;
		var _length = __querySelector.childElementCount;
		for (var i = 0; i < _length; i++) {
			this.content.appendChild(_children[0]);
		}
		this.content.style = __querySelector.style.cssText;
		this.content.className = __querySelector.className;
		this.content.classList.add('tie-dialog-bottom-action-content-fix');
		return this;
	}
	getContent() {
		return this.content;
	}
	onOpen(bottom_dialog) {
		
	}
	onOpened(content) {
		
	}
	onClose(content) {
		
	}
	onClosed(bottom_dialog) {
		
	}
	onScrollTop() {
		
	}
	onScrollBottom() {
		
	}
	#init() {
		if (this._is_create) {
			this.header_bar.append(this.header_bar_cnt);
			this.header.append(this.header_bar);
			this.panel.append(this.header);
			if (this.title_text) {
				this.panel.append(this.title);
			}
			this.panel.append(this.content);
			if(document.querySelector('header.tie-appbar') && document.querySelector('header.tie-appbar').style.display != 'none'){
			    this.mask.style.marginTop = '55px';
			}
			this.bottom_dialog.append(this.mask);
			this.bottom_dialog.append(this.panel);
		}
	}
	#event() {
		let this1 = this;
		this1.mask.addEventListener('click',
		function(event) {
			if (this1.ontouch_cancel && this1.cancelable) {
				this1.dismiss();
			}
		});
		let window_outerHeight = window.outerHeight;
		this.panel_height = this.panel.clientHeight;
		let startY = 0;
		let distanceY = 0;
		let clientY = 0;
		let old_height = this.panel_height;
		let one = false;
		this.header_bar.addEventListener('touchstart',
		function(event) {
			if (this1.onscroll_cancel && this1.cancelable) {
				if (!one) {
					old_height = this1.panel_height;
					one = true;
				}
				startY = event.touches[0].clientY;
				clientY = event.touches[0].clientY;
				this1.panel.classList.remove('ease-in-out');
			}
		});
		this.header_bar.addEventListener('touchmove',
		function(event) {
			if (this1.onscroll_cancel && this1.cancelable) {
				clientY = event.touches[0].clientY;
				distanceY = window_outerHeight - clientY;
				if (clientY > startY) {
					this1.panel.style.height = distanceY + 'px';
				} else {
					if (this1.panel.clientHeight < (window_outerHeight * 0.85) && this1.onscroll_slide_up) {
						this1.panel.style.height = distanceY + 'px';
					}
				}
			}
		});
		this.header_bar.addEventListener('touchend',
		function(event) {
			if (this1.onscroll_cancel && this1.cancelable) {
				this1.panel.classList.add('ease-in-out');
				if (clientY > startY) {
					if ((old_height * 0.75) >= this1.panel.clientHeight) {
						this1.dismiss();
					} else {
						this1.panel.style.height = (old_height - 20) + 'px';
					}
				} else {
					if (this1.panel.clientHeight < (window_outerHeight * 0.85) && this1.onscroll_slide_up) {
						this1.panel.style.height = window_outerHeight * 0.85 + 'px';
					}
				}
			}
			distanceY = 0;
		});
		this.theResizeObserver = new ResizeObserver(function() {
			let display = getComputedStyle(this1.panel).getPropertyValue('display');
			let height = getComputedStyle(this1.panel).getPropertyValue('height');
			if (this1.panel.clientHeight > this1.panel_height) {
				this1.panel_height = this1.panel.clientHeight;
			}
		});
		this.theResizeObserver.observe(this.panel);
		this.content.addEventListener('scroll',
		function(event) {
			if (this.scrollTop <= 0) {
				this1.onScrollTop(this.content);
			} else if (this.scrollHeight - this.scrollTop - (document.body.clientHeight || document.documentElement.clientHeight) <= 100) {
				this1.onScrollBottom(this.content);
			}
		});
	}
	getShow() {
		return (this.is_show && (this.bottom_dialog.parentNode || this.bottom_dialog.parentNode.nodeType != 11));
	}
	show() {
		let this1 = this;
		this.onOpen(this.bottom_dialog);
		if (!this.is_show) {
			this.#init();
			this.panel.classList.add('swipe-up');
			this.mask.classList.add('fade-in');
			if (this.bottom_dialog) {
				this.content.style.height = this.content.style.height + 'px';
				this.content.style.display = 'block';
				this.bottom_dialog.style.display = 'block';;
			}
			if (this._is_create) {
				document.body.appendChild(this.bottom_dialog);
			} else {
				this.panel.style.height = 'auto';
			}
			this.#event();
			document.body.classList.add('open-dialog');
			this.is_show = true;
			this.onOpened(this.content);
			this.panel_height = this.panel.clientHeight;
		}
		return this;
	}
	dismiss() {
		let this1 = this;
		this.onClose(this.content);
		if (this.is_show) {
			this1.panel.classList.add('swipe-down');
			this1.mask.classList.add('fade-out');
			setTimeout(function() {
				if (this1._is_create && this1._layout_querySelector) {
					if (this1.bottom_dialog) {
						var _children = this1.content.children;
						var _length = this1.content.childElementCount;
						for (var i = 0; i < _length; i++) {
							document.querySelector(this1._layout_querySelector).appendChild(_children[0]);
						}
						this1.bottom_dialog.parentNode.removeChild(this1.bottom_dialog);
					}
				} else {
					if (this1.bottom_dialog.parentNode) {
						this1.bottom_dialog.style.display = 'none';
						this1.panel.classList.remove('swipe-down');
						this1.mask.classList.remove('fade-out');

					}
				}
				this1.bottom_dialog.classList.remove('dialog-show');
				this1.is_show = false;
				this1.onClosed(this1.bottom_dialog);
			},
			200);
			if (document.querySelectorAll('.dialog-show').length < 2) {
				document.body.classList.remove('open-dialog');
			}
			this.theResizeObserver.unobserve(this.panel);
			this.theResizeObserver = null;
		}
		return this;
	}
};
/**
 *TieBottomListDialog
 */
class TieBottomListDialog {
	constructor() {
		this.set_negative_button = false;
		this.set_positive_button = false;
		this.set_extra_button = false;
		this.set_item = false;
		this.is_show = false;
		this.#create();
		this.cancelable = true;
		this.ontouch_cancel = true;
	}
	#create() {
		this.title = document.createElement('div');
		this.message = document.createElement('div');
		this.content = document.createElement('div');
		this.action = document.createElement('div');
		this.panel = document.createElement('div');
		this.mask = document.createElement('div');
		this.bottom_dialog = document.createElement('div');
		this.#addClass();
	}
	#addClass() {
		this.title.classList.add('tie-dialog-bottom-title');
		this.message.classList.add('tie-dialog-bottom-message', 'tie-dialog-bottom-message-fix');
		this.content.classList.add('tie-dialog-bottom-content', 'tie-dialog-bottom-list');
		this.action.classList.add('tie-dialog-bottom-action');
		this.panel.classList.add('tie-dialog-bottom-panel', 'swipe-up');
		this.mask.classList.add('tie-dialog-bottom-mask', 'fade-in');
		this.bottom_dialog.classList.add('tie-dialog-bottom', 'dialog-show');
	}
	setTitle(title) {
		this.title_text = title;
		this.title.innerHTML = title;
		if (this.title_text) {
			this.panel.append(this.title);
		}
		return this;
	}
	getTitle() {
		return this.title;
	}
	setMessage(message) {
		this.message_text = message;
		this.message.innerHTML = message;
		if (this.message_text) {
			this.panel.append(this.message);
		}
		return this;
	}
	getMessage() {
		return this.message;
	}
	setCanceledOnTouchOutside(cancel) {
		this.ontouch_cancel = cancel;
		return this;
	}
	setCancelable(cancel) {
		this.cancelable = cancel;
		return this;
	}
	setContentItems(name, onClick) {
		this.set_item = true;
		let this1 = this;
		this['list_item' + name] = document.createElement('div');
		this['list_item' + name].classList.add('tie-dialog-bottom-list-item');
		this['list_item' + name].innerHTML = name;
		if (name) {
			this.content.append(this['list_item' + name])
		}
		this['list_item' + name].addEventListener('click',
		function(event) {
			onClick(name);
			if (this1.cancelable) {
				this1.dismiss();
			}
		});
		return this;
	}
	getContentItems(name) {
		return this['list_item' + name];
	}
	setNegativeButton(text, onClick) {
		let this1 = this;
		this.set_negative_button = true;
		/*this.negative_button = document.createElement('button');
		this.negative_button.classList.add('tie-dialog-bottom-button-negative', 'tie-button', 'tie-button-primary', 'action-button');
		this.negative_button.innerText = text;
		this.action.append(this.negative_button);
		this.negative_button.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.negative_button);
			}else if (this1.cancelable) {
				this1.dismiss();
			}
		});*/
		return this;
	}
	setPositiveButton(text, onClick) {
		let this1 = this;
		this.set_positive_button = true;
		this.positive_button = document.createElement('button');
		this.positive_button.classList.add('tie-dialog-bottom-button-positive', 'tie-button', 'action-button');
		this.positive_button.innerText = text;
		this.action.append(this.positive_button);
		this.positive_button.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.positive_button);
			}
			this1.dismiss();
		});
		return this;
	}
	setExtraButton(text, onClick) {
		let this1 = this;
		this.set_extra_button = true;
		/*this.extra_button = document.createElement('button');
		this.extra_button.classList.add('tie-dialog-bottom-button-negative', 'tie-button', 'action-button');
		this.extra_button.innerText = text;
		this.action.append(this.extra_button);
		this.extra_button.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.extra_button);
			}else if (this1.cancelable) {
				this1.dismiss();
			}
		});*/
		return this;
	}
	getNegativeButton() {
		return this.negative_button;
	}
	getPositiveButton() {
		return this.positive_button;
	}
	getExtraButton() {
		return this.extra_button;
	}
	onOpen(bottom_dialog) {
		
	}
	onOpened(bottom_dialog) {
		
	}
	onClose(bottom_dialog) {
		
	}
	onClosed(bottom_dialog) {
		
	}
	#init() {
		if(document.querySelector('header.tie-appbar') && document.querySelector('header.tie-appbar').style.display != 'none'){
			this.mask.style.marginTop = '55px';
		}
		this.bottom_dialog.append(this.mask);
		this.panel.append(this.content);
		if (this.negative_button || this.positive_button || this.negative_button) {
			this.panel.append(this.action);
		}
		this.bottom_dialog.append(this.panel);
	}
	#event() {
		let this1 = this;
		this.mask.addEventListener('click',
		function(event) {
			if (this1.ontouch_cancel && this1.cancelable) {
				this1.dismiss();
			}
		});
	}
	getShow() {
		return (this.is_show && (this.bottom_dialog.parentNode || this.bottom_dialog.parentNode.nodeType != 11));
	}
	show() {
		this.onOpen(this.bottom_dialog);
		if (!this.is_show) {
			this.#init();
			if (this.title_text && this.set_item) {
				document.body.appendChild(this.bottom_dialog);
				this.content.style.display = 'block';
				this.bottom_dialog.style.display = 'block';
				this.#event();
				document.body.classList.add('open-dialog');
				this.is_show = true;
				this.onOpened(this.bottom_dialog);
			}
		}
		return this;
	}
	dismiss() {
		let this1 = this;
		this.onClose(this.bottom_dialog);
		if (this.is_show && document.querySelector('.tie-dialog-bottom')) {
			this1.panel.classList.add('swipe-down');
			this1.mask.classList.add('fade-out');
			setTimeout(function() {
				if (this1.bottom_dialog.parentNode) {
					this1.bottom_dialog.parentNode.removeChild(this1.bottom_dialog);
					this1.is_show = false;
					this1.onClosed(this1.bottom_dialog);
				}
			},
			200);
			if (document.querySelectorAll('.dialog-show').length < 2) {
				document.body.classList.remove('open-dialog');
			}
		}
		return this;
	}
};
/**
 *TiePopMenu
 */
class TiePopMenu {
	constructor(_querySelector) {
		this.is_show = false;
		this.set_item = false;
		this.querySelector = _querySelector;
		this._ontouchstart = false;
		this.#create();
	}
	#create() {
		this.pop_menu = document.createElement('div');
		this.pop_menu_mask = document.createElement('div');
		this.pop_menu_cont = document.createElement('ul');
		this.#addClass();
	}
	#addClass() {
		this.pop_menu.classList.add('tie-pop-menu');
		this.pop_menu_mask.classList.add('tie-pop-menu-mask');
		this.pop_menu_cont.classList.add('tie-pop-menu-cont');
	}
	setMenuItem(icon, name, onClick) {
		this.set_item = true;
		let this1 = this;
		this['menu_item' + name] = document.createElement('li');
		this['menu_item' + name].classList.add('tie-pop-menu-item');
		this.pop_menu_icon = document.createElement('img');
		this.pop_menu_icon.src = icon;
		this.pop_menu_title = document.createElement('div');
		this.pop_menu_title.classList.add('tie-pop-menu-title');
		this.pop_menu_title.innerHTML = name;
		this['menu_item' + name].append(this.pop_menu_icon);
		this['menu_item' + name].append(this.pop_menu_title);
		if (name) {
			this.pop_menu_cont.append(this['menu_item' + name]);
		}
		this['menu_item' + name].addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(name);
			}
			this1.dismiss();
		});
		return this;
	}
	getMenuItem(name) {
		return this['menu_item' + name];
	}
	#init() {
		let this1 = this;
		if(document.querySelector('header.tie-appbar') && document.querySelector('header.tie-appbar').style.display != 'none'){
			this.pop_menu_mask.style.marginTop = '55px';
		}
		this.pop_menu.append(this.pop_menu_mask);
		this.pop_menu.append(this.pop_menu_cont);
		this.querySelector.parentNode.append(this.pop_menu);
		var menuLeft;
		var menuTop;
		var position;
		var align;
		var windowHeight = window.innerHeight;
		var windowWidth = window.innerWidth;
		var gutter = 16
		var transformOriginX;
		var transformOriginY;
		var menuWidth = this.pop_menu_cont.clientWidth;
		var menuHeight = this.pop_menu_cont.clientHeight;
		var anchorRect = this.querySelector.getBoundingClientRect();
		var anchorTop = anchorRect.top;
		var anchorLeft = anchorRect.left;
		var anchorHeight = anchorRect.height;
		var anchorWidth = anchorRect.width;
		var anchorBottom = windowHeight - anchorTop - anchorHeight;
		var anchorRight = windowWidth - anchorLeft - anchorWidth;
		var anchorOffsetTop = this.querySelector.offsetTop;
		var anchorOffsetLeft = this.querySelector.offsetLeft;
		if (anchorBottom + anchorHeight > menuHeight + gutter) {
			position = 'bottom';
		} else if (anchorTop + anchorHeight > menuHeight + gutter) {
			position = 'top';
		} else {
			position = 'center';
		}
		if (anchorRight + anchorWidth > menuWidth + gutter) {
			align = 'left';
		} else if (anchorLeft + anchorWidth > menuWidth + gutter) {
			align = 'right';
		} else {
			align = 'center';
		}
		if (position === 'bottom') {
			transformOriginY = '0';
			menuTop = anchorOffsetTop;
		} else if (position === 'top') {
			transformOriginY = '100%';
			menuTop = anchorHeight + (anchorOffsetTop - menuHeight);
		} else {
			transformOriginY = '50%';
			var menuHeightTemp = menuHeight;
			menuTop = (windowHeight - menuHeightTemp) / 2 + (anchorOffsetTop - anchorTop);
		}
		this.pop_menu_cont.style.top = menuTop + 'px';
		if (align === 'left') {
			transformOriginX = '0';
			menuLeft = anchorOffsetLeft;
		} else if (align === 'right') {
			transformOriginX = '100%';
			menuLeft = anchorOffsetLeft + anchorWidth - menuWidth;
		} else {
			transformOriginX = '50%';
			var menuWidthTemp = menuWidth;
			if (menuWidth + gutter * 2 > windowWidth) {
				menuWidthTemp = windowWidth - gutter * 2;
				this.pop_menu_cont.width = menuWidthTemp;
			}
			menuLeft = (windowWidth - menuWidthTemp) / 2 + (anchorOffsetLeft - anchorLeft);
		}
		this.pop_menu_cont.style.left = menuLeft + 'px';
		this.pop_menu_cont.style.transformOrigin = transformOriginX + ' ' + transformOriginY;
	}
	onOpen(pop_menu) {
		
	}
	onOpened(pop_menu) {
		
	}
	onClose(pop_menu) {
		
	}
	onClosed(pop_menu) {
		
	}
	#event() {
		let this1 = this;
		this.pop_menu_mask.addEventListener('touchstart',
		function(event) {
			this1._ontouchstart = true;
			this1.dismiss();
		});
		this.pop_menu_mask.addEventListener('click',
		function(event) {
			if (!this1._ontouchstart) {
				this1.dismiss();
			}
		});
	}
	getShow() {
		return (this.is_show && (this.pop_menu.parentNode || this.pop_menu.parentNode.nodeType != 11));
	}
	show() {
		let this1 = this;
		this.onOpen(this.pop_menu);
		if (!this.is_show) {
			if (this.querySelector && this.set_item) {
				this.#init();
				setTimeout(function() {
					this1.pop_menu_cont.classList.add('tie-pop-menu-open');
				},
				100);
				this.#event();
				this.is_show = true;
				this.onOpened(this.pop_menu);
			}
		}
		return this;
	}
	dismiss() {
		let this1 = this;
		this.onClose(this.pop_menu);
		if (this.is_show && document.querySelector('.tie-pop-menu-open')) {
			this.pop_menu_cont.classList.add('tie-pop-menu-close');
			setTimeout(function() {
				if (this1.pop_menu) {
					this1.pop_menu.parentNode.removeChild(this1.pop_menu);
					this1.is_show = false;
					this1.onClosed(this1.pop_menu);
				}
			},
			150);
		}
		return this;
	}
}
/**
 *TieActivity
 */
class TieActivity {
	constructor(_querySelector) {
		this.is_show = false;
		this.cancelable = true;
		this.set_backBtn_onClick = false;
		this.set_actionButton = false;
		this._is_create = false;
		this._old_title = document.title;
		this.back_btn_text = '返回';
		this.#create(_querySelector);
	}
	#create(_querySelector) {
		if (_querySelector && Object.prototype.toString.call(_querySelector) === '[object String]') {
			this.activity = document.querySelector(_querySelector + '.tie-activity');
			this.head = document.querySelector(_querySelector + ' .tie-activity-head');
			this.back_btn = document.querySelector(_querySelector + ' .tie-activity-back');
			this.title = document.querySelector(_querySelector + ' .tie-activity-title');
			this.activity_title = this.title.childNodes[0].innerText;
			this.content = document.querySelector(_querySelector + ' .tie-activity-content');
		} else {
			this._is_create = true;
			this.activity = document.createElement('div');
			this.head = document.createElement('header');
			this.back_btn = document.createElement('div');
			this.title = document.createElement('div');
			this.content = document.createElement('div');
		}

		this.#addClass();
	}
	#addClass() {
		if (this._is_create) {
			this.activity.classList.add('tie-activity', 'slide-right-enter-active', 'dialog-show');
			this.head.classList.add('tie-activity-head', 'tie-appbar');
			this.back_btn.classList.add('tie-appbar-back');
			this.title.classList.add('tie-appbar-title', 'tie-activity-title');
			this.content.classList.add('tie-activity-content');
		} else {
			this.activity.classList.add('slide-right-enter-active', 'dialog-show');
			this.head.classList.add('tie-appbar');
			this.back_btn.classList.add('tie-appbar-back');
			this.title.classList.add('tie-appbar-title');
		}
	}
	setCancelable(cancel) {
		this.cancelable = cancel;
		return this;
	}
	setBackButton(text, onClick) {
		this.set_backBtn_onClick = true;
		this.back_btn_text = text;
		let this1 = this;
		this.back_btn.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.back_btn);
			}
			if (this1.cancelable) {
				this1.finish();
			}
		});
		return this;
	}
	getBackButton() {
		return this.back_btn;
	}
	setBackButtonOnClick(onClick) {
		this.set_backBtn_onClick = true;
		let this1 = this;
		this.back_btn.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.back_btn);
			}
		});
		return this;
	}
	setTitle(text) {
		this.activity_title = text;
		this.title.innerHTML = '<strong>' + text + '</strong>';
		return this;
	}
	getTitle() {
		return this.title;
	}
	setActionButton(text, onClick) {
		let this1 = this;
		if (!this.set_actionButton) {
			this.appbar_spacer = document.createElement('div');
			this.appbar_spacer.classList.add('tie-appbar-spacer');
			this.head.append(this.appbar_spacer);
			this.set_actionButton = true;
		}
		this.action_btn = document.createElement('button');
		this.action_btn.classList.add('tie-button');
		this.action_btn.innerText = text;
		if (text) {
			this.head.append(this.action_btn);
		}
		this.action_btn.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(text);
			}
		});
		return this;
	}
	setLayout(_querySelector) {
		let this1 = this;
		this._layout_querySelector = _querySelector;
		let __querySelector = document.querySelector(_querySelector);
		var _children = __querySelector.children;
		var _length = __querySelector.childElementCount;
		for (var i = 0; i < _length; i++) {
			this.content.appendChild(_children[0]);
		}
		this.content.style = __querySelector.style.cssText;
		this.content.className = __querySelector.className;
		return this;
	}
	getLayout() {
		return this.content;
	}
	#init() {
		if (this._is_create) {
			this.back_btn.innerText = this.back_btn_text;
			this.head.append(this.back_btn);
			this.head.append(this.title);
			this.activity.append(this.head);
			this.activity.append(this.content);
			document.body.appendChild(this.activity);
		}
	}
	#event() {
		let this1 = this;
		this.back_btn.addEventListener('click',
		function(event) {
			if (!this1.set_backBtn_onClick && this1.cancelable) {
				this1.finish();
			}
		});
		this.content.addEventListener('scroll',
		function(event) {
			if (this.scrollTop <= 0) {
				this1.onScrollTop(this.content);
			} else if (this.scrollHeight - this.scrollTop - (document.body.clientHeight || document.documentElement.clientHeight) <= 100) {
				this1.onScrollBottom(this.content);
			}
		});
	}
	onScrollTop() {
		
	}
	onScrollBottom() {
		
	}
	onOpen(activity) {
		
	}
	onOpened(content) {
		
	}
	onClose(content) {
		
	}
	onClosed(activity) {
		
	}
	getShow() {
		return (this.is_show && (this.is_show && this.activity.parentNode || this.activity.parentNode.nodeType != 11));
	}
	open() {
		this.onOpen(this.activity);
		if (!this.is_show) {
			this.#init();
			this.content.style.display = 'block';
			this.activity.style.display = 'block';
			if (this.activity_title) {
				document.title = this.activity_title;
			}
			document.body.classList.add('open-dialog');
			this.#event();
			this.onOpened(this.content);
			this.is_show = true;
		}
		return this;
	}
	finish() {
		let this1 = this;
		this.onClose(this.content);
		if (this.is_show) {
			this.activity.classList.add('slide-right-leave-active');
			setTimeout(function() {
				if (this1._is_create && this1._layout_querySelector) {
					if (this1.activity) {
						var _children = this1.content.children;
						var _length = this1.content.childElementCount;
						for (var i = 0; i < _length; i++) {
							document.querySelector(this1._layout_querySelector).appendChild(_children[0]);
						}
						this1.activity.parentNode.removeChild(this1.activity);
					}
				} else {
					if (this1.activity.parentNode) {
						this1.activity.style.display = 'none';
						this1.activity.classList.remove('slide-right-leave-active');
					}
				}
				this1.activity.classList.remove('dialog-show');
				this1.is_show = false;
				this1.onClosed(this1.activity);
			},
			200);
			if (this._old_title) {
				document.title = this._old_title;
			}
			if (document.querySelectorAll('.dialog-show').length < 2) {
				document.body.classList.remove('open-dialog');
			}
		}
		return this;
	}
};
/**
 *TieSettingActivity
 */
class TieSettingActivity {
	constructor() {
		this.is_show = false;
		this.cancelable = true;
		this.set_backBtn_onClick = false;
		this.back_btn_text = '返回';
		this.set_item = false;
		this.set_actionButton = false;
		this._old_title = document.title;
		this.#create();
	}
	#create() {
		this.activity = document.createElement('div');
		this.head = document.createElement('header');
		this.back_btn = document.createElement('div');
		this.title = document.createElement('div');
		this.content = document.createElement('div');
		this.#addClass();
	}
	#addClass() {
		this.activity.classList.add('tie-activity', 'slide-right-enter-active', 'dialog-show');
		this.head.classList.add('tie-activity-head', 'tie-appbar');
		this.back_btn.classList.add('tie-appbar-back');
		this.title.classList.add('tie-appbar-title', 'tie-activity-title');
		this.content.classList.add('tie-activity-content', 'tie-activity-content-setting-fix');
	}
	setCancelable(cancel) {
		this.cancelable = cancel;
		return this;
	}
	setBackButton(text, onClick) {
		this.set_backBtn_onClick = true;
		this.back_btn_text = text;
		let this1 = this;
		this.back_btn.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.back_btn);
			}
			if (this1.cancelable) {
				this1.finish();
			}
		});
		return this;
	}
	getBackButton() {
		return this.back_btn;
	}
	setBackButtonOnClick(onClick) {
		this.set_backBtn_onClick = true;
		let this1 = this;
		this.back_btn.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.back_btn);
			}
		});
		return this;
	}
	setSettingTitle(text) {
		this.activity_title = text;
		this.title.innerHTML = '<strong>' + text + '</strong>';
		return this;
	}
	getTitle() {
		return this.title;
	}
	getContent() {
		return this.content;
	}
	setActionButton(text, onClick) {
		if (!this.set_actionButton) {
			this.appbar_spacer = document.createElement('div');
			this.appbar_spacer.classList.add('tie-appbar-spacer');
			this.head.append(this.appbar_spacer);
			this.set_actionButton = true;
		}
		this.action_btn = document.createElement('button');
		this.action_btn.classList.add('tie-button');
		this.action_btn.innerText = text;
		if (text) {
			this.head.append(this.action_btn);
		}
		this.action_btn.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(text);
			}
		});
		return this;
	}
	setSettingItemTitle(title) {
		this.set_item = true;
		this.setting_title = document.createElement('div');
		this.setting_title.classList.add('tie-setting-title');
		this.setting_title.innerHTML = '<strong>' + title + '</strong>';
		if (title) {
			this.content.append(this.setting_title);
		}
		return this;
	}
	setSettingItem(icon, title, subtitle) {
		this.set_item = true;
		this['setting_item' + title] = document.createElement('div');
		this['setting_item' + title].classList.add('tie-setting-item');
		this['setting_item' + title].setAttribute('tie-setting-item', title);
		this.setting_item_content = document.createElement('div');
		this.setting_item_content.classList.add('tie-setting-item-content');
		this.setting_item_icon_div = document.createElement('div');
		this.setting_item_icon_div.classList.add('tie-setting-item-icon');
		this.setting_item_icon = document.createElement('img');
		this.setting_item_icon.src = icon;
		this.setting_item_icon_div.append(this.setting_item_icon);
		this.setting_item_title = document.createElement('div');
		this.setting_item_title.classList.add('tie-setting-item-title');
		this.setting_item_title.innerHTML = '<strong>' + title + '</strong>';
		this.setting_item_subtitle = document.createElement('div');
		this.setting_item_subtitle.classList.add('tie-setting-item-subtitle');
		this.setting_item_subtitle.innerHTML = subtitle;
		this.setting_item_action = document.createElement('div');
		if (icon) {
			this['setting_item' + title].append(this.setting_item_icon_div);
		}
		this.setting_item_content.append(this.setting_item_title);
		this.setting_item_content.append(this.setting_item_subtitle);
		this['setting_item' + title].append(this.setting_item_content);
		this.content.append(this['setting_item' + title]);
		if (!subtitle && subtitle !== '0') {
			this.setting_item_subtitle.style.display = 'none';
		}
		if (!title) {
			this.setting_item_title.style.display = 'none';
		}
		this['setting_item' + title].addEventListener('click',
		function(event) {
		
	});
		return this;
	}
	setSettingSwitchItem(icon, title, subtitle, onChange) {
		this.set_item = true;
		let this1 = this;
		this['setting_item' + title] = document.createElement('div');
		this['setting_item' + title].classList.add('tie-setting-item', 'tie-setting-item-switch');
		this['setting_item' + title].setAttribute('tie-setting-item', title);
		this.setting_item_content = document.createElement('div');
		this.setting_item_content.classList.add('tie-setting-item-content');
		this.setting_item_icon_div = document.createElement('div');
		this.setting_item_icon_div.classList.add('tie-setting-item-icon');
		this.setting_item_icon = document.createElement('img');
		this.setting_item_icon.src = icon;
		this.setting_item_icon_div.append(this.setting_item_icon);
		this.setting_item_title = document.createElement('div');
		this.setting_item_title.classList.add('tie-setting-item-title');
		this.setting_item_title.innerHTML = '<strong>' + title + '</strong>';
		this.setting_item_subtitle = document.createElement('div');
		this.setting_item_subtitle.classList.add('tie-setting-item-subtitle');
		this.setting_item_subtitle.innerHTML = subtitle;
		this.setting_item_action = document.createElement('div');
		this.setting_item_action.classList.add('tie-setting-item-action');
		this.setting_item_switch_label = document.createElement('label');
		this.setting_item_switch_label.classList.add('tie-switch');
		this['setting_item_switch_input' + title] = document.createElement('input');
		this['setting_item_switch_input' + title].setAttribute('type', 'checkbox');
		this.setting_item_switch_label.append(this['setting_item_switch_input' + title]);
		this.setting_item_action.append(this.setting_item_switch_label);
		if (icon) {
			this['setting_item' + title].append(this.setting_item_icon_div);
		}
		this.setting_item_content.append(this.setting_item_title);
		this.setting_item_content.append(this.setting_item_subtitle);
		this['setting_item' + title].append(this.setting_item_content);
		this['setting_item' + title].append(this.setting_item_action);
		this.content.append(this['setting_item' + title]);
		if (!subtitle && subtitle !== '0') {
			this.setting_item_subtitle.style.display = 'none';
		}
		if (!title) {
			this.setting_item_title.style.display = 'none';
		}
		this['setting_item_switch_input' + title].addEventListener('change',
		function(event) {
			if (onChange) {
				onChange(this1['setting_item_switch_input' + title].checked);
			}
		});
		return this;
	}
	setSettingArrowItem(icon, title, subtitle, value, onClick) {
		this.set_item = true;
		this['setting_item' + title] = document.createElement('div');
		this['setting_item' + title].classList.add('tie-setting-item', 'tie-setting-item-arrow');
		this['setting_item' + title].setAttribute('tie-setting-item', title);
		this.setting_item_content = document.createElement('div');
		this.setting_item_content.classList.add('tie-setting-item-content');
		this.setting_item_icon_div = document.createElement('div');
		this.setting_item_icon_div.classList.add('tie-setting-item-icon');
		this.setting_item_icon = document.createElement('img');
		this.setting_item_icon.src = icon;
		this.setting_item_icon_div.append(this.setting_item_icon);
		this.setting_item_title = document.createElement('div');
		this.setting_item_title.classList.add('tie-setting-item-title');
		this.setting_item_title.innerHTML = '<strong>' + title + '</strong>';
		this.setting_item_subtitle = document.createElement('div');
		this.setting_item_subtitle.classList.add('tie-setting-item-subtitle');
		this.setting_item_subtitle.innerHTML = subtitle;
		this.setting_item_action = document.createElement('div');
		this.setting_item_action.classList.add('tie-setting-item-action');
		this.setting_item_arrow_text = document.createElement('div');
		this.setting_item_arrow_text.classList.add('tie-setting-item-arrow-text');
		this.setting_item_arrow_text.innerHTML = value;
		if (icon) {
			this['setting_item' + title].append(this.setting_item_icon_div);
		}
		this.setting_item_content.append(this.setting_item_title);
		this.setting_item_content.append(this.setting_item_subtitle);
		this.setting_item_action.append(this.setting_item_arrow_text);
		this['setting_item' + title].append(this.setting_item_content);
		this['setting_item' + title].append(this.setting_item_action);
		this.content.append(this['setting_item' + title]);
		if (!subtitle && subtitle !== '0') {
			this.setting_item_subtitle.style.display = 'none';
		}
		if (!title) {
			this.setting_item_title.style.display = 'none';
		}
		if (!value && value !== '0') {
			this.setting_item_action.style.display = 'none';
		}
		this['setting_item' + title].addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(title);
			}
		});
		return this;
	}
	setSettingActionItem(icon, title, subtitle, action_title, action_subtitle, action_onClick) {
		this.set_item = true;
		this['setting_item' + title] = document.createElement('div');
		this['setting_item' + title].classList.add('tie-setting-item', 'tie-setting-item-action-button');
		this['setting_item' + title].setAttribute('tie-setting-item', title);
		this.setting_item_content = document.createElement('div');
		this.setting_item_content.classList.add('tie-setting-item-content');
		this.setting_item_icon_div = document.createElement('div');
		this.setting_item_icon_div.classList.add('tie-setting-item-icon');
		this.setting_item_icon = document.createElement('img');
		this.setting_item_icon.src = icon;
		this.setting_item_icon_div.append(this.setting_item_icon);
		this.setting_item_title = document.createElement('div');
		this.setting_item_title.classList.add('tie-setting-item-title');
		this.setting_item_title.innerHTML = '<strong>' + title + '</strong>';
		this.setting_item_subtitle = document.createElement('div');
		this.setting_item_subtitle.classList.add('tie-setting-item-subtitle');
		this.setting_item_subtitle.innerHTML = subtitle;
		this.setting_item_action = document.createElement('div');
		this.setting_item_action.classList.add('tie-setting-item-action');
		this.setting_item_action_title = document.createElement('div');
		this.setting_item_action_title.classList.add('tie-setting-item-action-title');
		this.setting_item_action_title.innerHTML = '<strong>' + action_title + '</strong>';
		this.setting_item_action_subtitle = document.createElement('div');
		this.setting_item_action_subtitle.classList.add('tie-setting-item-action-subtitle');
		this.setting_item_action_subtitle.innerHTML = action_subtitle;
		if (icon) {
			this['setting_item' + title].append(this.setting_item_icon_div);
		}
		this.setting_item_content.append(this.setting_item_title);
		this.setting_item_content.append(this.setting_item_subtitle);
		this.setting_item_action.append(this.setting_item_action_title);
		this.setting_item_action.append(this.setting_item_action_subtitle);
		this['setting_item' + title].append(this.setting_item_content);
		this['setting_item' + title].append(this.setting_item_action);
		this.content.append(this['setting_item' + title]);
		if (!subtitle && subtitle !== '0') {
			this.setting_item_subtitle.style.display = 'none';
		}
		if (!title) {
			this.setting_item_title.style.display = 'none';
		}
		if (!action_title && action_title !== '0') {
			this.setting_item_action_title.style.display = 'none';
		}
		if (!action_subtitle) {
			this.setting_item_action_subtitle.style.display = 'none';
		}
		if (!action_title && !action_subtitle) {
			this.setting_item_action.style.display = 'none';
		}
		this.setting_item_action.addEventListener('click',
		function(event) {
			if (action_onClick) {
				action_onClick(title);
			}
		});
		return this;
	}
	getSettingItem(name) {
		return this['setting_item' + name];
	}
	#init() {
		this.back_btn.innerText = this.back_btn_text;
		this.head.append(this.back_btn);
		this.head.append(this.title);
		this.activity.append(this.head);
		this.activity.append(this.content);
	}
	#event() {
		let this1 = this;
		this.back_btn.addEventListener('click',
		function(event) {
			if (!this1.set_backBtn_onClick && this1.cancelable) {
				this1.finish();
			}
		});
	}
	onOpen(activity) {
		
	}
	onOpened(content) {
		
	}
	onClose(content) {
		
	}
	onClosed(activity) {
		
	}
	getShow() {
		return (this.is_show && (this.activity.parentNode || this.activity.parentNode.nodeType != 11));
	}
	open() {
		this.onOpen(this.activity);
		if (!this.is_show) {
			this.#init();
			document.body.appendChild(this.activity);
			this.content.style.display = 'block';
			this.activity.style.display = 'block';
			if (this.activity_title) {
				document.title = this.activity_title;
			}
			document.body.classList.add('open-dialog');
			this.#event();
			this.is_show = true;
			this.onOpened(this.content);
		}
		return this;
	}
	finish() {
		let this1 = this;
		this.onClose(this.content);
		if (this.is_show) {
			this.activity.classList.add('slide-right-leave-active');
			setTimeout(function() {
				if (this1.activity) {
					this1.activity.parentNode.removeChild(this1.activity);
				}
				this1.activity.classList.remove('dialog-show');
				this1.is_show = false;
				this1.onClosed(this1.activity);
			},
			200);
			if (this._old_title) {
				document.title = this._old_title;
			}
			if (document.querySelectorAll('.dialog-show').length < 2) {
				document.body.classList.remove('open-dialog');
			}
		}
		return this;
	}
};