import React from 'react';
import {slide as Menu} from 'react-burger-menu';

export default props => {
	return(
		<Menu>
			<a className ="menu-item" href = "/">
				Home
			</a>

			<a className ="menu-item" href = "https://github.com/raknahsa?tab=repositories">
				Projects
			</a>
		</Menu>
	);
};
