import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';
import { useDispatch } from 'react-redux';

import { ProductsList, CategoriesList } from './components';
import { Divider } from 'shared/components';
import { getData } from 'shared/utils';
import { USER } from 'shared/constants';
import { addProductTocart } from 'shared/redux/actions';

export const Main = ({ navigation }) => {
    // TODO:Fix analytics
    // useEffect(async () => {
    //     await Analytics.setEnabled(true);
    //     const crashedInLastSession = await Crashes.hasCrashedInLastSession();
    //     if (crashedInLastSession) {
    //         const crashReport = await Crashes.lastSessionCrashReport();
    //         const crashReportString = JSON.stringify(crashReport, null, 4);
    //         console.log('App crashed in the last session. Crashes.lastSessionCrashReport(): ', crashReportString);
    //     }
    // }, []);

    const dispatch = useDispatch();
    useEffect(async () => {
        const token = await getData(USER);
        dispatch(addProductTocart(token));
    }, [dispatch]);
    return (
        <ScrollView>
            <CategoriesList />
            <Divider />
            <ProductsList navigation={navigation} />
        </ScrollView>
    );
};
