import React from "react"
import { View, Text } from "react-native"

export default CustomText = props => {
  const font_name = props.style.fontWeight ? "Kufam-SemiBold" : "Kufam"
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: font_name, fontWeight: "normal" }]}>
      {props.children}
    </Text>
  )
}
