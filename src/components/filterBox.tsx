import styled from "styled-components";
import Icon from "../utils/Icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changedFilters } from "../reducer/features/filters";

function FilterBox() {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("Title");
  const dispatch = useDispatch();
  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    const payload = { filters: newFilter };
    dispatch(changedFilters(payload));
    setFilter(newFilter);
  };

  return (
    <FilterWrapper>
      <label>
        Sort by
        <select
          className="select"
          name=""
          value={filter}
          onChange={(e) => handleFilterChange(e)}
        >
          <option value="title">Title</option>
          <option value="date">Date Created</option>
          <option value="modified">Last Modified</option>
        </select>
      </label>
      <button
        className="sort-order"
        onClick={() => setAsc((prev) => !prev)}
      >
        {asc ? (
          <Icon
            name="sort-asc"
            size={32}
          />
        ) : (
          <Icon
            name="sort-dsc"
            size={32}
          />
        )}
      </button>
    </FilterWrapper>
  );
}

const FilterWrapper = styled.div`
  .sort-order {
    background: none;
    border: none;
    cursor: pointer;
    vertical-align: middle;
    padding: 0;
    color: var(--text);
  }
  .select {
    margin: 0 1rem;
    background: none;
    color: var(--text);
    border: 1px solid var(--text);
    border-radius: var(--border-sm);
    padding: 0.5rem;
    font-size: 1rem;
  }
`;

export default FilterBox;
