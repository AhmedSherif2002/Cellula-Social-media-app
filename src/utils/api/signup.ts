export const signup = async (name: string, email: string, password: string) => {
    const res = await fetch(`http://127.0.0.1:8000/sign-up/?name=${name}&email=${email}&password=${password}`, {
    // const res = await fetch(`http://127.0.0.1:8000/get-all-posts`, {
        method: "POST",
    }) 
    if(!res.ok) throw new Error("Signup failed");
    const data = await res.json();
    return data.id;
}