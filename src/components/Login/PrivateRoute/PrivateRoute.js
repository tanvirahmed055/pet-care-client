import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    let { userInfo } = useAuth();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                userInfo?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;