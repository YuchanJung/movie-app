import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailOfMovie from "../components/DetailOfMovie";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);
    const { id } = useParams();
    const getDetails = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetails(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getDetails();
    }, []);
    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <DetailOfMovie
                    id={details.id}
                    url={details.url}
                    coverImg={details.medium_cover_image}
                    title={details.title}
                    description={details.description_intro}
                    genres={details.genres}
                />
            }
        </div>
    );
}

export default Detail;