import { Navigator } from "./components/Navigator";
import { Router } from "./Router";
import { Route } from "./Route";

import { HomePage } from "./pages/Home";
import { Turns } from "./components/Turns";

function App() {
  return (
    <main>
      <header>
        <Navigator />
      </header>
      <section>
        <Router>
          <Route path={'/'} Component={HomePage} />
          <Route
            path={'/turns/:query'}
            Component={({routeParams}) => <Turns id={routeParams.query}/>}
          />
        </Router>
      </section>
    </main>
  );
}

export default App;
