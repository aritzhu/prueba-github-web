
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/About';
import Home from '../screens/Home';
import Contact from '../screens/Contact';

const { width, height } = Dimensions.get("window");

// Definir el stack fuera de la función para evitar recreaciones innecesarias
const Stack = createNativeStackNavigator();

const MovileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="1" component={About} />
            <Stack.Screen name="2" component={Home} />
            <Stack.Screen name="3" component={Contact} />
        </Stack.Navigator>
    );
};

export default MovileStack;