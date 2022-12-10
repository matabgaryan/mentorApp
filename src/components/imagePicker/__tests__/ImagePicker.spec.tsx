import React from 'react';
import ImagePickerButton  from '../index';
import { cleanup } from '@testing-library/react-native';
import { shallow } from 'enzyme';

afterEach(cleanup);

describe('ImagePickerButton component', () => {
    it('should match to snapshot Form', () => {
        const snap = shallow(<ImagePickerButton />);
        expect(snap).toMatchSnapshot();
    });
});
