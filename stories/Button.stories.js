import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/atoms/button';
import Flex from '../src/components/flex';
import {
  Sizes as ButtonSizes,
  Types as ButtonTypes
} from '../src/utils/Everything';

storiesOf('Button', module)
  .add('types', () => (
    <Flex wrap={'true'} align={'center'}>
      <Button>Default</Button>
      <Button type={ButtonTypes.PRIMARY} onClick={() => alert('you clicked!!')}>
        Primary
      </Button>
      <Button type={ButtonTypes.DANGER}>Danger</Button>
      <Button type={ButtonTypes.DARK}>Dark</Button>
      <Button disabled={true}>Disabled</Button>
      <Button type={ButtonTypes.LINK}>Link</Button>
    </Flex>
  ))
  .add('sizes', () => (
    <Flex wrap={'true'} align={'center'}>
      <Button size={ButtonSizes.TINY} type={ButtonTypes.PRIMARY}>
        Primary
      </Button>
      <Button type={ButtonTypes.PRIMARY}>Primary</Button>
      <Button size={ButtonSizes.LARGE} type={ButtonTypes.PRIMARY}>
        Primary
      </Button>
    </Flex>
  ));
