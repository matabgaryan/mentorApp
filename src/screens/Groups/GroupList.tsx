import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {RenderUserSingleItem} from "~screens/Groups/GroupUserItem";
import AppButton from "~components/buttons/BaseButton";
import styles from "~screens/Auth/styles/loginStyles";

export const GroupList:React.FC<any> = ({ submit, data, defaultValues = [], btnText = "Create" }) => {
    const [state, setState] = useState(() => new Set());

    const addItem = item => {
        setState(prev => new Set(prev).add(item));
    }

    const removeItem = item => {
        setState(prev => {
            const next = new Set(prev);
            next.delete(item);
            return next;
        });
    }

    const handleSubmit = async () => {
        await submit([...state.values()])
    }

    const handleSetDefaultValues = () => {
        defaultValues.map((item) => {
            addItem(item)
        })
    }
    useEffect(() => {
        handleSetDefaultValues()
    },[defaultValues, data]);

    const renderCardItem = useCallback(({item}) => <RenderUserSingleItem isChecked={state.has(item)} addItem={addItem} removeItem={removeItem} item={item}/>, [data, state]);
    const itemSeparatorComponent = useCallback(() => <View style={{ paddingBottom: 1 }} />, [])
    const keyExtractor = useCallback((item) => item.id, []);

    return (
        <View style={{position: 'relative'}}>
            <FlatList
                initialNumToRender={5}
                removeClippedSubviews={true}
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
            <View style={{position: 'absolute', bottom: 10, width: '100%'}}>
                <AppButton buttonStyle={styles.button}
                           buttonColor={'black'}
                           onPress={() => handleSubmit()}
                           title={btnText}
                />
            </View>
        </View>

    )
}
