import React from "react";
export default function APIbuttom({ FilterType }) {

  return (
    <div>
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => FilterType(e.target.value)}
      >
        <option value="DEFAULT" disabled>
          Type of:
        </option>
        <option value="ALL">All Games</option>
        <option value="API">API Games</option>
        <option value="DB">DB Games</option>
      </select>
    </div>
  );
}
