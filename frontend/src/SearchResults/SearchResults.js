import React from 'react'

const SearchResults = () => {
  return (
    <div>
      <h1>Search Results for: Puss in Boots</h1>
      <div>
        <h3>Puss In Boots: The Last Wish</h3>
        <img src={process.env.PUBLIC_URL + '/Images/pussinboots.jpg'}/>
      </div>
    </div>
  )
}

export default SearchResults