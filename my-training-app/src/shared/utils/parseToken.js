function parseToken(token) {
  if (token) {
    const splittedToken = token.split(".");
    const chunkWithData = splittedToken[1];
    return JSON.parse(atob(chunkWithData));
  }
  return null;
}

export { parseToken };
