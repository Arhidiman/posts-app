import React from "react";
import { Provider} from 'react-redux'
import {store} from "@/app/store";
import {singlePostApi} from "@/pages/PostPage/api/singlePostApi.ts";

import type {ReactNode} from "react";

interface IReduxProvider {
    children: ReactNode | ReactNode[]
}

export const ReduxProvider: React.FC<IReduxProvider> = ({children}) => {
    console.log(singlePostApi.reducerPath, singlePostApi.reducer)
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}