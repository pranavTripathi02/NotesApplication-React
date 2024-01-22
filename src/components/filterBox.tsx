import styled from "styled-components";
import Icon from "../utils/Icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changedFilters } from "../reducer/features/filters";
import { TFilterType } from "../types";

function FilterBox() {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState<TFilterType>("title");
  const dispatch = useDispatch();

  const handleSort = () => {
    updateFilterState({ sorting: !asc });
    setAsc((prev) => !prev);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter = e.target.value;
    if (
      newFilter === "title" ||
      newFilter === "createdOn" ||
      newFilter === "lastModified"
    ) {
      updateFilterState({ filterType: newFilter });
      setFilter(newFilter);
    }
  };

  const updateFilterState = ({
    filterType,
    sorting,
  }: {
    filterType?: TFilterType;
    sorting?: boolean;
  }) => {
    const payload = {
      filterType,
      sorting,
    };
    dispatch(changedFilters(payload));
  };
  // useEffect(() => {
  //   updateFilterState();
  // }, [asc, filter]);

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
          <option value="createdOn">Date Created</option>
          <option value="lastModified">Last Modified</option>
        </select>
      </label>
      <button
        className="sort-order"
        onClick={handleSort}
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
