Default
```js
<Button label="Default" />
```

Example:
```js
import Flex from '../../flex';

<Flex wrap={"true"} align={'center'}>
    <Button label="Default" />
    <Button
        type={"primary"}
        onClick={() => alert("you clicked!")}
        label="Primary"
    />
    <Button type={"danger"} label="Danger" />
    <Button type={"dark"} label="Dark" />
    <Button disabled={true} label="Disabled" />
    <Button type={"link"} label="Link" />
</Flex>
```

Small Button:
```js
<Button size="tiny" type="primary" label="Small" />
```

Large Button:
```js
<Button size="large" type="primary" label="Large" />
```

Button with icon:
```js
<Button icon="credit-card" type="primary" color="#fff" label="Pay Now" />
```

Button with only icon:
```js
import Flex from '../../flex';

<Flex wrap={'true'} align={'center'}>
    <Button icon="gift" />
    <Button color="#fff" icon="sun" type="primary" />
    <Button color="#fff" icon="moon" type="danger" />
    <Button color="#fff" icon="music" type="dark" />
</Flex>
```
