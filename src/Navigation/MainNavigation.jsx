import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import Main from "../screens/Main";
import Form from "../screens/Form";

export default MainNavigation = () => {
    const MainStack = createStackNavigator();

    return (
        <NavigationContainer>
            <MainStack.Navigator >
                <MainStack.Screen name="contact" component={Main} />
                <MainStack.Screen name="form" component={Form} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}