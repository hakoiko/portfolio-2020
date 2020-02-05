import { mount, shallowMount, Wrapper } from '@vue/test-utils'
import { Component, Prop, Vue } from 'vue-property-decorator'
import TheParticles from '@/components/TheParticles.vue'

describe('TheParticles.vue', () => {
  /** set base wrapper comp with particles */
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

  test('파티클이 정상적으로 생성됨', () => {
    expect(wrapper.findAll('.-tri').length).toBe(10)
    expect(wrapper.findAll('.-sqr').length).toBe(10)
  })
})
