"use server";

export async function loginAction(email: string, password: string) {
    const response = await fetch("http://localhost:8080/funcionarios/login", {
        method: "POST",
        headers:{
            "Content-type": "application/json",    
        },
        body: JSON.stringify({
            email,
            senha: password,
        }),
    }).then(res => res.json());

    console.log(response);
}
