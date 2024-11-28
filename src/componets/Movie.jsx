function Movie(props) {
    const {
        Title: title,
        Year: year,
        imbdID: id,
        Type: type,
        Poster: poster
    } = props;
    return <div id={id} className="card movie">
            <div className="card-image">
                {
                    poster === "N/A" ? <img src={`https://placehold.jp/300x400.png?text=${title}`} alt="" /> : <img src={poster} alt="" />
                }
            </div>
            <span className="card-title">{title}</span>
            <div className="card-container">
                 <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.
                </p>
            </div>
            <div className="card-action">
                <p>{year} <span className="rigth">{type}</span></p>
            </div>
        </div>;
}

export { Movie };