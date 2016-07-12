import React from 'react';
import {logging} from 'react-server';

const logger = logging.getLogger(__LOGGER__);

export default class CommentBox extends React.Component {

	render() {
    return (
			<div>
	      <textarea placeholder="Enter your text here"></textarea>
				<button className="btn btn-primary">Save</button>
			</div>
    );
	}

}
