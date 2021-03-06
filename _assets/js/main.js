import Headroom from 'headroom.js';
import whatInput from 'what-input';
import svg4everybody from 'svg4everybody';
import SmoothScroll from 'smooth-scroll';
import LoadFonts from './modules/LoadFonts';
import { $, $$ } from './modules/Bling';
import ToggleNav from './modules/ToggleNav';
import lazySizes from './modules/LazyLoad';
import InitImageComparison from './modules/ImageCompare';
import carousel from './modules/Carousel';
import tilt from './modules/Tilt';
import GMap from './modules/GMaps';
import StickyHeader from './modules/StickyHeader';
import TriggerAnimations from './modules/TriggerAnimations';
import InitHeadroom from './modules/InitHeadroom';
import CharAllowance from './modules/CharAllowance';
import Upload from './modules/Upload';
// import initTabs from './modules/Tabs';
import EnhanceForms from './modules/EnhanceForms';
import Brief from './modules/Brief';

(() => {
	const enhance = 'querySelector' in document
	&& 'localStorage' in window
	&& 'addEventListener' in window
	&& 'classList' in document.documentElement;

	LoadFonts();
	lazySizes();
	carousel();
	if (enhance) {
		InitImageComparison();
		tilt();
		const map = new GMap($('.js-map'));
		const $toggleButton = $('.js-nav-toggle');
		if ($toggleButton) {
			const toggleNavInstance = new ToggleNav($toggleButton);
		}

		const smoothScroll = new SmoothScroll('a[href^="#"]:not(.js-no-scroll)');
		new InitHeadroom();
		new StickyHeader($('.js-header-logo'));

		const charLimitEls = $$('.js-char-limit');
		Array.from(charLimitEls).forEach((item) => {
			const charLimitEl = new CharAllowance(item);
		});

		if (window.matchMedia('(max-width: 999px)').matches) {
			const header = $('.js-header');
			const headroom = new Headroom(header);
			const headerHeight = window.getComputedStyle(header).height;
			$('body').style.paddingTop = headerHeight;
			headroom.init();
		}

		Array.from($$('.js-upload')).forEach((item) => {
			const fileUpload = new Upload(item);
		});

		// initTabs();

		TriggerAnimations();
		new EnhanceForms();
	}
	svg4everybody();

	const brief = new Brief($('.js-brief'));
})();
