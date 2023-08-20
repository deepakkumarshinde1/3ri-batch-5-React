import Header from "./components/Header";
import InputArea from "./components/InputArea";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <>
      <section className="container-fluid">
        <section className="row">
          <section className="col-lg-6 col-10 m-auto">
            <Header text="Todo App" />
            <InputArea />
            <TodoList />
          </section>
        </section>
      </section>
    </>
  );
};

export default App;
