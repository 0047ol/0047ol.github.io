window.addEventListener('load',
function() {
	/**
 	 *qui-toast click
 	 */
	let _qui_toast_button = document.querySelectorAll('[qui-toast]');
	for (let i = 0; i < _qui_toast_button.length; i++) {
		_qui_toast_button[i].addEventListener('click',
		function() {
			let _qui_toast_info = this.getAttribute('qui-toast');
			let _qui_toast_info_pattern = /\{'([A-Z]+)','(.*?)',(\d+)\}/;
			if (_qui_toast_info_pattern.test(_qui_toast_info)) {
				let type = _qui_toast_info.replace(_qui_toast_info_pattern, "$1");
				let message = _qui_toast_info.replace(_qui_toast_info_pattern, "$2");
				let time = _qui_toast_info.replace(_qui_toast_info_pattern, "$3");
				new QToast().setMessage(message).setType(type).setTime(time).show();
			} else {
				new QToast().setMessage(_qui_toast_info).show();
			}
		});
	}
});
/**
 *QLoadingTip
 */
class QLoadingTip {
	constructor() {
		this.LOADING_TYPE_NORMAL = 0;
		this.LOADING_TYPE_TOP = 1;
		this.type = 0;
		this.time = 0;
		this.is_show = false;
		this.#create();
		this.cancelable = false;
		this.ontouch_cancel = true;
	}
	#create() {
		this.icon = document.createElement('i');
		this.message = document.createElement('p');
		this.content = document.createElement('div');
		this.mask = document.createElement('div');
		this.loading = document.createElement('div');
		this.#addClass();
	}
	#addClass() {
		this.mask.classList.add('open-dialog');
		this.loading.classList.add('qui-loading', 'fade-in');
		this.content.classList.add('qui-loading-content');
		this.icon.classList.add('qui-loading-icon');
		this.message.classList.add('qui-loading-text');
	}
	setMessage(message) {
		this.message_text = message;
		this.message.innerText = this.message_text;
		return this;
	}
	getMessage() {
		return this.message;
	}
	setType(type) {
		this.type = type;
		return this;
	}
	setTime(time) {
		this.time = time;
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
	#init() {
		if (this.type == 1) {
			this.loading.classList.add('qui-loading-top');
			this.content.classList.add('fade-zoom-enter');
		} else {
			this.content.classList.add('fade-in');
			this.icon.classList.add('qui-loading-icon-bright');
		}
		this.content.append(this.icon);
		this.content.append(this.message);
		this.loading.append(this.mask);
		this.loading.append(this.content);
	}
	#event() {
		let this1 = this;
		this.mask.addEventListener('click',
		function(event) {
			if (this1.ontouch_cancel && this1.cancelable) {
				this1.close();
			}
		});
	}
	show() {
		this.#init();
		let this1 = this;
		this.onOpen(this.loading);
		if (!this.is_show && !document.querySelector('.qui-loading')) {
			if (this.message_text) {
				document.body.appendChild(this.loading);
				this.loading.style.display = '-webkit-box';
				if (this.time != 0) {
					setTimeout(function() {
						this1.close();
					},
					this1.time);
				}
				this.#event();
				document.body.classList.add('open-dialog');
				this.onOpened(this.loading);
				this.is_show = true;
			}
		}
		return this;
	}
	onOpen(loading) {
		
	}
	onOpened(loading) {
		
	}
	getShow() {
		return (this.is_show && (this.loading.parentNode || this.loading.parentNode.nodeType != 11));
	}
	close() {
		let this1 = this;
		this.onClose(this.loading);
		if (this.is_show && document.querySelector('.qui-loading')) {
			if (this.type == 1) {
				this.content.classList.add('fade-zoom-leave');
			} else {
				this.content.classList.add('fade-out');
			}
			this.loading.classList.add('fade-out');
			setTimeout(function() {
				if (this1.loading.parentNode) {
					this1.loading.parentNode.removeChild(this1.loading);
					this1.is_show = false;
					this1.onClosed(this1.loading);
				}
			},
			200);
			if (document.querySelectorAll('.qui-loading').length < 2) {
				document.body.classList.remove('open-dialog');
			}
		}
		return this;
	}
	onClose(loading) {
		
	}
	onClosed(loading) {
		
	}
};
/**
 *QToast
 */
class QToast {
	constructor() {
		this.TOAST_TYPE_INFO = 0;
		this.TOAST_TYPE_SUCCESS = 1;
		this.TOAST_TYPE_WARNING = 2;
		this.type = 0;
		this.time = 1500;
		this.is_show = false;
		this.#create();
	}
	#create() {
		this.toast = document.createElement('div');
		this.content = document.createElement('div');
		this.icon = document.createElement('i');
		this.#addClass();
	}
	#addClass() {
		this.toast.classList.add('qui-toast', 'pop-up');
		this.content.classList.add('qui-toast-content');
		this.icon.classList.add('qui-toast-icon');
	}
	setMessage(message) {
		this.message_text = message;
		this.message = document.createElement('div');
		this.message.classList.add('qui-toast-text');
		this.message.innerText = this.message_text;
		return this;
	}
	getMessage() {
		return this.message;
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
			this.icon.classList.add('qui-icon-success');
		} else if (this.type == 2) {
			this.icon.classList.add('qui-icon-warning');
		} else {
			this.icon.classList.add('qui-icon-info');
		}
		this.content.append(this.icon);
		this.content.append(this.message);
		this.toast.append(this.content);
	}
	show() {
		this.#init();
		let this1 = this;
		this.onOpen(this.toast);
		if (this.message_text) {
			document.body.appendChild(this.toast);
			this.toast.style.display = 'block';
			setTimeout(function() {
				this1.#close();
			},
			this1.time);
			this.onOpened(this.toast);
			this.is_show = true;
		}
	}
	onOpen(toast) {
		
	}
	onOpened(toast) {
		
	}
	getShow() {
		return (this.is_show && (this.toast.parentNode || this.toast.parentNode.nodeType != 11));
	}
	#close() {
		let this1 = this;
		this.onClose(this.toast);
		if (document.querySelector('.qui-toast')) {
			this.toast.classList.add('pop-down');
			setTimeout(function() {
				if (this1.toast.parentNode) {
					this1.toast.parentNode.removeChild(this1.toast);
					this1.is_show = false;
					this1.onClosed(this1.toast);
				}
			},
			200);
		}
	}
	onClose(toast) {
		
	}
	onClosed(toast) {
		
	}
};
/**
 *QDialog
 */
