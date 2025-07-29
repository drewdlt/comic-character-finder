function SuperheroDetails({ character }) {
    
    return (
        <div>
            <div className="row mt-5">
                <div className="col container">
                    <div className="row">
                        <p className="col text-start mb-0 fs-5">{character.real_name}</p>
                    </div>
                    <div className="row">
                        <h1 className="col text-start display-1 fw-bold">{character.name}</h1>
                    </div>
                    <div className="row">
                        <p className="text-start fst-italic mb-0">{character.info.first_appearance}</p>
                    </div>
                    <div className="row ">
                        <p className="col text-start">{character.description}</p>
                    </div>
                </div>
                <div className="col">
                    <img className="img-fluid" src={character.img} alt={character.name} />
                </div>
            </div>
        </div>
    );
}

export default SuperheroDetails