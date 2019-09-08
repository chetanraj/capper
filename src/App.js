import React, { Component } from 'react';
import styled from 'styled-components';
import { space, layout } from 'styled-system';

import './App.scss';
import Alert from './components/atoms/alert';
import Badge from './components/atoms/badge';
import Button from './components/atoms/button';
import Element from './components/atoms/element';
import Flex from './components/flex';
import Heading from './components/atoms/heading';
import Icon from './components/atoms/icon';
import Spinner from './components/atoms/spinner';
import Text from './components/atoms/text';

import {
  Sizes as ButtonSizes,
  Types as AlertTypes,
  Types as BadgeTypes,
  Types as ButtonTypes
} from './utils/Everything';

import { Colors } from './tokens/colors';

const Container = styled.div`
  ${space}
  ${layout}
`;

export default class App extends Component {
  onDismiss() {
    console.log('onDismiss');
  }

  render() {
    return (
      <Container m="0 auto" mb="2em" width="calc(100vw - 20%)" className="App">
        <Heading opacity=".75" size={2}>
          Spinners
        </Heading>
        <Flex wrap={'true'} align={'center'}>
          <Spinner color={Colors.DEFAULT} />
          <Spinner color={Colors.PRIMARY} />
          <Spinner color={Colors.DANGER} />
          <Spinner color={Colors.DARK} />
          <Spinner color={'#fb0091'} />
        </Flex>
        <Heading opacity=".75" size={2}>
          Colors
        </Heading>
        <Flex wrap={'true'} align={'center'}>
          <Element
            bg={Colors.DEFAULT}
            width={30}
            height={30}
            borderRadius={4}></Element>
          <Element
            bg={Colors.PRIMARY}
            width={30}
            height={30}
            borderRadius={4}></Element>
          <Element
            bg={Colors.DANGER}
            width={30}
            height={30}
            borderRadius={4}></Element>
          <Element
            bg={Colors.DARK}
            width={30}
            height={30}
            borderRadius={4}></Element>
          <Element
            bg={Colors.LIGHT}
            width={30}
            height={30}
            borderRadius={4}></Element>
          <Element
            bg={Colors.WHITE}
            width={30}
            height={30}
            borderRadius={4}></Element>
        </Flex>

        <Heading opacity=".75" size={2}>
          Buttons
        </Heading>

        <Flex wrap={'true'} align={'center'}>
          <Button>Default</Button>
          <Button
            type={ButtonTypes.PRIMARY}
            onClick={() => alert('you clicked!!')}>
            Primary
          </Button>
          <Button type={ButtonTypes.DANGER}>Danger</Button>
          <Button type={ButtonTypes.DARK}>Dark</Button>
          <Button disabled={true}>Disabled</Button>
          <Button type={ButtonTypes.LINK}>Link</Button>
        </Flex>

        <Heading opacity=".75" size={2}>
          Small Buttons
        </Heading>
        <Button size={ButtonSizes.TINY} type={ButtonTypes.PRIMARY}>
          Danger
        </Button>

        <Heading opacity=".75" size={2}>
          Large Buttons
        </Heading>
        <Button size={ButtonSizes.LARGE} type={ButtonTypes.PRIMARY}>
          Danger
        </Button>

        <Heading opacity=".75" size={2}>
          Buttons with icon
        </Heading>
        <Flex wrap={'true'} align={'center'}>
          <Button icon="credit-card" type={ButtonTypes.PRIMARY} color="#fff">
            Pay Now
          </Button>

          <Button icon="mail">Send Mail</Button>
          <Button
            color="#fff"
            icon="git-pull-request"
            type={ButtonTypes.DANGER}>
            Decline Pull Request
          </Button>
        </Flex>

        <Heading size={1}>Heading 1</Heading>
        <Heading size={2}>Heading 2</Heading>
        <Heading size={3}>Heading 3</Heading>
        <Heading size={4}>Heading 4</Heading>
        <Heading size={5}>Heading 5</Heading>
        <Heading size={6}>Heading 6</Heading>

        <Heading size={2}>Heading with color</Heading>
        <Heading size={1} color="#5269e7">
          H1
        </Heading>

        <Heading size={2}>Icons</Heading>
        <Flex align={'center'} justify={'space-evenly'}>
          <Icon icon="github" />
          <Icon icon="gitlab" />
          <Icon color="#833AB4" icon="instagram" />
          <Icon icon="facebook" />
        </Flex>

        <Heading size={2}>Badge</Heading>
        <Flex align={'center'} justify={'space-evenly'}>
          <Badge>23</Badge>
          <Badge type={BadgeTypes.PRIMARY}>23</Badge>
          <Badge type={BadgeTypes.DANGER}>23</Badge>
          <Badge type={BadgeTypes.DARK}>23</Badge>
        </Flex>

        <Heading size={2}>Alert</Heading>
        <Alert>This is default alert!</Alert>
        <Alert color="WHITE" type="primary">
          This is primary alert!
        </Alert>
        <Alert color="WHITE" type={AlertTypes.DANGER}>
          This is danger alert!
        </Alert>
        <Alert type={AlertTypes.LIGHT}>This is a light alert!</Alert>
        <Alert
          dismiss={this.onDismiss}
          theme="dark"
          color="WHITE"
          type={AlertTypes.DARK}>
          This is dark alert!
        </Alert>

        <Heading size={2}>Text</Heading>
        <Text mb={3}>Hello World!</Text>
        <Text color={Colors.PRIMARY}>Hello World in color!</Text>
      </Container>
    );
  }
}
