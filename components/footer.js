import React from 'react';
import {logging} from 'react-server';

const logger = logging.getLogger(__LOGGER__);

export default class Footer extends React.Component {

	render() {
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-muted">Footer for react server render test</p>
        </div>
      </footer>
    );
	}

}
