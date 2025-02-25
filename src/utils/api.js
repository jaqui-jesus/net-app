const API_URL = 'https://jsonplaceholder.typicode.com';

export default async function getPost() {
    const response = await fetch(`${API_URL}/posts`);
    return response.json();
}

export async function getUser() {
    const response = await fetch(`${API_URL}/users/${user_id}`);
    return response.json();
}