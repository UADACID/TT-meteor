import { StackNavigator } from 'react-navigation'

import Questions from './screens/questions'
import Answers from './screens/answers'


export default AppNavigation = StackNavigator({
  Questions : {
    screen : Questions,
    navigationOptions : {
      title : 'Questions'
    }
  },
  Answers : {
    screen : Answers
  }
})
