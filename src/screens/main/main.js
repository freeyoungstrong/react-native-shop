import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

import { ProductsList, CategoriesList } from './components';
import { Divider } from 'shared/components';

export const Main = ({ navigation }) => {
    useEffect(async () => {
        await Analytics.setEnabled(true);
        const crashedInLastSession = await Crashes.hasCrashedInLastSession();
        if (crashedInLastSession) {
            const crashReport = await Crashes.lastSessionCrashReport();
            const crashReportString = JSON.stringify(crashReport, null, 4);
            console.log('App crashed in the last session. Crashes.lastSessionCrashReport(): ', crashReportString);
        }
    }, []);
    return (
        <ScrollView>
            <CategoriesList />
            <Divider />
            <ProductsList navigation={navigation} />
        </ScrollView>
    );
};
