import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Layout from "../Components/Layout"
import HomePage from "../Pages/HomePage"
import ContactUs from "../Pages/ContactUs"
import Shop from "../Components/HomePage/Shop"
import NotFound from "../Pages/NotFound"
import ShopSingle from "../Pages/ShopSingle"
export default function AppRoutes(){
    return(
        <Router>
       <Layout>
         <Routes>
           <Route path='/' element = {<HomePage />}/>
           <Route path='/ContactUs' element = {<ContactUs />}/>
           <Route path='/Shop' element = {<Shop/>}/>
           <Route path='*' element = {<NotFound/>}/>
           <Route path='/Shop/:id' element = {<ShopSingle/>}/>
         </Routes>
       </Layout>
     </Router>
    )
}