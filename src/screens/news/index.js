import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native'

const News = ({ route }) => {
    const { title,
        content,
        created_at,
        cover_image } = route.params;

    // console.log({
    //     route
    // });


    return (
        <View>
            <Text>{title}</Text>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1664575195621-a5f347e67554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' }} style={{ width: 100, height: 100 }} />
        </View>
    )
}

export default News

const styles = StyleSheet.create({

})