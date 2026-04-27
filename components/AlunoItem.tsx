"use client";

import { User } from "lucide-react";
import  Link  from "next/link";
import { Trash } from "lucide-react";
import { deleteAluno } from "@/app/alunos/actions";

interface Props {
    id: number;
    nome: string;
}



export default function AlunoItem({ id, nome }: Props){
    return (
        <div className="flex gap-3">
        <Link href={`/aluno/${id}`}>
            <li className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:scale-[1.01] transition">
            <User size={20} className="text-blue-300" />
            <span className="text-blue-300">{nome}</span>
            </li>
        </Link>
        <button className="text-blue-300" onClick={() => deleteAluno(id)}>
            <Trash/>
        </button>
        </div>
    );
}