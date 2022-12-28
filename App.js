import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DrawerOption from './components/DrawerOption';
import TabsNavigator from './screens/TabNavigator';

const TABS = ['Tab Navigation']

export default function App() {
  const [activeScreen, setActiveScreen] = useState('');
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  // Animated values
  const verticalOffset = useRef(new Animated.Value(0)).current;
  const horizontalOffset = useRef(new Animated.Value(0)).current;
  const rotation = useRef(new Animated.Value(0)).current;
  const drawerHorizontalOffset = useRef(new Animated.Value(0)).current;

  /**
   * Toggle animation values
   * to hide or display drawer
   * smoothly
   */
  const startAnimation = () => {
    Animated.timing(verticalOffset, {
      toValue: isDrawerVisible ? 0 : 30,
      duration: 300,
      useNativeDriver: true
    })
      .start()

    Animated.timing(horizontalOffset, {
      toValue: isDrawerVisible ? 0 : 200,
      duration: 300,
      useNativeDriver: true
    })
      .start()

    Animated.timing(rotation, {
      toValue: isDrawerVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: true
    })
      .start()

    Animated.timing(drawerHorizontalOffset, {
      toValue: isDrawerVisible ? 0 : 70,
      duration: 300,
      useNativeDriver: true
    })
      .start()
  }

  const toggleDrawerVisibility = () => {
    startAnimation();
    setIsDrawerVisible(!isDrawerVisible);
  }

  const handleDrawerOptionClick = (screenName) => {
    setActiveScreen(screenName);
    toggleDrawerVisibility();
  }


  const rotationValue = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-10deg']
  })

  const renderScreen = () => {
    /**
     * Since the drawer was made from scratch,
     * it's not attached to any navigation stack
     * so we need to render screens conditionally
     */
    switch(activeScreen){
      case (TABS[0]):
        return (
          <TabsNavigator />
        )
    }
  }

  return (
    <Animated.View style={[styles.container,
      {
        transform: [
          {translateY: verticalOffset},
        ]
      }
    ]}>
      <View style={styles.drawerContainer}>
        <View>
          {TABS.map(tab => (
            <DrawerOption
              key={tab}
              handleClick={handleDrawerOptionClick}
              optionName={tab}
              activeScreen={activeScreen}
            />
          ))}
        </View>
      </View>

      <Animated.View style={[
        styles.screensContainer,
        {
          // Animated style properties
          transform: [
            { translateY: verticalOffset },
            { translateX: horizontalOffset },
            { rotate: rotationValue }
          ]
        }
      ]}>
        <TouchableOpacity style={styles.burgerMenuContainer} onPress={toggleDrawerVisibility}>
          <Image resizeMode='contain' style={styles.burgerMenu} source={require('./assets/burger-menu.png')} />
        </TouchableOpacity>
        {renderScreen()}

      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  drawerContainer: { 
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 15,
    backgroundColor: '#190854',
    flex: 1,
    width: '100%',
    height: '110%',
    borderRadius: 20
  },
  screensContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 50,
    borderRadius: 20
  },
  burgerMenuContainer: {
    paddingLeft: 20
  },
  burgerMenu: {
    maxHeight: 30,
    maxWidth: 30
  }
});
