import { useState } from 'react'
import { TouchableOpacity, View, StyleSheet, Text, ScrollView } from 'react-native';
import StarRating from 'react-native-star-rating';
import { Feather } from '@expo/vector-icons';

import { FeedbackButton, HeartButton } from '../icons'

export default function ProductInfo( { product, navigation } ) {

    const [isActive, setIsActive] = useState(false)

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.feedback_container}>
                <View style={styles.rating_container}>
                    <Text style={styles.feeadback_title}>122 оценки</Text>
                    <View style={styles.star_container}>
                        <StarRating maxStars={5} rating={product.rating} starSize={13} fullStarColor="#22292E" emptyStarColor="#22292E" halfStarColor="#22292E" disabled={true}/>
                        <Text style={styles.product_rating}>{product.rating}</Text>
                    </View>
                </View>
                <FeedbackButton />
            </TouchableOpacity>
            <Dropdown />
            <View style={styles.buttons_container}>
                <TouchableOpacity style={styles.ar_button_container} onPress={() => navigation.navigate('ARTryOn', { product })}>
                    <Text style={styles.ar_button}>AR Примерка</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.heart_button_container} onPress={() => setIsActive(!isActive)}>
                    <HeartButton isActive={isActive} />
                </TouchableOpacity>
            </View>
        </View>
    );
    }


const Dropdown = () => {
    const [visible, setVisible] = useState(true);
    const [buttonName, setButtonName] = useState("minus");
    
    const toggleDropdown = () => {
        if (visible) {
            setButtonName("plus")
        } 
        else {
            setButtonName("minus")
        }
        setVisible(!visible);
    };
    
    const renderDropdown = () => {
        if (visible) {
        return (
            <ScrollView style={styles.dropdown_container}>
                <Text style={styles.dropdown_text}>
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                    Дополнительная информация о товаре
                </Text>
            </ScrollView>
        );
        }
    };

    return (
        <View style={styles.additional_main_container}>
            <View style={styles.additional_info_container}>
                <TouchableOpacity style={styles.additional_button_container} onPress={toggleDropdown}>
                    <Text style={styles.additional_title}>Характеристики</Text>
                    <Feather name={buttonName} size={24} color="#22292E" />
                </TouchableOpacity>
            </View>
            {renderDropdown()}
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        height: "40%",
        gap: 20,
        alignItems: "center"
    },
    feedback_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        marginHorizontal: 20
    },
    feeadback_title: {
        fontFamily: "SF-Medium",
        fontSize: 16,
        marginBottom: 3
    },
    rating_container: {
        width: "95%"
    },
    star_container: {
        flexDirection: "row",
        alignItems: "center"
    },
    product_rating: {
        color: "#9199A3",
        fontFamily: "SF-Regular",
        fontSize: 13,
        marginLeft: 5
    },
    additional_main_container: {
        width: "90%"
    },
    additional_info_container: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.05)"
    },
    additional_button_container: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
    },
    additional_title: {
        flex: 1,
        fontFamily: "SF-Medium",
        fontSize: 16
    },
    dropdown_container: {
        marginTop: 10,
        height: "25%"
    },
    dropdown_text: {
        fontFamily: "SF-Regular",
        fontSize: 12,
        color: "#22292E",
        flex: 1
    },
    buttons_container: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 15,
        position: "absolute",
        bottom: 30
    },
    ar_button_container: {
        flex: 1,
        marginRight: 10,
    },
    ar_button: {
        backgroundColor: "#0057FF",
        color: "white",
        fontFamily: "SF-Medium",
        fontSize: 15,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        textAlign: "center"
    },
    heart_button_container: {
        backgroundColor: "#ECF2FF",
        justifyContent: "center",
        padding: 10,
        borderRadius: 8
    }
})
