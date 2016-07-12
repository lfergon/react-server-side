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

var logger = _reactServer.logging.getLogger({ "name": "react.components.navbar", "color": { "server": 159, "client": "rgb(127,212,212)" } });

var Navbar = function (_React$Component) {
  (0, _inherits3.default)(Navbar, _React$Component);

  function Navbar() {
    (0, _classCallCheck3.default)(this, Navbar);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Navbar).apply(this, arguments));
  }

  (0, _createClass3.default)(Navbar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'navbar navbar-default' },
        _react2.default.createElement(
          'div',
          { className: 'container-fluid' },
          _react2.default.createElement(
            'div',
            { className: 'navbar-header' },
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1', 'aria-expanded': 'false' },
              _react2.default.createElement(
                'span',
                { className: 'sr-only' },
                'Toggle navigation'
              ),
              _react2.default.createElement('span', { className: 'icon-bar' }),
              _react2.default.createElement('span', { className: 'icon-bar' }),
              _react2.default.createElement('span', { className: 'icon-bar' })
            ),
            _react2.default.createElement(
              'a',
              { className: 'navbar-brand', href: '#' },
              'React server'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
            _react2.default.createElement(
              'ul',
              { className: 'nav navbar-nav' },
              _react2.default.createElement(
                'li',
                { className: 'active' },
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Link ',
                  _react2.default.createElement(
                    'span',
                    { className: 'sr-only' },
                    '(current)'
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Link'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'dropdown' },
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown', role: 'button', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
                  'Dropdown ',
                  _react2.default.createElement('span', { className: 'caret' })
                ),
                _react2.default.createElement(
                  'ul',
                  { className: 'dropdown-menu' },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      'Action'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      'Another action'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      'Something else here'
                    )
                  ),
                  _react2.default.createElement('li', { role: 'separator', className: 'divider' }),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      'Separated link'
                    )
                  ),
                  _react2.default.createElement('li', { role: 'separator', className: 'divider' }),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      'One more separated link'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'form',
              { className: 'navbar-form navbar-left', role: 'search' },
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Search' })
              ),
              _react2.default.createElement(
                'button',
                { type: 'submit', className: 'btn btn-default' },
                'Submit'
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'nav navbar-nav navbar-right' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Link'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'dropdown' },
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown', role: 'button', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
                  'Dropdown ',
                  _react2.default.createElement('span', { className: 'caret' })
                ),
                _react2.default.createElement(
                  'ul',
                  { className: 'dropdown-menu' },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      'Action'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      'Another action'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      'Something else here'
                    )
                  ),
                  _react2.default.createElement('li', { role: 'separator', className: 'divider' }),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      'Separated link'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;