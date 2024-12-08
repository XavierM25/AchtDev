export async function registerUser(userData) {
    const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al registrar el usuario');
    }

    return await response.json();
}

export async function loginUser(credentials) {
    const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include', // To include cookies
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al iniciar sesión');
    }

    return await response.json();
}