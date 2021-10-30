function Home(){
    // array
    let data = ['home', 'rumah', 'bumi'];

    // array of object
    let dataPerson = [
    {
        nama: "luthfi",
        umur: 20
    },
    {
        nama: "lutvfi",
        umur: 22
    }
    ];

    // One Line JSX
    const heading = <h1>Hello World</h1>;

    // Multi Line JSX
    const list = (
        <div>
            <li>123</li>
            <li>345</li>
        </div>
    )

    // Return digunakna untuk menampilkan ke Browser
    // BUKAN untuk masukin function, variable, fetch api
    return(
        <div>
        <div>
            <h1>Functional Component</h1>
        </div>
        <div>
            <h2>Penjelasan If dan Ternary</h2>
            {
                // Ternary ( If pendek )
                // statement ? true  : false

                // If Biasa
                // if(statement){
                    //kalo true
                // }else{
                //     //kalo false
                // }
            }
            ===========

            <h2>Penjelasan .map menggunakan Conditional Rendering</h2>

            {
                data.map((item) => {
                    let output = '';
                    if(item == 'rumah'){
                        output = <h1>ada rumah</h1>
                    }else{
                        output = <h1>ga ada rumah</h1>
                    }

                    return(
                        <div>
                        <li>{output}</li>
                        <li>{item}</li>
                        </div>
                    )
                })
            }

            ===========
        <h2>Penjelasan .map kedua</h2>
        <p>
            Object tidak bisa dilakukan .map, harus menggunaka
            array of object 
        </p>
        {
            dataPerson.map((item) => {
                return(
                    <div>
                        <li>{item.nama}</li>
                    </div>
                )
            })
        }
        </div>
        </div>
    )
}

export default Home;