export function getSubdomainUrl(subdomain: string, path: string = '') {
  const isDev = process.env.NODE_ENV === 'development';
  // In development, Next.js runs on localhost:3000 by default.
  // We construct the URL with the subdomain and append the path.
  if (isDev) {
    return `http://${subdomain}.localhost:3000${path}`;
  }
  
  // In production, we use the actual domain.
  return `https://${subdomain}.portotree.com${path}`;
}

export function getMainUrl(path: string = '') {
  const isDev = process.env.NODE_ENV === 'development';
  if (isDev) {
    return `http://localhost:3000${path}`;
  }
  return `https://portotree.com${path}`;
}
