import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';
import { useDispatch, useSelector } from 'react-redux';

import { ProductsList, CategoriesList } from './components';
import { Divider } from 'shared/components';
import { addProductTocart, userDetails } from 'shared/redux/actions';

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
    const token = useSelector(({ auth: { token = '' } = {} } = {}) => token);
    useEffect(() => {
        dispatch(userDetails(token));
        dispatch(addProductTocart(token));
    }, [dispatch, token]);

    return (
        <ScrollView>
            <CategoriesList />
            <Divider />
            <ProductsList navigation={navigation} />
        </ScrollView>
    );
};
