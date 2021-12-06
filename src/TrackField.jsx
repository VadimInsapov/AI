function TrackField(props) {
    return (
        <div className="song">
            <div className="song__inner">
                <div className="song__number">{"#" + props.number}</div>
                <div className="song__main">
                    <div className="song__logo">
                        <div className="song__logo-box">
                            <img className="img" src={props.image} alt="обложка" />
                        </div>
                    </div>
                    <div className="song__param">
                        <div>{props.name}</div>
                        <div>{props.artists}</div>
                    </div>
                </div>
                <div className="song__extra">
                    <div className="song__extra-param"><a target="_blank" rel="noopener noreferrer" href={props.url}><i class="like far fa-play-circle fa-2x"></i></a></div>
                    <div className="song__extra-param"><i aria-hidden="true" className="like far fa-heart fa-2x"></i></div>
                </div>
            </div>
        </div>
    );
}

export default TrackField;