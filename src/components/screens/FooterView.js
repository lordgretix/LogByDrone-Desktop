import React from 'react';
import './FooterStyle.scss';

export const FooterView = ({social, openExplorer}) => (
	<footer className="footer">
		{
			social.map((item, key) => (
				 <i className={`btn-social fa fa-${item.icon}`} onClick={() => openExplorer(item.href)}/> 
				)
			)
		}
	</footer>
);
