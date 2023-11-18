import { StyledDiv } from "./ContactForm/StyledForm";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./ContactFilter/ContactFilter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "Redux/operations";
import { selectError, selectIsLoading } from "Redux/selectors";

export const App = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);
    
    return (
        <StyledDiv>
            <h1>Phonebook</h1>
            <ContactForm/>
            <h2>Contacts</h2>
            <Filter />
            {isLoading && !error && <b>Request in progress...</b>}
            <ContactList/>
        </StyledDiv>
    );
 };