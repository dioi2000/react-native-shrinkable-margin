import {
  View,
  ViewStyle,
} from 'react-native';


export type ShrinkableMarginProps = {
  width?: number
  height?: number
  minRatio?: number
  style?: ViewStyle
}

const ShrinkableMargin = ({
  width = 0,
  height = 0,
  minRatio = 2,
  style,
  ...props
}: ShrinkableMarginProps) => {
  const viewStyle = {
    maxWidth: width,
    minWidth: width / minRatio,
    maxHeight: height,
    minHeight: height / minRatio,
    flexGrow: 1,
  } as ViewStyle

  return (
    <View
      style={[viewStyle, style]}
      {...props}
    >
    </View>
  );
}

export default ShrinkableMargin;