import Child1 from "./components/Child1";
import { useState } from "react";
function App() {
  const [money , SetMoney]=useState(1000)
  return (
    <div>
      <Child1 money={money} />
    </div>
  );
}

export default App;
