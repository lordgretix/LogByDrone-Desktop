import React from 'react';
import './FormAreaStyle.scss';

export const FormAreaView = ({ checks, toggleCheck }) => (
	<div className="props-container">
		<div>
			
			<div className="row">
				{
					checks.map((item, i) => (
						<div  key={i}>
							<input id={`checkbox-${i}`} className="styled-checkbox" type="checkbox" name={item.name} checked={item.selected} onChange={() => toggleCheck(item.name)}/> 
							<label htmlFor={`checkbox-${i}`}>{item.label}</label>
						</div>
					)
					)
				}
			</div>
		</div>
	</div>
);
