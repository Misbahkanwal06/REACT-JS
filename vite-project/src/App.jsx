import React from 'react'
import Navigationbar from './components/navigationbar';
import Navigationbar2 from './components/navigationbar2';
import Productsection from './components/productsection';
import ContactSection from "./components/ContactSection";
import Counter from './components/Counter';


function App() {
  return (
    <>

      <Navigationbar2 />
      {/* <Counter /> */}
      <Productsection />
      <ContactSection />
      {/* <Navigationbar2 /> */}


    </>
  )
}

export default App;
