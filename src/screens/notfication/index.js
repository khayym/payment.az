import { View, ScrollView } from 'react-native'
import Filed from './filed'
import { styles } from './styles'
import Navbar from './navbar'
import { GET_NEWS } from '../../utils/api';
import { useLayoutEffect, useState } from 'react';
import axios from 'axios';


export const Notification = () => {

    const [news, setNews] = useState([]);

    const getNews = async () => {
        try {
            const res = await axios.get(GET_NEWS);
            setNews(res.data.results);
        } catch (e) {
            console.log('--->', e);
        }

    }

    useLayoutEffect(() => {
        getNews();
    }, [])

    return (
        <View style={styles.container}>
            <Navbar />
            <ScrollView style={styles.filedView} showsVerticalScrollIndicator={false}>
                {
                    news?.map((item) => (
                        <Filed
                            key={item.id}
                            title={item.title}
                            cover_image={item.cover_image}
                            content={item.content}
                            created_at={`${item.created_at.split('T')[0]},${item.created_at.split('+')[1]}`}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}

