import AOS from 'aos'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { publicRoutes } from './routes';
import 'aos/dist/aos.css'
import HeaderPublic from './pages/public/components/headerPublic'
import FooterPublic from './pages/public/components/footerPublic';
AOS.init();
export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <HeaderPublic/>
          <Routes>
            {
              publicRoutes.map((route, index) => {
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