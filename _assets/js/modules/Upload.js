// inspired by https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/

class Upload {
	constructor(el) {
		if (!el) {
			return;
		}
		this.el = el;
		this.input = this.el.querySelector('input');
		this.label = this.el.querySelector('label');
		this.labelText = this.label.querySelector('.js-upload-text');
		this.labelVal = this.label.innerHTML;

		this.hasFile = false;

		this.bindEvents();
	}

	set hasFile(bool) {
		if (bool === true) {
			this.el.classList.add('has-file');
		} else {
			this.el.classList.remove('has-file');
		}
	}

	updateLabel(e) {
		let fileName = '';

		if (this.input.files && this.input.files.length > 1) {
			fileName = (this.input.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
		} else {
			fileName = this.input.value.split('\\').pop();
		}

		if (fileName) {
			this.label.querySelector('.js-upload-text').innerHTML = fileName;
			this.hasFile = true;
		} else {
			this.label.innerHTML = this.labelVal;
			this.hasFile = false;
		}
	}

	bindEvents() {
		this.input.addEventListener('change', () => this.updateLabel());

		// Firefox bug fix
		this.input.addEventListener('focus', () => { this.input.classList.add('has-focus'); });
		this.input.addEventListener('blur', () => { this.input.classList.remove('has-focus'); });

		// drag/drop
		this.input.addEventListener('dragenter', () => {
			// console.log('=> dragover');
			this.el.classList.add('is-dragover');
		});
		this.input.addEventListener('dragleave', () => {
			// console.log('=> end');
			this.el.classList.remove('is-dragover');
		});
		this.input.addEventListener('drop', () => {
			// console.log('=> drop');
			this.el.classList.remove('is-dragover');
		});
	}
}
export default Upload;
