import React from 'react';

const SearchBox = ({searchfeild,searchChange}) => {
	return (
		<div className='pa2'>
		<input 
			className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow5'
			type="search" 
			placeholder='search robots'
			onChange={searchChange} 
		/>
		</div>
		);
}

export default SearchBox;