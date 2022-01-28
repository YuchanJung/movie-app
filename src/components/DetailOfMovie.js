import PropTypes from "prop-types";

function DetailOfMovie({ id, url, coverImg, title, description, genres }) {
    return (
        <div id={id}>
            <div><img src={coverImg} alt={title} /></div>
            <div>
                <a href={url}><h2>{title}</h2></a>
            </div>
            <div>
                <h4>
                    {genres && genres.map((g) => {
                        if (g === genres[genres.length - 1]) return g;
                        return g + " / ";
                    })}
                </h4>
            </div>
            <div>
                {description}
            </div>
        </div>
    );
}

DetailOfMovie.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
}
export default DetailOfMovie;