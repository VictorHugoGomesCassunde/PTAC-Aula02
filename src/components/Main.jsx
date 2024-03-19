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

                <label htmlFor="telefone">Telefone</label>
                <inport
                type="tel"
                id="telefone"
                value={telefone}
                onChange={(event)=> setTelefone(event.target.value)}
                />

                <button type="submit">Enviar</button>


            </form>
        </maina>
    );
}