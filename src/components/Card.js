
import {Link} from 'react-router-dom'

export const Card = ({ item} ) => {
  return (
    <div className="country__box col-3 mx-auto my-0">
        <div className="country__info mb-5  position-relative  bg-light rounded-3 pb-4 ">

          <Link to={`/single/`+ item.name.common} className="country__flag text-decoration-none">
            <img src={item.flags.png} alt="country-image" width="100%" height="160" className="country__img mb-4 rounded-3" />
            <div className="country__subbox ps-4">
              <h2 className="country__title text-info fs-5 lh-lg mb-3 fw-bold text-dark">{item.name.official}</h2>
              <p className="country__text text-dark fw-bold mb-2">Population: <span className="country__subtext fw-normal">
                {item.population}</span></p>
              <p className="country__text text-dark fw-bold mb-2">Region: <span
                className="country__subtext fw-normal">{item.region}</span></p>
              <p className="country__text text-dark fw-bold mb-2">Capital:<span className="country__subtext fw-normal">
                {item.capital}</span></p>
            </div>
          </Link>
        </div>
      </div>
  )
}

export default Card;