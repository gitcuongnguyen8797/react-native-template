import React from 'react'
import PropTypes from 'prop-types';
import ListContainer from './ListContainer';

const propTypes = {
    list: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        status: PropTypes.number
    })
}

ListDevices.prototype = propTypes

export default function ListDevices({list}) {
    return (
        <ListContainer list={list}  />
    )
}