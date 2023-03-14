import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import StationList from './components/StationList'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import StationsPage from './pages/StationsPage';
import StationDetailsPage from './pages/StationDetailsPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
})

function App() {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient} >
        <header>Global App</header>
        <Routes>
          <Route path="/" element={<StationsPage />} />
          <Route path="/details/:brandSlug/:slug" element={<StationDetailsPage />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
