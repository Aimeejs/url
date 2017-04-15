Hash
---

#### Usage
```js
import hash from 'url/hash'
```

```js
const url = 'http://127.0.0.1/#home/arc=1&aid=2'

hash.getArgs() => 
{
	arc: 1,
	aid: 2
}

hash.getHash() => 'home'
```

```js
const url = 'http://127.0.0.1/#home/arc=1&aid=2'

hash.setArgs({aid:3, sid:4}) => 'http://127.0.0.1/#home/arc=1&aid=3&sid=4'
```