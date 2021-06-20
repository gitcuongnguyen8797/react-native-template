import { action } from '@storybook/addon-actions';
import { text,select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '../../../src/components/Button'
import CenterView from '../CenterView';


const label = 'Colors';
const options = ['default', 'success', 'danger', 'warning', 'primary', 'info']
const defaultValue = 'red';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')} btnName={text('Button text', 'Hello Button')} color={select(label,options)}></Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')} btnName={text('Button Text', '😀 😎 👍 💯')}></Button>
  ));
