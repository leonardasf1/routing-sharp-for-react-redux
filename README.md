# routing-sharp-for-reactJS

in App.js:
<pre><code>
import {routing} from './modules/routing'

function App() {

  const [pathState, setPathState] = useState('')
  routing(setPathState)

  return (
    &lt;div className="App"&gt;
  
        {
        pathState === '#profile' &&
        &lt;Profile /&gt;
        }
        
    &lt;/div&gt;
  );
}

export default App;
</code></pre>

in .html:

<pre><code>
&lt;a href="#profile"&gt;Profile&lt;/a&gt;
</pre></code>
