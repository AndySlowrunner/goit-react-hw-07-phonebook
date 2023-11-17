import { useDispatch, useSelector } from "react-redux";
import { StyledFilter } from "./StyledFilter";
import { setFilter } from "Redux/filterSlice";
import { selectFilter } from "Redux/selectors";

export const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(selectFilter);
    const handleChange = (e) => {
        dispatch(setFilter(e.target.value));
    }

    return (
        <StyledFilter>
            <label>Find contacts by name</label>
            <input
                type="text"
                value={value}
                onChange={handleChange}
            />
        </StyledFilter>
    );
}