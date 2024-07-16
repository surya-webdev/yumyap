import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RestaurantDetail from "./pages/RestaurantDetail";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            {/* <Route index element={<Navigate replace to={"/"} />} /> */}
            <Route index path="/" element={<Home />} />
            <Route index path="restaurant/:id" element={<RestaurantDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
