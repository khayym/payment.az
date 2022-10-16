import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from '../components/drawer'
import { Notfication } from "../screens/notfication";
import { drawerOptins } from "./styles";
import TabNavigator from "./TabNavigation";
const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={CustomDrawer} screenOptions={drawerOptins}>
            <Drawer.Screen name="Feed" component={TabNavigator} />
            <Drawer.Screen name="NotficationScreen" component={Notfication} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation