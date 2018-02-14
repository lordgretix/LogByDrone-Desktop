import React from 'react';
import './ButtonAreaStyle.scss';

export const ButtonAreaView = ({ createFile }) => (
<div className="btn-container">
	<a onClick={() => createFile('json')} className="btn btn-4 btn-create">  {'{ .. }'} JSON</a>
	<a onClick={() => createFile('csv')} className="btn btn-5 btn-create" > <i className="fa fa-table" /> CSV</a>
</div>
);
