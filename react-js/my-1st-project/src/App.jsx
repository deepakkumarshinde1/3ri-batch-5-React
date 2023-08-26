import Header from "./components/Header";
import InputArea from "./components/InputArea";
import RefInput from "./components/RefInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <>
      <section className="container-fluid">
        <section className="row">
          <section className="col-lg-6 col-10 m-auto">
            {/* <Header text="Todo App" />
            <InputArea />
            <TodoList /> */}
            <RefInput />
          </section>
        </section>
      </section>
    </>
  );
};

export default App;
