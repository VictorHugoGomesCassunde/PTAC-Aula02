import { useState } from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState();
    const [listaContatos, setContatos] = useState([]);
    const [cpf, setCpf] = useState();
    
       const registrar = (event) => {
        event.preventDefault();
            alert("ta certo, eu que fiz");
            setContatos([...listaContatos,
            {
            nomeSalvo: nome,
            telefoneSalvo: telefone,
            cpfSalvo: cpf,
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
         <label htmlFor="cpf">Cpf :</label>
<input
type=""
name=""
id=""
value={cpf}
onChange={(event) => setCpf(event.target.value)}
/>



                <button type="submit">mandar</button>


            </form>
        </main>
    );
}
