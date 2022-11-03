import React from "react";

class ClassCounter extends React.Component {
	constructor(props) {
		super();
		this.state = {
			count: 0,
		};
		this.increment= this.increment.bind(this)
		this.decrement= this.decrement.bind(this)
	}

	increment() {
		this.setState({ count: this.state.count + 1 });
	}
	decrement() {
		this.setState({ count: this.state.count - 1 });
	}
	render() {
		return (
			<div>
				<h1 className="text-black text-center mb-5 dark:text-white">
					{this.state.count}
				</h1>
				<button
					className="bg-gray-600  text-white px-4 py-2 mr-4 rounded-md dark:bg-red-500"
					onClick={this.increment}
				>
					Increment
				</button>
				<button
					className="bg-gray-600  text-white px-4 py-2 rounded-md dark:bg-green-500"
					onClick={this.decrement}
				>
					Decrement
				</button>
			</div>
		);
	}
}

export default ClassCounter;
