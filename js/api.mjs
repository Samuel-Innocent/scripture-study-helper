const BIBLE_API_URL = "https://bible-api.com/";

export async function getPassage(reference, translation = "kjv") {
  const url = `${BIBLE_API_URL}${encodeURIComponent(reference)}?translation=${translation}`;
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "That passage could not be found.");
  }

  return data;
}