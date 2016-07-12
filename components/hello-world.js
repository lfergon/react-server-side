import React from 'react';
import {logging} from 'react-server';

const logger = logging.getLogger(__LOGGER__);

export default class HelloWorld extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			exclamationCount: 1
		};
		this.handleClick = (e) => {
			logger.info('Event: ', e.target);
			logger.info('Getting more excited! previously ${this.state.exclamationCount} excitements.');
			this.setState({exclamationCount: this.state.exclamationCount + 1});
		};
	}

	render() {
		return (
			<div className="container">
	      <div className="page-header">
	        <h1>Random content</h1>
	      </div>
	      <p className="lead">Icing soufflé jelly beans cake bear claw lemon drops sweet roll. Dragée icing caramels apple pie. Cheesecake candy canes chupa chups topping jelly tiramisu candy canes lemon drops tiramisu. Marzipan donut sesame snaps cake oat cake. Candy marshmallow marshmallow dessert. Ice cream cake croissant dragée gingerbread. Pie marzipan fruitcake lollipop tootsie roll candy canes. Marshmallow jelly sweet bear claw candy tart. Cupcake brownie cake cupcake cookie pastry croissant. Bonbon muffin sugar plum gingerbread sweet roll jujubes cotton candy icing. Cake cotton candy jelly jelly candy canes cookie topping gummies. Cookie chupa chups chocolate carrot cake wafer oat cake sweet. Cake cheesecake gummies icing croissant.
				Muffin cupcake pudding cake soufflé jelly beans. Gingerbread bear claw marzipan soufflé marzipan gummies lollipop sugar plum sweet. Powder bear claw soufflé. Gingerbread caramels toffee. Carrot cake chupa chups sugar plum marzipan halvah ice cream. Wafer icing lemon drops cheesecake. Gingerbread tiramisu oat cake gummi bears cookie lemon drops marzipan oat cake cake. Carrot cake croissant danish chocolate bar jujubes jelly beans chocolate. Cupcake lemon drops halvah muffin bear claw pudding danish sweet cookie. Donut caramels danish sweet carrot cake halvah muffin. Topping dragée cake pastry. Topping marshmallow apple pie sweet roll croissant powder pie fruitcake. Oat cake bear claw dessert apple pie brownie. Ice cream cotton candy oat cake cake pie cookie cake powder gummi bears.
				Liquorice cotton candy toffee. Chupa chups pudding chocolate cake icing donut caramels cookie. Jelly marzipan gummi bears pastry chocolate chocolate cake pastry gummies brownie. Caramels marzipan bonbon carrot cake. Cupcake cake tart liquorice halvah sesame snaps. Pastry powder carrot cake. Cake topping ice cream sweet roll. Sweet roll marshmallow pudding soufflé candy candy canes danish. Sweet pudding biscuit pudding chocolate bar danish. Candy marshmallow liquorice wafer gummies. Marzipan icing caramels carrot cake apple pie sugar plum cotton candy croissant biscuit. Topping cotton candy bear claw topping sweet carrot cake sugar plum tart topping.
				Lollipop marzipan danish donut croissant. Halvah brownie caramels. Wafer danish sweet roll icing. Croissant bear claw danish cake. Powder donut oat cake. Croissant muffin sweet roll jujubes cheesecake. Apple pie dragée danish fruitcake muffin pastry. Dessert dragée toffee bear claw. Pie chocolate cake bear claw lollipop bonbon. Topping muffin donut cookie sweet roll wafer sweet roll bonbon tart. Topping lollipop chocolate bar. Cookie jujubes chocolate bar cotton candy gummi bears marshmallow pastry. Chocolate cake sweet roll halvah apple pie dragée. Tootsie roll gingerbread cotton candy tootsie roll ice cream candy chocolate bar chocolate bar topping.
				Gummi bears cheesecake carrot cake brownie. Gummies cookie sesame snaps gummi bears oat cake macaroon tart sesame snaps candy. Cookie muffin marshmallow sesame snaps. Croissant gingerbread tootsie roll lollipop tootsie roll soufflé pudding. Fruitcake cotton candy muffin chocolate cake sugar plum chocolate cake apple pie gummi bears lemon drops. Sweet danish chupa chups sweet sweet roll jelly-o cupcake. Tootsie roll apple pie pudding jelly beans marzipan. Sugar plum jelly-o carrot cake pastry topping. Icing lemon drops topping halvah tart marshmallow cotton candy cheesecake. Fruitcake muffin halvah. Muffin caramels croissant sweet cookie lollipop tiramisu candy candy. Bonbon sweet cheesecake.</p>
	    </div>
		);
	}
}
