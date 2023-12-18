import React, { useState } from 'react'


function ProductCards(props) {

    const [count, setCount] = useState(0);

    const increaseValue = () => setCount(count + 1);
    const decreaseValue = () => setCount(count - 1);
    // if (count > 0) {
    //     setCount(count - 1);
    // }

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
                    <div className="container text-center">

                        {
                            (count > 0) ? (
                                <>
                                    <button className="btn btn-dark mx-1" onClick={increaseValue}>+</button>
                                    <span>{count}</span>
                                    <button className="btn btn-dark mx-1" onClick={decreaseValue}>-</button>
                                </>
                            ) : (<button className="btn btn-dark mx-1" onClick={increaseValue}>Add to cart</button>)
                        }

                    </div>
                </div>

            </div>


        </>
    )
}

export default ProductCards;
