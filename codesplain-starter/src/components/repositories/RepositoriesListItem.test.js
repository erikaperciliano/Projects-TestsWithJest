import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RepositoriesListItem from './RepositoriesListItem'

const renderComponent = () => {
    const repository = {
        full_name: 'facebook/react',
        language: 'Javascript',
        description: ' A js library',
        owner: 'facebook',
        name: 'react',
        html_url: 'https://github.com/facebook/react',
    }

    render(
        <MemoryRouter>
            <RepositoriesListItem  repository={repository}/>
        </MemoryRouter>
    );
}
    it('shows a link to the github homepage for this repository', async () => {
        renderComponent();

        await screen.findByRole('img', { name: /javascript/i})
    })

