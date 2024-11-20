# react-native-shrinkable-margin #
<img src="https://postimg.cc/cvkCSnvR" width="762" height="772">

easy responsive react-native UI with static margin


### Installation ###
```bash
npm i react-native-shrinkable-margin
or
yarn add react-native-shrinkable-margin
```

### Usage ###
```js
// import
import ShrinkableMargin from 'react-native-shrinkable-margin'

// use
<ShrinkableMargin height={100} width={100} />
```

|                 pro                       | react-native-reanimated | react-native-gesture-handler |
| -------------------------------------- | ----------------------- | ---------------------------- |
| react-native-reanimated-carousel < v3  | <2.7.0                  | \*                           |
| react-native-reanimated-carousel >= v3 | >=2.7.0                 | \*                           |

### Example ###
```js
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import ShrinkableMargin from 'react-native-shrinkable-margin'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextCard>card1</TextCard>
      <ShrinkableMargin height={100} />
      <TextCard>card2</TextCard>
      <ShrinkableMargin height={100} />
      <TextCard>card3</TextCard>
      <ShrinkableMargin height={100} />
      <TextCard>card4</TextCard>
    </SafeAreaView>
  )
}

const TextCard = ({children}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#FF702A',
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 32,
  },
})

export default App
```
