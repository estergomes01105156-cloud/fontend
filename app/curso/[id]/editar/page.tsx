"use client";
import { Curso } from "@/interfaces/cursos";
import { useParams } from "next/navigation";
import { useEffect, useState, SubmitEvent } from "react";
import { getCurso, updateCurso } from "../actions";
import { useRouter } from "next/navigation";

export default function CursoPage() {
    const { id } = useParams();
    const [curso, setCurso] = useState({} as Curso);
    const router = useRouter();

    useEffect(() => {
        getCurso(Number(id)).then((response) => setCurso(response));
    }, [id]);

    function handleChange(value: string|number, key: keyof Curso) {
        setCurso(oldState => ({...oldState, [key]: value}));
    }

    async function handleUpdate(e: SubmitEvent) {
        e.preventDefault();
        const response = await updateCurso(Number(id), curso);

        if (response) {
            alert(response);
            return;
        }
        router.push("/cursos");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-300">
            <form className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md" onSubmit={handleUpdate}>
                <input value={curso.nome} onChange={(e) => handleChange(e.target.value, "nome")} />
                <input value={curso.professor} onChange={(e) => handleChange(e.target.value, "professor")} />
                <input value={curso.cargaHoraria} type="number" onChange={(e) => handleChange(Number(e.target.value), "cargaHoraria")} />
                <input value={curso.descricao} onChange={(e) => handleChange(e.target.value, "descricao")} />
                <button className="bg-blue-300 ">Salvar</button>
            </form>
        </div>
    );
}
