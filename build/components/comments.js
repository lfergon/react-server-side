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

var logger = _reactServer.logging.getLogger({ "name": "react.components.comments", "color": { "server": 73, "client": "rgb(42,127,127)" } });

var CommentBox = function (_React$Component) {
	(0, _inherits3.default)(CommentBox, _React$Component);

	function CommentBox() {
		(0, _classCallCheck3.default)(this, CommentBox);
		return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CommentBox).apply(this, arguments));
	}

	(0, _createClass3.default)(CommentBox, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement('textarea', { placeholder: 'Enter your text here' }),
				_react2.default.createElement(
					'button',
					{ className: 'btn btn-primary' },
					'Save'
				)
			);
		}
	}]);
	return CommentBox;
}(_react2.default.Component);

exports.default = CommentBox;