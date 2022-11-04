import {beforeEach, describe, expect, it} from 'vitest'
import { render } from '@testing-library/svelte'
import HomePage from '../src/routes/+page.svelte'

describe("Home Page", () => {

    it('Should show the proper title when displayed', () => {
        const {getByText} = render(HomePage)

        expect(() => getByText(/Cape Central High - Class of 1973/i)).not.toThrow()
    })
})