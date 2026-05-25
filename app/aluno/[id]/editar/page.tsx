/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { Aluno } from "@/interfaces/alunos";
import { useParams } from "next/navigation";
import { useEffect, useState, SubmitEvent } from "react";
import { getAluno, matriculas, updateAluno } from "../actions";
import { useRouter } from "next/navigation";
import { Curso } from "@/interfaces/cursos";
import { getCursos } from "@/app/cursos/actions";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";


export default function AlunoPage() {
    const { id } = useParams();
    const [aluno, setAluno] = useState({} as Aluno);
    const [cursos, setCursos] = useState([] as Curso[]);
    const [matriculado, setMatriculado] = useState([] as Curso[]);
    const [naoMatriculado, setNaoMatriculado] = useState([] as Curso[]);
    const router = useRouter();


    useEffect(() => {
        getAluno(Number(id)).then((response) => setAluno(response));
        getCursos().then((response) => setCursos(response));
    }, [id]);


    useEffect(() => {
        if (aluno.cursos) {
            const matriculadoTemp = [] as Curso[];
            const naoMatriculadoTemp = [] as Curso[];


            for (const curso of cursos) {
                if(aluno.cursos.find((c) => c.id === curso.id)) {
                    matriculadoTemp.push(curso);
                } else {
                    naoMatriculadoTemp.push(curso);
                }
            }
            setMatriculado(matriculadoTemp);
            setNaoMatriculado(naoMatriculadoTemp);
        }
    }, [cursos,aluno]);


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


    function matricular(curso: Curso) {
        setMatriculado((oldState) => [...oldState, curso]);
        setNaoMatriculado((oldState) => oldState.filter((c) => c.id !== curso.id));
    }


    function desmatricular(curso: Curso) {
        setNaoMatriculado((oldState) => [...oldState, curso]);
        setMatriculado((oldState) => oldState.filter((c) => c.id !== curso.id));
    }

    async function saveMatriculas() {
        const response = await matriculas(Number(id), matriculado, naoMatriculado);

        if (response) {
            alert(response);
            return;
        }

        router.push(`/aluno/${id}`);
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col gap-10">
            <form className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md" onSubmit={handleUpdate}>
                <input value={aluno.nome} onChange={(e) => handleChange(e.target.value, "nome")} />
                <input value={aluno.cpf} type="number" onChange={(e) => handleChange(Number(e.target.value), "cpf")} />
                <input value={aluno.idade} type="number" onChange={(e) => handleChange(Number(e.target.value), "idade")} />
                <input value={aluno.email} onChange={(e) => handleChange(e.target.value, "email")} />
            </form>
            <div className="bg-white rounded-x1 h-[20%] overflow-y-auto flex text-black p-4 gap-1 w-[50%]">
                <ul className="w-[50%]">
                    <h2 className="text-center">Matriculado</h2>
                    {matriculado.map(curso => (
                        <li key={curso.id} className="underline w-full px-2">
                        {curso.nome}
                        <button onClick={() => desmatricular(curso)}>
                            <ArrowRightCircle />
                        </button>
                    </li>
                    ))}
                </ul>


                <ul className="w-px h-full bg-black"/>


                <ul className="w-[50%] text-end">
                    <h2 className="text-center">Não matriculado</h2>
                    {naoMatriculado.map(curso => (
                        <li key={curso.id} className="underline w-full px-2">
                            <button onClick={() => matricular(curso)}>
                                <ArrowLeftCircle />
                            </button>
                            {curso.nome}
                        </li>
                    ))}
                </ul>
            </div>
           <button className="bg-white text-black rounded-xl px-10 py-2 cursor-pointer"
           onClick={saveMatriculas}
            >
                Salvar matriculas
            </button>
        </div>
    );
}