class QDialog {
	constructor() {
		this.set_button = false;
		this.BUTTON_TEXT_COLOR_NORMAL = 'rgb(0 0 0)';
		this.BUTTON_TEXT_COLOR_PRIMARY = 'rgb(18 183 245)';
		this.BUTTON_TEXT_COLOR_DANGER = 'rgb(253 71 43)';
		this.is_show = false;
		this.#create();
		this.cancelable = true;
		this.ontouch_cancel = true;
		this.onscroll_cancel = false;
	}
	#create() {
		this.mask = document.createElement('div');
		this.panel = document.createElement('div');
		this.action = document.createElement('div');
		this.content = document.createElement('div');
		this.dialog = document.createElement('div');
		this.#addClass();
	}
	#addClass() {
		this.dialog.classList.add('qui-dialog', 'dialog-show');
		this.mask.classList.add('qui-dialog-mask', 'fade-in');
		this.content.classList.add('qui-dialog-content', 'sweet-alert');
		this.action.classList.add('qui-dialog-action');
		this.panel.classList.add('qui-dialog-panel');
	}
	setTitle(title) {
		this.title_text = title;
		this.title = document.createElement('h3');
		this.title.innerText = title;
		if (title) {
			this.panel.append(this.title)
		}
		return this;
	}
	getTitle() {
		return this.title;
	}
	setMessage(message) {
		this.message_text = message;
		this.message = document.createElement('p');
		this.message.innerHTML = message;
		if (message) {
			this.panel.append(this.message)
		}
		return this;
	}
	getMessage() {
		return this.message;
	}
	#init() {
		this.dialog.append(this.mask);
		this.content.append(this.panel);
		if (this.set_button) {
			this.content.append(this.action);
		}
		this.dialog.append(this.content);
	}
	setCanceledOnTouchOutside(cancel) {
		this.ontouch_cancel = cancel;
		return this;
	}
	setCancelable(cancel) {
		this.cancelable = cancel;
		return this;
	}
	setPositiveButton(text, color, onClick) {
		this.set_button = true;
		this.positive_button = document.createElement('button');
		this.positive_button_text = document.createElement('p');
		this.positive_button_text.innerText = text;
		this.positive_button_text.style.color = color;
		this.positive_button.append(this.positive_button_text);
		let this1 = this;
		if (text) {
			this.action.append(this.positive_button);
		}
		this.positive_button.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.positive_button);
			}
			if (this1.cancelable) {
				this1.close();
			}
		});
		return this;
	}
	getPositiveButton() {
		return this.positive_button;
	}
	setNegativeButton(text, color, onClick) {
		this.set_button = true;
		this.negative_button = document.createElement('button');
		this.negative_button_text = document.createElement('p');
		this.negative_button_text.innerText = text;
		this.negative_button_text.style.color = color;
		this.negative_button.append(this.negative_button_text);
		let this1 = this;
		if (text) {
			this.action.append(this.negative_button);
		}
		this.negative_button.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this.negative_button);
			}
			if (this1.cancelable) {
				this1.close();
			}
		});
		return this;
	}
	getNegativeButton() {
		return this.negative_button;
	}
	setNeutralButton(text, color, onClick) {
		this.set_button = true;
		this.neutral_button = document.createElement('button');
		this.neutral_button_text = document.createElement('p');
		this.neutral_button_text.innerText = text;
		this.neutral_button_text.style.color = color;
		this.neutral_button.append(this.neutral_button_text);
		let this1 = this;
		if (text) {
			this.action.append(this.neutral_button);
		}
		this.neutral_button.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.neutral_button);
			}
			if (this1.cancelable) {
				this1.close();
			}
		});
		return this;
	}
	getNeutralButton() {
		return this.neutral_button;
	}
	#event() {
		let this1 = this;
		this1.mask.addEventListener('click',
		function(event) {
			if (this1.ontouch_cancel && this1.cancelable) {
				this1.close();
			}
		});
	}
	show() {
		this.onOpen(this.dialog);
		if (!this.is_show) {
			this.#init();
			if (this.title_text || this.message_text) {
				document.body.appendChild(this.dialog);
				this.dialog.style.display = '-webkit-box';
				this.#event();
				document.body.classList.add('open-dialog');
				this.is_show = true;
				this.onOpened(this.dialog);
			}
		}
		return this;
	}
	onOpen(dialog) {
		
	}
	onOpened(dialog) {
		
	}
	getShow() {
		return (this.is_show && (this.dialog.parentNode || this.dialog.parentNode.nodeType != 11));
	}
	close() {
		let this1 = this;
		this.onClose(this.dialog);
		if (this.is_show && document.querySelector('.qui-dialog')) {
			this.content.classList.add('zoom-out');
			this.dialog.classList.add('fade-out');
			setTimeout(function() {
				if (this1.dialog.parentNode) {
					this1.dialog.parentNode.removeChild(this1.dialog);
					this1.is_show = false;
					this1.onClosed(this1.dialog);
				}
			},
			200);
			if (document.querySelectorAll('.dialog-show').length < 2) {
				document.body.classList.remove('open-dialog');
			}
		}
		return this;
	}
	onClose(dialog) {
		
	}
	onClosed(dialog) {
		
	}
};
/**
 *QBottomSheetMenu
 */
