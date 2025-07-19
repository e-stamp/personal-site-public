import { useState, useEffect } from 'react';
import { personalInformation } from '../components/Information.jsx';
import api from '../services/index'

export default function useSharedInfoState() {
    const [lived, setLived] = useState(true);
    const [info, setInfo] = useState(null);
    const [isInfoLoading, setIsInfoLoading] = useState(!info);
    let infoVersions = []

    const fetchInfo = async () => {
        try {
            infoVersions = await api.information.getInfoVersion();
            setInfo(infoVersions[0]);
        } catch (err) {
            console.error("Error fetching info");
        } finally {
            setIsInfoLoading(false);
        }
    }

    useEffect(() => {
        if (infoVersions = []) {
            fetchInfo();
        }
    }, [])

    useEffect(() => {
        setInfo(lived ? infoVersions[0] : infoVersions[1]);
    }, [lived]);

    return { lived, setLived, info, isInfoLoading };
}