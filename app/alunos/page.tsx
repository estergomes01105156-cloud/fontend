import { User } from "lucide-react";

export default function AlunosPage() {
    return (
        <div className="w-full min-h-screen flex justify-center items-start bg-red-100 p-8">

            <div className="w-full max-w-2xl">

                <h1 className="text-4xl font-bold mb-8 text-center text-red-700">
                    Lista de Alunos
                </h1>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <ul className="space-y-3">

                        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition">
                            <User size={20} className="text-red-500" />
                            <span className="text-red-300">Aluno 1</span>
                        </li>

                        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition">
                            <User size={20} className="text-red-500" />
                            <span className="text-red-300">Aluno 2</span>
                        </li>

                        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition">
                            <User size={20} className="text-red-500" />
                            <span className="text-red-300">Aluno 3</span>
                        </li>

                    </ul>
                </div>

            </div>

        </div>
    );
}


// a div maior tem que o cupar toda a largura e toda a altura da tela
//centralizar tudo na horizontal
//título deve ser grande e em negrito e na parte superior da tela
//a div menor deve ser branca, com bordas arredondadas e uma sombra leve
//tudo deve ter um espeçamento interno
