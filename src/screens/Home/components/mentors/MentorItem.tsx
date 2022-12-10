import React from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import {mentorsStyles} from '../../styles/mentorsStyles';
import FastImage from "react-native-fast-image";

export const RenderUserSingleItem: React.FC<any> = React.memo(({ item }) => {
    return (
        <TouchableOpacity style={mentorsStyles.mentorCardItem}>
                    <View style={mentorsStyles.mentorUserImageAndBadgeWrapper}>
                        <FastImage
                            style={mentorsStyles.itemImage}
                            resizeMode={FastImage.resizeMode.cover}
                            fallback={Platform.OS === 'android'}
                            source={{
                                priority: FastImage.priority.low,
                                uri: item.picture.medium,
                                cache: FastImage.cacheControl.immutable,
                            }}
                        />
                    </View>
            <Text style={mentorsStyles.mentorUserName}>{item?.firstName}</Text>
        </TouchableOpacity>
    );
})
