import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../configs/ui/colors';
import { fontSizes } from '~configs/ui/sizes';

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 12,
        backgroundColor: colors.white,
    },
    headerTopContent: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 5,
        marginTop:25,
        height: 50
    },
    userPhotoWrapper:{
        paddingLeft: 10,
        shadowColor: '#00000029',
        shadowOffset:{
            width: 0,
            height: 3
        },
        shadowOpacity: 1,
        elevation: 6,
    },
    singUpButton:{
        borderColor: colors.blackSecondary,
        borderWidth: 1,
        borderRadius: 6,
        justifyContent:'center',
        alignItems: 'center',
        width: 100,
        height: 32,
    },
    signUpText:{
        fontSize: fontSizes.size_xs,
        color: colors.blackSecondary,
    },
    userPhoto: {
        width: 44,
        height: 44,
        borderWidth: 1,
        borderColor: colors.greyBorder,
        borderRadius: 50,
    },
    title: {
        textAlign: 'center',
        fontSize: fontSizes.size_m,
        color: colors.bluePrimary,
        paddingBottom: 20
    },
    button: {
        color: colors.white,
        backgroundColor: colors.green,
        paddingRight: 15,
        paddingLeft: 15,
        height: 64,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignSelf: 'center',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.white
    },
    addRoomBtn: {
        height: 64,
        width: 64,
        backgroundColor: colors.green,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 24,
        bottom: 60,
        zIndex: 3,
    },
    tabName: {
        color: colors.darkGrey,
        fontSize: fontSizes.size_s,
    },
    tabNameActive: {
        color: colors.black,
        fontSize: fontSizes.size_s,
    },
    tabIndicatorStyle: {
        backgroundColor: colors.green,
        height: 3,
        bottom: -1,
    },
    tabNavigation: {
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9',
    },
    feedContentWrapper: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: colors.white
    },
    matchResultsContentWrapper:{
        paddingLeft: 8,
        paddingRight: 8
    },
    feedInfoBanner: {
        height: 40,
        backgroundColor: colors.greyBackground,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#D9D9D9',
        borderBottomColor: '#D9D9D9',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginBottom: 6,
    },
    bannerText: {
        color: colors.black,
        fontSize: fontSizes.size_xs,
        marginLeft: 8,
    },
    upcomingScreenTitle:{
        color: colors.black,
        fontSize: fontSizes.size_regular,
        marginLeft: 40,
        marginBottom: 14
    },
    bannerImage: {
        width: 20,
        height: 20,
    },
    singleMatchBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        height: 48,
        // marginTop: 8,
        marginBottom: 8,
        marginHorizontal: 12,
        borderRadius: 5,
    },
    singleMatchBtnUpcoming: {
        borderColor: '#D9D9D9',
        backgroundColor: '#D9D9D9',
    },
    singleMatchBtnLive: {
        borderColor: colors.green,
        backgroundColor: colors.green,
    },
    firstTeamContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        flexBasis: '42%',
    },
    secondTeamContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        flexBasis: '42%',
    },
    matchTimeContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexBasis: '16%',
    },
    firstTeamLogo: {
        width: 26,
        height: 26,
        marginLeft: 12,
    },
    secondTeamLogo: {
        width: 26,
        height: 26,
        marginRight: 12,
    },
    singleMatchBtnTextUpcoming: {
        color: colors.black,
        fontSize: fontSizes.size_xs,
    },
    singleMatchBtnTextLive: {
        color: colors.white,
        fontSize: fontSizes.size_xs,
    },
    plusBtn: {
        position: 'absolute',
        right: 12,
    },
    feedMatchDateInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 12,
        paddingTop: 12,
        paddingBottom: 12

    },

    feedSeparator: {
        height: 1,
        backgroundColor: '#D9D9D9',
        width: '90%',
        marginBottom: 10,
        alignSelf: 'center'
    },
    feedRoomCardWrapper: {
        width: Dimensions.get('window').width - 22,
        minHeight: 220,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 12,
        marginBottom: 12,
        marginLeft: 11,
        backgroundColor: colors.white,
        shadowColor: colors.blackPrimary,
        shadowOffset:{
            width: 1,
            height: 0
        },
        shadowOpacity: 0.2,
        elevation: 0,
    },
    roomTitle: {
        fontSize: fontSizes.size_regular,
        color: colors.black,
        paddingBottom: 10,
    },

    hostsInfoWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    singleHost: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        flexBasis: '50%'
    },
    hostColumnWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    hostRoundedImage: {
        height: 34,
        width: 34,
        borderRadius: 50,
        borderColor: colors.greyBorder,
        borderWidth: 1,
        marginRight: 8,
    },

    hostCountWrapper: {
        width: 35,
        height: 35,
        borderColor: colors.greyBorder,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },

    searchHeaderWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    closeSearchBtn: {
        width: 20,
        height: 20,
    },
    headerTitle: {
        fontSize: fontSizes.size_xl,
    },
    globalSearchWrapper: {
        backgroundColor: colors.white,
        paddingTop: 60,
    },
    searchWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 20,
        padding: 10,
        borderRadius: 10,
        height: 40,
        backgroundColor: '#7676801F',
        width: '91%',
    },
    searchWrapperHalf: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 20,
        padding: 10,
        borderRadius: 10,
        height: 40,
        backgroundColor: '#7676801F',
        width: '73%',
    },
    searchInputWrapper: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    cancelBtnText: {
        fontSize: fontSizes.size_s,
        color: colors.green,
    },
    borderBottom: {
        bottom: -20,
        backgroundColor: '#DBDBDB',
        width: '100%',
        height: 1,
        position: 'absolute'
    },
    tabViewWrapper: {
        flex: 1,
        backgroundColor: colors.white,
    },
    searchTabNavigation: {
        backgroundColor: colors.white,
        shadowColor: 'transparent',
        shadowOpacity: 0,
        alignSelf: 'center',
        justifyContent: 'flex-start',
        width: 230,
    },
    tabActiveBtn: {
        backgroundColor: colors.green,
        height: 30,
        width: 115,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabBtn: {
        backgroundColor: '#7676801F',
        height: 30,
        width: 115,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabActiveBtnText: {
        fontSize: fontSizes.size_xs,
        color: colors.white,
    },
    tabBtnText: {
        fontSize: fontSizes.size_xs,
        color: colors.black,
    },
    searchTitle: {
        fontSize: fontSizes.size_xl,
        color: colors.black,
        paddingHorizontal: 60,
        textAlign: 'center',
    },
    searchDescription: {
        fontSize: fontSizes.size_regular,
        color: colors.black,
        paddingHorizontal: 25,
        textAlign: 'center',
        paddingTop: 10,
    },
    searchEmptyState: {
        // paddingTop: 150,
    },
    postphonedText: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color: colors.darkGrey
    },
    startRoomPanel: {
        height: 214,
        marginHorizontal: 12,
        paddingHorizontal: 18,
        paddingTop: 34,
        paddingBottom: 32,
    },
    emptyComponentBck: {
        marginHorizontal: 12,
    },
    panelTitle: {
        fontSize: fontSizes.size_xl,
        color: colors.white,
        paddingBottom: 6
    },
    panelDescription: {
        fontSize: fontSizes.size_regular,
        color: colors.greyBackground,
        paddingBottom: 26
    },
    startRoomBtn: {
        height: 40,
        width: 145,
        backgroundColor: colors.white,
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center'
    },
    inviteFriendsBtn: {
        height: 40,
        width: 145,
        backgroundColor: colors.green,
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 24
    },
    inviteFriendsBtnText: {
        fontSize: fontSizes.size_s,
        color: colors.white,
    },
    startRoomBtnText: {
        fontSize: fontSizes.size_s,
        color: colors.black,
    },
    communityPanel: {
        backgroundColor: colors.greyBackground,
        marginHorizontal: 12,
        // marginTop: 12,
        borderRadius: 5,
        paddingBottom: 32,
        paddingLeft: 18,
        paddingTop: 22,
    },
    communityPanelTitle: {
        color: colors.black,
        fontSize: fontSizes.size_xm,
        fontWeight: '600'
    },
    titleAndBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 16,
        marginBottom: 16,
    },
    seeAllBtn: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    seeAllBtnText: {
        fontSize: fontSizes.size_xs,
        color: colors.black,
        fontWeight: '500',
        marginRight: 2,
    }
});

export default styles
