'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactButton = require('@ling/react-button');



Object.keys(reactButton).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return reactButton[k];
		}
	});
});