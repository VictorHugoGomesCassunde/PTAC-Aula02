import { useState } from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    return(
        <main>
            <form>
                <label htmlFor="nome">Nome :</label>
                <input
                type="text"
                name=""
                id=""
                onChange={(event)=> setNome(event.target.value)}
                />
                <br></br>
                {nome}
<br></br>

                     <label htmlFor="telefone">Telefone :</label>
                   <input
                     type=""
                      name=""
                      id=""
                      onChange={(event) => setTelefone(event.target.value)}
            /><br></br>
            {telefone}
<br></br>

                <button type="submit">mandar</button>


            </form>
        </main>
    );
}
