import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div`
    margin: 1rem 0;
    border: 1px solid #CCC;
    border-radius: 5px;
    display: flex;

    p {
        margin: 0.3rem 0;
    }

    &:first-of-type {
        margin-top: 0;
    }
`;

const NameBlock = styled.div`
    flex: 1 1 auto;
    padding: 0.5rem 0.8rem;
`;

const Name = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
`;

const Address = styled.p`
    color: #333;
`;

const CountBlock = styled.div`
    padding: 0.5rem 0.8rem;
    box-sizing: border-box;
    flex: 0 0 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

function Station(props) {
    const { name, address, bikeCount, dockCount } = props;

    return <Box>
        <NameBlock>
            <Name>{name}</Name>
            {name !== address && <Address>{address}</Address>}
        </NameBlock>
        <CountBlock>
            <p>{bikeCount} bikes</p>
            <p>{dockCount} docks</p>
        </CountBlock>
    </Box>;
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
