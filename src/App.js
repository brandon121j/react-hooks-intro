import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Pokemon } from './common/Pokemon';
import { PokemonDetail } from './common/PokemonDetail';
import { SearchPokemon } from './common/SearchPokemon';
import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/search" component={SearchPokemon} />
					<Route exact path="/" component={Pokemon} />
					<Route exact path="/fetch-pokemon/:name" component={PokemonDetail} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

/*

  useEffect is ComponentDidMount + ComponentDidUpdate + ComponentWillUnmount

*/
