import { useState, useEffect } from 'react';
import api from '../services/index'

export default function useSharedInfoState() {
    const [info, setInfo] = useState(null);
    const [isInfoLoading, setIsInfoLoading] = useState(!info);

    const fetchInfo = async () => {
        try {
            const data = await api.information.getInfoVersion();
            setInfo(data[0]);
        } catch (err) {
            console.error("Error fetching info");
        } finally {
            setIsInfoLoading(false);
        }
    }

    useEffect(() => {
        if (!info) {
            fetchInfo();
        }
    }, [])

    

    return { info, isInfoLoading };
}