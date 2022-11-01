import { createNativeStackNavigator } from "@react-navigation/native-stack";
import News from ".";
import ReadNews from "./news-read";


const Stack = createNativeStackNavigator();

const NewsExplorer = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="NewsScreen"
                component={News}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ReadNewsScreen"
                component={ReadNews}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default NewsExplorer;