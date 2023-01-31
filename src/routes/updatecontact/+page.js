export async function load(page) {
  return {
    params: page.url.searchParams
  }
}
