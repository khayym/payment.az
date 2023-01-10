import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from '../components/drawer'
import { Notification } from "../screens/notfication";
import { drawerOptions } from "./styles";
import TabNavigator from "./TabNavigation";
import NewsExplorer from '../screens/news/NewsExplorer';
import Support from "../screens/drawer-screens/support";
import Chat from "../screens/chat";
import LightConsumption from "../screens/drawer-screens/light-consumption";
import AddApartmentScreen from "../screens/drawer-screens/add-apartment";

const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={CustomDrawer} screenOptions={drawerOptions}>
            <Drawer.Screen name="Feed" component={TabNavigator} options={{ sceneContainerStyle: { backgroundColor: '#fff' } }} />
            <Drawer.Screen name="NotificationScreen" component={Notification} />
            <Drawer.Screen name="LightConsumption" component={LightConsumption} />
            <Drawer.Screen name="AddApartment" component={AddApartmentScreen} />
            <Drawer.Screen name="NewsExplorer" component={NewsExplorer} />
            <Drawer.Screen name="Support" component={Support} />
            <Drawer.Screen name="Chat" component={Chat} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation

// 