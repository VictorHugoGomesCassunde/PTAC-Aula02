import { useState } from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState();
    const [listaContatos, setContatos] = useState([]);
    const [regiao, setRegiao] = useState();

       const registrar = (event) => {
        event.preventDefault();
            alert("Oxi?, tá certo mesmo");
            setContatos([...listaContatos,
            {
            nomeSalvo: nome,
            telefoneSalvo: telefone,
            regiaoSalvo: regiao,
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
         <label htmlFor="regiao">Região :</label>
<input
type=""
name=""
id=""
value={regiao}
onChange={(event) => setRegiao(event.target.value)}
/>



                <button type="submit">mandar</button>


            </form>
        </main>
    );
}
