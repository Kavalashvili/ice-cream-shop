/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContactPage() {\n    const contactPage = document.createElement('div')\n    contactPage.classList.add('contact-div')\n    const titles = ['CONTACT US', 'GENERAL', 'ADDRESS', 'WHOLESALE', 'PHONE', 'ONLINE ORDERS', 'INSTAGRAM']\n    const text = ['We like sweet talk', 'info@magiccones.com', '123 Smith Street<br>Brooklyn, NY 123',\n                  'wholesale@magiccones.com', '123 123 1234', 'orders@magiccones.com', '@magic_cones']\n    for (let i = 0; i < 7; i++) {\n        const contactGridItem = document.createElement('div')\n        contactGridItem.classList.add(`${'div' + (i + 1)}`)\n        const contactTitle = document.createElement('h4')\n        contactTitle.classList.add('contact-h4')\n        contactTitle.textContent = titles[i]\n        const contactParagraph = document.createElement('p')\n        contactParagraph.classList.add('contact-p')\n        contactParagraph.innerHTML = text[i]\n        contactGridItem.append(contactTitle, contactParagraph)\n        contactPage.appendChild(contactGridItem)\n    }\n    return contactPage\n}\n\nfunction loadContact() {\n    const content = document.querySelector('#content')\n    content.innerHTML = ''\n    content.append(createContactPage())\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://ice-cream-shop/./src/contact.js?");

/***/ }),

