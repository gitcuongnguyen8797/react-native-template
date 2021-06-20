import { action } from '@storybook/addon-actions';
import { array, text, object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from '../CenterView';
import ListDevices from '../../../src/components/ListDevices'
storiesOf('List', module)
  .add('lists of money', () => {
    const list = [
        { id: 1, name: 'Chi tiêu 1', status: 0 },
        { id: 2, name: 'Chi tiêu 2', status: 0 },
        { id: 3, name: 'Chi tiêu 3', status: 1 }
    ]
    return (
        <ListDevices list={object('list item', list)} />
    )
  })