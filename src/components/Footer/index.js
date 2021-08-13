const Index = () => {
  const style = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    background:'linear-gradient(#485563, #29323c)',
    textAlign: 'center',
    padding: '15px',
    boxShadow: '0 5px 5px 5px rgba(0,0,0,0.4)',
    Zindex: '999',
    color: '#fff',
    fontSize: "1.5rem",
    display: 'block'
  }
  return (
    <a 
      to="https://github.com/TaiNguyen060699" 
      target="_blank" 
      style={style}
    >
      <i className="ion-social-github"></i>&nbsp;&nbsp;Fork on GitHub
    </a>
  )
}

export default Index
