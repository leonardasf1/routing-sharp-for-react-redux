# routing-sharp-for-react-redux

routing on window.location.hash 

in App.js:

```jsx
import {routing} from './modules/routing'

function App() {

  useEffect(() => { dispatch(routing()) },[])

  const route = useSelector(
    state => state.app.route
  )
  
  return (
    <div className="App">
  
        {
        route === '#profile' &&
        <Profile />
        }
        
    </div>
  );
}

export default App;
```

in .html:

```html
<a href="#profile">Profile</a>
```
