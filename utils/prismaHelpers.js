export async function follow(data) {
  const response = await fetch('/api/follow', {
    method: 'PUT',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export async function unFollow(data) {
  const response = await fetch('/api/unFollow', {
    method: 'PUT',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
