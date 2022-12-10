import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity, View} from 'react-native';
import styles from './style';
import { useImagePickerHook} from '~hooks/utils/useImagePicker';
import { useActionSheet } from '@expo/react-native-action-sheet';
import {MaterialUIIcon} from "~components/icons";


const ImagePickerButton = (props) => {
    const { handleGetPhotoURI } = props;
    const [imageURI, setImageURI] = useState<any>(null);
    const { showActionSheetWithOptions } = useActionSheet();

    const handleImageSelect = (file) => {
      setImageURI({uri: file.path, fileName: file.filename, type: file.mime});
      handleGetPhotoURI({
        uri: file.sourceURL ? file.sourceURL : file.path,
        fileName: file.path,
        type: file.mime});
    };

    const {handleLaunchCamera, handlePickPhoto} = useImagePickerHook({callback: handleImageSelect})

    const openPhotoActionSheetModal: () => void = () => {
        const photoActions = {
            0: () => handleLaunchCamera('photo'),
            1: () => handlePickPhoto('photo'),
            2: () => null,

        }
        showActionSheetWithOptions(
                {
                    options: ['Take Photo', 'Choose From Library', 'Cancel'],
                    cancelButtonIndex: 2,
                    userInterfaceStyle: 'light'
                },
                buttonIndex => {
                    photoActions[buttonIndex!]();
                }
        );
    }

    return (
            <View style={styles.imagePickerContainer}>
                <TouchableOpacity onPress={() => openPhotoActionSheetModal()}>
                    <View style={styles.imagePicker}>
                        {!imageURI?.uri && !props.userPhoto ? (
                                <MaterialUIIcon size={44} name="photo-camera"/>
                                ) :
                                <FastImage style={{ width: 86, height: 86 }}
                                           resizeMode={FastImage.resizeMode.cover}
                                           source={imageURI ? imageURI : {
                                               priority: FastImage.priority.low,
                                               uri: props.userPhoto,
                                               cache: FastImage.cacheControl.immutable,
                                           }}
                                />
                        }
                    </View>
                </TouchableOpacity>
            </View>
    )
}

export default ImagePickerButton;
