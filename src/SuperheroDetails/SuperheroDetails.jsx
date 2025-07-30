
function SuperheroDetails({ character }) {
    // Add a comment
    
    return (
        <div>
            <div className="row mt-5">
                <div className="col container d-flex flex-column justify-content-around">
                    <div>
                        <div className="row">
                            <p className="col text-start fs-5">{character.real_name}</p>
                        </div>
                        <div className="row">
                            <h1 className="col text-start display-1 fw-bold">{character.name}</h1>
                        </div>
                    </div>
                    <div className="row d-md-none">
                        <img src={character.img} alt={character.name} />
                    </div>
                    <div>
                    <div className="row">
                        <p className="text-start">First Appearance: <a href={character.info.first_appearance_link} target="_blank" className="link-underline link-opacity-100 link-underline-opacity-0 link-underline-opacity-100-hover link-offset-2-hover link-light fst-italic fs-5">{character.info.first_appearance}</a></p>
                    </div>
                    <div className="row">
                        <p className="col text-start fs-6">{character.description}</p>
                    </div>
                    </div>
                </div>
                <div className="col d-none d-md-block">
                    <img className="img-fluid" src={character.img} alt={character.name} />
                </div>
            </div>
        </div>
    );
}

export default SuperheroDetails