class QBottomSheetMenu {
	constructor() {
		this.ITEM_TEXT_COLOR_NORMAL = 'rgb(0 0 0)';
		this.ITEM_TEXT_COLOR_PRIMARY = 'rgb(18 183 245)';
		this.ITEM_TEXT_COLOR_DANGER = 'rgb(253 71 43)';
		this.set_item = false;
		this.is_show = false;
		this.#create();
		this.cancelable = true;
		this.ontouch_cancel = true;
		this.onscroll_cancel = false;
	}
	#create() {
		this.bottom_action = document.createElement('div');
		this.mask = document.createElement('div');
		this.content = document.createElement('div');
		this.panel = document.createElement('div');
		this.title = document.createElement('p');
		this.title_div = document.createElement('div');
		this.action_btn_text = document.createElement('div');
		this.action_btn = document.createElement('div');
		this.#addClass();
	}
	#addClass() {
		this.bottom_action.classList.add('qui-bottom-action', 'dialog-show');
		this.mask.classList.add('qui-bottom-action-mask', 'fade-in');
		this.content.classList.add('qui-bottom-action-content', 'qui-bottom-action-sheet', 'swipe-up');
		this.panel.classList.add('qui-bottom-action-sheet-panel');
		this.title_div.classList.add('qui-bottom-action-sheet-title');
		this.title.classList.add('qui-bottom-action-sheet-title-text');
		this.action_btn.classList.add('qui-bottom-action-sheet-button');
		this.action_btn_text.classList.add('qui-bottom-action-sheet-button-text');
		this.action_btn_text.innerText = '\u53d6\u6d88';
	}
	setTitle(title) {
		this.title_text = title;
		this.title.innerText = title;
		this.title_div.append(this.title);
		if (title) {
			this.panel.append(this.title_div);
		}
		return this;
	}
	getTitle() {
		return this.title;
	}
	setMenuItem(name, color, onClick) {
		this.set_item = true;
		let this1 = this;
		this['sheet_menu' + name] = document.createElement('div');
		this['sheet_menu' + name].classList.add('qui-bottom-action-sheet-menu');
		let sheet_menu_text = document.createElement('div');
		sheet_menu_text.classList.add('qui-bottom-action-sheet-menu-text');
		sheet_menu_text.innerText = name;
		sheet_menu_text.style.color = color;
		this['sheet_menu' + name].append(sheet_menu_text);
		if (name) {
			this.panel.append(this['sheet_menu' + name])
		}
		this['sheet_menu' + name].addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(name);
			}
			this1.close();
		});
		return this;
	}
	getMenuItem(name) {
		return this['sheet_menu' + name];
	}
	getCancelButton() {
		return this.action_btn;
	}
	#init() {
		this.bottom_action.append(this.mask);
		this.action_btn.append(this.action_btn_text);
		this.panel.append(this.action_btn);
		this.content.append(this.panel);
		this.bottom_action.append(this.content);
	}
	setCanceledOnTouchOutside(cancel) {
		this.ontouch_cancel = cancel;
		return this;
	}
	setCancelable(cancel) {
		this.cancelable = cancel;
		return this;
	}
	#event() {
		let this1 = this;
		this.mask.addEventListener('click',
		function(event) {
			if (this1.ontouch_cancel && this1.cancelable) {
				this1.close();
			}
		});
		this.action_btn.addEventListener('click',
		function(event) {
			if (this1.cancelable) {
				this1.close();
			}
		})
	}
	onOpen(bottom_action) {
		
	}
	onOpened(bottom_action) {
		
	}
	show() {
		this.onOpen(this.bottom_action);
		if (!this.is_show) {
			this.#init();
			if (this.set_item) {
				document.body.appendChild(this.bottom_action);
				this.bottom_action.style.display = 'block';
				this.#event();
				document.body.classList.add('open-dialog');
				this.is_show = true;
				this.onOpened(this.bottom_action);
			}
		}
		return this;
	}
	getShow() {
		return (this.is_show && (this.bottom_action.parentNode || this.bottom_action.parentNode.nodeType != 11));
	}
	onClose(bottom_action) {
		
	}
	onClosed(bottom_action) {
		
	}
	close() {
		let this1 = this;
		this.onClose(this.bottom_action);
		if (this.is_show) {
			this1.content.classList.add('swipe-down');
			this1.mask.classList.add('fade-out');
			setTimeout(function() {
				if (this1.bottom_action.parentNode) {
					this1.bottom_action.parentNode.removeChild(this1.bottom_action);
					this1.is_show = false;
					this1.onClosed(this1.bottom_action);
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
 *QBottomPromptDialog
 */
class QBottomPromptDialog {
	constructor() {
		this.singleline = true;
		this.required = 0;
		this.input_type = 'text';
		this.set_checkbox = false;
		this.is_show = false;
		this.#create();
		this.cancelable = true;
		this.ontouch_cancel = true;
	}
	#create() {
		this.button_cancel = document.createElement('div');
		this.header_bar = document.createElement('div');
		this.header_bar_cnt = document.createElement('div');
		this.button_confirm = document.createElement('div');
		this.header = document.createElement('div');
		this.title = document.createElement('div');
		this.panel = document.createElement('div');
		this.content = document.createElement('div');
		this.mask = document.createElement('div');
		this.bottom_action = document.createElement('div');
		this.input_div = document.createElement('div');
		this.textarea_div = document.createElement('div');
		this.input = document.createElement('input');
		this.textarea = document.createElement('textarea');
		this.action_btn = document.createElement('button');
		this.checkbox_div = document.createElement('div');
		this.checkbox = document.createElement('input');
		this.checkbox_label_text = document.createElement('p');
		this.#addClass();
	}
	#addClass() {
		this.button_cancel.classList.add('qui-bottom-action-header-btn-cancel');
		this.header_bar.classList.add('qui-bottom-action-header-bar');
		this.header_bar_cnt.classList.add('qui-bottom-action-header-bar-cont');
		this.button_confirm.classList.add('qui-bottom-action-header-btn-confirm');
		this.header.classList.add('qui-bottom-action-header');
		this.title.classList.add('qui-bottom-action-title');
		this.panel.classList.add('qui-bottom-action-panel', 'qui-bottom-action-prompt');
		this.content.classList.add('qui-bottom-action-content', 'swipe-up');
		this.mask.classList.add('qui-bottom-action-mask', 'fade-in');
		this.bottom_action.classList.add('qui-bottom-action', 'dialog-show');
		this.input_div.classList.add('qui-input');
		this.textarea_div.classList.add('qui-textarea');
		this.checkbox_div.classList.add('qui-checkbox');
		this.checkbox.setAttribute('type', 'checkbox');
		this.action_btn.classList.add('action-button', 'qui-button', 'qui-button-primary');
		this.action_btn.innerText = '\u786e\u5b9a';
	}
	setTitle(title) {
		this.title_text = title;
		this.title.innerText = title;
		return this;
	}
	getTitle() {
		return this.title;
	}
	#init() {
		this.bottom_action.append(this.mask);
		this.header_bar.append(this.header_bar_cnt);
		this.header.append(this.header_bar);
		this.content.append(this.header);
		if (this.title_text) {
			this.content.append(this.title)
		}
		let value = '';
		if (this.singleline) {
			value = this.input.value;
			this.input_div.append(this.input);
			this.panel.append(this.input_div);
		} else {
			value = this.textarea.value;
			this.textarea_div.append(this.textarea);
			this.panel.append(this.textarea_div);
		}
		if (this.set_checkbox) {
			this.checkbox_div.append(this.checkbox);
			this.checkbox_div.append(this.checkbox_label_text);
			this.panel.append(this.checkbox_div);
		}
		if ((this.required == 2 && (!value || (this.set_checkbox && !this.checkbox.checked))) || (this.required == 1 && !value)) {
			this.action_btn.setAttribute('disabled', '');
		}
		this.content.append(this.panel);
		this.content.append(this.action_btn);
		this.bottom_action.append(this.content);
	}
	setCanceledOnTouchOutside(cancel) {
		this.ontouch_cancel = cancel;
		return this;
	}
	setCancelable(cancel) {
		this.cancelable = cancel;
		return this;
	}
	setInputHint(hint) {
		this.hint_text = hint;
		this.input.setAttribute('placeholder', hint);
		this.textarea.setAttribute('placeholder', hint);
		return this;
	}
	setInputValue(value) {
		this.value = value;
		if (this.singleline) {
			this.input.value = value;
		} else {
			this.textarea.value = value;
		}
		return this;
	}
	setInputMaxLength(maxlength) {
		this.maxlength = maxlength;
		if (this.singleline) {
			this.input.setAttribute('maxlength', maxlength);
		} else {
			this.textarea.setAttribute('maxlength', maxlength);
		}
		return this;
	}
	setInputSingleLine(singleline) {
		this.singleline = singleline;
		return this;
	}
	setInputType(input_type) {
		this.input_type = input_type;
		if (this.singleline) {
			this.input.setAttribute('type', type);
		} else {
			this.textarea.setAttribute('type', type);
		}
		return this;
	}
	getInput() {
		if (this.singleline) {
			return this.input;
		} else {
			return this.textarea;
		}
	}
	setCheckBoxTips(text) {
		this.set_checkbox = true;
		this.checkbox_tips = text;
		this.checkbox_label_text.innerText = text
	}
	setChecked(checked) {
		this.set_checkbox = true;
		this.checkbox.checked = checked;
		return this;
	}
	getCheckBox() {
		return this.checkbox;
	}
	setRequired(required) {
		this.required = required;
		return this;
	}
	onButtonClick(value, checked) {
		
	}
	onInput(value) {
		
	}
	onChange(checked) {
		
	}
	#event() {
		let this1 = this;
		this.mask.addEventListener('click',
		function(event) {
			if (this1.ontouch_cancel && this1.cancelable) {
				this1.close();
			}
		});
		this.input.addEventListener('input',
		function(event) {
			if (this1.singleline) {
				let value = this1.input.value;
				let checked = this1.checkbox.checked;
				this1.onInput(value);
				if ((this1.required == 2 && (!value || (this1.set_checkbox && !checked))) || (this1.required == 1 && !value)) {
					this1.action_btn.setAttribute('disabled', '');
				} else {
					this1.action_btn.removeAttribute('disabled');
				}
			}
		});
		this.textarea.addEventListener('input',
		function(event) {
			if (!this1.singleline) {
				let value = this1.textarea.value;
				let checked = this1.checkbox.checked;
				this1.onInput(value);
				if ((this1.required == 2 && (!value || (this1.set_checkbox && !checked))) || (this1.required == 1 && !value)) {
					this1.action_btn.setAttribute('disabled', '');
				} else {
					this1.action_btn.removeAttribute('disabled');
				}
			}
		});
		this.checkbox.addEventListener('change',
		function(event) {
			if (this1.set_checkbox) {
				let value = this1.textarea.value;
				if (this1.singleline) {
					value = this1.input.value;
				}
				let checked = this1.checkbox.checked;
				this1.onChange(checked);
				if ((this1.required == 2 && (!value || (this1.set_checkbox && !checked))) || (this1.required == 1 && !value)) {
					this1.action_btn.setAttribute('disabled', '');
				} else {
					this1.action_btn.removeAttribute('disabled');
				}
			}
		});
		this.action_btn.addEventListener('click',
		function(event) {
			let value = this1.textarea.value;
			if (this1.singleline) {
				value = this1.input.value;
			}
			let checked = this1.checkbox.checked;
			if ((this1.required == 2 && (!value || (this1.set_checkbox && !checked))) || (this1.required == 1 && !value)) {
				new QToast().setMessage('\u4e0d\u80fd\u4e3a\u7a7a').show();
			} else {
				this1.onButtonClick(value, checked);
				if (this1.cancelable) {
					this1.close();
				}
			}
		});
	}
	show() {
		this.onOpen(this.bottom_action);
		if (!this.is_show) {
			this.#init();
			if (this.hint_text && (!this.set_checkbox || (this.set_checkbox && this.checkbox_tips))) {
				document.body.appendChild(this.bottom_action);
				this.bottom_action.style.display = 'block';
				this.#event();
				document.body.classList.add('open-dialog');
				this.is_show = true;
				let value = this.textarea.value;
				if (this.singleline) {
					value = this.input.value;
				}
				let checked = this.checkbox.checked;
				this.onOpened(value, checked);
			}
		}
		return this;
	}
	onOpen(bottom_action) {
		
	}
	onOpened(value, checked) {
		
	}
	getShow() {
		return (this.is_show && (this.bottom_action.parentNode || this.bottom_action.parentNode.nodeType != 11));
	}
	onClose(value, checked) {
		
	}
	onClosed(bottom_action) {
		
	}
	close() {
		let this1 = this;
		let value = this.textarea.value;
		if (this.singleline) {
			value = this.input.value;
		}
		let checked = this1.checkbox.checked;
		this.onClose(value, checked);
		if (this.is_show && document.querySelector('.qui-bottom-action')) {
			this1.content.classList.add('swipe-down');
			this1.mask.classList.add('fade-out');
			setTimeout(function() {
				if (this1.bottom_action.parentNode) {
					this1.bottom_action.parentNode.removeChild(this1.bottom_action);
					this1.is_show = false;
					this1.onClosed(this1.bottom_action);
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
 *QBottomActionDialog
 */
class QBottomActionDialog {
	constructor(_querySelector) {
		this.is_show = false;
		this.#create(_querySelector);
		this.content_height = 0;
		this.theResizeObserver;
		this.cancelable = true;
		this.ontouch_cancel = true;
		this.onscroll_cancel = false;
	}
	#create(_querySelector) {
		this.button_cancel = document.querySelector(_querySelector + ' .qui-bottom-action-header-btn-cancel');
		this.header_bar = document.querySelector(_querySelector + ' .qui-bottom-action-header-bar');
		this.header_bar_cnt = document.querySelector(_querySelector + ' .qui-bottom-action-header-bar-cont');
		this.button_confirm = document.querySelector(_querySelector + ' .qui-bottom-action-header-btn-confirm');
		this.header = document.querySelector(_querySelector + ' .qui-bottom-action-header');
		this.panel = document.querySelector(_querySelector + ' .qui-bottom-action-panel');
		this.content = document.querySelector(_querySelector + ' .qui-bottom-action-content');
		this.mask = document.querySelector(_querySelector + ' .qui-bottom-action-mask');
		this.bottom_action = document.querySelector(_querySelector + '.qui-bottom-action');
		this.#addClass();
	}
	#addClass() {
		this.bottom_action.classList.add('dialog-show');
	}
	getHeaderBar() {
		return this.header_bar;
	}
	setCancelButtonOnClick(onClick) {
		let this1 = this;
		this.button_cancel.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.button_cancel);
			}
			if (this1.cancelable) {
				this1.close();
			}
		});
		return this;
	}
	getCancelButton() {
		return this.button_cancel;
	}
	setConfirmButtonOnClick(onClick) {
		let this1 = this;
		this.button_confirm.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.button_confirm);
			}
			if (this1.cancelable) {
				this1.close();
			}
		});
		return this;
	}
	getConfirmButton() {
		return this.button_confirm;
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
	#event() {
		let this1 = this;
		this1.mask.addEventListener('click',
		function(event) {
			if (this1.ontouch_cancel && this1.cancelable) {
				this1.close();
			}
		});
		let window_outerHeight = window.outerHeight;
		this.content_height = this.content.clientHeight;
		let startY = 0;
		let distanceY = 0;
		let clientY = 0;
		let old_height = this.content_height;
		let one = false;
		this.header_bar.addEventListener('touchstart',
		function(event) {
			if (!one) {
				old_height = this1.content_height;
				one = true;
			}
			startY = event.touches[0].clientY;
			clientY = event.touches[0].clientY;
			this1.content.classList.remove('ease-in-out');
		});
		this.header_bar.addEventListener('touchmove',
		function(event) {
			clientY = event.touches[0].clientY;
			distanceY = window_outerHeight - clientY;
			if (clientY > startY) {
				this1.content.style.height = distanceY + 'px';
			} else {
				if (this1.content.clientHeight < (window_outerHeight * 0.85)) {
					this1.content.style.height = distanceY + 'px';
				}
			}
		});
		this.header_bar.addEventListener('touchend',
		function(event) {
			this1.content.classList.add('ease-in-out');
			if (clientY > startY) {
				if ((old_height * 0.75) >= this1.content.clientHeight) {
					this1.close();
				} else {
					this1.content.style.height = (old_height - 20) + 'px';
				}
			} else {
				if (this1.content.clientHeight < (window_outerHeight * 0.85)) {
					this1.content.style.height = window_outerHeight * 0.85 + 'px';
				}
			}
			distanceY = 0;
		});
		this.theResizeObserver = new ResizeObserver(function() {
			let display = getComputedStyle(this1.content).getPropertyValue('display');
			let height = getComputedStyle(this1.content).getPropertyValue('height');
			if (this1.content.clientHeight > this1.content_height) {
				this1.content_height = this1.panel.clientHeight;
			}
		});
		this.theResizeObserver.observe(this.panel);
	}
	getShow() {
		return (this.is_show && (this.bottom_action.parentNode || this.bottom_action.parentNode.nodeType != 11));
	}
	onOpen(bottom_action) {
		
	}
	onOpened(content) {
		
	}
	show() {
		this.onOpen(this.bottom_action);
		if (!this.is_show) {
			this.content.style.height = 'auto';
			this.content.classList.add('swipe-up');
			this.mask.classList.add('fade-in');
			if (this.bottom_action) {
				this.panel.style.height = this.panel.style.heigh + 'px';
				this.bottom_action.style.display = 'block';
				this.#event();
				document.body.classList.add('open-dialog');
				this.is_show = true;
				this.onOpened(this.content);
			}
		}
		return this;
	}
	onClose(content) {
		
	}
	onClosed(bottom_action) {
		
	}
	close() {
		let this1 = this;
		this.onClose(this.content);
		if (this.is_show) {
			this1.content.classList.add('swipe-down');
			this1.mask.classList.add('fade-out');
			setTimeout(function() {
				if (this1.bottom_action.parentNode) {
					this1.bottom_action.style.display = 'none';
					this1.content.classList.remove('swipe-down');
					this1.mask.classList.remove('fade-out');
					this1.bottom_action.classList.remove('dialog-show');
					this1.is_show = false;
					this1.onClosed(this1.bottom_action);
				}
			},
			200);
			if (document.querySelectorAll('.dialog-show').length < 2) {
				document.body.classList.remove('open-dialog');
			}
			this.theResizeObserver.unobserve(this.content);
			this.theResizeObserver = null;
		}
		return this;
	}
};
/**
 *QTipsPage
 */
