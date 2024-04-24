import { React, useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native';


const FavouritesScreen = ( {navigation} ) => {

    useEffect(
        () => navigation.setOptions({
            title: '',
            
        }, [navigation])
    );

    return (
        <SafeAreaView style={{backgroundColor: "#0057FF"}}>
            <Text>Избранное</Text>
        </SafeAreaView>
    );
}

export default FavouritesScreen;