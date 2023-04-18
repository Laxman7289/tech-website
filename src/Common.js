import React from 'react'
import { Link } from 'react-router-dom'

function Common (props)  {
    return (
        <>
            <section id='header' className='main' >
                <div className='container-fluid '>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>

                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1   '>
                                    <h1>
                                        {props.name} with <strong className='brand-name' style={{ color: 'aqua' }}>Technical Guru</strong>
                                    </h1>
                                    <h2>
                                        We are the team of talented developer making websites
                                    </h2>
                                    <div className='mt-3'>
                                        <Link to={props.visit} className='btn-started'>
                                            {props.btname}
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={props.imgsrc} className='img-fluid animated' alt='Commonimg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
      )
}

export default Common