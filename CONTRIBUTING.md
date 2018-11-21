# Contributing
So you're thinking about contributing to the Sticky Website, great!
To make sure every contributer is on the same 'page', the CommIT team advises to keep the following guidelines in mind when contributing.

#### Branching Strategy
For branching, we apply the same branching strategy as we use in Koala:
- `feature/` for new features.
- `bug/` for bugfixes.
- `doc/` for documentation.
- `test/` for testing.
- `debt/` for refactoring and enhancements.

#### Commit Messages
Please make sure to write descriptive commit messages:
1. The header should be 72 characters or less.
2. Write messages in the imperative: "Fix bug X", "Add feature Y", etc.
3. Reference issue in commit that fixes it: "Fixes #12: Remove bug Z".
4. Add a body to the message in which you elaborate on the header.

## Tips for easier contributing
We use [Prettier](https://github.com/prettier/prettier) which formats documents based on several rules. Text-editors such as [VS Code](https://code.visualstudio.com/) have extensions for Prettier, which combined with a little change in settings, 'Prettyfies' documents automatically on save. This is recommend, as it makes sure that you don't have to run a `git --amend` when the Prettify-hook is run post-commit.  
