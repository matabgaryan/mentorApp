import React from "react";
import {View, Platform} from 'react-native';
import FastImage from "react-native-fast-image";
import {UserCardAttribute} from "~components/attributes/UserCardAttributes";
import { styles } from '../styles/userListStyles'
import {IUser} from "~store/slices/interface";

const UserCard: React.FC<{user: IUser}> = ({user}) => {
    return (
        <View style={styles.container}>
            <View>
                <FastImage
                    style={styles.userImage}
                    resizeMode={FastImage.resizeMode.cover}
                    fallback={Platform.OS === 'android'}
                    source={{
                        priority: FastImage.priority.low,
                        uri: user.image,
                        cache: FastImage.cacheControl.immutable,
                    }}
                />
            </View>
            <View style={styles.userInfoWrapper}>
                <View>
                    <UserCardAttribute name="First Name" value={user.firstName}/>
                    <UserCardAttribute name="Last Name" value={user.lastName}/>
                    <UserCardAttribute name="Location" value={user.country}/>
                    <UserCardAttribute name="Department" value={user.department}/>
                    <UserCardAttribute name="Job Title" value={user.jobTitle}/>
                    <UserCardAttribute name="Email" value={user.email}/>
                </View>
            </View>
        </View>
    )
}
export default UserCard;


