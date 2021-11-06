import ruleBasic from '../src/rules/ruleBasic'
import ruleK3 from '../src/rules/ruleK3'
import ruleSSC from '../src/rules/ruleSSC'
import rulePK10 from '../src/rules/rulePK10'
import rule11x5 from '../src/rules/rule11x5'

import cloneDeep from 'lodash.clonedeep'

enum LOTTOERY_TYPE {
  时时彩 = 'ssc', // 时时彩
  快三 = 'k3', // 快三
  PK10 = 'pk10',
  十一选五 = 'l115'
}
export default class LotteryLib {
  public currentLotteryType: any = ''
  public currentRule: { [propName: string]: any } = {}

  constructor(category: string) {
    switch (category) {
      case LOTTOERY_TYPE.快三:
        this.currentLotteryType = ruleK3
        break
      case LOTTOERY_TYPE.PK10:
        this.currentLotteryType = rulePK10
        break
      case LOTTOERY_TYPE.十一选五:
        this.currentLotteryType = rule11x5
        break
      default:
        this.currentLotteryType = ruleSSC
    }
  }

  /**
   * 切换玩法
   *
   * @param {string} ruleName 玩法名称
   * @memberof Lottery
   */
  setRule(ruleName: string) {
    this.currentRule = Object.assign(cloneDeep(ruleBasic), cloneDeep(this.currentLotteryType[ruleName]))
  }
}
