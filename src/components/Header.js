import "./header.css";


const Header = () => {
  return(
    <header className="header shadow-sm my-2 w-100">
    <div className="container">
      <div className="header__box d-flex justify-content-between align-items-center py-2 ">

        <div className="header__info">
          <h1 className="header__title text-dark ">Where in the world?</h1>
        </div>

        <button className=" header__button btn btn-light btn-changer position-relative">Dark Mode</button>

      </div>
    </div>
  </header>
  )
}
export default Header;