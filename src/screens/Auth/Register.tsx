import React, { useState } from 'react';
import { View } from 'react-native';
import SafeScreen from "~containers/SafeAreaView";
import {RegisterStepOne} from "~screens/Auth/components/register/StepOne";
import {RegisterStepTwo} from "~screens/Auth/components/register/StepTwo";
import {Loader} from "~components/loader";
import {useAppDispatch} from "~hooks/redux/useRedux";
import { registerUser, setUser} from "~store/slices/auth";
import {StepThree} from "~screens/Auth/components/register/StepThree";
import {generateUuid} from "~core/utils/uuid";

export const STEP_ONE = 1;
export const STEP_TWO = 2;
export const STEP_THREE = 3;


const RegisterScreen = () => {
    const dispatch = useAppDispatch();
    const [registerStep, setRegisterStep] = useState(STEP_ONE);
    const [formData, setFormData] = useState({
        id: generateUuid(),
        image: '',
        firstName: '',
        lastName: '',
        location: '',
        department: '',
        jobTitle: '',
        bio: '',
        groups: [],
        email: ''
    });
    const handleChange = (value, name) => {
        setFormData((prevState) => {
            return {...prevState, [name]: value}
        })
    }

    const handleSubmit = async (groups) => {
        try {
            const userData = {...formData, groups}
            const res = await dispatch(registerUser(userData));
            await dispatch(setUser(res.payload));
        }catch (e){
            await Promise.reject(e);
        }
    }

    return (
        <SafeScreen style={{paddingHorizontal: 7}}>
                <Loader visible={false}/>
                <View style={{paddingTop: 18, flex: 1}}>
                    <View style={{ flex: 1 }}>
                        {registerStep === STEP_ONE &&  <RegisterStepOne onChange={handleChange} changeStep={() => setRegisterStep(STEP_TWO)}/> }
                        {registerStep === STEP_TWO && <RegisterStepTwo onChange={handleChange} changeStep={() => setRegisterStep(STEP_THREE)}  />}
                        {registerStep === STEP_THREE && <StepThree submit={handleSubmit}  />}
                    </View>
                </View>
        </SafeScreen>
    );
}

export default RegisterScreen;
