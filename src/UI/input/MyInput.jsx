import React from "react";

const MyInput = React.forwardRef((props, ref) => {
	return (
		
			<input className="w-full mb-5 px-2 py-3 outline-none border-2 border-gray-500 dark:border-none"  {...props} ref={ref} />
			
		
	);
})

export default MyInput;
