import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import About from '../screens/About';
import Home from '../screens/Home';
import Contact from '../screens/Contact';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="home" component={Home} options={{
            title: "home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            )
          }}/>
        <Tab.Screen name="about" component={About} options={{
          title: "about",
          tabBarIcon: ({ color, size }) => (
          <Ionicons name="location-outline" size={size} color={color} />
          )
          }}/>
        <Tab.Screen name="cotact" component={Contact} options={{
          title: "cotact",
          tabBarIcon: ({ color, size }) => (
          <Ionicons name="clipboard-outline" size={size} color={color} />
          )
          }}/>
      </Tab.Navigator>
  );
};

export default function App() {
  return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>


  );
}
