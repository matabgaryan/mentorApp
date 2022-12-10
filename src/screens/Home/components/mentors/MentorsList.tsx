import React, {useCallback} from 'react'
import { FlatList, View } from 'react-native';
import { RenderUserSingleItem } from './MentorItem';

export const MentorList = ({ data }) => {

    const renderCardItem = useCallback(({item}) => <RenderUserSingleItem onPress={() => null}  item={item}/>, [data]);
    const itemSeparatorComponent = useCallback(() => <View style={{ paddingBottom: 1 }} />, [])
    const keyExtractor = useCallback((item) => item.id + item.email, []);

    return (
        <FlatList
            initialNumToRender={5}
            removeClippedSubviews={true}
            nestedScrollEnabled={true}
            contentInset={{ top: 0, left: 0, bottom: 0, right: 0 }}
            numColumns={4}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
            data={data || []}
            renderItem={renderCardItem}
            ItemSeparatorComponent={itemSeparatorComponent}
            keyExtractor={keyExtractor}
        />
    )
}
