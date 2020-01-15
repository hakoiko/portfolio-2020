import { CreateElement, VNode } from 'vue'

const SvgShapes: { [key: string]: Function } = {
  triangle: (h: CreateElement, cls: string): VNode => {
    return (
      <svg width='16px' height='16px' viewBox='0 0 16 16' version='1.1'>
        <g class={['triangle', cls]}>
          <polygon points='10 3 17 15 3 15'></polygon>
        </g>
      </svg>
    )
  },

  rectangle: (h: CreateElement, cls: string): VNode => {
    return (
      <svg width='16px' height='16px' viewBox='0 0 16 16' version='1.1'>
        <g class={['rectangle', cls]}>
          <rect x='3' y='3' width='14' height='14'></rect>
        </g>
      </svg>
    )
  },

  pentagon: (h: CreateElement, cls: string): VNode => {
    return (
      <svg width='16px' height='16px' viewBox='0 0 16 16' version='1.1'>
        <g class={['pentagon', cls]}>
          <polygon id='Polygon' points='10 3 16.6573956 7.83688104 14.1144968 15.663119 5.88550323 15.663119 3.34260439 7.83688104'></polygon>
        </g>
      </svg>
    )
  },

  hexagon: (h: CreateElement, cls: string): VNode => {
    return (
      <svg width='16px' height='16px' viewBox='0 0 16 16' version='1.1'>
        <g class={['hexagon', cls]}>
          <polygon points='9.99519053 2.5 16.4903811 6.25 16.4903811 13.75 9.99519053 17.5 3.5 13.75 3.5 6.25'></polygon>
        </g>
      </svg>
    )
  }
}

export default SvgShapes
