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