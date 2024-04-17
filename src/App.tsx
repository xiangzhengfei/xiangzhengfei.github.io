import './video.css';

import {
  ChakraProvider,
} from '@chakra-ui/react';

import Header from './components/Header';
import VideoBackground from './components/VideoBackground';
import { BrowserRouter as Router } from 'react-router-dom';
import Introduction from './components/Introduction';


function App(): JSX.Element {


  return (
    <ChakraProvider>
      <VideoBackground />

      <Router>
        <Header />
        {/* <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
      </Router>
      <Introduction></Introduction>
    </ChakraProvider>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
