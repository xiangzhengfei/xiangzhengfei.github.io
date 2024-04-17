import { motion } from 'framer-motion';
import { useState } from 'react';
import './video.css';

import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Image,
  Link,
  Switch,
  Text,
} from '@chakra-ui/react';

import ThemeToggleButton from './components/ThemeToggleButton';
import logo from './logo.svg';
import Header from './components/Header';
import VideoBackground from './components/VideoBackground';
import ReactPlayer from 'react-player';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Introduction from './components/Introduction';

const textFontSizes = [16, 18, 24, 30];

function App(): JSX.Element {
  const [count, setCount] = useState(0);
  const handle = useFullScreenHandle();

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
