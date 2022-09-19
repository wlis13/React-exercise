const searchApi = async (name) => {
  const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${ name }`)
  const responseApi = await url.json()
  return responseApi;
}

export default searchApi;