import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { hasCrashedInLastSession, lastSessionCrashReport } from 'appcenter-crashes';
import { setEnabled } from 'appcenter-analytics';
import { useDispatch, useSelector } from 'react-redux';

import { ProductsList, CategoriesList } from './components';
import { Divider, Header } from 'shared/components';
import { fetchCart, userDetails } from 'shared/redux/actions';
import { loc } from 'shared/assets';

export const Main = ({ navigation }) => {
    const dispatch = useDispatch();
    const token = useSelector(({ auth: { token = '' } = {} } = {}) => token);

    useEffect(() => {
        dispatch(userDetails(token));
        dispatch(fetchCart(token));
        const analytics = async () => {
            await setEnabled(true);
            const crashedInLastSession = await hasCrashedInLastSession();
            if (crashedInLastSession) {
                const crashReport = await lastSessionCrashReport();
                const crashReportString = JSON.stringify(crashReport, null, 4);
                console.log('App crashed in the last session. Crashes.lastSessionCrashReport(): ', crashReportString);
            }
        };
        analytics();
    }, [dispatch, token, setEnabled, hasCrashedInLastSession, lastSessionCrashReport]);

    return (
        <>
            <Header navigation={navigation} title={loc('login.title')} />
            <ScrollView>
                <CategoriesList />
                <Divider />
                <ProductsList navigation={navigation} />
            </ScrollView>
        </>
    );
};
