import React from "react";

export default function AscDesc() {
  return (
    <div>
      <label className="radio-inline">
        <input type="radio" name="desc" value="desc" active />
        Descending
      </label>{" "}
      <label className="radio-inline">
        <input type="radio" name="asc" value="asc" />
        Ascending
      </label>
    </div>
  );
}
