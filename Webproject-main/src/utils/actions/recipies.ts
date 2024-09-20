import type { IRecipeResponse, Metadata } from '../types/Recipes'
export const fetchRecipes = async (payload: Metadata) => {
  try {
    const response = await fetch(
      `https://tasty.p.rapidapi.com/recipes/list?${serializeSearchPayload(payload)}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '306b526c4bmshae7ed9c856b39bbp179ab8jsnbdfb9e895519',
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
      }
    )
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}

const serializeSearchPayload = (payload: Metadata): string => {
  let query = ''
  Object.keys(payload).forEach((key) => {
    query += `${key}=${payload[key]}&`
  })
  return query
}
