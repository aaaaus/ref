### React.createElement

JSX elements are just syntactic sugar for calling React.createElement(*component, props, ...children*).

Arguments:
* component (variable), or element (string, e.g. 'div')
* props (object)
* children (string or variable)

```javascript
React.createElement('div', {}, 'this will be text inside my div tags');

React.createElement(ContentContainer, this.props);
```
