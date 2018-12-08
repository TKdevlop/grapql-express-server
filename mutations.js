import Todo from "./models/Todo";

export default {
  async getTodos() {
    const todos = await Todo.find();
    return todos;
  },

  async getTodo({ id }) {
    const todo = await Todo.findById(id);
    return todo;
  },

  async createTodo({ name, completed }) {
    const [todo] = await Todo.create([
      {
        name,
        completed
      }
    ]);
    return todo;
  },

  async deleteTodo({ id }) {
    if (await Todo.findByIdAndDelete(id)) {
      return "Todo was successfully deleted";
    }
    return "Todo not found!!";
  },
  async updateTodo({ id, name, completed }) {
    const todo = await Todo.findByIdAndUpdate(
      id,
      { name, completed },
      { new: true }
    );

    if (todo) {
      return todo;
    }
  }
};
