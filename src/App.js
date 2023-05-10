import logo from './logo.svg';
import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Geography from './components/Geography/Geography';

import Date from './components/Date/Date';
import Child from './components/Pages/Child';

import Bar from './components/NivoBar/Bar';
import NivoBar from './components/NivoBar/NivoBar';
import Counter from './components/Pages/Counter';
import Form from './components/Pages/Form';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Counter></Counter>
    },
    {
      path: '/form',
      element:<Form></Form>
    },
    
    {
      path: '/date',
      element: <Date></Date>
    },
    {
      path: '/bar',
      element: <NivoBar></NivoBar>
    },
    {
      path: '/map',
      element: <Geography></Geography>
    }
    
  ])
  return (
    <div className=''>
      <RouterProvider router = {router}></RouterProvider>


    </div>
  );
}

export default App;
