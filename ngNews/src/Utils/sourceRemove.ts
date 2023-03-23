export function removeSource(text: string, author: string): string {
  text = text.replace("- " + author, "");
  return text;
}
