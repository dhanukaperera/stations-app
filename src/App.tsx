import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StationsPage from './pages/StationsPage';
import StationDetailsPage from './pages/StationDetailsPage';
import { APP_NAME } from "./constants/constants";
import { routes } from "./constants/routes";

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
        <header>{APP_NAME}</header>
        <Routes>
          <Route path={routes.HOME} element={<StationsPage />} />
          <Route path={routes.STATION_DETAILS} element={<StationDetailsPage />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
