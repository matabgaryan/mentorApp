import {StyleSheet} from "react-native";
import colors from "../../../configs/ui/colors";

export const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.white,
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: "row",
        flex: 1,
    },
    view: {
        flex: 1,
        backgroundColor: colors.white
    },
});