class QTipsPage {
	constructor() {
		this.PAGE_TYPE_INFO = 0;
		this.PAGE_TYPE_SUCCESS = 1;
		this.PAGE_TYPE_WARNING = 2;
		this.type = 0;
		this.is_show = false;
		this.cancelable = true;
		this.#create();
	}
	#create() {
		this.page = document.createElement('section');
		this.content = document.createElement('div');
		this.icon = document.createElement('img');
		this.title = document.createElement('h3');
		this.message = document.createElement('p');
		this.action = document.createElement('div');
		this.confirm_button = document.createElement('button');
		this.cancel_button = document.createElement('button');
		this.content.append(this.icon);
		this.#addClass();
	}
	#addClass() {
		this.page.classList.add('qui-page', 'swipe-up', 'dialog-show');
		this.content.classList.add('qui-page-content');
		this.icon.classList.add('qui-page-icon');
		this.title.classList.add('qui-page-title');
		this.message.classList.add('qui-page-info');
		this.action.classList.add('qui-page-action');
		this.confirm_button.classList.add('qui-button', 'qui-button-primary');
		this.cancel_button.classList.add('qui-button');
	}
	setType(type) {
		this.type = type;
		return this;
	}
	setTitle(title) {
		this.title_text = title;
		this.title.innerText = this.title_text;
		this.content.append(this.title);
		return this;
	}
	getTitle() {
		return this.title;
	}
	setCancelable(cancel) {
		this.cancelable = cancel;
		return this;
	}
	setMessage(message) {
		this.message_text = message;
		this.message.innerText = this.message_text;
		this.content.append(this.message);
		return this;
	}
	getMessage() {
		return this.message;
	}
	setConfirmButton(button_text, onClick) {
		let this1 = this;
		this.confirm_button.innerText = button_text;
		this.confirm_button.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.confirm_button);
			}
			if (this1.cancelable) {
				this1.close();
			}
		});
		this.action.append(this.confirm_button);
		return this;
	}
	setCancelButton(button_text, onClick) {
		let this1 = this;
		this.cancel_button.innerText = button_text;
		this.cancel_button.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.cancel_button);
			}
			if (this1.cancelable) {
				this1.close();
			}
		});
		this.action.append(this.cancel_button);
		return this;
	}
	getCancelButton() {
		return this.cancel_button;
	}
	getConfirmButton() {
		return this.confirm_button;
	}
	#init() {
		if (this.type == 1) {
			this.icon.classList.add('qui-icon-success');
		} else if (this.type == 2) {
			this.icon.classList.add('qui-icon-warning');
		} else {
			this.icon.classList.add('qui-icon-info');
		}
		this.page.append(this.content);
		this.page.append(this.action);
	}
	show() {
		this.#init();
		this.onOpen(this.page);
		if (!this.is_show) {
			if (this.title_text || this.message_text) {
				document.body.appendChild(this.page);
				this.page.style.display = 'block';
				document.body.classList.add('open-dialog');
				this.is_show = true;
				this.onOpened(this.page);
			}
		}
		return this;
	}
	onOpen(page) {
		
	}
	onOpened(page) {
		
	}
	getShow() {
		return (this.is_show && (this.page.parentNode || this.page.parentNode.nodeType != 11));
	}
	onClose(page) {
		
	}
	onClosed(page) {
		
	}
	close() {
		let this1 = this;
		this.onClose(this.page);
		if (this.is_show) {
			this1.page.classList.add('swipe-down');
			setTimeout(function() {
				if (this1.page.parentNode) {
					this1.page.parentNode.removeChild(this1.page);
					this1.is_show = false;
					this1.onClosed(this1.page);
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
 *QBottomChooseDialog
 */
class QBottomChooseDialog {
	constructor() {
		this.is_show = false;
		this.set_item = false;
		this.choose_type = 0;
		this.content_height = 0;
		this.theResizeObserver;
		this.#create();
		this.cancelable = true;
		this.ontouch_cancel = true;
		this.onscroll_cancel = false;
	}
	#create() {
		this.button_cancel = document.createElement('div');
		this.header_bar = document.createElement('div');
		this.header_bar_cnt = document.createElement('div');
		this.button_confirm = document.createElement('div');
		this.header = document.createElement('div');
		this.panel = document.createElement('div');
		this.content = document.createElement('div');
		this.mask = document.createElement('div');
		this.bottom_action = document.createElement('div');
		this.#addClass();
	}
	#addClass() {
		this.button_cancel.classList.add('qui-bottom-action-header-btn-cancel');
		this.header_bar.classList.add('qui-bottom-action-header-bar');
		this.header_bar_cnt.classList.add('qui-bottom-action-header-bar-cont');
		this.button_confirm.classList.add('qui-bottom-action-header-btn-confirm');
		this.header.classList.add('qui-bottom-action-header');
		this.panel.classList.add('qui-bottom-action-panel', 'qui-bottom-action-prompt');
		this.content.classList.add('qui-bottom-action-content', 'swipe-up');
		this.mask.classList.add('qui-bottom-action-mask', 'fade-in');
		this.bottom_action.classList.add('qui-bottom-action', 'dialog-show');
	}
	setChooseType(type) {
		this.choose_type = type;
	}
	setMenuItem(icon, name, value) {
		this.set_item = true;
		let this1 = this;
		this['menu_item' + name] = document.createElement('div');
		this['menu_item' + name].classList.add('ui-form-item', 'ui-form-item-checkbox');
		let menu_item_icon = document.createElement('div');
		menu_item_icon.classList.add('ui-avatar-s');
		let menu_item_info = document.createElement('div');
		if (icon) {
			menu_item_icon.style.backgroundImage = 'url(' + icon + ')';
			this['menu_item' + name].append(menu_item_icon);
		} else {
			menu_item_info.style.paddingLeft = '0';
		}
		menu_item_info.classList.add('ui-list-info');
		let menu_item_text = document.createElement('div');
		menu_item_text.classList.add('ui-nowrap');
		menu_item_text.innerText = name;
		menu_item_info.append(menu_item_text);
		let menu_item_label = document.createElement('label');
		menu_item_label.classList.add('ui-checkbox');
		let menu_item_input = document.createElement('input');
		let input_type = 'checkbox';
		let _name = name;
		if (this.choose_type == 1) {
			menu_item_label.setAttribute('for', 'radio');
			_name = 'radio';
			input_type = 'radio';
		}
		menu_item_input.setAttribute('type', input_type);
		menu_item_input.setAttribute('name', _name);
		menu_item_input.value = value;
		menu_item_label.append(menu_item_input);
		this['menu_item' + name].append(menu_item_info);
		this['menu_item' + name].append(menu_item_label);
		if (name) {
			this.panel.append(this['menu_item' + name])
		}
		return this;
	}
	getMenuItem(name) {
		return this['menu_item' + name];
	}
	#init() {
		this.bottom_action.append(this.mask);
		this.header_bar.append(this.header_bar_cnt);
		this.header.append(this.header_bar);
		this.content.append(this.header);
		this.content.append(this.panel);
		this.bottom_action.append(this.content);
	}
	setCancelButton(name, onClick) {
		let this1 = this;
		this.button_cancel.innerText = name;
		this.header.append(this.button_cancel);
		this.button_cancel.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.#getChooseValue());
			}
			if (this1.cancelable) {
				this1.close();
			}
		});
		return this;
	}
	setConfirmButton(name, onClick) {
		let this1 = this;
		this.button_confirm.innerText = name;
		this.header.append(this.button_confirm);
		this.button_confirm.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.#getChooseValue());
			}
			if (this1.cancelable) {
				this1.close();
			}
		});
		return this;
	}
	getCancelButton() {
		return this.button_cancel;
	}
	getConfirmButton() {
		return this.button_confirm;
	}
	#getChooseValue() {
		let input_type = 'checkbox';
		if (this.choose_type == 1) {
			input_type = 'radio';
		}
		var inputs = this.panel.querySelectorAll('input[type=' + input_type + ']:checked');
		var _arr = [];
		for (var i = 0; i < inputs.length; i++) {
			let _name = inputs[i].name;
			let _value = inputs[i].value;
			_arr.push(_value);
		}
		return _arr;
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
	#event() {
		let this1 = this;
		this.mask.addEventListener('click',
		function(event) {
			if (this1.ontouch_cancel && this1.cancelable) {
				this1.close();
			}
		});
		let window_outerHeight = window.outerHeight;
		this.content_height = this.content.clientHeight;
		let startY = 0;
		let distanceY = 0;
		let clientY = 0;
		let old_height = this.content_height;
		let one = false;
		this.header_bar.addEventListener('touchstart',
		function(event) {
			if (!one) {
				old_height = this1.content_height;
				one = true;
			}
			startY = event.touches[0].clientY;
			clientY = event.touches[0].clientY;
			this1.content.classList.remove('ease-in-out');
		});
		this.header_bar.addEventListener('touchmove',
		function(event) {
			clientY = event.touches[0].clientY;
			distanceY = window_outerHeight - clientY;
			if (clientY > startY) {
				this1.content.style.height = distanceY + 'px';
			} else {
				if (this1.content.clientHeight < (window_outerHeight * 0.85)) {
					this1.content.style.height = distanceY + 'px';
				}
			}
		});
		this.header_bar.addEventListener('touchend',
		function(event) {
			this1.content.classList.add('ease-in-out');
			if (clientY > startY) {
				if ((old_height * 0.75) >= this1.content.clientHeight) {
					this1.close();
				} else {
					this1.content.style.height = (old_height - 20) + 'px';
				}
			} else {
				if (this1.content.clientHeight < (window_outerHeight * 0.85)) {
					this1.content.style.height = window_outerHeight * 0.85 + 'px';
				}
			}
			distanceY = 0;
		});
		this.theResizeObserver = new ResizeObserver(function() {
			let display = getComputedStyle(this1.content).getPropertyValue('display');
			let height = getComputedStyle(this1.content).getPropertyValue('height');
			if (this1.content.clientHeight > this1.content_height) {
				this1.content_height = this1.panel.clientHeight;
			}
		});
		this.theResizeObserver.observe(this.panel);
	}
	getShow() {
		return (this.is_show && (this.bottom_action.parentNode || this.bottom_action.parentNode.nodeType != 11));
	}
	onOpen(bottom_action) {
		
	}
	onOpened(value) {
		
	}
	show() {
		this.onOpen(this.bottom_action);
		if (!this.is_show) {
			this.#init();
			if (this.set_item) {
				document.body.appendChild(this.bottom_action);
				this.bottom_action.style.display = 'block';
				this.#event();
				document.body.classList.add('open-dialog');
				this.is_show = true;
				this.onOpened(this.#getChooseValue());
			}
		}
		return this;
	}
	onClose(value) {
		
	}
	onClosed(bottom_action) {
		
	}
	close() {
		let this1 = this;
		this.onClose(this.#getChooseValue());
		if (this.is_show) {
			this1.content.classList.add('swipe-down');
			this1.mask.classList.add('fade-out');
			setTimeout(function() {
				if (this1.bottom_action.parentNode) {
					this1.bottom_action.parentNode.removeChild(this1.bottom_action);
					this1.is_show = false;
					this1.onClosed(this1.bottom_action);
				}
			},
			200);
			if (document.querySelectorAll('.dialog-show').length < 2) {
				document.body.classList.remove('open-dialog');
			}
			this.theResizeObserver.unobserve(this.content);
			this.theResizeObserver = null;
		}
		return this;
	}
};
/**
 *QDatePickeDialog
 */
class QDatePickeDialog {
	constructor() {
		this.is_show = false;
		this.#create();
		this.cancelable = true;
		this.ontouch_cancel = true;
		this.onscroll_cancel = false;
	}
	#create() {
		this._data_year = [{
			label: '1970年',
			value: 1970
		},
		{
			label: '1971年',
			value: 1971
		},
		{
			label: '1972年',
			value: 1972
		},
		{
			label: '1973年',
			value: 1973
		},
		{
			label: '1974年',
			value: 1974
		},
		{
			label: '1975年',
			value: 1975
		},
		{
			label: '1976年',
			value: 1976
		},
		{
			label: '1977年',
			value: 1977
		},
		{
			label: '1978年',
			value: 1978
		},
		{
			label: '1979年',
			value: 1979
		},
		{
			label: '1980年',
			value: 1980
		},
		{
			label: '1981年',
			value: 1981
		},
		{
			label: '1982年',
			value: 1982
		},
		{
			label: '1983年',
			value: 1983
		},
		{
			label: '1984年',
			value: 1984
		},
		{
			label: '1985年',
			value: 1985
		},
		{
			label: '1986年',
			value: 1986
		},
		{
			label: '1987年',
			value: 1987
		},
		{
			label: '1988年',
			value: 1988
		},
		{
			label: '1989年',
			value: 1989
		},
		{
			label: '1990年',
			value: 1990
		},
		{
			label: '1991年',
			value: 1991
		},
		{
			label: '1992年',
			value: 1992
		},
		{
			label: '1993年',
			value: 1993
		},
		{
			label: '1994年',
			value: 1994
		},
		{
			label: '1995年',
			value: 1995
		},
		{
			label: '1996年',
			value: 1996
		},
		{
			label: '1997年',
			value: 1997
		},
		{
			label: '1998年',
			value: 1998
		},
		{
			label: '1999年',
			value: 1999
		},
		{
			label: '2000年',
			value: 2000
		},
		{
			label: '2001年',
			value: 2001
		},
		{
			label: '2002年',
			value: 2002
		},
		{
			label: '2003年',
			value: 2003
		},
		{
			label: '2004年',
			value: 2004
		},
		{
			label: '2005年',
			value: 2005
		},
		{
			label: '2006年',
			value: 2006
		},
		{
			label: '2007年',
			value: 2007
		},
		{
			label: '2008年',
			value: 2008
		},
		{
			label: '2009年',
			value: 2009
		},
		{
			label: '2010年',
			value: 2010
		},
		{
			label: '2011年',
			value: 2011
		},
		{
			label: '2012年',
			value: 2012
		},
		{
			label: '2013年',
			value: 2013
		},
		{
			label: '2014年',
			value: 2014
		},
		{
			label: '2015年',
			value: 2015
		},
		{
			label: '2016年',
			value: 2016
		},
		{
			label: '2017年',
			value: 2017
		},
		{
			label: '2018年',
			value: 2018
		},
		{
			label: '2019年',
			value: 2019
		},
		{
			label: '2020年',
			value: 2020
		},
		{
			label: '2021年',
			value: 2021
		},
		{
			label: '2022年',
			value: 2022
		},
		{
			label: '2023年',
			value: 2023
		},
		{
			label: '2024年',
			value: 2024
		},
		{
			label: '2025年',
			value: 2025
		},
		{
			label: '2026年',
			value: 2026
		},
		{
			label: '2027年',
			value: 2027
		},
		{
			label: '2028年',
			value: 2028
		},
		{
			label: '2029年',
			value: 2029
		},
		{
			label: '2030年',
			value: 2030
		}];
		this._data_month = [{
			label: '1月',
			value: 1
		},
		{
			label: '2月',
			value: 2
		},
		{
			label: '3月',
			value: 3
		},
		{
			label: '4月',
			value: 4
		},
		{
			label: '5月',
			value: 5
		},
		{
			label: '6月',
			value: 6
		},
		{
			label: '7月',
			value: 7
		},
		{
			label: '8月',
			value: 8
		},
		{
			label: '9月',
			value: 9
		},
		{
			label: '10月',
			value: 10
		},
		{
			label: '11月',
			value: 11
		},
		{
			label: '12月',
			value: 12
		}];
		this._data_day = [{
			label: '1日',
			value: 1
		},
		{
			label: '2日',
			value: 2
		},
		{
			label: '3日',
			value: 3
		},
		{
			label: '4日',
			value: 4
		},
		{
			label: '5日',
			value: 5
		},
		{
			label: '6日',
			value: 6
		},
		{
			label: '7日',
			value: 7
		},
		{
			label: '8日',
			value: 8
		},
		{
			label: '9日',
			value: 9
		},
		{
			label: '10日',
			value: 10
		},
		{
			label: '11日',
			value: 11
		},
		{
			label: '12日',
			value: 12
		},
		{
			label: '13日',
			value: 13
		},
		{
			label: '14日',
			value: 14
		},
		{
			label: '15日',
			value: 15
		},
		{
			label: '16日',
			value: 16
		},
		{
			label: '17日',
			value: 17
		},
		{
			label: '18日',
			value: 18
		},
		{
			label: '19日',
			value: 19
		},
		{
			label: '20日',
			value: 20
		},
		{
			label: '21日',
			value: 21
		},
		{
			label: '22日',
			value: 22
		},
		{
			label: '23日',
			value: 23
		},
		{
			label: '24日',
			value: 24
		},
		{
			label: '25日',
			value: 25
		},
		{
			label: '26日',
			value: 26
		},
		{
			label: '27日',
			value: 27
		},
		{
			label: '28日',
			value: 28
		},
		{
			label: '29日',
			value: 29
		},
		{
			label: '30日',
			value: 30
		},
		{
			label: '31日',
			value: 31
		}];
	}
	setConfirmButton(button_text, onClick) {
		let this1 = this;
		this.weui_picker_confirmBtn_txt.innerText = button_text;
		this.weui_picker_confirmBtn.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.__time_value);
			}
			if (this1.cancelable) {
				this1.close();
			}
		});
		this.weui_picker_confirmBtn.style.display = 'block';
		return this;
	}
	setCancelButton(button_text, onClick) {
		let this1 = this;
		this.weui_picker_cancelBtn_txt.innerText = button_text;
		this.weui_picker_cancelBtn.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.__time_value);
			}
			if (this1.cancelable) {
				this1.close();
			}
		});
		this.weui_picker_cancelBtn.style.display = 'block';
		return this;
	}
	getCancelButton() {
		return this.weui_picker_cancelBtn;
	}
	getConfirmButton() {
		return this.weui_picker_confirmBtn;
	}
	setCanceledOnTouchOutside(cancel) {
		this.ontouch_cancel = cancel;
		return this;
	}
	setCancelable(cancel) {
		this.cancelable = cancel;
		return this;
	}
	#event() {
		let this1 = this;
		this.weui_picker_mask.addEventListener('click',
		function(event) {
			if (this1.ontouch_cancel && this1.cancelable) {
				this1.close();
			}
		});
	}
	#init() {
		this._weui_picker_mask = this._weui_picker.childNodes[1];
		this.weui_picker_mask = document.createElement('div');
		this.weui_picker_mask.classList.add('_weui-mask', 'weui-animate-fade-in');
		Tool.insertAfter(this.weui_picker_mask, this._weui_picker_mask);
		this.weui_picker_cont = this._weui_picker.childNodes[4];
		this.weui_picker_header = this._weui_picker.childNodes[4].childNodes[1];
		this.weui_picker_tle_hd = this._weui_picker.childNodes[4].childNodes[1].childNodes[3];
		this.weui_picker_cancelBtn = this._weui_picker.childNodes[4].childNodes[1].childNodes[1];
		this.weui_picker_cancelBtn_txt = this._weui_picker.childNodes[4].childNodes[1].childNodes[1].childNodes[1];
		this.weui_picker_confirmBtn = document.createElement('div');
		this.weui_picker_confirmBtn.classList.add('weui-half-screen-dialog__hd__side_btn');
		this.weui_picker_confirmBtn_txt = document.createElement('button');
		this.weui_picker_confirmBtn_txt.setAttribute('id', 'weui-picker-confirm');
		this.weui_picker_confirmBtn_txt.classList.add('weui-icon-btn', 'weui-icon-btn_close', 'weui-picker__btn', 'weui-picker__btn');
		this.weui_picker_confirmBtn_txt.innerText = '完成';
		this.weui_picker_confirmBtn.append(this.weui_picker_confirmBtn_txt);
		this.weui_picker_header.appendChild(this.weui_picker_confirmBtn);
		this.weui_picker_header_bar = document.createElement('div');
		this.weui_picker_header_bar.classList.add('qui-bottom-action-header-bar-cont');
		this.weui_picker_header_bar.style = 'margin: -15px auto 0px;';
		this.weui_picker_tle_hd.appendChild(this.weui_picker_header_bar);
	}
	onChange(value) {
		
	}
	onConfirm(value) {
		
	}
	show() {
		let this1 = this;
		this.onOpen(this._weui_picker);
		if (!this.is_show) {
			let _nowdate = new Date();
			let _year = _nowdate.getFullYear();
			let _month = _nowdate.getMonth() + 1;
			let _day = _nowdate.getDate();
			this._weui_picker = weui.picker(this._data_year, this._data_month, this._data_day, {
				defaultValue: [_year, _month, _day],
				onChange: function(result) {
					this1.#getTimes(result);
					this1.onChange(result);
				},
				onConfirm: function(result) {
					this1.#getTimes(result);
					this1.onConfirm(result);
					return false;
				},
				id: 'multiPickerBtn'
			});
			this.#init();
			this.#event();
			this.is_show = true;
			this.onOpened(this.__time_value);
		}
		return this;
	}
	#getTimes(result) {
		let __year_label = result[0].label;
		let __year_value = result[0].value;
		let __month_label = result[1].label;
		let __month_value = result[1].value;
		let __day_label = result[2].label;
		let __day_value = result[2].value;
		let __date_value = __year_label + __month_label + __day_label;
		this.__time_value = new Date(__year_value + '-' + __month_value + '-' + __day_value).getTime();
	}
	onOpen(weui_picker) {
		
	}
	onOpened(vlaue) {
		
	}
	getShow() {
		return (this.is_show && (this._weui_picker.parentNode || this._weui_picker.parentNode.nodeType != 11));
	}
	onClose(vlaue) {
		
	}
	onClosed(weui_picker) {
		
	}
	close() {
		let this1 = this;
		this.onClose(this.__time_value);
		if (this.is_show) {
			this.weui_picker_mask.classList.add('weui-animate-fade-out');
			this.weui_picker_cont.classList.add('weui-animate-slide-down');
			if (this._weui_picker) {
				this._weui_picker_mask.click();
				this.is_show = false;
				this.onClosed(this._weui_picker);
			}
		}
	}
}
/**
 *QTimePickeDialog
 */
