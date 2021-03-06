import { OptionSection } from './Interfases'

export default class {
  public getAllCombination(data: Array<string>, len: number, isRepeat: boolean = false): any {
    return data.reduce(
      (acc, element: string, index: number) =>
        acc.concat(len === 1 ? element : this.getAllCombination(data.slice(index + (isRepeat ? 0 : 1)), len - 1, isRepeat).reduce((a: Array<string>, str: string) => a.concat([element + str]), [])),
      []
    )
  }

  public getAllCombinationK3(num: number): Array<string> {
    return this.getAllCombination(['1', '2', '3', '4', '5', '6'], num, false)
  }

  public getAllPailieZuHeBuTongHao(data: any, len: number, numArr: any, prefix: string | number, isRepeat: boolean = false) {
    for (var i = 0; i < data.length; i++) {
      if (len === 1) {
        numArr.push(prefix + data[i])
      } else {
        var newData = data.concat()
        if (!isRepeat) newData.splice(0, i + 1)
        this.getAllPailieZuHeBuTongHao(newData, len - 1, numArr, prefix + data[i], isRepeat)
      }
    }
  }

  public getAllPailieZuheListWrapper(selected: string[], limit: number): number {
    var arr = selected
    if (arr.length < limit) return 0
    var numArr: string[] = []
    this.getAllPailieZuHeBuTongHao(arr, limit, numArr, '', false)
    return numArr.length
  }

  /** 获取几个数字的所有排列组合(胆码和拖码) */
  public getAllPailieZuheList_danmatuoma(danma: string[], tuoma: string[], len: number): number {
    if (!danma.length) return 0
    if (!tuoma.length) return 0
    if (danma.length + tuoma.length < len) return 0
    var arr: string[] = []
    this.getAllPailieZuHeBuTongHao(tuoma, len - danma.length, arr, '', false)
    return arr.length
  }

  public getAllPailieZuheGuanYa(data: any, len: number, numArr: any, arr: any) {
    for (var i = 0; i < data[len].length; i++) {
      if (len === 0) {
        if (!arr.includes(data[len][i])) numArr.push(arr.concat([data[len][i]]))
      } else {
        if (arr.includes(data[len][i])) {
          continue
        } else {
          this.getAllPailieZuheGuanYa(data, len - 1, numArr, arr.concat([data[len][i]]))
        }
      }
    }
  }

  public zhixuanBetCountWrapper(betOptions: any, num: number, digit: number): number {
    if (num === 0) return 0
    var arr: string[][] = []
    betOptions.forEach(function (element: OptionSection) {
      arr.push(element.selected)
    })
    var numArr: string[] = []
    this.getAllPailieZuheList_mgszbcf(arr, digit, numArr, '')
    return numArr.length
  }

  /** 获取几个数字的所有排列组合(每个数字不重复) */
  public getAllPailieZuheList_mgszbcf(data: string[][], index: number, numArr: string[], str: string) {
    for (var i = 0; i < data[index].length; i++) {
      if (str.includes(data[index][i])) {
        continue
      } else {
        var newStr = str + data[index][i]
        if (index === 0) {
          numArr.push(newStr)
        } else {
          this.getAllPailieZuheList_mgszbcf(data, index - 1, numArr, newStr + ',')
        }
      }
    }
  }

  public guanYaJunWrapper(betOptions: any, num: number): number {
    var arr: [] | any = []
    betOptions.forEach(function (element: OptionSection) {
      arr.push(element.selected)
    })
    var numArr: [] | [string[]] = []
    this.getAllPailieZuheGuanYa(arr, num, numArr, [])
    return numArr.length
  }

  /** 获取几个数组的任选排列 */
  public getPailieByRenxuanArr(sumArr: Array<any>, len: number) {
    if (sumArr.length < len) return 0
    var numArr: Array<string> = []
    this.getAllPailieZuheListNew(sumArr, len, numArr, '', false)
    var total = 0
    numArr.forEach(function (element) {
      var arr = element.split(',')
      var sum = 1
      arr.forEach(function (element) {
        sum = sum * Number(element)
      })
      total = total + sum
    })
    return total
  }

  /** 获取几个数字的所有排列组合 */
  public getAllPailieZuheListNew(data: Array<string>, len: number, numArr: Array<string>, str: string, isRepeat = false) {
    for (var i = 0; i < data.length; i++) {
      if (len === 1) {
        numArr.push(str + data[i])
      } else {
        var newData = data.concat()
        if (!isRepeat) newData.splice(0, i + 1)
        this.getAllPailieZuheListNew(newData, len - 1, numArr, str + data[i] + ',', isRepeat)
      }
    }
  }
}
