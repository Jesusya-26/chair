import { React, useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native';


const TryOnScreen = ( {navigation} ) => {

    useEffect(
        () => navigation.setOptions({
            title: 'Примерка'
        }, [navigation])
    );

    return (
        <SafeAreaView>
            <Text>Примерка</Text>
        </SafeAreaView>
    );
}

export default TryOnScreen;