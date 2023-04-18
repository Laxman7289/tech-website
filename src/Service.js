import React from 'react'
import Adata from './Adata'
import Card from './Card'

function Service() {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Our service</h1>
      </div>
      <div className='container-fluid  mb-5 '>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row'>
              <div className='col-md-10 col-10 mx-auto'>
                <div className='row gy-4'>
                  {
                    Adata.map((val, ind) => {
                      return <Card
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                      />
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service