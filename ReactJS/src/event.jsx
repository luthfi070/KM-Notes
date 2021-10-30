function Event(){

    // arrow function
    const panggil = () => {
        alert("terpanggil");
    }

    return(
        <div>
            <h1>Ini Event</h1>

            Kalo dulu, di html + javascript, gini

            {/* <button onclick={functionLama()}>Submit</button> */}

            kalo sekarang, gini

            <button onClick={() => panggil()}>Submit</button>
        </div>
    )
}

export default Event;