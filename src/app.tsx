import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import Home from './views/home';
import UnderMaintenance from './views/maintanance/maintanance';

export function App() {
	return (
		<LocationProvider>
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route default component={UnderMaintenance} />
				</Router>
			</main>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
