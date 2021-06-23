import React from 'react';
import { connect } from 'react-redux';
import AppNavigator from './src/components/AppNavigator';
import withDeepLinking from './src/helpers/withDeepLinking';

function App({ dispatch, nav }) {
    return (
        <AppNavigator navigation={{
            dispatch,
            state: nav
        }}/>
    );
}


const mapStateToProps = (state) => ({
    nav: state.nav
});

export default connect(mapStateToProps)(withDeepLinking(App));