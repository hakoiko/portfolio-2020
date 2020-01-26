/**
  * 최대값 - 최소값 사이의 숫자를 리턴합니다.
  * @function
  * @param  {Number} min 최대값
  * @param  {Number} max 최소값
  * @param  {Number} precesion 소수점단위
  * @return {Number} 최대 - 최소 사이의 정수
  */
export function RandomNum (
  min = 0,
  max = 100,
  precesion = 0
): number {
  let range = max - min
  let n = Math.random() * range + min
  return Number(n.toFixed(precesion))
}

export const a = function () {

}

/**
   * transform에 대해서만 merging 해 Object 형태로 반환하는 역할을 합니다.
   * CSS Transform은 하나의 속성에 여라기지 transofrm function이 할당됩니다.
   * 브라우저에서는 css transform 속성을 merging 하지 않습니다. 그래서 이런 절차가 필요합니다.
   *
   * @param {Object} transform { rotate: 30, translateX: -10 } 등의 transform object를 받습니다.
   * @return {Object} { transform: rotate(30deg) translateX(-10px) }의 형태로 반환합니다.
   */
export function GetTransformStyle (
  transform = {}
): { [key: string]: string } {
  let styleArr: string[] = []
  const units: { [key: string]: string } = {
    'rotate': 'deg',
    'translateX': 'px',
    'translateY': 'px'
  }
  for (let [key, val] of Object.entries(transform)) {
    if (units[key] && val !== 0) {
      val = val + units[key]
    }
    styleArr.push(`${key}(${val})`)
  }

  return {
    transform: styleArr.join(' ')
  }
}

/**
 * 지정한 val을 가진 Array를 리턴합니다.
 * @function
 * @param {number} length Array의 길이
 * @param {*} val 지정할 value
 */
export function ArrayFrom (
  length: number = 1,
  val: any = null
): any[] {
  return Array.from(Array(length)).map(item => val)
}