/***/ "./src/flavors.js":
/*!************************!*\
  !*** ./src/flavors.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet pic = new Image()\n\nfunction createFlavorsHeader() {\n    const header = document.createElement('div')\n    header.classList.add('flavors-header')\n    const headerInfoH1 = document.createElement('h1')\n    headerInfoH1.classList.add('flavors-header-h1')\n    const span1 = document.createElement('span')\n    span1.classList.add('title-word', 'title-word-1')\n    span1.textContent = 'CHECK '\n    const span2 = document.createElement('span')\n    span2.classList.add('title-word', 'title-word-2')\n    span2.textContent = 'OUT '\n    const span3 = document.createElement('span')\n    span3.classList.add('title-word', 'title-word-3')\n    span3.textContent = 'OUR '\n    const span4 = document.createElement('span')\n    span4.classList.add('title-word', 'title-word-4')\n    span4.textContent = 'FLAVORS'\n    headerInfoH1.append(span1, span2, span3, span4)\n    const headerInfoP = document.createElement('p')\n    headerInfoP.classList.add('flavors-header-p')\n    headerInfoP.innerHTML = `How do you like your euphoria? There are so many ways to enjoy \n                               Magic Cones. We cover our bases with good old chocolate and \n                               award-winning vanilla, but then go so much further, \n                               with something for everyone.<br>Go ahead, give it a swirl…`\n    header.append(headerInfoH1, headerInfoP)\n    return header\n}\n\nfunction createFlavorsGallery() {\n    const flavors = ['Vanilla', 'Chocolate', 'Strawberry', 'Raspberry', 'Blackberry', 'Pistachio', 'Oreo']\n    const flavorsGallery = document.createElement('div')\n    flavorsGallery.classList.add('flavors-gallery-container')\n    const listDiv = document.createElement('div')\n    listDiv.classList.add('flavors-gallery-item')\n    const flavorList = document.createElement('ul')\n    flavorList.classList.add('flavors-gallery-list')\n    flavors.forEach(flavor => {\n        const li = document.createElement('li')\n        li.classList.add('flavor')\n        li.textContent = flavor\n        flavorList.appendChild(li)\n        li.addEventListener('mouseover', changeFlavor)\n    })\n    listDiv.appendChild(flavorList)\n    const picsDiv = document.createElement('div')\n    picsDiv.classList.add('flavors-gallery-item')\n    pic.src = 'images/vanilla.jpg'\n    pic.classList.add('flavors-gallery-picture')\n    picsDiv.appendChild(pic)\n    flavorsGallery.append(listDiv, picsDiv)\n    return flavorsGallery\n}\n\nfunction loadFlavors() {\n    const content = document.querySelector('#content')\n    content.innerHTML = ''\n    content.append(createFlavorsHeader(), createFlavorsGallery())\n}\n\nfunction changeFlavor() {\n    if (this.textContent === 'Vanilla') {\n        pic.src = 'images/vanilla.jpg'\n    }\n    else if (this.textContent === 'Chocolate') {\n        pic.src = 'images/chocolate.jpg'\n    }\n    else if (this.textContent === 'Strawberry') {\n        pic.src = 'images/strawberry.jpg'\n    }\n    else if (this.textContent === 'Raspberry') {\n        pic.src = 'images/raspberry.jpg'\n    }\n    else if (this.textContent === 'Blackberry') {\n        pic.src = 'images/blackberry.jpg'\n    }\n    else if (this.textContent === 'Pistachio') {\n        pic.src = 'images/pistachio.jpg'\n    }\n    else if (this.textContent === 'Oreo') {\n        pic.src = 'images/oreo.jpg'\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFlavors);\n\n//# sourceURL=webpack://ice-cream-shop/./src/flavors.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _flavors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flavors */ \"./src/flavors.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\nfunction createHeading() {\n    const heading = document.createElement('div')\n    heading.classList.add('main')\n    const border = document.createElement('div')\n    border.classList.add('border')\n    const inner = document.createElement('div')\n    inner.classList.add('inner-cutout')\n    const h1 = document.createElement('h1')\n    h1.classList.add('knockout')\n    h1.innerHTML = `Welcome to<br>Magic Cones`\n    inner.appendChild(h1)\n    border.appendChild(inner)\n    heading.appendChild(border)\n    return heading\n}\n\nfunction createHomeGallery() {\n    const homeGallery = document.createElement('div')\n    homeGallery.classList.add('homepage-gallery')\n\n    const galleryHeader = [`A decadent blend of cream and culture`,\n                            `Visit Our Shop`,\n                            `Desserts Make People Happy`]\n    const galleryPText = [`\"Magic Cones\" is an ice cream company that draws inspiration from \n                        globally-sourced whole ingredients, aromatic spices and unexpected twists \n                        on old classics. Our ice cream is all eggless, handcrafted, and churned \n                        with very little air, resulting in purer, more robust flavors, as well as \n                        the creamiest textures you can find.`,\n                        `Monday - Thursday: 1pm - 10pm<br>Friday - Sunday: 12pm - 10pm\n                        <br>123 Smith Street<br>Brooklyn, NY 123<br>123 123 1234`,\n                        `We have pints waiting for you in all your favorite stores. \n                        Check out our locations and even request your favorite flavors at your \n                        local store.<br><br>We have three beautifully designed Magic Cones Ice Cream carts \n                        available for events from weddings, corporate parties, fairs and markets.`]\n    const galleryButtonText = [`OUR FLAVORS`, `GET IN TOUCH`, `BACK TO TOP`]\n    const galleryPictures = ['/images/home-pic1.jpg',\n                             '/images/home-pic2.jpg', \n                             '/images/home-pic3.jpg']\n\n    galleryPictures.forEach(picture => {\n        const galleryPic = document.createElement('div')\n        galleryPic.classList.add('homepage-gallery-item')\n        let pic = document.createElement('img')\n        pic.src = picture\n        pic.classList.add('homepage-gallery-picture')\n        galleryPic.appendChild(pic)\n        homeGallery.appendChild(galleryPic)\n    })\n\n    for (let i = 0; i < 3; i++) {\n        const galleryText = document.createElement('div')\n        galleryText.classList.add('homepage-gallery-item')\n        const galleryH1 = document.createElement('h1')\n        galleryH1.classList.add('homepage-gallery-header')\n        galleryH1.textContent = galleryHeader[i]\n        const galleryP = document.createElement('p')\n        galleryP.classList.add('homepage-gallery-p')\n        galleryP.innerHTML = galleryPText[i]\n        const galleryButton = document.createElement('button')\n        galleryButton.type = 'submit'\n        galleryButton.classList.add('homepage-gallery-button')\n        galleryButton.textContent = galleryButtonText[i]\n        galleryText.append(galleryH1, galleryP, galleryButton)\n        homeGallery.appendChild(galleryText)\n\n        if (i === 0) {\n            galleryButton.addEventListener('click', loadNewFlavors)\n        }\n        else if (i === 1) {\n            galleryButton.addEventListener('click', loadNewContact)\n        }\n        else if (i === 2) {\n            galleryButton.addEventListener('click', scroll)\n        }\n    }\n\n    return homeGallery\n}\n\nfunction loadHome() {\n    const content = document.querySelector('#content')\n    content.innerHTML = ''\n    content.append(createHeading(), createHomeGallery())\n}\n\nfunction loadNewContact() {\n    (0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    scroll()\n}\n\nfunction loadNewFlavors() {\n    (0,_flavors__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    scroll()\n}\n\nfunction scroll() {\n    window.scroll(0, 0)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://ice-cream-shop/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _flavors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flavors */ \"./src/flavors.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\ninit()\n\nfunction checkEvents() {\n    const home = document.querySelector('.home')\n    const flavors = document.querySelector('.flavors')\n    const contact = document.querySelector('.contact')\n    const loog = document.querySelector('.header-logo')\n\n    home.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n    flavors.addEventListener('click', _flavors__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n    contact.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n    loog.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n}\n\nfunction init() {\n    (0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    ;(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    checkEvents()\n}\n\n\n//# sourceURL=webpack://ice-cream-shop/./src/index.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createNav() {\n    const nav = document.createElement('nav')\n    const headerLogo = document.createElement('p')\n    headerLogo.textContent = \"MAGIC CONES\"\n    headerLogo.classList.add('header-logo')\n    const ul = document.createElement('ul')\n    ul.classList.add('nav-ul')\n    const tabs = ['HOME', 'FLAVORS', 'CONTACT']\n    tabs.forEach(tab => {\n        const li = document.createElement('li')\n        li.classList.add('btn', tab.toLowerCase())\n        li.textContent = tab\n        ul.appendChild(li)\n    })\n    nav.append(headerLogo, ul)\n    return nav\n}\n\nfunction createFooter() {\n    const footer = document.createElement('footer')\n    const footerLogo = document.createElement('p')\n    footerLogo.textContent = \"MAGIC CONES\"\n    footerLogo.classList.add('footer-logo')\n    const footerText = document.createElement('p')\n    footerText.innerHTML = `Kavalashvili<i class=\"fab fa-github\"></i>`\n    footer.append(footerLogo, footerText)\n    return footer\n}\n\nfunction initialize() {\n    const content = document.createElement('div')\n    content.id = \"content\"\n    document.body.append(createNav(), content, createFooter())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize);\n\n//# sourceURL=webpack://ice-cream-shop/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;