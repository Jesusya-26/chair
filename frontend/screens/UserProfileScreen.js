import { React, useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native';


const UserProfileScreen = ( {navigation} ) => {

    useEffect(
        () => navigation.setOptions({
            title: 'Мой кабинет'
        }, [navigation])
    );

    return (
        <SafeAreaView>
            <Text>Профиль пользователя</Text>
        </SafeAreaView>
    );
}

export default UserProfileScreen;