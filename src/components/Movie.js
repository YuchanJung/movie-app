import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, year, rating }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <div>
                <div>
                    <h3><Link to={`/movie/${id}`}>{title}</Link></h3>
                </div>
                <div>
                    <h4>{year}</h4>
                </div>
                <div>
                    <h4>{rating}</h4>
                </div>
            </div>
        </div>
    );
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
}
export default Movie;