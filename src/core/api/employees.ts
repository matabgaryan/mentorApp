import {IEmployee} from "~store/slices/interface";
import {employeesMockData} from '../data/empoyees';

import axios from "axios";
export const getEmployeesList: () => Promise<IEmployee[]> = () => {
    return  new Promise(async (resolve) => {
        return resolve(employeesMockData);
    });
}

export const getMentorsList: () => Promise<IEmployee[]> = () => {
    return  new Promise(async (resolve) => {
        const { data }: any = await axios.get('https://randomuser.me/api/?results=20');
        return resolve(data.results);
    });
}

