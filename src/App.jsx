import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Main from "./pages/Main";
import JobDetails from "./components/JobDetails";
import JobContextProvider from "./context/JobContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: ":id",
        element: <JobDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <JobContextProvider>
        <RouterProvider router={router} />
      </JobContextProvider>
    </>
  );
}

export default App;
