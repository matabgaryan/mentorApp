import React from 'react';
import {Text, View, ScrollView, Platform} from 'react-native';
import FastImage from 'react-native-fast-image';
import SafeScreen from "~containers/SafeAreaView";
import Button from '~components/buttons/BaseButton';
import colors from "~configs/ui/colors";
import {useAccount} from "~hooks/account/useAccount";
import {RootState} from "~core/types";
import {GUEST_IMG_URL} from "~constants/appCosntants";
import {useAppSelector} from "~hooks/redux/useRedux";
import {useNavigationHook} from "~hooks/navigation/useNavigationHook";
import styles from './styles/accountStyles';
import {CheckBox} from "react-native-elements";

export const AccountScreen = () => {
    const { handleLogout, isShareAccount, toggleShareAccount } = useAccount();
    const { navigate } = useNavigationHook();
    const { userInfo } = useAppSelector((state: RootState) => state.auth);

    return (
        <SafeScreen>
            <View style={{flex: 1}}>
            <View style={styles.topBlackBorder}>
                <View style={styles.profileImageWrapper}>
                    <FastImage
                        style={styles.profileImage}
                        resizeMode={FastImage.resizeMode.cover}
                        fallback={Platform.OS === 'android'}
                        source={{
                            priority: FastImage.priority.low,
                            uri: userInfo?.image ? userInfo?.image : GUEST_IMG_URL,
                            cache: FastImage.cacheControl.immutable,
                        }}
                    />
                </View>
            </View>
            <View style={[styles.profileContent]}>
                <ScrollView showsVerticalScrollIndicator={false}
                            contentInset={{ top: 0, left: 0, bottom: 0, right: 0 }}
                            style={styles.profileMainWrapper}>
                    <View style={{flexDirection: "column", marginBottom: 12}}>
                       <View>
                           <Text style={styles.fullName}>{userInfo?.firstName}</Text>
                           <Text style={styles.userName}>{userInfo?.lastName}</Text>
                       </View>
                        <View style={styles.actionsWrapper}>
                            <Button  buttonStyle={{marginRight: 12, flexBasis: '48%' }}  title="Manage Profile" onPress={() => null} buttonColor={colors.black} />
                            <Button
                                textStyle={{color: colors.black}}
                                buttonStyle={{ flexBasis: '48%', borderColor: colors.black }}
                                title="Manage Groups"
                                onPress={() => navigate("ManageGroups")}
                                buttonColor={colors.white}
                                titleColor={colors.black}
                            />
                        </View>
                    </View>
                    <View>
                        <CheckBox onPress={() => toggleShareAccount(!isShareAccount)} checked={isShareAccount} title="Share Account"/>
                    </View>
                    <View>
                        <View style={{marginBottom: 12}}>
                            <Text style={styles.accountAttributeName}>Job Title</Text>
                            <Text style={styles.accountAttributeValue}>
                                {userInfo?.jobTitle}
                            </Text>
                        </View>
                        <View style={{marginBottom: 12}}>
                            <Text style={styles.accountAttributeName}>
                                Department
                            </Text>
                            <Text style={styles.accountAttributeValue}>
                                {userInfo?.department}
                            </Text>
                        </View>
                        <View style={{marginBottom: 12}}>
                            <Text style={styles.accountAttributeName}>
                                Location</Text>
                            <Text style={styles.accountAttributeValue}>
                                {userInfo?.location}
                            </Text>
                        </View>
                        <Button
                            textStyle={{color: colors.black}}
                            buttonStyle={{ flexBasis: '48%', borderColor: colors.black }}
                            title="Logout"
                            onPress={() => handleLogout()}
                            buttonColor={colors.dangerLight}
                            titleColor={colors.white}
                        />
                    </View>
                </ScrollView>
            </View>
            </View>
        </SafeScreen>
    );
}
