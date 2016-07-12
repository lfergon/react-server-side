'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helloWorld = require('../components/hello-world');

var _helloWorld2 = _interopRequireDefault(_helloWorld);

var _comments = require('../components/comments');

var _comments2 = _interopRequireDefault(_comments);

var _navbar = require('../components/navbar');

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimplePage = function () {
	function SimplePage() {
		(0, _classCallCheck3.default)(this, SimplePage);
	}

	(0, _createClass3.default)(SimplePage, [{
		key: 'getElements',
		value: function getElements() {
			return [_react2.default.createElement(_navbar2.default, null), _react2.default.createElement(_helloWorld2.default, null), _react2.default.createElement(_comments2.default, null)];
		}
	}, {
		key: 'getHeadStylesheets',
		value: function getHeadStylesheets() {
			return 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';
		}
	}, {
		key: 'getMetaTags',
		value: function getMetaTags() {
			return [{ charset: 'utf8' }, { 'http-equiv': 'x-ua-compatible', 'content': 'ie=edge' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { name: 'description', content: 'hello world test, powered by React Server' }, { name: 'generator', content: 'React Server' }];
		}
	}]);
	return SimplePage;
}();

exports.default = SimplePage;