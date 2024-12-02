import Main from "./Component/Main";
import Navbar from "./Component/Navbar";

import Footer from "./Component/Footer";
import Content from "./Component/Content";
import Counter from "./Component/Counter";
import { useState } from "react";
function App() {
  const [ open, setOpen] =useState(false)


  return (

    <div>


<Navbar />
<button onClick ={popup} > Open</button>
<Counter/>
{/* 
<Main> </Main>
<Content> </Content>
<Footer> </Footer> */}
    </div>
  )


}


export default App;