import { useState } from "react";
import "./Form.css";

const quantities = ["0-100", "100-500", "500-2000"];
const Form = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    quantity: "",
    price: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <input
            onChange={handleChange}
            value={inputs.title}
            type="text"
            name="title"
            placeholder="Title"
          />
          <input
            onChange={handleChange}
            value={inputs.description}
            type="text"
            name="description"
            placeholder="Description"
          />
          <input
            onChange={handleChange}
            value={inputs.price}
            type="number"
            name="price"
            placeholder="Price"
          />
          <select
            onChange={handleChange}
            value={inputs.quantity}
            name="quantity"
          >
            {quantities.map((item) => (
              <option key={item} value={quantities[item]}>
                {item}
              </option>
            ))}
          </select>
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
