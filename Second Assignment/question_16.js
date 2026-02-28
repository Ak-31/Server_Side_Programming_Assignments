//Q16. Write a JavaScript function to parse an URL.


function parseURL(urlString) {
  try {
    const url = new URL(urlString);

    return {
      protocol: url.protocol,
      host: url.host,
      hostname: url.hostname, 
      port: url.port,
      pathname: url.pathname, 
      search: url.search,     
      hash: url.hash,         
      origin: url.origin,
      params: Object.fromEntries(url.searchParams)
    };
  } catch (error) {
    console.error("Invalid URL provided:", error.message);
    return null;
  }
}
