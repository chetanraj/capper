Default
```js
<Button>Default</Button>
```

Example:
```js
import Flex from '../../flex';

<Flex wrap={"true"} align={'center'}>
    <Button>Default</Button>
    <Button
        type={"primary"}
        onClick={() => alert("you clicked!")}>
        Primary
    </Button>
    <Button type={"danger"}>Danger</Button>
    <Button type={"dark"}>Dark</Button>
    <Button disabled={true}>Disabled</Button>
    <Button type={"link"}>Link</Button>
</Flex>
```

Small Button:
```js
<Button size="tiny" type="primary">Small</Button>
```

Large Button:
```js
<Button size="large" type="primary">Large</Button>
```

Button with icon:
```js
<Button icon="credit-card" type="primary" color="#fff">Pay Now</Button>
```
