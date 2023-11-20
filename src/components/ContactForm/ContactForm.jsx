import { Formik, Field } from "formik";
import { StyledForm, ButtomStyle } from "./StyledForm";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "Redux/selectors";
import { addContact } from "Redux/operations";

const schema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required(),
});

export const ContactForm = () => {
    const dispatch = useDispatch();
        const items = useSelector(selectContacts);

    const handleSubmit = (values, {resetForm}) => {      
        const isExist = items.some(item => item.name.toLowerCase() === values.name.toLowerCase());
        
        if (isExist) {
            alert(`${values.name} is already in contacts.`);
            return
        }
        
        dispatch(addContact({ ...values }));
        resetForm();
    };
    
    return (
        <Formik
            initialValues={{
                name: '',
                phone: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={schema}
        >
            <StyledForm>
                <label>Name</label>
                <Field
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <label>Number</label>
                <Field
                    type="tel"
                    name="phone"
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <ButtomStyle type="submit">Add contact</ButtomStyle>
            </StyledForm>
        </Formik>
    );
};