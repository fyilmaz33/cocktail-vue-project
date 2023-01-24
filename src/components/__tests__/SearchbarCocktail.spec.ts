import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SearchbarCocktail from '../SearchbarCocktail.vue'
import RandomListCocktails from '../RandomListCocktails.vue'

describe('RandomListCocktails', () => {
  it('renders properly', () => {
    const wrapper = mount(RandomListCocktails, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
