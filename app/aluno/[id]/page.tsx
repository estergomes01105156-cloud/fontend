"use client";
import { Aluno } from "@/interfaces/alunos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAluno } from "./actions";



export default function AlunoPage() {
    const { id } = useParams();
    const [aluno, setAluno] = useState({} as Aluno);

    useEffect(() => {
        getAluno(Number(id)).then((response) => setAluno(response));
    }, [id]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">
                    Detalhes do Aluno
                </h1>

                <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-blue-500">Nome</p>
                        <p className="text-lg font-semibold text-blue-700">
                            {aluno.nome || "Carregando..."}
                        </p>
                    </div>


                </div>
            </div>

        </div>
    );
}