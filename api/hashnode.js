// api/hashnode.js

export default async function handler(request, response) {
  // Sadece POST isteklerine izin ver
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  // Güvenli bir şekilde Vercel'deki ortam değişkenini al
  const token = process.env.HASHNODE_API_TOKEN;
  const host = process.env.VITE_HASHNODE_HOST;

  if (!token || !host) {
    return response.status(500).json({ message: 'Server configuration error' });
  }

  const query = `
    query Publication {
      publication(host: "${host}") {
        posts(first: 3) {
          edges {
            node {
              title
              brief
              url
              coverImage { url }
              publishedAt
            }
          }
        }
      }
    }
  `;

  try {
    const hashnodeResponse = await fetch('https://gql.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
    });

    const data = await hashnodeResponse.json();

    if (data.errors) {
      throw new Error(data.errors.map(e => e.message).join(', '));
    }

    // Başarılı olursa, veriyi tarayıcıya geri gönder
    return response.status(200).json(data);

  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
}
