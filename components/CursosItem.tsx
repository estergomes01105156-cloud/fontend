"use client";

import { deleteCurso } from "@/app/cursos/actions";
import { Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
    id: number;
    nome: string;
}

export default function CursoItem({ id, nome }: Props) {

    const router = useRouter();

    async function handleDelete() {
        await deleteCurso(id);
        router.refresh();
    }

    return (
        <div className="flex gap-1">
            <Link href={`/curso/${id}`}>
                <li>{nome}</li>
            </Link>

            <button className="text-blue-200" onClick={handleDelete}>
                <Trash />
            </button>
        </div>
    );
}