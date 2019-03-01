# Contributing
So you're thinking about contributing to the Sticky Website, great!
To make sure every contributor is on the same 'page', the CommIT team advises to keep the following guidelines in mind when contributing.

## Branching Strategy
For branching, we apply the same branching strategy as we use in Koala:
- `feature/` for new features.
- `bug/` for bugfixes.
- `doc/` for documentation.
- `test/` for testing.
- `debt/` for refactoring and enhancements.

## Commit Messages
Please make sure to write descriptive commit messages:
1. The header should be 72 characters or less.
2. Write messages in the imperative: "Fix bug X", "Add feature Y", etc.
3. Reference issue in commit that fixes it: "Fixes #12: Remove bug Z".
4. Add a body to the message in which you elaborate on the header.

### General guidelines
#### Semantic UI grid vs CSS grid
Both can be used to accomplish te same layout, but we found that using Semantic UI's grid when the cells are different in size is less readable then using CSS Grid's template areas.
However, when all the cells are the same size, one should use Semantic UI's grid, because then one can reuse their media-queries for responsiveness.
In the future we might want to use [atomic-layout](https://github.com/kettanaito/atomic-layout)'s layout instead of CSS Grid (like in #70), but it still has [some issues with SSR](https://github.com/kettanaito/atomic-layout/issues/72).

#### React Hooks
In new components or while refactoring old ones, the new React Hooks API should be used. Check out [their motivation](https://reactjs.org/docs/hooks-intro.html#motivation) for why.

#### Styled Components
We haven't done so from the start, but we found that using `const StyledComponent = styled(Component)` instead of making a wrapper results in cleaner code.
The old wrappers still have to be refactored away (see #114).

#### React Fragments
Instead of a plain `<div>` the React Fragment `<>` should be used to group components together.
These plain `<div>`'s also still have to be refactored away in the current code (see #115).

## Tips for easier contributing
We use [Prettier](https://github.com/prettier/prettier) which formats documents based on several rules. Text-editors such as [VS Code](https://code.visualstudio.com/) have extensions for Prettier, which combined with a little change in settings, 'Prettyfies' documents automatically on save. This is recommend, as it makes sure that you don't have to run a `git --amend` when the Prettify-hook is run post-commit.  
