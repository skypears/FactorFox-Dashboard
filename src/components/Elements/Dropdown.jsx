export default  Dropdown = (props) => {
  return (
    <>
      <div className="dropdown">
        <a href="#" className="dropbtn">
          {props.children}
        </a>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </>
  );
}