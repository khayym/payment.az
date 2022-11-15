import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';

const QrScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [barcode, setBarocde] = useState(null);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();

    }, []);

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        setBarocde(data)
    };

    if (hasPermission === null) {
        return <View>
            <Text style={{ alignSelf: 'center' }}>
                Requesting for camera permission ....
            </Text>
        </View>;
    }
    if (hasPermission === false) {
        return <View>
            <Text style={{ alignSelf: 'center' }}>No access to camera</Text>;
        </View>;
    }
    return (
        <View style={{ flex: 1, }}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            <BarcodeMask
                edgeColor={'rgba(255, 255, 255, 0.8)'}
                showAnimatedLine={false}
                edgeWidth={48}
                edgeHeight={48}
                edgeBorderWidth={5}
                edgeRadius={15}
                backgroundColor={'rgba(0, 0, 0, 0.5)'}
                outerMaskOpacity={0.1}
                width={180} height={180}
            />
        </View>
    )
}

export default QrScreen