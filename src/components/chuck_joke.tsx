// An alternative way of declaring a component is to write it as a function which
// returns a React.ReactNode. This is equivalent to the syntax in <ChuckCard/>

interface ChuckJokeProps {
	joke: string;
	id?: number;
}

const ChuckJoke : React.FC<ChuckJokeProps> = ({joke, id}) => {

	return (
		<p>{joke} {id}</p>
	)
}

export default ChuckJoke;
