import React from 'react';
import PropTypes from 'prop-types';

function Station(props) {
    const { name, address, bikeCount, dockCount } = props;

    return <div>
        <p>Name: {name}</p>
        <p>Address: {address}</p>
        <p>Available bikes: {bikeCount}</p>
        <p>Available docks: {dockCount}</p>
    </div>;
}

Station.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    bikeCount: PropTypes.number.isRequired,
    dockCount: PropTypes.number.isRequired,
    lat: PropTypes.number,
    lon: PropTypes.number
};

export default React.memo(Station);
