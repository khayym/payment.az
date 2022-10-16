import { View } from 'react-native'
import InfoBox from '../../components/info-box'
import PaymentsBlock from '../../components/payments-block'
import { styles } from './styles';


const Home = ({ navigaion }) => {
    return (
        <View style={styles.container}>
            <InfoBox />
            <PaymentsBlock />
        </View >
    )
}

export default Home

