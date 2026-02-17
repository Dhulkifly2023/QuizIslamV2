# Quiz Islam - AI Coding Agent Instructions

## Project Overview
**Quiz Islam** is an interactive web-based quiz application focused on Islamic knowledge (Quran and Prophet Muhammad). It's a vanilla JavaScript + HTML/CSS application with multiple game modes and difficulty levels.

**Key Architecture**: Single-page application with page-based routing (no framework). Each page has dedicated HTML, CSS, and JS files that work independently.

## Core Patterns & Conventions

### 1. Quiz Data Structure
All quiz modules follow an identical pattern for question banks:
```javascript
const bancoPerguntas = {
    iniciante: [ /* difficulty level */ ],
    intermediario: [ /* difficulty level */ ],
    avancado: [ /* difficulty level */ ]
};

// Each question object:
{
    pergunta: "Question text?",
    opcoes: ["option1", "option2", "option3", "option4"],
    correta: 0, // index of correct answer (0-3)
    explicacao: "Explanation shown after answer"
}
```
**Files**: [alcorao.js](alcorao.js), [muhammad.js](muhammad.js), [desafios-gerais.js](desafios-gerais.js)

### 2. Game State Management
The multiplayer module demonstrates the project's state management approach:
- **State object** contains all game data (player scores, current question index, game settings)
- **No persistence** between sessions (localStorage only for theme preference)
- **Direct DOM manipulation** - updates UI by querySelector and textContent
- **Game mode toggle** differentiates "questions-based" vs "time-based" gameplay

**File**: [multiplayer.js](multiplayer.js#L1-L15)

### 3. Page Navigation Pattern
All redirects use the same convention:
```javascript
function redirecionarPara(pagina) {
    window.location.href = pagina + '.html'; // or + '.html' if not included
}
```
Navigation occurs via onclick handlers in HTML or link redirects. No URL parameters - state is reset on each page load.

### 4. Styling Architecture
- **CSS Variables** for theming (dark/light mode via `[data-theme]` attribute)
- **Theme toggle** in navbar affects body's `data-theme` attribute
- **Mobile-responsive** with viewport meta tags and percentage-based sizing
- **Shared stylesheet** [style.css](css/style.css) includes base styles; each page has optional module-specific CSS

**Key Variables** (in `style.css`):
- `--primary-color`, `--secondary-color`, `--accent-color`, `--gold-color`
- Light mode overrides via `[data-theme="light"]` selector

### 5. UI Patterns
- **Modal-like screens**: Pages use `.screen` divs with `.active` class to show/hide content sections
- **Question display**: Questions, options, feedback all replace within same DOM container
- **Timer/Progress**: Updates via `textContent` (no re-rendering frameworks)
- **Particle effects**: Uses ionicons for icons and particles.js library for background animation

## Important Implementation Details

### Global Dependencies
- **Ionicons 7.1.0**: Embedded via CDN (sun/moon icons for theme toggle)
- **Particles.js**: Optional background animation (configured in script.js)
- **Google Fonts**: Poppins (primary) + Amiri (decorative/Arabic text)
- **No build process**: Plain HTML/CSS/JS - changes are live immediately

### Form/Input Handling
- Player names in multiplayer: `.value.trim()` with default fallback
- Game settings: `parseInt()` for numeric inputs, `.value` for selects
- Answer validation: Compare player choice index to `correta` index

### Difficulty Levels (Standard Naming)
All quiz modules use Portuguese difficulty names:
- `iniciante` = Beginner
- `intermediario` = Intermediate  
- `avancado` = Advanced

### Game Loop Pattern (Reference: multiplayer.js)
1. **Initialization**: Reset all player states, load questions, shuffle
2. **Display**: Show question for current player
3. **Input**: Listen for answer clicks, validate
4. **Feedback**: Show explanation, update score
5. **Progression**: Move to next question or end game
6. **Cleanup**: Stop timers, calculate results

### Score Calculation
- Correct answer: Points (usually 10 per question in basic mode)
- Incorrect: No points (count tracked but no penalty system implemented)
- Final results: Display score and percentage correct

## File Organization Quick Reference

| File | Purpose |
|------|---------|
| [index.html](index.html) | Landing page with theme toggle setup |
| [menuPrincipal.html](menuPrincipal.html) | Main menu with navigation cards |
| [alcorao.html](alcorao.html) / [js/alcorao.js](js/alcorao.js) | Quran quiz module |
| [muhammad.html](muhammad.html) / [js/muhammad.js](js/muhammad.js) | Prophet Muhammad quiz module |
| [desafios-gerais.html](desafios-gerais.html) / [js/desafios-gerais.js](js/desafios-gerais.js) | Mixed difficulty challenge |
| [multiplayer.html](multiplayer.html) / [js/multiplayer.js](js/multiplayer.js) | 2-player competitive mode |
| [modalidade.html](modalidade.html) / [js/modalidade.js](js/modalidade.js) | Category/difficulty selector |
| [css/style.css](css/style.css) | Base stylesheet (theme, animations, layout) |

## Common Tasks & Patterns

### Adding a New Quiz Module
1. Create `newTopic.html` (copy menuPrincipal.html as template)
2. Create `js/newTopic.js` with `bancoPerguntas` object containing difficulty levels
3. Implement game loop: `nivelAtual`, `perguntas[]`, `indiceAtual`, `pontos` variables
4. Add navigation card to menuPrincipal.html pointing to new page
5. Follow CSS naming: Use module-specific CSS file (e.g., `css/newTopic.css`)

### Updating Question Banks
- Edit the `bancoPerguntas` object in target JS file
- Ensure `correta` index matches correct option position (0-based)
- `explicacao` field optional but recommended for user learning

### Theme/Styling Changes
- Modify CSS variables in `:root` for global color changes
- Use `var(--primary-color)` pattern throughout
- Test both dark and light modes via theme toggle

### Debugging Quiz Logic
- Set breakpoints in browser DevTools on answer validation function
- Log `indiceAtual`, `perguntas[indiceAtual].correta`, player's selected index
- Check localStorage in DevTools for theme persistence

## Known Patterns & Gotchas
- **No form validation** beyond `.trim()` - ensure user inputs are safe
- **Array-based answers**: Always use 0-based indexing for `correta` field
- **Portuguese text throughout**: All UI labels, variable names, and comments in Portuguese
- **Page reloads**: Each navigation is full page reload - state persists only in localStorage (theme)
- **No error handling**: Quiz logic assumes data is valid; malformed questions will cause silent failures

## Resources
- Theme toggle implementation: [script.js](js/script.js#L1-L10)
- Game state reference: [multiplayer.js](js/multiplayer.js#L1-L20)
- Question bank example: [alcorao.js](js/alcorao.js#L7-L60)
