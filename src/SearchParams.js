import React, {useState} from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA"); //[current state, setLocation updates the state]
  //this is called a hook, they all start with use
  //never put them in if statements or loops
  

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="Location" onChange={e => setLocation(e.target.value)} />
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
