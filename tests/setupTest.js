import matchers from '@testing-library/svelte/matchers'
import { expect, vi } from 'vitest'
import { readable } from 'svelte/store'

// Add custom matchers
expect.extend(matchers)

// Mock SvelteKit runtime module $app/environment
vi.mock('$app/environment', () => ({
  browser: false,
  dev: true,
  prerendering: false
}))

// Mock SvelteKit runtime module $app/navigation
vi.mock('$app/navigation', () => ({
  afterNavigate: () => {},
  beforeNavigate: () => {},
  disableScrollHandling: () => {},
  goto: () => Promise.resolve(),
  invalidate: () => Promise.resolve(),
  invalidateAll: () => Promise.resolve(),
  prefetch: () => Promise.resolve(),
  prefetchRoutes: () => Promise.resolve()
}))

// Mock SvelteKit runtime module $app/stores
vi.mock('$app/stores', () => {
  const getStores = () => {
    const navigating = readable(null);
    const page = readable({
      url: new URL('http://localhost'),
      params: {},
      routeId: null,
      status: 200,
      error: null,
      data: {}
    })
    const updated = { subscribe: readable(false).subscribe, check: () => false }

    return { navigating, page, updated }
  }

  const page = {
    subscribe(fn) {
      return getStores().page.subscribe(fn)
    }
  }
  const navigating = {
    subscribe(fn) {
      return getStores().navigating.subscribe(fn)
    }
  }
  const updated = {
    subscribe(fn) {
      return getStores().updated.subscribe(fn)
    },
    check: () => false
  }

  return {
    getStores,
    navigating,
    page,
    updated
  }
})