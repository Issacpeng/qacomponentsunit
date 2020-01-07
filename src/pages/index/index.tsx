import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Button type='primary'>主操作按钮</Button>
        <Button type='primary' loading>Loading</Button>
        <Button type='primary' disabled>不可操作</Button>
        <View className='secondary'>
          <Button type='secondary'>次操作按钮</Button>
          <Button type='secondary' loading>Loading</Button>
          <Button type='secondary' disabled>不可操作</Button>
        </View>
        <View className='plain'>
          <Button type='secondary'plain>次次要操作按钮</Button>
          <Button type='secondary' plain loading>Loading</Button>
          <Button type='secondary' disabled>不可操作</Button>
        </View>
        <View className='full'>
          <Button type='primary'>主操作按钮</Button>
          <Button type='secondary' size='full' plain>次次要操作按钮</Button>
          <Button type='secondary' size='full' plain loading>Loading</Button>
          <Button type='secondary' size='full' disabled>不可操作</Button>
        </View>
        <View className='small'>
          <Button type='primary' size='small' plain>按钮</Button>
          <Button type='secondary' size='small' plain>按钮</Button>
          <Button type='secondary' size='small' disabled>按钮</Button>
        </View>
        <View className='small'>
          <Button type='primary' size='small' plain loading>Loading</Button>
          <Button type='secondary' size='small' plain loading>Loading</Button>
          <Button type='secondary' size='small' plain loading>Loading</Button>
        </View>
        <View className='small'>
          <Button type='primary' size='small' disabled>按钮</Button>
          <Button type='secondary' size='small' disabled>按钮</Button>
          <Button type='secondary' size='small' disabled>按钮</Button>
        </View>
        <View className='small'>
          <Button type='primary' size='small' circle plain>按钮</Button>
          <Button type='secondary' size='small' circle plain>按钮</Button>
          <Button type='secondary' size='small' circle disabled>按钮</Button>
        </View>
        <View className='small'>
          <Button type='primary' size='small' circle plain loading>Loading</Button>
          <Button type='secondary' size='small' circle plain loading>Loading</Button>
          <Button type='secondary' size='small' circle plain loading>Loading</Button>
        </View>
        <View className='small'>
          <Button type='primary' size='small' circle disabled>按钮</Button>
          <Button type='secondary' size='small' circle disabled>按钮</Button>
          <Button type='secondary' size='small' circle disabled>按钮</Button>
        </View>
      </View>
    )
  }
}
