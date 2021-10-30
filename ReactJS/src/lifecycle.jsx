import { useEffect, useState } from "react";

function Lifecycle(){
    const [nama, setNama] = useState([]);
    const [umur, setUmur] = useState();

    function manggilaAPI(){
        fetch("https://digimon-api.vercel.app/api/digimon")
        .then((response) => response.json())
        .then((result) => setNama([result]))
    }

    useEffect(() => {
        console.log("halo dari useffect")
        manggilaAPI();
    }, [])

    console.log(nama);
    
    return(
        <div>
        <h1>Ini Lifecycle</h1>
        {/* <input type="text" onChange={(event) => setUmur(event.target.value)}/> */}
        </div>
    )
}

export default Lifecycle;