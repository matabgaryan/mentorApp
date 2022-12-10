import React from 'react';
import {Text, View} from 'react-native';
import SafeScreen from "~containers/SafeAreaView";
import {styles} from "./styles";
import AppLogo from "~assets/images/logo.svg";
import {MentorList} from "~screens/Home/components/mentors/MentorsList";
import {useAppSelector} from "~hooks/redux/useRedux";
import {RootState} from "~core/types";

export const Home = () =>  {
    const { mentors } = useAppSelector((state: RootState) => state.mentors);

    return (
            <SafeScreen>
                <View style={styles.background}>
                    <View style={styles.header}>
                        <AppLogo width={250} />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.title}>Our Top Mentors</Text>
                        <Text style={styles.description}>
                            A single place for  your career development.
                        </Text>
                    </View>
                    <MentorList data={mentors}/>
                </View>
        </SafeScreen>
    );
}
