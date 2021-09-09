import React, { useState } from 'react';

function FetchApi(){
      const [data,setData]=useState([]);

        const apiGet = ()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {console.log(json)
            setData(json);
        })
    }
    return(
        <div>
        My Api<br/>

        <button onClick={apiGet}>Fetch API</button>
        <br/>
        {/* <pre>{JSON.stringify(data,null,2)}</pre>; */}

        <div>
            <ul>
                {data.map(item=>
                    <li key={item.id}>{item.userId},{item.title}</li>
                    )}
            </ul>
        </div>
        </div>
    )
}

export default FetchApi;