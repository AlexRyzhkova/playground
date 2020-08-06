export async function getJoke() {
  const response = await fetch(
    // "https://official-joke-api.appspot.com/random_joke"
    "https://api.jikan.moe/v3/search/anime?q=naruto"
  );

  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data.results[0];
}
