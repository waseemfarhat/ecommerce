import './App.css';
import Shop from './Components/Shop';
import Home from './Components/Home';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Cart from './Components/Cart';
import Blog from './Components/Blog';
import About from './Components/About';

function App() {
  
const router=createBrowserRouter([
  
{
  path:'/',
  element:<Home />
},
{
path:'/shop',
element:<Shop />
},

{
  path:'/cart',
  element:<Cart />
  },
  
  {
    path:'/blog',
    element:< Blog/>
    },
    {
      path:'/about',
      element:< About/>
      },
    

])




  return (
    <>

    <RouterProvider router={router}>
    </RouterProvider>
   
  
  </>
  );
}

export default App;
