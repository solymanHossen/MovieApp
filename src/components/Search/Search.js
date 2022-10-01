import React from 'react';
import { useGolobalContext } from '../Context';

const Search = () => {
    const {query,setQuery,isError}=useGolobalContext();
 
      
    return (
        <div>
             <section className="search">
        <h3>Search your movie</h3>
        <form action="#" onSubmit={(e)=>e.preventDefault()}>
        <input type="text"
           placeholder='search here'
           value={query}
           onChange={(e)=>setQuery(e.target.value)}
           />
           </form>
           <div className="card-error">
            <p>{isError.show && isError.msg}</p>
           </div>
    </section>
        </div>
    );
};

export default Search;