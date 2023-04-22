import React from 'react'
// import Webimg from '../src/Webimg/img1.png'
import { NavLink } from 'react-bootstrap'
import './Button.css'

function Card(props) {
    return (
        <>

            <div className='col-md-4 col-10 mx-auto '>
                <div className="card" >
                    <img src={props.imgsrc} className="card-img-top" alt="Webimg" height="400px"   />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="" className="btn btn-primary nav-link">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card