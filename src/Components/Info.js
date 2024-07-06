import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Info = ({user}) => {
    const {id} = useParams()
  return (
      <div className='info'>
          {user.map((val) => {
              if (val.id == id) {
                  return (
                    <div key={val.id}>
                      <div>Name: {val.name}</div>
                      <div>Email: {val.email}</div>
                      <br />
                      <div>Address: </div>
                      {val.address ? (
                        <>
                          <div>Street: {val.address.street}</div>
                          <div>Suite: {val.address.suite}</div>
                          <div>City: {val.address.city}</div>
                          <div>Zipcode: {val.address.zipcode}</div>
                          <br />
                          <div>Phone: {val.phone}</div>
                        </>
                      ) : (
                        <>
                          <Link to="/save">
                            <button>Edit</button>
                          </Link>
                        </>
                      )}
                    </div>
                  );
              }
            return ''
        })}
      </div>

  )
}

export default Info