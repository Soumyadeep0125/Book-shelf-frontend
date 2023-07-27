import React from 'react'

const Offers = () => {
  return (
    <div>
        <div class="text-center mb-3">
    <h2 class="section-title px-5"><span class="px-2"> SPECALS OFFERS !!</span></h2>
        </div>
      <div class="container-fluid offer pt-5">
        <div class="row px-xl-5">
            <div class="col-md-6 pb-4">
                <div class="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                    <img src="img/offer-1.png" alt=""/>
                    <div class="position-relative" style={{zIndex: "1"}}>
                        <h5 class="text-uppercase text-primary mb-3">20% off the all order</h5>
                        <h1 class="mb-4 font-weight-semi-bold">Spring Collection</h1>
                        <a href="" class="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                        <a href="" class="btn btn-outline-primary py-md-2 px-md-3">view offer</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 pb-4">
                <div class="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                    <img src="img/offer-2.png" alt=""/>
                    <div class="position-relative" style={{zIndex: "1"}}>
                        <h5 class="text-uppercase text-primary mb-3">20% off the all order</h5>
                        <h1 class="mb-4 font-weight-semi-bold">Winter Collection</h1>
                        <a href="" class="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                        <a href="" class="btn btn-outline-primary py-md-2 px-md-3">view offer</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Offers
