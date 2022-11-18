export async function getCustomers() {
  const url = `${import.meta.env.VITE_API_URL}/customers`;

  const response = await fetch(url);
  const result = await response.json();

  return result;
}
