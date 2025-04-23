function Boxcard({result, children}) {

    return (
      <>
      <div className={`box ${result}`}>
        {children}
      </div>
      </>
    )
  }
  
  export default Boxcard