import AOS from 'aos'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { publicRoutes, privateRoutes } from './routes';
import 'aos/dist/aos.css'
import FooterPublic from './pages/public/components/footerPublic'
AOS.init();
export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
          <Routes>
              {
                publicRoutes.map((route, index) => {
                  const Page = route.component
                  return <Route key={index} path={route.path} element={<Page/>} />
                })
                
              }
              {/* Route the different layout */}
              {
                privateRoutes.map((route, index) => {
                  const Page = route.component
                  return <Route key={index} path={route.path} element={<Page/>} />
                })
              }
          </Routes>
        <FooterPublic/>      
      </div>
    </BrowserRouter>
  )
}