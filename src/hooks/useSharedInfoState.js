import { useState, useEffect } from 'react';
import { personalInformation } from '../components/Information.jsx';

export default function useSharedInfoState() {
    const [lived, setLived] = useState(true);
    const [info, setInfo] = useState(personalInformation[0]);

    useEffect(() => {
        setInfo(lived ? personalInformation[0] : personalInformation[1]);
    }, [lived]);

    return { lived, setLived, info };
}