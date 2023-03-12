// pages/index.js

import Head from "next/head";
import TodoList from "../../components/TodoList"
import TodoForm from "../../components/TodoForm";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../../config/rootReducer";

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todo List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Provider store={store}>
          <TodoForm />
          <TodoList />
        </Provider>
      </main>
    </div>
  );
}