class QTimePickeDialog {
	constructor() {
		this.is_show = false;
		this.#create();
		this.cancelable = true;
		this.ontouch_cancel = true;
		this.onscroll_cancel = false;
	}
	#create() {
		this._data_day = [{
			label: '0天',
			value: 0
		},
		{
			label: '1天',
			value: 1
		},
		{
			label: '2天',
			value: 2
		},
		{
			label: '3天',
			value: 3
		},
		{
			label: '4天',
			value: 4
		},
		{
			label: '5天',
			value: 5
		},
		{
			label: '6天',
			value: 6
		},
		{
			label: '7天',
			value: 7
		},
		{
			label: '8天',
			value: 8
		},
		{
			label: '9天',
			value: 9
		},
		{
			label: '10天',
			value: 10
		},
		{
			label: '11天',
			value: 11
		},
		{
			label: '12天',
			value: 12
		},
		{
			label: '13天',
			value: 13
		},
		{
			label: '14天',
			value: 14
		},
		{
			label: '15天',
			value: 15
		},
		{
			label: '16天',
			value: 16
		},
		{
			label: '17天',
			value: 17
		},
		{
			label: '18天',
			value: 18
		},
		{
			label: '19天',
			value: 19
		},
		{
			label: '20天',
			value: 20
		},
		{
			label: '21天',
			value: 21
		},
		{
			label: '22天',
			value: 22
		},
		{
			label: '23天',
			value: 23
		},
		{
			label: '24天',
			value: 24
		},
		{
			label: '25天',
			value: 25
		},
		{
			label: '26天',
			value: 26
		},
		{
			label: '27天',
			value: 27
		},
		{
			label: '28天',
			value: 28
		},
		{
			label: '29天',
			value: 29
		}];
		this._data_hour = [{
			label: '0小时',
			value: 0
		},
		{
			label: '1小时',
			value: 1
		},
		{
			label: '2小时',
			value: 2
		},
		{
			label: '3小时',
			value: 3
		},
		{
			label: '4小时',
			value: 4
		},
		{
			label: '5小时',
			value: 5
		},
		{
			label: '6小时',
			value: 6
		},
		{
			label: '7小时',
			value: 7
		},
		{
			label: '8小时',
			value: 8
		},
		{
			label: '9小时',
			value: 9
		},
		{
			label: '10小时',
			value: 10
		},
		{
			label: '11小时',
			value: 11
		},
		{
			label: '12小时',
			value: 12
		},
		{
			label: '13小时',
			value: 13
		},
		{
			label: '14小时',
			value: 14
		},
		{
			label: '15小时',
			value: 15
		},
		{
			label: '16小时',
			value: 16
		},
		{
			label: '17小时',
			value: 17
		},
		{
			label: '18小时',
			value: 18
		},
		{
			label: '19小时',
			value: 19
		},
		{
			label: '20小时',
			value: 20
		},
		{
			label: '21小时',
			value: 21
		},
		{
			label: '22小时',
			value: 22
		},
		{
			label: '23小时',
			value: 23
		}];
		this._data_minute = [{
			label: '0分钟',
			value: 0
		},
		{
			label: '1分钟',
			value: 1
		},
		{
			label: '2分钟',
			value: 2
		},
		{
			label: '3分钟',
			value: 3
		},
		{
			label: '4分钟',
			value: 4
		},
		{
			label: '5分钟',
			value: 5
		},
		{
			label: '6分钟',
			value: 6
		},
		{
			label: '7分钟',
			value: 7
		},
		{
			label: '8分钟',
			value: 8
		},
		{
			label: '9分钟',
			value: 9
		},
		{
			label: '10分钟',
			value: 10
		},
		{
			label: '11分钟',
			value: 11
		},
		{
			label: '12分钟',
			value: 12
		},
		{
			label: '13分钟',
			value: 13
		},
		{
			label: '14分钟',
			value: 14
		},
		{
			label: '15分钟',
			value: 15
		},
		{
			label: '16分钟',
			value: 16
		},
		{
			label: '17分钟',
			value: 17
		},
		{
			label: '18分钟',
			value: 18
		},
		{
			label: '19分钟',
			value: 19
		},
		{
			label: '20分钟',
			value: 20
		},
		{
			label: '21分钟',
			value: 21
		},
		{
			label: '22分钟',
			value: 22
		},
		{
			label: '23分钟',
			value: 23
		},
		{
			label: '24分钟',
			value: 24
		},
		{
			label: '25分钟',
			value: 25
		},
		{
			label: '26分钟',
			value: 26
		},
		{
			label: '27分钟',
			value: 27
		},
		{
			label: '28分钟',
			value: 28
		},
		{
			label: '29分钟',
			value: 29
		},
		{
			label: '30分钟',
			value: 30
		},
		{
			label: '31分钟',
			value: 31
		},
		{
			label: '32分钟',
			value: 32
		},
		{
			label: '33分钟',
			value: 33
		},
		{
			label: '34分钟',
			value: 34
		},
		{
			label: '35分钟',
			value: 35
		},
		{
			label: '36分钟',
			value: 36
		},
		{
			label: '37分钟',
			value: 37
		},
		{
			label: '38分钟',
			value: 38
		},
		{
			label: '39分钟',
			value: 39
		},
		{
			label: '40分钟',
			value: 40
		},
		{
			label: '41分钟',
			value: 41
		},
		{
			label: '42分钟',
			value: 42
		},
		{
			label: '43分钟',
			value: 43
		},
		{
			label: '44分钟',
			value: 44
		},
		{
			label: '45分钟',
			value: 45
		},
		{
			label: '46分钟',
			value: 46
		},
		{
			label: '47分钟',
			value: 47
		},
		{
			label: '48分钟',
			value: 48
		},
		{
			label: '49分钟',
			value: 49
		},
		{
			label: '50分钟',
			value: 50
		},
		{
			label: '51分钟',
			value: 51
		},
		{
			label: '52分钟',
			value: 52
		},
		{
			label: '53分钟',
			value: 53
		},
		{
			label: '54分钟',
			value: 54
		},
		{
			label: '55分钟',
			value: 55
		},
		{
			label: '56分钟',
			value: 56
		},
		{
			label: '57分钟',
			value: 57
		},
		{
			label: '58分钟',
			value: 58
		},
		{
			label: '59分钟',
			value: 59
		}];
		this._data_second = [{
			label: '0秒',
			value: 0
		},
		{
			label: '1秒',
			value: 1
		},
		{
			label: '2秒',
			value: 2
		},
		{
			label: '3秒',
			value: 3
		},
		{
			label: '4秒',
			value: 4
		},
		{
			label: '5秒',
			value: 5
		},
		{
			label: '6秒',
			value: 6
		},
		{
			label: '7秒',
			value: 7
		},
		{
			label: '8秒',
			value: 8
		},
		{
			label: '9秒',
			value: 9
		},
		{
			label: '10秒',
			value: 10
		},
		{
			label: '11秒',
			value: 11
		},
		{
			label: '12秒',
			value: 12
		},
		{
			label: '13秒',
			value: 13
		},
		{
			label: '14秒',
			value: 14
		},
		{
			label: '15秒',
			value: 15
		},
		{
			label: '16秒',
			value: 16
		},
		{
			label: '17秒',
			value: 17
		},
		{
			label: '18秒',
			value: 18
		},
		{
			label: '19秒',
			value: 19
		},
		{
			label: '20秒',
			value: 20
		},
		{
			label: '21秒',
			value: 21
		},
		{
			label: '22秒',
			value: 22
		},
		{
			label: '23秒',
			value: 23
		},
		{
			label: '24秒',
			value: 24
		},
		{
			label: '25秒',
			value: 25
		},
		{
			label: '26秒',
			value: 26
		},
		{
			label: '27秒',
			value: 27
		},
		{
			label: '28秒',
			value: 28
		},
		{
			label: '29秒',
			value: 29
		},
		{
			label: '30秒',
			value: 30
		},
		{
			label: '31秒',
			value: 31
		},
		{
			label: '32秒',
			value: 32
		},
		{
			label: '33秒',
			value: 33
		},
		{
			label: '34秒',
			value: 34
		},
		{
			label: '35秒',
			value: 35
		},
		{
			label: '36秒',
			value: 36
		},
		{
			label: '37秒',
			value: 37
		},
		{
			label: '38秒',
			value: 38
		},
		{
			label: '39秒',
			value: 39
		},
		{
			label: '40秒',
			value: 40
		},
		{
			label: '41秒',
			value: 41
		},
		{
			label: '42秒',
			value: 42
		},
		{
			label: '43秒',
			value: 43
		},
		{
			label: '44秒',
			value: 44
		},
		{
			label: '45秒',
			value: 45
		},
		{
			label: '46秒',
			value: 46
		},
		{
			label: '47秒',
			value: 47
		},
		{
			label: '48秒',
			value: 48
		},
		{
			label: '49秒',
			value: 49
		},
		{
			label: '50秒',
			value: 50
		},
		{
			label: '51秒',
			value: 51
		},
		{
			label: '52秒',
			value: 52
		},
		{
			label: '53秒',
			value: 53
		},
		{
			label: '54秒',
			value: 54
		},
		{
			label: '55秒',
			value: 55
		},
		{
			label: '56秒',
			value: 56
		},
		{
			label: '57秒',
			value: 57
		},
		{
			label: '58秒',
			value: 58
		},
		{
			label: '59秒',
			value: 59
		}];
	}
	setConfirmButton(button_text, onClick) {
		let this1 = this;
		this.weui_picker_confirmBtn_txt.innerText = button_text;
		this.weui_picker_confirmBtn.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.__time_value);
			}
			if (this1.cancelable) {
				this1.close();
			}
		});
		this.weui_picker_confirmBtn.style.display = 'block';
		return this;
	}
	setCancelButton(button_text, onClick) {
		let this1 = this;
		this.weui_picker_cancelBtn_txt.innerText = button_text;
		this.weui_picker_cancelBtn.addEventListener('click',
		function(event) {
			if (onClick) {
				onClick(this1.__time_value);
			}
			if (this1.cancelable) {
				this1.close();
			}
		});
		this.weui_picker_cancelBtn.style.display = 'block';
		return this;
	}
	getCancelButton() {
		return this.weui_picker_cancelBtn;
	}
	getConfirmButton() {
		return this.weui_picker_confirmBtn;
	}
	setCanceledOnTouchOutside(cancel) {
		this.ontouch_cancel = cancel;
		return this;
	}
	setCancelable(cancel) {
		this.cancelable = cancel;
		return this;
	}
	#event() {
		let this1 = this;
		this.weui_picker_mask.addEventListener('click',
		function(event) {
			if (this1.ontouch_cancel && this1.cancelable) {
				this1.close();
			}
		});
	}
	#init() {
		this._weui_picker_mask = this._weui_picker.childNodes[1];
		this.weui_picker_mask = document.createElement('div');
		this.weui_picker_mask.classList.add('_weui-mask', 'weui-animate-fade-in');
		Tool.insertAfter(this.weui_picker_mask, this._weui_picker_mask);
		this.weui_picker_cont = this._weui_picker.childNodes[4];
		this.weui_picker_header = this._weui_picker.childNodes[4].childNodes[1];
		this.weui_picker_tle_hd = this._weui_picker.childNodes[4].childNodes[1].childNodes[3];
		this.weui_picker_cancelBtn = this._weui_picker.childNodes[4].childNodes[1].childNodes[1];
		this.weui_picker_cancelBtn_txt = this._weui_picker.childNodes[4].childNodes[1].childNodes[1].childNodes[1];
		this.weui_picker_confirmBtn = document.createElement('div');
		this.weui_picker_confirmBtn.classList.add('weui-half-screen-dialog__hd__side_btn');
		this.weui_picker_confirmBtn_txt = document.createElement('button');
		this.weui_picker_confirmBtn_txt.setAttribute('id', 'weui-picker-confirm');
		this.weui_picker_confirmBtn_txt.classList.add('weui-icon-btn', 'weui-icon-btn_close', 'weui-picker__btn', 'weui-picker__btn');
		this.weui_picker_confirmBtn_txt.innerText = '完成';
		this.weui_picker_confirmBtn.append(this.weui_picker_confirmBtn_txt);
		this.weui_picker_header.appendChild(this.weui_picker_confirmBtn);
		this.weui_picker_header_bar = document.createElement('div');
		this.weui_picker_header_bar.classList.add('qui-bottom-action-header-bar-cont');
		this.weui_picker_header_bar.style = 'margin: -15px auto 0px;';
		this.weui_picker_tle_hd.appendChild(this.weui_picker_header_bar);
	}
	onOpen(weui_picker) {
		
	}
	onOpened(value) {
		
	}
	getShow() {
		return (this.is_show && (this._weui_picker.parentNode || this._weui_picker.parentNode.nodeType != 11));
	}
	onChange(value) {
		
	}
	onConfirm(value) {
		
	}
	show() {
		let this1 = this;
		this.onOpen(this._weui_picker);
		if (!this.is_show) {
			this._weui_picker = weui.picker(this._data_day, this._data_hour, this._data_minute, this._data_second, {
				defaultValue: [0, 0, 1, 0],
				onChange: function(result) {
					this1.#getTimes(result);
					this1.onChange(result);
				},
				onConfirm: function(result) {
					this1.#getTimes(result);
					this1.onConfirm(result);
					return false;
				},
				id: 'multiPickerBtn'
			});
			this.onOpened(this.__time_value);
			this.#init();
			this.#event();
			this.is_show = true;
		}
		return this;
	}
	#getTimes(result) {
		let __day_label = result[0].label;
		let __day_value = result[0].value * 86400;
		let __hour_label = result[1].label;
		let __hour_value = result[1].value * 3600;
		let __minute_label = result[2].label;
		let __minute_value = result[2].value * 60;
		let __second_label = result[3].label;
		let __second_value = result[3].value;
		this.__date_value = __day_label + __hour_label + __minute_label + __second_label;
		this.__time_value = __day_value + __hour_value + __minute_value + __second_value;
	}
	onClose(value) {
		
	}
	onClosed(weui_picker) {
		
	}
	close() {
		let this1 = this;
		this.onClose(this.__time_value);
		if (this.is_show) {
			this.weui_picker_mask.classList.add('weui-animate-fade-out');
			this.weui_picker_cont.classList.add('weui-animate-slide-down');
			if (this._weui_picker) {
				this._weui_picker_mask.click();
				this.is_show = false;
				this.onClosed(this._weui_picker);
			}
		}
	}
}