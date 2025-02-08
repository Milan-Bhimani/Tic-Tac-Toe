import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, createRoutesFromElements, createBrowserRouter,RouterProvider } from 'react-router-dom';
import { GameProvider } from './context/GameContext'; // Import your context provider
import Layout from './layout'; // The layout component
import Home from './pages/home'; // Home page
import Game from './pages/Game'; // Game page

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="game" element={<Game />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameProvider>
      <RouterProvider router={router} /> 
    </GameProvider>
  </StrictMode>
);
