import React from "react";
import { Provider} from 'react-redux'
import {store} from "@/app/store";
import type {ReactNode} from "react";

interface IReduxProvider {
    children: ReactNode | ReactNode[]
}

export const ReduxProvider: React.FC<IReduxProvider> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}