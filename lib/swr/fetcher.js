export const fetcher = (url) => fetch(url).then((res) => res.json());

export const fetchWithArg = async (url, data) => {
  const response = await fetch(url, {
    data,
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json(data);
};
