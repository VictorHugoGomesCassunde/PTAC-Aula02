import { useState } from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState();
    const [listaContatos, setContatos] = useState([]);

      const registrar = (event) => {
        event.preventDefault();
            alert("Tudo errado, seu burro");
            setContatos([...listaContatos,
            {
            nomeSalvo: nome,
            telefoneSalvo: telefone
            }
            ]);
            console.table(listaContatos);

      }
    return(
        <main>
            <form onSubmit={registrar}>
                <label htmlFor="nome">Nome :</label>
                <input
                type="text"
                name=""
                id=""
                value={nome}
                onChange={(event)=> setNome(event.target.value)}
                />
                <br></br>
                
<br></br>

                     <label htmlFor="telefone">Telefone :</label>
                   <input
                     type=""
                      name=""
                      id=""
                      value={telefone}
                      onChange={(event) => setTelefone(event.target.value)}
            /><br></br>
            
<br></br>

                <button type="submit">mandar</button>


            </form>
        </main>
    );
}
