import React from "react";
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  View,
  Platform,
  SafeAreaView,
} from "react-native";



interface AppSafeAreaViewProps {
  children: React.ReactNode;
  Icon?: boolean;
}
const { width, height } = Dimensions.get("window");

const AppSafeAreaView: React.FC<AppSafeAreaViewProps> = ({
  children,
 
}) => {
 
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
    
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  
  content: {
    flex: 1,
  },
  
});

export default AppSafeAreaView;
