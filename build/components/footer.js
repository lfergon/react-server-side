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

var logger = _reactServer.logging.getLogger({ "name": "react.components.footer", "color": { "server": 147, "client": "rgb(127,127,212)" } });

var Footer = function (_React$Component) {
  (0, _inherits3.default)(Footer, _React$Component);

  function Footer() {
    (0, _classCallCheck3.default)(this, Footer);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Footer).apply(this, arguments));
  }

  (0, _createClass3.default)(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'footer',
        { className: 'footer' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'p',
            { className: 'text-muted' },
            'Footer for react server render test'
          )
        )
      );
    }
  }]);
  return Footer;
}(_react2.default.Component);

exports.default = Footer;