import { render, screen } from "@testing-library/react";
import UserList from './UserList';

it('render one row per user', () => {
    // Render the component
    const users = [
        { name: 'erika', email: 'erika@gmail.com' },
        { name: 'raquel', email: 'raquel@gmail.com '}
    ]
    render(<UserList users={users}/>)

    // Find all the rows in the table
    screen.logTestingPlaygroundURL()

    // Assertion: correct number of rows in the table
})

it('render the email and  name of each user', () => {

})