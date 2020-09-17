import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { STATUS_FETCHING, STATUS_FETCHED, STATUS_ERROR } from 'js/constants';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Message = styled.span`
    color: ${props => props.error ? '#F00' : '#000'};
`;

function StatusBar(props) {
    const { status, onRefresh } = props;
    let message = '';
    switch (status) {
        case STATUS_FETCHING:
            message = 'Loading...';
            break;
        case STATUS_FETCHED:
            message = 'List successfully retrieved.';
            break;
        case STATUS_ERROR:
            message = 'Error during fetch';
            break;
    }

    return <Wrapper>
        <Message error={status === STATUS_ERROR}>{message}</Message>
        {!!onRefresh && <button type="button" disabled={status === STATUS_FETCHING} onClick={onRefresh}>Refresh</button>}
    </Wrapper>;
}

StatusBar.propTypes = {
    status: PropTypes.oneOf([STATUS_FETCHING, STATUS_FETCHED, STATUS_ERROR]).isRequired,
    onRefresh: PropTypes.func
};

export default React.memo(StatusBar);
