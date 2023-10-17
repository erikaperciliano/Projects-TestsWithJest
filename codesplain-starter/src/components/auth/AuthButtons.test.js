import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createServer } from "../../test/server";
import AuthButtons from "./AuthButtons";

const renderComponent = async () => {
    render(
        <MemoryRouter>
            <AuthButtons />
        </MemoryRouter>
    );
    await screen.findAllByRole('link');
}

describe('when user is not signed in', () => {
// createServer() --> GET '/api/user' --> { user: null }
createServer([
    {
        path: '/api/user',
        res: () => {
            return { user: null };
        },
    },
]);

    test('signed in, sign in and sign up are visible', async() => {
        await renderComponent();

        const signInButton = screen.getByRole('link', {
            name: /sign in/i
        });
        const signUpButton = screen.getByRole('link', {
            name: /sign up/i
        });

        expect(signInButton).toBeInTheDocument();
        expect(signInButton).toHaveAttribute('href', '/signin');

        expect(signUpButton).toBeInTheDocument();
        expect(signUpButton).toHaveAttribute('href', '/signup');
    });
    test('signed in, sign out is not visible', async() => {
        await renderComponent();

        const signOutButton = screen.queryByRole('link', {
            name: /sign out/i
        });

        expect(signOutButton).not.toBeInTheDocument();
    });
});

/*describe('when user is asigned in', () => {
// createServer() --> GET '/api/user' --> { user: {id: 3, email:'asdf@a.com' }}
createServer([
    {
        path: '/api/user',
        res: () => {
            return { user: null };
        },
    },
]);
    test('when user is signed in, sign in and sign up are not visible', async() => {
        console.log('Test 3');
    });
    test('when user is signed in, sign out is visible', async() => {
        console.log('Test 4');
    });
});*/



