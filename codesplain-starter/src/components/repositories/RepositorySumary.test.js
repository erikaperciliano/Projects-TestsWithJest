import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

it('displays the primary language  of the repository ', () => {
    const repository = {
        stargazers_count: 4,
        open_issues: 5,
        forks: 3,
        language: 'python'
    }

    render(<RepositoriesSummary repository={repository}/>);

    const language = screen.getByText(/python/i);
    expect(language).toBeInTheDocument();
})

it('displays information  about the repository ', () => {
    const repository = {
        stargazers_count: 4,
        open_issues: 5,
        forks: 3,
        language: 'python'
    }

    render(<RepositoriesSummary repository={repository}/>);

    for(let key in repository){
        const value = repository[key]
        const element = screen.getByText(new RegExp(value));

        expect(element).toBeInTheDocument();
    }

    const language = screen.getByText(/python/i);
    expect(language).toBeInTheDocument();
})