import { useCallback, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native'
import { Box } from '../box'
import { Search } from '../searchbar'
import { DATA } from './items';



const PaymentsBlock = () => {
    const [text, setText] = useState(null);
    const [search, setSearch] = useState(DATA);


    const filter = useCallback((data) => {
        setText(data);
        data?.length > 0 ? fincer(data) : setSearch(DATA)
    }, [])

    const fincer = (str) => {
        var pattern = str?.toLowerCase()?.split("")?.map((x) => `(?=.*${x})`)?.join("")
        var regex = new RegExp(`${pattern}`, "gi");

        // DATA.map(arr => arr.targets?.map(item => item.toLowerCase().match(regex) && setSearch([arr])))

        DATA.map(arr => arr.targets?.map(item => {
            if (item.toLowerCase().match(regex)) {
                setSearch([arr])
                // console.log(arr)
            }
            // else setSearch(DATA)
        }))
    }


    return (
        <View style={styles.container}>
            <Search text={text} setText={filter} />
            <View style={styles.row}>
                <FlatList
                    data={search}
                    extraData={text}
                    renderItem={(props) => <Box {...props.item} />}
                    keyExtractor={item => item.id}
                    numColumns={3}
                    horizontal={false}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    contentContainerStyle={{ height: '100%' }}
                    scrollEnabled={false}
                />
            </View>
        </View>
    )
}

export default PaymentsBlock

const styles = StyleSheet.create({
    container: {

        borderColor: 'red',
        marginTop: 50,
        flex: 1,
        // backgroundColor: "red"
    },
    row: {
        marginTop: 24,
    }
})