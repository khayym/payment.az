import { View, Text } from 'react-native'
import React from 'react'



// const cons = {
//     'HomeScreen': {
//         display: 'flex',
//         title: 'Dashboard'
//     },
//     'CloudScreen': {
//         title: 'Uup Cloud Storage',
//         display: 'flex',
//         leftItem: <MoreIcon />,
//         leftItemPress: (nav) => nav.bottomSheetController(0)
//     },
//     'FavoriteScreen': {
//         title: 'Favorites',
//         display: 'flex',
//     },
//     'MediaScreen': {
//         title: 'Images',
//         display: 'flex',
//     },
//     'ProfileScreen': {
//         title: 'Account',
//         display: 'flex',
//         leftItem: <SettingsIcon />,

//         leftItemPress: (nav) => nav.navigate("SettingsScreen")
//     },
//     'Details': {
//         title: 'Details',
//         display: 'flex',
//         leftItem: <BackIcon />,
//     },
//     'QRScreen': {
//         title: 'Scan QR code',
//         display: 'flex',
//         rightItem: <BackIcon />,
//         rightItemPress: (nav) => nav.pop(),
//     },
//     'SignInScreen': {
//         display: 'none'
//     },
//     UpdateScreen: {
//         title: 'Upload Progress',
//         display: 'flex',
//         rightItem: <BackIcon />,
//         rightItemPress: (nav) => nav.pop()
//     },
//     SettingsScreen: {
//         title: 'Settings',
//         display: 'flex',
//         rightItem: <BackIcon />,
//         leftItem: <ScanIcon />,
//         leftItemPress: (nav) => nav.navigate("QRScreen"),
//         rightItemPress: (nav) => nav.pop(),
//     },
//     FAQScreen: {
//         display: 'flex',
//         title: 'FAQ',
//         rightItem: <BackIcon />,
//         rightItemPress: (nav) => nav.pop(),
//     },
//     TermsAndCondition: {
//         display: 'flex',
//         title: 'Terms & Conditions',
//         rightItem: <BackIcon />,
//         rightItemPress: (nav) => nav.pop(),
//     },
//     // DetailsScreen: {
//     //     display: 'flex',
//     //     title: 'Details',
//     //     rightItem: <BackIcon />,
//     //     rightItemPress: (nav) => nav.pop(),
//     // }
// }

export const Header = ({ children }) => {
    console.log(children)

    return (
        <View style={{ borderWidth: 1, }}>
            <Text>{children}</Text>
        </View>
    )
}

