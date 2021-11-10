import BetOptionsGenerator from '../optionsGenerators/Generator'

const OptionsGenerator = new BetOptionsGenerator()

const DIGIT_ARRAY = ['万位', '千位', '百位', '十位', '个位']
const DA_XIAO_DAN_XHUANG_ARRAY = ['大', '小', '单', '双']

export default {
  'yixing-dingweidan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY)
  },
  'wuxing-zhixuan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY)
  },
  'sixing-zhixuan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(1))
  },
  'qiansan-zhixuan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(2))
  },
  'zhongsan-zhixuan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(1, 4))
  },
  'housan-zhixuan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(2))
  },
  'erxing-zhixuan-houerfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(3))
  },
  'erxing-zhixuan-qianerfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(0, 2))
  },
  'renxuan-renxuan2-zhixuanfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY)
  },
  'renxuan-renxuan3-zhixuanfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY)
  },
  'renxuan-renxuan4-zhixuanfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY)
  },
  'renxuan-renxuan2-zhixuandanshi': {},
  'renxuan-renxuan3-zhixuandanshi': {},
  'renxuan-renxuan4-zhixuandanshi': {},
  'renxuan-renxuan2-zuxuandanshi': {},
  'renxuan-renxuan3-zusandanshi': {},
  'renxuan-renxuan3-zuliudanshi': {},
  'renxuan-renxuan3-hunhezuxuan': {},
  'renxuan-renxuan2-zhixuanhezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 18, false), true)
  },
  'renxuan-renxuan3-zhixuanhezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 27, false), true)
  },
  'renxuan-renxuan2-zuxuanhezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 17, false), true)
  },
  'renxuan-renxuan3-zuxuanhezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 26, false), true)
  },
  'renxuan-renxuan2-zuxuanfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'renxuan-renxuan3-zusanfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'renxuan-renxuan4-zuxuan24': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'renxuan-renxuan4-zuxuan12': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['二重号', '单号'])
  },
  'renxuan-renxuan4-zuxuan6': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['二重号'])
  },
  'renxuan-renxuan4-zuxuan4': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['三重号', '单号'])
  },
  'renxuan-renxuan3-zuliufushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'hezhi-wuxing-hezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 45, false), true)
  },
  'wuxing-zhixuan-danshi': {},
  'sixing-zhixuan-danshi': {},
  'qiansan-zhixuan-danshi': {},
  'housan-zhixuan-danshi': {},
  'erxing-zhixuan-houerdanshi': {},
  'erxing-zhixuan-qianerdanshi': {},
  'qiansan-zuxuan-zusandanshi': {},
  'zhongsan-zuxuan-zusandanshi': {},
  'housan-zuxuan-zusandanshi': {},
  'qiansan-zuxuan-zuliudanshi': {},
  'zhongsan-zuxuan-zuliudanshi': {},
  'housan-zuxuan-zuliudanshi': {},
  'erxing-zuxuan-houerdanshi': {},
  'erxing-zuxuan-qianerdanshi': {},
  'qiansan-zuxuan-hunhezuxuan': {},
  'zhongsan-zuxuan-hunhezuxuan': {},
  'housan-zuxuan-hunhezuxuan': {},
  'zhongsan-zhixuan-danshi': {},
  'wuxing-zhixuan-zuhe': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY)
  },
  'sixing-zhixuan-zuhe': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(1))
  },
  'qiansan-zhixuan-zuhe': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(2))
  },
  'zhongsan-zhixuan-zuhe': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(3))
  },
  'housan-zhixuan-zuhe': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(4))
  },
  'wuxing-zuxuan-zuxuan120': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'sixing-zuxuan-zuxuan24': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'erxing-zuxuan-houerfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'erxing-zuxuan-qianerfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'budingwei-sanxingbudingwei-housanermabudingwei': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'budingwei-sanxingbudingwei-qiansanermabudingwei': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'budingwei-sanxingbudingwei-zhongsanermabudingwei': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'budingwei-sixingbudingwei-sixingermabudingwei': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'budingwei-wuxingbudingwei-wuxingermabudingwei': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'budingwei-wuxingbudingwei-wuxingsanmabudingwei': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'wuxing-zuxuan-zuxuan60': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['二重号', '单号'])
  },
  'sixing-zuxuan-zuxuan12': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['二重号', '单号'])
  },
  'wuxing-zuxuan-zuxuan30': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['二重号', '单号'])
  },
  'wuxing-zuxuan-zuxuan20': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['三重号', '单号'])
  },
  'sixing-zuxuan-zuxuan4': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['三重号', '单号'])
  },
  'wuxing-zuxuan-zuxuan10': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['三重号', '单号'])
  },
  'wuxing-zuxuan-zuxuan5': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['三重号', '二重号'])
  },
  'sixing-zuxuan-zuxuan6': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['四重号', '单号'])
  },
  'qiansan-zuxuan-zusan': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['二重号'])
  },
  'zhongsan-zuxuan-zusan': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'housan-zuxuan-zusan': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'qiansan-zuxuan-zuliu': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'zhongsan-zuxuan-zuliu': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'housan-zuxuan-zuliu': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'qiansan-zhixuan-hezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 27, false), true)
  },
  'zhongsan-zhixuan-hezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 27, false), true)
  },
  'housan-zhixuan-hezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 27, false), true)
  },
  'erxing-zhixuan-houerhezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 18, false), true)
  },
  'erxing-zhixuan-qianerhezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 18, false), true)
  },
  'qiansan-zuxuan-hezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 26, false), true)
  },
  'zhongsan-zuxuan-hezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 26, false), true)
  },
  'housan-zuxuan-hezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 26, false), true)
  },
  'erxing-zuxuan-houerhezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 17, false), true)
  },
  'erxing-zuxuan-qianerhezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 17, false), true)
  },
  'qiansan-zhixuan-kuadu': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'zhongsan-zhixuan-kuadu': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'housan-zhixuan-kuadu': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'erxing-zhixuan-houerkuadu': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'erxing-zhixuan-qianerkuadu': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'quwei-teshu-yifanfengshun': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'quwei-teshu-haoshichengshuang': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'quwei-teshu-sanxingbaoxi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'quwei-teshu-sijifacai': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'budingwei-sanxingbudingwei-housanyimabudingwei': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'budingwei-sanxingbudingwei-qiansanyimabudingwei': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'budingwei-sanxingbudingwei-zhongsanyimabudingwei': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'budingwei-sixingbudingwei-sixingyimabudingwei': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'qiansan-zuxuan-baodan': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false))
  },
  'zhongsan-zuxuan-baodan': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false))
  },
  'housan-zuxuan-baodan': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false))
  },
  'erxing-zuxuan-houerbaodan': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false))
  },
  'erxing-zuxuan-qianerbaodan': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false))
  },
  'qiansan-qita-hezhiweishu': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'zhongsan-qita-hezhiweishu': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'housan-qita-hezhiweishu': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'qiansan-qita-teshuhaoma': {
    betOptions: OptionsGenerator.generatBetOptions(['豹子', '顺子', '对子'])
  },
  'zhongsan-qita-teshuhaoma': {
    betOptions: OptionsGenerator.generatBetOptions(['豹子', '顺子', '对子'])
  },
  'housan-qita-teshuhaoma': {
    betOptions: OptionsGenerator.generatBetOptions(['豹子', '顺子', '对子'])
  },
  'hezhi-wuxing-bsde': {
    betOptions: OptionsGenerator.generatBetOptions(DA_XIAO_DAN_XHUANG_ARRAY)
  },
  'daxiaodanshuang-daxiaodanshuang-houerdaxiaodanshuang': {
    betOptions: OptionsGenerator.generatBetOptions(DA_XIAO_DAN_XHUANG_ARRAY, false, DIGIT_ARRAY.slice(3))
  },
  'daxiaodanshuang-daxiaodanshuang-housandaxiaodanshuang': {
    betOptions: OptionsGenerator.generatBetOptions(DA_XIAO_DAN_XHUANG_ARRAY, false, DIGIT_ARRAY.slice(2))
  },
  'daxiaodanshuang-daxiaodanshuang-qianerdaxiaodanshuang': {
    betOptions: OptionsGenerator.generatBetOptions(DA_XIAO_DAN_XHUANG_ARRAY, false, DIGIT_ARRAY.slice(0, 2))
  },
  'daxiaodanshuang-daxiaodanshuang-qiansandaxiaodanshuang': {
    betOptions: OptionsGenerator.generatBetOptions(DA_XIAO_DAN_XHUANG_ARRAY, false, DIGIT_ARRAY.slice(0, 3))
  },
  'daxiaodanshuang-daxiaodanshuang-zhongsandaxiaodanshuang': {
    betOptions: OptionsGenerator.generatBetOptions(DA_XIAO_DAN_XHUANG_ARRAY, false, DIGIT_ARRAY.slice(1, 4))
  },
  'quwei-quwei-wumaquweisanxing': {},
  'quwei-quwei-simaquweisanxing': {},
  'quwei-quwei-housanquweierxing': {},
  'quwei-quwei-qiansanquweierxing': {},
  'quwei-quwei-zhongsanquweierxing': {},
  'quwei-qujian-wumaqujiansanxing': {},
  'quwei-qujian-simaqujiansanxing': {},
  'quwei-qujian-housanqujianerxing': {},
  'quwei-qujian-qiansanqujianerxing': {},
  'quwei-qujian-zhongsanqujianerxing': {},
  'longhu-longhuhe-wanqian': {},
  'longhu-longhuhe-wanbai': {},
  'longhu-longhuhe-wanshi': {},
  'longhu-longhuhe-wange': {},
  'longhu-longhuhe-qianbai': {},
  'longhu-longhuhe-qianshi': {},
  'longhu-longhuhe-qiange': {},
  'longhu-longhuhe-baishi': {},
  'longhu-longhuhe-baige': {},
  'longhu-longhuhe-shige': {}
}
