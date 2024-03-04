import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView, Text, View, Image, TextInputBase } from 'react-native';
import SafeViewAndroid from '../components/SafeViewAndroid';
import {
    AdjustmentsHorizontalIcon,
    ArrowDownCircleIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, UserIcon, 
} from "react-native-heroicons/outline";
import { ScrollView, TextInput } from 'react-native-web';


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        {/*Header*/}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image 
                source={{
                    uri: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg'
                }}
                className="h-7 w-7 bg-gray-200 p-4 rounded-full"
            />
            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
                <Text className="font-bold text-lg">Current Location  
                <View className="ml-4 pt-2 space-y-2">
                    <ArrowDownCircleIcon size={20} color="#00CCBB"></ArrowDownCircleIcon>
                </View>
                </Text>
            </View>
            <UserIcon size={35} color="#00CCBB"></UserIcon>
        </View>
        {/*Search*/}
        <View className="flex-row space-x-2" >
            <View className="flex-row flex-1 bg-gray-200 p-2 ml-4">
                    <MagnifyingGlassIcon color="#00CCBB"></MagnifyingGlassIcon>
                    <TextInput className="p-1 flex-1"
                        placeholder="Search..."
                        keyboardType="default"
                    />
            </View>
            <View className="justify-center">
                <AdjustmentsHorizontalIcon color="#00CCBB"/>
            </View>
        </View>
        <ScrollView>
            {/* Categories */}
            {/* Featured Row */}
        </ScrollView>
    </SafeAreaView>
    )
};

export default HomeScreen;