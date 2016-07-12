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
		_this.handleClick = function (e) {
			logger.info('Event: ', e.target);
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
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'page-header' },
					_react2.default.createElement(
						'h1',
						null,
						'Random content'
					)
				),
				_react2.default.createElement(
					'p',
					{ className: 'lead' },
					'Icing soufflé jelly beans cake bear claw lemon drops sweet roll. Dragée icing caramels apple pie. Cheesecake candy canes chupa chups topping jelly tiramisu candy canes lemon drops tiramisu. Marzipan donut sesame snaps cake oat cake. Candy marshmallow marshmallow dessert. Ice cream cake croissant dragée gingerbread. Pie marzipan fruitcake lollipop tootsie roll candy canes. Marshmallow jelly sweet bear claw candy tart. Cupcake brownie cake cupcake cookie pastry croissant. Bonbon muffin sugar plum gingerbread sweet roll jujubes cotton candy icing. Cake cotton candy jelly jelly candy canes cookie topping gummies. Cookie chupa chups chocolate carrot cake wafer oat cake sweet. Cake cheesecake gummies icing croissant. Muffin cupcake pudding cake soufflé jelly beans. Gingerbread bear claw marzipan soufflé marzipan gummies lollipop sugar plum sweet. Powder bear claw soufflé. Gingerbread caramels toffee. Carrot cake chupa chups sugar plum marzipan halvah ice cream. Wafer icing lemon drops cheesecake. Gingerbread tiramisu oat cake gummi bears cookie lemon drops marzipan oat cake cake. Carrot cake croissant danish chocolate bar jujubes jelly beans chocolate. Cupcake lemon drops halvah muffin bear claw pudding danish sweet cookie. Donut caramels danish sweet carrot cake halvah muffin. Topping dragée cake pastry. Topping marshmallow apple pie sweet roll croissant powder pie fruitcake. Oat cake bear claw dessert apple pie brownie. Ice cream cotton candy oat cake cake pie cookie cake powder gummi bears. Liquorice cotton candy toffee. Chupa chups pudding chocolate cake icing donut caramels cookie. Jelly marzipan gummi bears pastry chocolate chocolate cake pastry gummies brownie. Caramels marzipan bonbon carrot cake. Cupcake cake tart liquorice halvah sesame snaps. Pastry powder carrot cake. Cake topping ice cream sweet roll. Sweet roll marshmallow pudding soufflé candy candy canes danish. Sweet pudding biscuit pudding chocolate bar danish. Candy marshmallow liquorice wafer gummies. Marzipan icing caramels carrot cake apple pie sugar plum cotton candy croissant biscuit. Topping cotton candy bear claw topping sweet carrot cake sugar plum tart topping. Lollipop marzipan danish donut croissant. Halvah brownie caramels. Wafer danish sweet roll icing. Croissant bear claw danish cake. Powder donut oat cake. Croissant muffin sweet roll jujubes cheesecake. Apple pie dragée danish fruitcake muffin pastry. Dessert dragée toffee bear claw. Pie chocolate cake bear claw lollipop bonbon. Topping muffin donut cookie sweet roll wafer sweet roll bonbon tart. Topping lollipop chocolate bar. Cookie jujubes chocolate bar cotton candy gummi bears marshmallow pastry. Chocolate cake sweet roll halvah apple pie dragée. Tootsie roll gingerbread cotton candy tootsie roll ice cream candy chocolate bar chocolate bar topping. Gummi bears cheesecake carrot cake brownie. Gummies cookie sesame snaps gummi bears oat cake macaroon tart sesame snaps candy. Cookie muffin marshmallow sesame snaps. Croissant gingerbread tootsie roll lollipop tootsie roll soufflé pudding. Fruitcake cotton candy muffin chocolate cake sugar plum chocolate cake apple pie gummi bears lemon drops. Sweet danish chupa chups sweet sweet roll jelly-o cupcake. Tootsie roll apple pie pudding jelly beans marzipan. Sugar plum jelly-o carrot cake pastry topping. Icing lemon drops topping halvah tart marshmallow cotton candy cheesecake. Fruitcake muffin halvah. Muffin caramels croissant sweet cookie lollipop tiramisu candy candy. Bonbon sweet cheesecake.'
				)
			);
		}
	}]);
	return HelloWorld;
}(_react2.default.Component);

exports.default = HelloWorld;