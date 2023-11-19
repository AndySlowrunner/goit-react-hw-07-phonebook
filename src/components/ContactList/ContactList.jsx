import { useDispatch, useSelector } from "react-redux"
import { StyledList, StyledUl } from "./StyledList"
import { selectVisibleContacts } from "Redux/selectors"
import { deleteContact } from "Redux/operations";

export const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts);
    // const filters = useSelector(selectFilter);
    const dispatch = useDispatch();

    // const visibleContacts = contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(filters.toLowerCase()));
    
    return (
        <StyledUl>
            {contacts.map(({name, number, id}) =>
                <StyledList key={id}>
                    <p>{name}:{' ' + number}</p>
                    <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
                </StyledList>
            )}
        </StyledUl>
    )
}