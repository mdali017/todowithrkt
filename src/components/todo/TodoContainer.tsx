import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { TTodo } from "@/redux/features/todoSlice";
import { useGetAllTodoQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // const { todos } = useAppSelector((state) => state.todos);

  // const { data, isLoading, isError } = useGetAllTodoQuery(undefined, {pollingInterval: 1000});
  const { data, isLoading, isError } = useGetAllTodoQuery(undefined);

  const todos = data?.data;

  isLoading ? <>Loading...</> : ""

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full  rounded-xl p-[5px]">
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-xl">
          <p>There is no task pending</p>
        </div> */}
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.map((item: TTodo, index: number) => (
            <TodoCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
