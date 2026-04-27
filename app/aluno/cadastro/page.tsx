"use client";

import { SubmitEvent, useState } from "react";
import { createAluno } from "./actions";
import { useRouter } from "next/navigation";

export default function AlunoCadastroPage() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter();

    async function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        const response = await createAluno({
            nome,
            idade: Number(idade),
            cpf: Number(cpf),
            email,
        });

        if (!response) {
            setNome("");
            setIdade("");
            setCpf("");
            setEmail("");
            router.push("/alunos")
            return;
        }

        alert(response);
    }

    return( 
    <div className="w-screen h-screen flex flex-col items-center">
        <h1 className="mt-10 mb-50 text-5xl font-bold">Cadastrar Aluno</h1>
        <form className="px-10 py-5 flex flex-col gap-2 bg-white rounded-lg" onSubmit={handleSubmit}>
            <input className="border border-black text-black pl-1" type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
            <input className="border border-black text-black pl-1" type="number" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)}/>
            <input className="border border-black text-black pl-1" type="number" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
            <input className="border border-black text-black pl-1" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Cadastrar</button>
        </form>
    </div>
    );
}