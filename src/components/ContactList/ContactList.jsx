import { useDispatch, useSelector } from "react-redux"
import { StyledList, StyledUl } from "./StyledList"
import { selectVisibleContacts } from "Redux/selectors"
import { deleteContact } from "Redux/operations";

export const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts);
    const dispatch = useDispatch();

    return (
        <StyledUl>
            {contacts.map(({name, phone, id}) =>
                <StyledList key={id}>
                    <p>{name}:{' ' + phone}</p>
                    <button onClick={() => {
                        dispatch(deleteContact(id));
                    }}>Delete</button>
                </StyledList>
            )}
        </StyledUl>
    )
}