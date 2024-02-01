


function CardWrapper({children}) {
  return (
    <div style={{border : "2px solid red ", margin: "10px", padding : "10px", display : "flex" }}>
        {children}
    </div>
  )
}

export default CardWrapper