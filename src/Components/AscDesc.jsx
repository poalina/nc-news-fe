import React from "react";

export default function AscDesc(props) {
  const handleChange = event => {
    const order = event.target.value;
    props.changeOrder(order);
  };
  return (
    <div>
      <label className="radio-inline">
        <input
          type="radio"
          name="desc"
          value="desc"
          onChange={handleChange}
          checked={props.order === "desc"}
        />
        Descending
      </label>{" "}
      <label className="radio-inline">
        <input
          type="radio"
          name="asc"
          value="asc"
          onChange={handleChange}
          checked={props.order === "asc"}
        />
        Ascending
      </label>
    </div>
  );
}
