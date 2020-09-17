import React, { useState, useEffect, useCallback } from 'react';
import Api from 'js/Api';
import { STATUS_FETCHING, STATUS_FETCHED, STATUS_ERROR } from 'js/constants';
import StatusBar from 'js/StatusBar';
import Station from 'js/Station';

function StationList() {
    const [stations, setStations] = useState({});
    const [fetchStatus, setFetchStatus] = useState(STATUS_FETCHING);
    const update = useCallback(() => {
        setFetchStatus(STATUS_FETCHING);
        Promise.all([
            Api.get('/station_information.json'),
            Api.get('/station_status.json')
        ]).catch(() => {
            setFetchStatus(STATUS_ERROR);
        }).then(([stationInfo, stationStatus]) => {
            setFetchStatus(STATUS_FETCHED);
            const mergedData = {};
            stationInfo.data.data.stations.forEach(({ station_id, name, address, lat, lon }) => {
                mergedData[station_id] = {
                    name,
                    address,
                    lat,
                    lon
                };
            });
            stationStatus.data.data.stations.forEach(({ station_id, num_bikes_available, num_docks_available }) => {
                Object.assign(mergedData[station_id], {
                    bikeCount: num_bikes_available,
                    dockCount: num_docks_available
                });
            });
            setStations(mergedData);
        });
    }, []);

    useEffect(() => {
        update();
    }, [update]);

    return <>
        <StatusBar status={fetchStatus} onRefresh={update}/>
        {Object.entries(stations).map(([id, station]) => <Station key={id} {...station}/>)}
    </>;
}

export default StationList;
