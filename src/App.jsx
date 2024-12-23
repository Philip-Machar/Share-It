import { useRoutes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CreateAccountPage from "./pages/CreateAccountPage";
import LoginPage from "./pages/LoginPage";
import PreviewPage from "./pages/PreviewPage";
import LinksPage from "./pages/LinksPage";
import ProfilePage from "./pages/ProfilePage"

const App = () => {
  const routes = [
    { path: "/", element: <PreviewPage />},
    { path: "/login", element: <LoginPage />},
    { path: "/create-account", element: <CreateAccountPage />},
    {
      element: <MainLayout />,
      children: [
        { path: "/links", element: <LinksPage /> },
        { path: "/profile", element: <ProfilePage />}
      ]
    }
  ]

  const routing = useRoutes(routes);

  return routing;
  // return (
  //   <div>
  //     <CreateAccountPage />
  //     {/* <LoginPage /> */}
  //   </div>
  // )
};

export default App;
