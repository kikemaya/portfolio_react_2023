import React from "react";

const Project = ({ item }) => {
	return (
		<div key={item.id} className="flex flex-col items-center text-center">
			<div className="mb-8">
				<img
					className="object-cover rounded-2xl lg:h-[400px]"
					src={item.image}
					alt=""
				/>
				{/* <div className="rounded-2xl lg:h-[400px] bg-cover" style={background-image: url(item.image)} />  */}
			</div>
			<p className="mb-3 text-sm capitalize text-accent">{item.tools}</p>
			<h3 className="mb-3 text-2xl font-semibold capitalize">{item.name}</h3>
			<p className="max-w-md text-base">{item.description}</p>
		</div>
	);
};

export default Project;
