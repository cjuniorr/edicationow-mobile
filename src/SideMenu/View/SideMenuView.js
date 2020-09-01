import React from 'react'
import styles from './SideMenuStyle'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SideMenuView = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.navSectionStyle }>
                <TouchableOpacity>
                    <View style={ styles.navItemStyle }>
                        <Text style={ styles.navItemTitleStyle }>Lugares</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={ styles.navItemStyle }>
                        <Text style={ styles.navItemTitleStyle }>Meus Lugares</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SideMenuView