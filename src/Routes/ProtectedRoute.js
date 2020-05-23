import React, { useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import { CookieContext } from "../api/SessionContext";


export const ProtectedRoute = ({
    component: Component, 
    ...restOfPropsFromParent
}) => {

    const [uuid] = useContext(CookieContext);

    
    return (
        <Route
            {...restOfPropsFromParent}
            render={propsFromRouter => {
                return uuid ? (
                    <Component {...restOfPropsFromParent} />
                ) :
                    (
                        <Redirect
                            to="/"
                            {...propsFromRouter}
                            {...restOfPropsFromParent}
                        />
                    );
            }}
        />
    );
};