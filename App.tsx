import React from 'react';
import {Provider} from "react-redux";
import {store} from "./src/store/store";
import {AppWrapper} from "./src/containers/Wrappers/AppWrapper";
import {ActionSheetProvider} from "@expo/react-native-action-sheet";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <ActionSheetProvider>
                <AppWrapper/>
            </ActionSheetProvider>
        </Provider>
    );
};

export default App;
