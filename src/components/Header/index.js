import React from "react";
import {View, Text, Pressable, Image} from "react-native";
import {styles} from "./styles";
import {useState} from "react";
import Input from "../input";

const Header = ({title, onBackPress, onLogout, showBack, showSearch, showLogout, onSearchKeyword, keyword}) => {
    const [showSearchInput, setShowSearchInput] = useState(false)

    const onSearch = () => {
        setShowSearchInput(search => !search)
    }

    return (
        <View>
        <View style={styles.container}>
            {
                showBack ? (
                    <Pressable onPress={onBackPress} hitSlop={20}>
                        <Image style={styles.icon} source={require('../../assets/back.png')}/>
                    </Pressable>
                ) : showSearch ? (
                    <Pressable onPress={onSearch} hitSlop={20}>
                        <Image style={styles.icon} source={require('../../assets/search.png')}/>
                    </Pressable>
                ) : <View style={styles.space}/>
            }
            <Text style={styles.title}>{title}</Text>
            {
                showLogout ? (
                    <Pressable onPress={onLogout} hitSlop={20}>
                        <Image style={styles.icon} source={require('../../assets/logout.png')}/>
                    </Pressable>
                ) : <View style={styles.space}/>
            }
        </View>
        {
            showSearchInput ? (
                <Input onChangeText={onSearchKeyword} value={keyword} placeholder="Type your keyword" />
             ) : null
        }
        </View>
    )
}

export default Header;