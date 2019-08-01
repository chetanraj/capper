import React, { Component } from 'react';
import './App.scss';
import Alert from './components/atoms/alert';
import Badge from './components/atoms/badge';
import Button from './components/atoms/button';
import Heading from './components/atoms/heading';
import Icon from './components/atoms/icon';
import Flex from './components/flex';
import Element from './components/atoms/element';
import Text from './components/atoms/text';
import {
  Sizes as ButtonSizes,
  Types as AlertTypes,
  Types as BadgeTypes,
  Types as ButtonTypes
} from './utils/Everything';
import { Colors } from './tokens/colors';

export default class App extends Component {
  onDismiss() {
    console.log('onDismiss');
  }

  render() {
    return (
      <div className="App">
        <Heading size={2} label="Buttons" />

        <Flex wrap={'true'} align={'center'}>
          <Button label="Default"></Button>
          <Button
            type={ButtonTypes.PRIMARY}
            onClick={() => alert('you clicked!!')}
            label="Primary"
          />
          <Button type={ButtonTypes.DANGER} label="Danger" />
          <Button type={ButtonTypes.DARK} label="Dark" />
          <Button disabled={true} label="Disabled" />
          <Button type={ButtonTypes.LINK} label="Link" />
        </Flex>

        <Heading size={2} label="Small Buttons" />
        <Button
          size={ButtonSizes.TINY}
          type={ButtonTypes.PRIMARY}
          label="Danger"
        />

        <Heading size={2} label="Large Buttons" />
        <Button
          size={ButtonSizes.LARGE}
          type={ButtonTypes.PRIMARY}
          label="Danger"
        />

        <Heading size={2} label="Buttons with icon" />
        <Button
          icon="credit-card"
          type={ButtonTypes.PRIMARY}
          color="#fff"
          label="Pay Now"
        />

        <Heading size={2} label="Buttons with only icon" />
        <Flex wrap={'true'} align={'center'}>
          <Button icon="gift" />
          <Button color="#fff" icon="sun" type={ButtonTypes.PRIMARY} />
        </Flex>

        <Heading size={2} label="Heading" />
        <Heading size={1} label="H1" />
        <Heading size={2} label="H2" />
        <Heading size={3} label="H3" />
        <Heading size={4} label="H4" />
        <Heading size={5} label="H5" />
        <Heading size={6} label="H6" />

        <Heading size={2} label="Heading with color" />
        <Heading size={1} color="#5269e7" label="H1" />

        <Heading size={2} label="Icons" />
        <Flex align={'center'} justify={'space-evenly'}>
          <Icon icon="github" />
          <Icon icon="gitlab" />
          <Icon color="#833AB4" icon="instagram" />
          <Icon icon="facebook" />
        </Flex>

        <Heading size={2} label="Badge" />
        <Flex align={'center'} justify={'space-evenly'}>
          <Badge>23</Badge>
          <Badge type={BadgeTypes.PRIMARY}>23</Badge>
          <Badge type={BadgeTypes.DANGER}>23</Badge>
          <Badge type={BadgeTypes.DARK}>23</Badge>
        </Flex>

        <Heading size={2} label="Alert" />
        <Alert>This is default alert!</Alert>
        <Alert color="WHITE" type="primary">
          This is primary alert!
        </Alert>
        <Alert color="WHITE" type={AlertTypes.DANGER}>
          This is danger alert!
        </Alert>
        <Alert type={AlertTypes.LIGHT}>This is dark alert!</Alert>
        <Alert
          dismiss={this.onDismiss}
          theme="dark"
          color="WHITE"
          type={AlertTypes.DARK}>
          This is dark alert!
        </Alert>

        <Heading size={2} label="Element" />
        <Element p={3} as="span">
          I am Element in span clothing!!
        </Element>

        <Heading size={2} label="Text" />
        <Text>Hello World!</Text>
        <Text ml={20} color={Colors.PRIMARY}>
          Hello World in color!
        </Text>
        <Text textAlign="right">Hello World to right!</Text>
      </div>
    );
  }
}
