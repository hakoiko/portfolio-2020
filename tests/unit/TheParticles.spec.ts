import { mount, shallowMount, Wrapper } from '@vue/test-utils'
import { Component, Prop, Vue } from 'vue-property-decorator'
import TheParticles from '@/components/TheParticles.vue'

describe('TheParticles.vue', () => {
  let wrapper: Wrapper<Vue>
  beforeEach(() => {
    wrapper = mount(TheParticles, {
      propsData: {
        particles: [
          { shape: 3, cls: '-tri', count: 10, rotate: true },
          { shape: 4, cls: '-sqr', count: 10, rotate: true }
        ]
      }
    })
  })
  test('setup correctly', () => {
    expect(true).toBe(true)
    expect(wrapper.exists()).toBe(true)
  })

  test('generate particles correctly', () => {
    expect(wrapper.findAll('.-tri').length).toBe(10)

    expect(wrapper.findAll('.-sqr').length).toBe(10)
  })
})
