import React, { useContext, useEffect } from 'react'
import { Context } from '../context/AuthContext'

const AttemptSignin = () => {
    const { trySignInOnMount } = useContext(Context);

    useEffect(() => {
        trySignInOnMount();
    }, [])

    return null;
};

export default AttemptSignin
