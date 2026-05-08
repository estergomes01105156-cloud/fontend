"use client";
import { Aluno } from "@/interfaces/alunos";
import { useParams } from "next/navigation";
import { useEffect, useState, SubmitEvent } from "react";
import { getAluno, updateAluno } from "../actions";
import { useRouter } from "next/navigation";


export default function AlunoPage() {
    const { id } = useParams();
    const [aluno, setAluno] = useState({} as Aluno);
    const router = useRouter();


    useEffect(() => {
        getAluno(Number(id)).then((response) => setAluno(response));
    }, [id]);


    function handleChange(value: string|number, key: keyof Aluno) {
        setAluno(oldState => ({...oldState, [key]: value}));
    }


    async function handleUpdate(e: SubmitEvent) {
        e.preventDefault();
        const response = await updateAluno(Number(id), aluno);
   
        if (response) {
            alert(response);
            return;
        }
        router.push("/alunos");
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-200">
            <form className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md" onSubmit={handleUpdate}>
                <input value={aluno.nome} onChange={(e) => handleChange(e.target.value, "nome")} />
                <input value={aluno.cpf} type="number" onChange={(e) => handleChange(Number(e.target.value), "cpf")} />
                <input value={aluno.idade} type="number" onChange={(e) => handleChange(Number(e.target.value), "idade")} />
                <input value={aluno.email} onChange={(e) => handleChange(e.target.value, "email")} />
                <button className=""></button>
            </form>
        </div>
    );
}

