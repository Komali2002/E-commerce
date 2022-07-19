import React from 'react'
function Footer(){
    return(
        <footer className='d-flex justify-content-around bg-dark text-white py-5'>
            {/*address1*/ }
            <div className="address-1">
                <h4>KPHB</h4>
                <h4>Hyderabad</h4>
                <h4>50000585</h4>

            </div>
            {/*address2*/ }
            <div className="address-1">
                <h4>Ameerpet</h4>
                <h4>Hyderabad</h4>
                <h4>50000585</h4>

            </div>
            {/* contact info */}
            <div className="contact-info">
                <h4>komali@gmail.com</h4>
                <h4>999999p</h4>
                

            </div>
        </footer>
    )
}
export default Footer