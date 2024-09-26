import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'


import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFound from './pages/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path = '/' element = {<MainLayout/>}>
    <Route index element = {<HomePage/>}/>
    <Route path = '/jobs' element = {<JobsPage/>}/>
    <Route path = '*' element = {<NotFound/>}/>
  </Route>)
);

const App = () => {
  return <RouterProvider router = {router}></RouterProvider>;
};

export default App