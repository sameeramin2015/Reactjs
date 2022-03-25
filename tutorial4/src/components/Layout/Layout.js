import Header from "./Header";
import Footer from "./Footer";

export default function Layout({children}) {
       // header - is static
        // webpage contains dynamic
        // footer - is static
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}
