import { render, screen } from "@testing-library/react"
import user from '@testing-library/user-event'
import UserForm from './UserForm'

test('it shows two inputs and a button', () => {
    // Render the component
    render(<UserForm/>);

    // Manipulate the component or find an element in it
    const inputs = screen.getAllByRole('textbox')
    const button = screen.getByRole('button');

    // Assertion - make sure the component is doing
    // what we expect it to do
    expect(inputs).toHaveLength(2)
    expect(button).toBeInTheDocument()
});

test('its calls onUserAdd when the form is submitted', async() => {
    // Try to render my component
    render(<UserForm />);

    // Find the two inputs
    const [ nameInput, emailInput ] = screen.getAllByRole('textbox');

    // Simulate typing in a name
    await user.click(nameInput)
    await user.keyboard('Erika')

    // Simulate typing in an email
    await user.click(emailInput)
    await user.keyboard('erika@gmail.com')
})
