import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Spinner from 'react-bootstrap/Spinner';

const AdminRoute = ({ children, ...rest }) => {
    let { userInfo, loading } = useAuth();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loading ? <Spinner animation="grow" /> :
                    userInfo?.email ? (userInfo?.email === process.env.REACT_APP_ADMIN_EMAIL) ? (
                        children
                    ) : <h2 className="pt-5 mt-5 text-danger fw-bold">Sorry, You don't have any permission to view this page</h2> : (
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

export default AdminRoute;