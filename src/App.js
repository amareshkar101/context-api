
import './App.css';
import Message from "./component/Message"
import MessageState from './context/messageState';
import Counter from "./component/counter"


function App() {
  return (
    <>
      <MessageState>
      <Message/>
      </MessageState>
      <Counter/>
    </>
  );
}

export default App;
