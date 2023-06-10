import { useState } from "react";
import Table from "./table"

const SearchList= (props)=> {
  const [query, setQuery] = useState("");
  const keys = ["first", "last", "email", "phone", "city", "state"];

  const search = (data) => {
    console.log("data", data)
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

return (
  <div className="app">
    <h1> Search data here..</h1>
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    {<Table data={search(props.comments)} />}
  </div>
);
}

export default SearchList;