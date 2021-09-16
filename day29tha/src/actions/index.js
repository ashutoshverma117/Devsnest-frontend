const updatePlace =(place)=>{
    return {
        type: "UPDATE_PLACE",
        payload: place,
    };
};

const updatePlaceData=(place)=>{
    return(dispatch)=>{
    fetch(`https://api.weatherapi.com/v1/current.json?key=06c51334044f4ddba98191926211808&q=${place}`)
    .then((res)=> res.json())
    .then((data)=>{
    dispatch({
        type: "UPDATE_PLACE_DATA",
        payload: data,
       });
    }); 
    };
};


const toggleTheme=()=>{
    return {
        type: "TOGGLE_THEME",
    };
};

export {updatePlace,updatePlaceData,toggleTheme};