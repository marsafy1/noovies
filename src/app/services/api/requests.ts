const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;

// Params type
export type QueryParams = {
  [key: string]: string | number | undefined;
};

// Generic GET request
export async function get(endpoint: string, params?: QueryParams) {
  const url = new URL(`${BASE_URL}/${endpoint}`);

  if (params) {
    // Add query parameters to the URL
    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined) {
        url.searchParams.append(key, String(params[key]));
      }
    });
  }
  const response = await fetch(url.href, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`GET request failed: ${response.status}`);
  }

  return response.json();
}

// // Generic POST request
// export async function post(endpoint, data = {}) {
//   const response = await fetch(`${BASE_URL}/${endpoint}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });

//   if (!response.ok) {
//     throw new Error(`POST request failed: ${response.status}`);
//   }

//   return response.json();
// }

// // Generic PUT request
// export async function put(endpoint, data = {}) {
//   const response = await fetch(`${BASE_URL}/${endpoint}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });

//   if (!response.ok) {
//     throw new Error(`PUT request failed: ${response.status}`);
//   }

//   return response.json();
// }

// // Generic DELETE request
// export async function remove(endpoint) {
//   const response = await fetch(`${BASE_URL}/${endpoint}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     throw new Error(`DELETE request failed: ${response.status}`);
//   }

//   return response.json();
// }
