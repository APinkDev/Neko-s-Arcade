import React from "react";
export default function AlphabetButton({ FiltredAZ }) {

  return (
    <div>
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => FiltredAZ(e.target.value)}
      >
        <option value="DEFAULT" disabled>
          Sort by:
        </option>
        <option value="">All Games</option>
        <option value="AZ">AZ</option>
        <option value="ZA">ZA</option>
        <option value="RatingASC">Worse Rating</option>
        <option value="RatingDES">Best Rating</option>
      </select>
    </div>
  );
}
