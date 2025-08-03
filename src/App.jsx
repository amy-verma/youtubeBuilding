import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Body from './Components/Body';
import Head from './Components/Head';
import {Provider} from "react-redux"
import store from "./utils/store"
import Main from './Components/MainContainer';
import WatchPage from './Components/WatchPage';

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
      element:<Main/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      }
      
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
    <div>
      <Head/>
      <RouterProvider router={appRouter}>
      <Body/>
      </RouterProvider>
    </div>
    </Provider>
  );
}

export default App;
