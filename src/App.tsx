// import { Application } from './components/application/Application';
//import { Counter } from './components/counter/Counter';
// import { Skills } from './components/skills/Skills';

import { CounterTwo } from "./components/counter-two/CounterTwo";

function App() {
  return (
    <div className="App">
      {/* <Application />
      <Skills skills={["HTML", "CSS", "JS"]} /> */}
      {/* <Counter/> */}
      <CounterTwo count={0}/>
    </div>
  );
}

export default App;
