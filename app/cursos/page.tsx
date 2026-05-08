import CursosItem from "@/components/CursosItem";
import { getCursos } from "./actions";
import Link from "next/link";

export default async function CursosPage() {
    const cursos = await getCursos();

    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 p-8">

            <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
                Lista de Cursos
            </h1>

            <div className="bg-white rounded-2xl shadow-lg p-6 w-full overflow-auto">
                <ul className="space-y-5 text-blue-200 ">
                    {cursos.map((curso) => (
                        <CursosItem
                            key={curso.id}
                            nome={curso.nome}
                            id={curso.id}
                        />
                    ))}
                </ul>
            </div>

            <Link
                href="/curso/cadastro"
                className="px-5 py-2 bg-blue-600 text-white mt-5 rounded-lg hover:bg-blue-700"
            >
                Cadastrar cursos
            </Link>
        </div>
    );
}