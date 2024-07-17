import React from "react";

const Project = ({ item }) => {
	return (
		<div key={item.id} className="flex flex-col items-center text-center">
			<div className="mb-8">
				<img className="rounded-2xl" src={item.image} alt="" />
			</div>
			{/* <p className='mb-3 text-sm capitalize text-accent'>{item.category}</p> */}
			<h3 className="mb-3 text-2xl font-semibold capitalize">{item.name}</h3>
			{/* <p className='max-w-md text-base'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam
        obcaecati ipsam.
      </p> */}
		</div>
	);
};

export default Project;
