"use client";
import { Curso } from "@/interfaces/cursos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCurso } from "./actions";
import { PenBox } from "lucide-react";
import Link from "next/link";

export default function CursoPage() {
    const { id } = useParams();
    const [curso, setCurso] = useState({} as Curso);

    useEffect(() => {
        getCurso(Number(id)).then((response) => setCurso(response));
    }, [id]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-300">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <div className="flex gap-2">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Detalhes do Curso
                </h1>
                <Link href={`/curso/${id}/editar`}>
                    <PenBox />
                </Link>
                </div>

                <div className="space-y-4">
                    <div className="bg-blue-300 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">Nome</p>
                        <p className="text-lg font-semibold text-gray-700">
                            {curso.nome || "Carregando..."}
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
}
