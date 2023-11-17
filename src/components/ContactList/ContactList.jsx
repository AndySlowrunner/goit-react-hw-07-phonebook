import { useDispatch, useSelector } from "react-redux"
import { StyledList, StyledUl } from "./StyledList"
import { selectContacts, selectFilter } from "Redux/selectors"
import { deleteContact } from "Redux/contactsSlice";

export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filters = useSelector(selectFilter);
    const dispatch = useDispatch();

    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filters.toLowerCase()));
    
    return (
        <StyledUl>
            {visibleContacts.map(({name, number, id}) =>
                <StyledList key={id}>
                    <p>{name}:{' ' + number}</p>
                    <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
                </StyledList>
            )}
        </StyledUl>
    )
}