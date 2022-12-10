import React, {useCallback} from 'react'
import {
    FlatList, View,
} from 'react-native';
import {IEmployee} from "~store/slices/interface";
import UserCard  from './UserCard';

export const UsersList: React.FC<{data: IEmployee[]}> = ({ data }) => {

    const renderCardItem = useCallback(({item}) => <UserCard  user={item}/>, [data]);
    const itemSeparatorComponent = useCallback(() => <View style={{ paddingBottom: 1 }} />, [])
    const keyExtractor = useCallback((item) => item.id, []);

    return (
        <View style={{flex: 1}}>
            <FlatList
                initialNumToRender={5}
                removeClippedSubviews={true}
                nestedScrollEnabled={true}
                contentInset={{ top: 0, left: 0, bottom: 0, right: 0 }}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={true}
                data={data || []}
                renderItem={renderCardItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={itemSeparatorComponent}
            />
        </View>

    )
}
