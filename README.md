# routing-sharp-for-react-redux

in App.js:

```jsx
import {routing} from './modules/routing'

function App() {

  useEffect(() => { dispatch(routing()) },[])

  const route = useSelector(
    state => state.app.route
  )
  
  return (
    &lt;div className="App"&gt;
  
        {
        route === '#profile' &&
        &lt;Profile /&gt;
        }
        
    &lt;/div&gt;
  );
}

export default App;
```

in .html:

```html
&lt;a href="#profile"&gt;Profile&lt;/a&gt;
```
