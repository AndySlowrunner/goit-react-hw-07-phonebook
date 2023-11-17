import { StyledDiv } from "./ContactForm/StyledForm";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./ContactFilter/ContactFilter";

export const App = () => {
        
    return (
        <StyledDiv>
            <h1>Phonebook</h1>
            <ContactForm/>
            <h2>Contacts</h2>
            <Filter/>
            <ContactList/>
        </StyledDiv>
    );
 };