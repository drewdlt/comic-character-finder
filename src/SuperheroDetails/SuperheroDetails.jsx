import { useEffect } from "react";

function SuperheroDetails({ character }) {
    
    return (
        <div>
            <div className="row mt-5">
                <div className="col container d-flex flex-column">
                    <div>
                        <div className="row">
                            <p className="col text-start fs-5 center-on-mobile">
                                <img 
                                    className="publisher-logo mx-auto mb-1 d-md-none d-block" 
                                    src={`src/assets/${character.info.publisher}.png`} 
                                    alt={character.info.publisher} 
                                />
                                {character.real_name}
                                <img 
                                    className="publisher-logo ms-3 mb-1 d-none d-md-inline" 
                                    src={`src/assets/${character.info.publisher}.png`} 
                                    alt={character.info.publisher} 
                                />
                            </p>
                        </div>
                        <div className="row">
                            <h1 className="col text-start display-1 fw-bold center-on-mobile">
                                {character.name}
                            </h1>
                        </div>
                    </div>
                    <div className="row d-md-none">
                        <img src={character.img} alt={character.name} />
                    </div>
                    <div>
                    <div className="row">
                        <p className="text-start center-on-mobile">First Appearance: <a href={character.info.first_appearance_link} target="_blank" className="link-underline link-opacity-100 link-underline-opacity-0 link-underline-opacity-100-hover link-offset-2-hover link-light fst-italic fs-5">{character.info.first_appearance}</a></p>
                    </div>
                    <div className="row">
                        <p className="text-start center-on-mobile">Total Appearances: <span className="fs-5">{character.info.total_appearances.toLocaleString()}</span></p>
                    </div>
                    <div className="row d-flex">
                       <span className="text-start fs-5 w-auto">
                            {character.info.creators.length === 1 
                            ? 'Creator:' 
                            : 'Creators:'}
                        </span>
                       {character.info.creators.map(creator => {
                            if (creator === character.info.creators[(character.info.creators.length - 1)]) {
                                return <span className="fs-5 w-auto" key={creator}>{creator}</span>
                            }
                            return <span className="fs-5 w-auto" key={creator}>{creator},</span>
                       })}
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