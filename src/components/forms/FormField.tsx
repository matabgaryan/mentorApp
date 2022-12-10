import React from 'react';
import {  TextInput } from 'react-native';
import colors from "~configs/ui/colors";

export const FormField: React.FC<any> = ({ ...otherProps }) => {
    return (
      <TextInput
          testID="textInput"
          placeholderTextColor={colors.darkGrey}
        {...otherProps}
      />
  );
}
