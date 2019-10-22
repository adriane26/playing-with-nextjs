import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

// const indexPage = () => (
//     <div>
//         <h1>Main page</h1>
//         <p>This is a link to the <Link href="/auth"><a>Auth</a></Link> page</p>
//         <button onClick={() => Router.push('/auth')}>Go to Auth</button>
//     </div>
// );

/// OR CAN USE CLASS BASED COMPONENT WITH LIFECYCLE HOOK:

class IndexPage extends Component {
    static getInitialProps(context) {
        console.log(context);
        // THIS EXECUTES ON THE SERVER (or the client), can use to initialize app before it loads
        // COULD USE await with async
        // used to fetch data and pre-populate props before loading

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({appName: 'cool app, yo'});
            }, 1000);
        });
        return promise;
        // return {appName: 'cool app, yo'};
    }
    render () {
        return (
            <div>
                <h1>Main page of {this.props.appName}</h1>
                <p>Go to{" "}<Link href="/auth"><a>authhhh</a></Link></p>
                <p>This is a link to the <Link href="/auth"><a>Auth</a></Link> page</p>
                <button onClick={() => Router.push('/auth')}>Go to Auth</button>
            </div>
        )
    }
}

export default IndexPage;