import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  add_transaction,
  update_balance,
  increment_treasury,
  decrement_treasury,
} from "../redux_components/actions";

function InputBar() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ message: "", money: "" });
    }
  }, [formState]);

  const onSubmit = (data) => {
    dispatch(add_transaction(data));

    if (data.category === "Add to treasury") {
      dispatch(increment_treasury(data.money));
    } else {
      dispatch(update_balance(data.money));
      dispatch(decrement_treasury(data.money));
    }
  };

  return (
    <div className="inputBar">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputSection">
          <input
            {...register("message", { required: true })}
            placeholder="Enter the message"
          />
          {errors?.message?.type === "required" && (
            <p>This field is required</p>
          )}
        </div>
        <div className="inputSection">
          <input
            type="number"
            {...register("money", { required: true })}
            placeholder="Enter the cost"
          />
          {errors?.money?.type === "required" && <p>This field is required</p>}
        </div>

        <div className="inputSection">
          <select {...register("category", { required: true })}>
            <option>Add to treasury</option>
            <option>Expense</option>
          </select>
        </div>
        <input type="submit" className="submitButton" />
      </form>
    </div>
  );
}

export default InputBar;
