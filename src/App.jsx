import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { AppLayout } from './Components/AppLayout';
import { CountryList } from './pages/CountryList';
import { getApiData } from './api/GetApidata';
import { Country } from './Components/Country';
import { getCountryDetails } from './api/GetCountryData';
import { ErrorPage } from './Components/ErrorPage';



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <CountryList/>,
          loader: getApiData,
        },
        {
          path: "/:country",
          element: <Country/>,
          loader: getCountryDetails,
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
