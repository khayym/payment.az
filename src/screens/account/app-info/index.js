import { ScrollView } from 'react-native'
import { Accordion } from '../../../components/accordion';
import { faqs } from '../../../constants/faqs';

const AppInfo = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#fff", paddingHorizontal: 16, }}>
            {
                faqs.map((item, index) => <Accordion number={`0${index + 1}`} text={item.text} header={item.header} key={index} />)
            }
        </ScrollView>
    )
}

export default AppInfo
