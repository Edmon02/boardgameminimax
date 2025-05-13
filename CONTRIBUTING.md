# Contributing to BoardGameMinimax

Thank you for your interest in contributing to BoardGameMinimax! This project is a web-based board game powered by the Minimax algorithm, and we welcome contributions from the community to enhance its features, improve code quality, and make it more accessible. Whether you're fixing bugs, adding features, or improving documentation, your efforts are appreciated.

## How to Contribute

### 1. Setting Up the Project
1. **Fork the Repository**: Click the "Fork" button on the [GitHub repository](https://github.com/Edmon02/boardgameminimax) to create your own copy.
2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/Edmon02/boardgameminimax.git
   cd boardgameminimax
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:5173` to test your changes.

### 2. Finding Issues to Work On
- Check the [issue tracker](https://github.com/Edmon02/boardgameminimax/issues) for open issues labeled `good first issue` or `help wanted`.
- Propose new features or report bugs by creating a new issue with a clear description.

### 3. Making Changes
1. **Create a Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
   Use descriptive branch names (e.g., `fix/minimax-bug`, `feature/add-difficulty-levels`).
2. **Follow Coding Standards**:
   - Write clean, modular JavaScript code in `src` (e.g., `ai/minimax.js`, `game/GameBoard.js`).
   - Add JSDoc comments for public functions.
   - Use Prettier for formatting and ESLint for linting (run `npm run lint` and `npm run format`).
   - Ensure your changes are accessible (e.g., add ARIA labels in `ui/UIController.js`).
3. **Test Your Changes**:
   - Add or update unit tests in the `test` directory using Jest (e.g., `test/game.test.js`).
   - Run tests with `npm test` to ensure no regressions.
4. **Commit Your Changes**:
   ```bash
   git commit -m "Add feature: your feature description"
   ```
   Use clear, concise commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) format (e.g., `fix: resolve minimax depth bug`).

### 4. Submitting Your Contribution
1. **Push Your Branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Open a Pull Request**:
   - Go to the [repository](https://github.com/Edmon02/boardgameminimax) and create a pull request.
   - Provide a detailed description of your changes, referencing any related issues (e.g., `Fixes #123`).
   - Ensure your PR passes the CI checks (linting, tests, build).
3. **Respond to Feedback**: Address any review comments promptly to keep the process smooth.

### 5. Contribution Types
We welcome contributions in many forms, including:
- **Code**: Bug fixes, new features (e.g., alpha-beta pruning in `minimax.js`), or performance optimizations.
- **Tests**: Expanding test coverage in `test/game.test.js`.
- **Documentation**: Improving README, adding JSDoc, or creating a `docs/ARCHITECTURE.md`.
- **UI/UX**: Enhancing `styles.css` or adding accessibility features.
- **Issues**: Reporting bugs or suggesting features via the issue tracker.

## Code of Conduct
All contributors are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Be respectful, inclusive, and collaborative in all interactions.

## Getting Help
- Join the [GitHub Discussions](https://github.com/Edmon02/boardgameminimax/discussions) for questions or ideas.
- Reach out via the [issue tracker](https://github.com/Edmon02/boardgameminimax/issues) for specific problems.
- Email: your-email@example.com.

Thank you for helping make BoardGameMinimax better!
