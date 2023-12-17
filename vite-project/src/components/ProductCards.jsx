import React from 'react'

function ProductCards(props) {
    return (
        <>
            <div className='col col-md-3 m-2'>
                <div className="card " style={{ width: "17rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.category}</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductCards;
