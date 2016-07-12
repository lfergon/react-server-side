'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactServer = require('react-server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = _reactServer.logging.getLogger({ "name": "react.components.hello-world", "color": { "server": 203, "client": "rgb(212,42,42)" } });

var HelloWorld = function (_React$Component) {
	(0, _inherits3.default)(HelloWorld, _React$Component);

	function HelloWorld(props) {
		(0, _classCallCheck3.default)(this, HelloWorld);

		var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(HelloWorld).call(this, props));

		_this.state = {
			exclamationCount: 1
		};
		_this.handleClick = function () {
			logger.info('Getting more excited! previously ${this.state.exclamationCount} excitements.');
			_this.setState({ exclamationCount: _this.state.exclamationCount + 1 });
		};
		return _this;
	}

	(0, _createClass3.default)(HelloWorld, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h2',
					null,
					'Hello, World',
					'!'.repeat(this.state.exclamationCount)
				),
				_react2.default.createElement(
					'button',
					{ onClick: this.handleClick },
					'Get More Excited!'
				)
			);
		}
	}]);
	return HelloWorld;
}(_react2.default.Component);

exports.default = HelloWorld;