import React from 'react';
import User from '../../components/User';

const authIndexPage = (props) => (
    <div>
        <h1>AUTHORITY page: this is a {props.appName}</h1>
        <User name="Sam" age={28} />
    </div>

);

authIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({appName: 'cool AUTH app, yo'});
        }, 500);
    });
    return promise;
};

export default authIndexPage;