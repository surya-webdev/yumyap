import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RestaurantDetail from "./pages/RestaurantDetail";
import Login from "./ui/Login";
import SignUp from "./ui/Signup";
import { Toaster } from "react-hot-toast";
import Protected from "./pages/Protected";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Protected>
                <Applayout />
              </Protected>
            }
          >
            {/* <Route index element={<Navigate replace to={"/"} />} /> */}
            <Route index path="/" element={<Home />} />
            <Route path="restaurant/:id" element={<RestaurantDetail />} />
            {/* <Route path="cart" element={<} */}
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={12}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            duration: 5000,
            style: {
              maxWidth: "500px",
              fontSize: "16px",
              background: "black",
              color: "white",
              padding: "16px 24px",
            },
            // Default options for specific types
            success: {
              duration: 6000,
            },
            error: {
              duration: 5000,
            },
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
