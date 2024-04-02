import Footer from "./Footer";
import Navabr from "./Navbar";

 const Layout = ({children}) => {
    return ( 
        <div className="content">
            <Navabr />
            {children}
            <Footer />
        </div>
     );
 }
  
 export default Layout;