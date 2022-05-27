const BE_URL = import.meta.env.VITE_BE_URL || ''

export const client = (fetcher) => {
  return {
    async request({ query, variables }) {
      const body = JSON.stringify({
        query,
        variables: variables ? variables : {},
      })
  
      const response = await fetcher(`${BE_URL}/graphql`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      })
  
      const result = await response.json()
      if (response.ok && !result.errors) {
        return result.data
      } else {
        console.error(
          new Error(
            `[GraphQL Error]: Failed to make the request: ${JSON.stringify(
              result
            )}`
          )
        );
        throw new Error(`[GraphQL Error]: ${JSON.stringify(result)}`)
      }
    },
  }
}
