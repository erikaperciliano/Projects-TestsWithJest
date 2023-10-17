import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createServer } from "../../test/server";
import AuthButtons from "./AuthButtons";

const renderComponent = () => {
    return render(
        <MemoryRouter>
            <AuthButtons />
        </MemoryRouter>
    );
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
        renderComponent();
        await screen.findAllByRole('link');
    });
    test('signed in, sign out is not visible', async() => {
        renderComponent();
        await screen.findAllByRole('link');
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



