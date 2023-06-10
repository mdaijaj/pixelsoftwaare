import { useState } from "react";
import useSortableData from "./sorting"

const Table=({ data })=>{
  const { items, requestSort, sortConfig } = useSortableData(data);
  
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return(
    <>
    <table>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort('city')}
                className={getClassNamesFor('city')}
              >
                City
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('state')}
                className={getClassNamesFor('state')}
              >
                State
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('country')}
                className={getClassNamesFor('country')}
              >
                Country
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('postcode')}
                className={getClassNamesFor('postcode')}
              >
                Post Code
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('phone')}
                className={getClassNamesFor('phone')}
              >
                Number
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('first')}
                className={getClassNamesFor('first')}
              >
                First Name
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('last')}
                className={getClassNamesFor('last')}
              >
                Last Name
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('email')}
                className={getClassNamesFor('email')}
              >
                Email
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('gender')}
                className={getClassNamesFor('gender')}
              >
                Gender
              </button>
            </th>
            
            <th>
              <button
                type="button"
                onClick={() => requestSort('latitude')}
                className={getClassNamesFor('latitude')}
              >
                Latitude
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('longitude')}
                className={getClassNamesFor('longitude')}
              >
                Longitude
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('longitude')}
                className={getClassNamesFor('longitude')}
              >
                Profile Photo
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {console.log("kikkkk", items)}
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.city}</td>
              <td>{item.state}</td>
              <td>{item.country}</td>
              <td>{item.postcode}</td>
              <td>{item.phone}</td>
              <td>{item.first}</td>
              <td>{item.last}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.latitude}</td>
              <td>{item.longitude}</td>
              <td>{item.profile_photo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table;