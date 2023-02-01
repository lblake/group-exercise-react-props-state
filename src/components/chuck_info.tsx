interface ChuckInfoProps {
	whalesSaved: number;
	roundHouseKicks: number;
}


const ChuckInfo: React.FC<ChuckInfoProps> = ({whalesSaved, roundHouseKicks}) => {

	// 💡 note that this component uses an "explicit return"
	// Compare to <ChuckCard/> which just returns the JSX directly like this:
	// const ChuckCard = () => <>... some JSX Here...</>;

	// instead, this component uses curly braces `{}` and a `return` statement

	// this allows us to write code here to perform some logic before we construct the JSX
	// we want to return

	// if you don't have any particular need to write logic in a component, 
	// then it's cleaner to use the implicit return style from <ChuckCard/>
	// otherwise you can use the curly braces and return to write code first

	const someVariable = ""; // you don't need this to finish this exercise, it's just to demo JS here


	return (
		<>
			<p>Number of Whales Saved: {whalesSaved}</p>

			<p>Number of Round House Kicks (in the last day): {roundHouseKicks}</p>
		</>);
}


export default ChuckInfo;