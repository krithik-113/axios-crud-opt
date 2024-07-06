import React from 'react'

const Save = () => {
  return (
      <div className="save">
          
      <div>
        <label htmlFor="street">Street</label>
        <input id="street" type="text" placeholder="Enter Street" />
          </div>
          
      <div>
        <label htmlFor="suite">Suite</label>
        <input id="suite" type="text" placeholder="Enter Suite" />
          </div>
          
      <div>
        <label htmlFor="city">City</label>
        <input id="city" type="text" placeholder="Enter City" />
          </div>
          
      <div>
        <label htmlFor="Zipcode">Zipcode</label>
        <input id="Zipcode" type="number" placeholder="Enter Zipcode" />
          </div>
          
      <div>
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="number" placeholder="Enter phone no." />
          </div>
          
    </div>
  );
}

export default Save