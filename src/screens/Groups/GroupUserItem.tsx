import React from 'react';
import {Platform, TouchableOpacity, View} from 'react-native';
import FastImage from "react-native-fast-image";
import {UserCardAttribute} from "~components/attributes/UserCardAttributes";
import {CheckBox} from "react-native-elements";
import {styles} from "~screens/Employees/styles/userListStyles";

export const RenderUserSingleItem: React.FC<any> = React.memo(({ item, addItem, removeItem, isChecked }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <CheckBox
                onPress={() => isChecked ? removeItem(item) : addItem(item)}
                checked={isChecked}
            />
            <View>
                <FastImage
                    style={styles.userImage}
                    resizeMode={FastImage.resizeMode.cover}
                    fallback={Platform.OS === 'android'}
                    source={{
                        priority: FastImage.priority.low,
                        uri: item.image,
                        cache: FastImage.cacheControl.immutable,
                    }}
                />
            </View>
            <View style={styles.userInfoWrapper}>
                <View>
                    <UserCardAttribute name="First Name" value={item.firstName}/>
                    <UserCardAttribute name="Last Name" value={item.lastName}/>
                    <UserCardAttribute name="Location" value={item.country}/>
                    <UserCardAttribute name="Department" value={item.department}/>
                    <UserCardAttribute name="Job Title" value={item.jobTitle}/>
                    <UserCardAttribute name="Email" value={item.email}/>
                </View>
            </View>
        </TouchableOpacity>
    );
})
