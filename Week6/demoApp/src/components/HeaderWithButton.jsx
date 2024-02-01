import { useState } from "react"


function HeaderWithButton() {
    const [title ,setTitle] = useState("Tejas1");
    function buttonOnClick(){
        setTitle(Math.random());
    }

  return (
    <>
        <button onClick={buttonOnClick}>Update the Header</button>
        <h1>{title}</h1>
    </>
  )
}

export default HeaderWithButton