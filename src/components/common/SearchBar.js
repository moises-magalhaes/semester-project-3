import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

function SearchBar(props) {
    //  const { onSearch } = props; 
     const [search, setSearch] = useState("");

    const handleInput = (e) => setSearch(e.target.value);
    console.log(handleInput)
        // setSearch(product);

    // const handleEnterkeyPressed = (e) => {
    //     if (e.key === "Enter") {
    //         onSearch(search);
    //     }
    // };

    return (
        <div className="box">
           <input className="input"
            onChange={handleInput} 
            // onKeyPress={handleEnterkeyPressed} 
            value={search} 
            type="text" 
            placeholder="Search" />

            <Button>search</Button>
        </div>
    )
}

export default SearchBar
