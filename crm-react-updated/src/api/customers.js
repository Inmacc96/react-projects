export async function getCustomers() {
  const url = `${import.meta.env.VITE_API_URL}/customers`;

  const response = await fetch(url);
  const result = await response.json();

  return result;
}

export async function addCustomer(data) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/customers`;

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await response.json();
  } catch (err) {
    console.log(err);
  }
}
