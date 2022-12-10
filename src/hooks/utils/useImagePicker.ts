import { openCamera, openPicker } from 'react-native-image-crop-picker';

export const useImagePickerHook = ({callback}) => {

    const imageOptions = {
        width: 1080,
        height: 1920,
        forceJpg: true
    };

    const handlePickPhoto = (mediaType) => {
        openPicker({
            ...imageOptions,
            writeTempFile: true,
            cropping: true,
            freeStyleCropEnabled: true,
            mediaType,
        }).then(image => {
            callback(image);
        });
    }

    const handleLaunchCamera = (mediaType) => {
        openCamera({
            mediaType,
            ...imageOptions,
            cropping: true,
            writeTempFile: true,
            freeStyleCropEnabled: true
        }).then(image => {
            callback(image)
        });
    }

    return {
        handleLaunchCamera,
        handlePickPhoto
    }
}
