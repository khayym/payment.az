import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from '../components/drawer'
import { Notfication } from "../screens/notfication";
import { drawerOptins } from "./styles";
import TabNavigator from "./TabNavigation";
import NewsExplorer from '../screens/news/NewsExplorer';

const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={CustomDrawer} screenOptions={drawerOptins}>
            <Drawer.Screen name="Feed" component={TabNavigator} options={{ sceneContainerStyle: { backgroundColor: '#fff' } }} />
            <Drawer.Screen name="NotficationScreen" component={Notfication} />
            <Drawer.Screen name="NewsExplorer" component={NewsExplorer} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation

// 