import { useState } from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    return(
        <maina>
            <form>
                <label htmlFor="nome">Nome</label>
                <input
                type="text"
                name=""
                id=""
                onChange={(event)=> setNome(event.target.value)}
                />
<br></br>
<br></br>
<br></br>
                     <label htmlFor="telefone">Telefone:</label>
                   <input
                     type=""
                      name=""
                      id=""
                      onChange={(event) => setTelefone(event.target.value)}
            />

                <button type="submit">testar</button>


            </form>
        </maina>
    );
}
