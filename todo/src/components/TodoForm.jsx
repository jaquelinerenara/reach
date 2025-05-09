import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  value: yup.string().required("O título é obrigatório"),
  category: yup.string().required("A categoria é obrigatória"),
});

export const TodoForm = ({ addTodo }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    addTodo(data.value, data.category);
    reset();
  };

  return (
    <div className="todo-form">
      <h2>Criar Tarefas:</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Digite o título"
          {...register("value")}
        />
        {errors.value && <p className="error">{errors.value.message}</p>}

        <select {...register("category")}>
          <option value="">Selecione uma Categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        {errors.category && <p className="error">{errors.category.message}</p>}

        <button className="btn-submit" type="submit">
          Criar Tarefa
        </button>
      </form>
    </div>
  );
};
