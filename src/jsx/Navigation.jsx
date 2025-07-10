/**
 * This function is for avoiding repetition and improving extensibility in the them picker menu
 * @param {string} props.text 
 * @param {string} props.color 
 * @returns a button that applies a theme
 */
function ThemePickDisplay({text, color}) {
    const themes = [
        'light-alt',
        'dark-alt',
        'light-default',
        'dark-default',
        'light-blue',
        'dark-blue',
        'light-green',
        'dark-green',
        'light-red',
        'dark-red'
    ];
    /** Fuction to apply the theme
     */
    function applyTheme() {
        themes.forEach((theme) => {
            document.body.classList.remove(theme);
        });
        document.body.classList.add(text.toLowerCase());
    }
    return(
        <li>
            <button className = 'horizontal-flex-container seemless-button' onClick={applyTheme}>
            <h3 className = 'side-padded'>
                {text}
            </h3>
            <svg viewBox = '0 0 100 100' className = 'svg-holder' width = '20%' height = '20%'>
                <circle cx = '50' cy = '50' r = '25' className = 'color-preview' style = {{fill: color, stroke: 'var(--border-muted)'}}/>
            </svg>
        </button>
    </li>
    );
}

/**
* Creates a button that picks the theme
* @returns a div with the button containing multiple theme choices in a dropdown
*/
function ThemePicker() {
    return(
        <div className = 'dropdown-container container'>
            <div className = 'theme-button horizontal-flex-container'>
                <svg viewBox = '0 0 100 100' className = 'svg-holder' width = '100%' height = '100%'>
                    <circle cx = '50' cy = '50' r = '25' className = 'color-preview' style = {{fill: 'var(--primary)', stroke: 'var(--primary)'}}/>
                </svg>
                <div>
                    <h3>Theme</h3>
                </div>
            </div>
            <div className = 'nowrap-horizontal-flex-container'>
                <ul className = 'dropdown-appear' style = {{width: '160%'}}>
                    <ThemePickDisplay text = 'light-Alt' color = 'hsl(191 100% 14%)'/>
                    <ThemePickDisplay text = 'dark-Alt' color = 'hsl(195 66% 63%)'/>
                    <ThemePickDisplay text = 'light-Default' color = 'hsl(318 38% 30%)'/>
                    <ThemePickDisplay text = 'dark-Default' color = 'hsl(320 50% 73%)'/>
                    <ThemePickDisplay text = 'light-Blue' color = 'hsl(214 60% 30%)'/>
                    <ThemePickDisplay text = 'dark-Blue' color = 'hsl(214 78% 73%)'/>
                    <ThemePickDisplay text = 'light-Green' color = 'hsl(164 100% 12%)'/>
                    <ThemePickDisplay text = 'dark-Green' color = 'hsl(155 43% 60%)'/>
                    <ThemePickDisplay text = 'light-Red' color = 'hsl(357 44% 32%)'/>
                    <ThemePickDisplay text = 'dark-Red' color = 'hsl(0 66% 75%)'/>
                </ul>
            </div>
            <div>
            </div>
        </div>
    )
}

/**
* Creates a searchbar for the navigation bar
* @returns A button that when clicked will have a text box with a fuzzy finder within it
*/
function SearchBar() {
    return(
        <div className = 'search-field container horizontal-flex-container'>
            <svg width = '100%' height = '100%' className = 'svg-holder' viewBox = '0 0 100 100'>
                <line className = 'glass-handle'  x1 = '50' y1 = '50' x2 = '80' y2 = '87'/>
                <circle className = 'glass'  cx = '50' cy = '50' r='18'/>
            </svg>
            <div  style = {{color: 'var(--text-muted)'}}>
                <h3>Search</h3>
            </div>
        </div>
    );
}

/**
* Makes the Navigation menu for the navbar
* @returns A button that contains a dropdown with links to places in the document
*/
function Navigation({children}) {
    return(
        <div className = 'dropdown-container'>
            <div className = 'horizontal-flex-container container'>
                <svg width = '80%' height = '50%' viewBox = '0 0 100 100' className = 'svg-holder'>
                    <path d='M25 28 C25 28 38 33 25 38 L75 38 C75 38 80 33 75 28 L25 28 Z' className = 'navigation-lines'/>
                    <path d='M25 45 C25 45 20 50 25 55 L75 55 C75 55 80 50 75 45 L25 45 Z' className = 'navigation-lines'/>
                    <path d='M25 62 C25 62 20 67 25 72 L75 72 C75 72 80 67 75 62 L25 62 Z' className = 'navigation-lines'/>
                </svg>
                <div className = 'vertical-flex-container'>
                    <h3>Navigation</h3>
                </div>
            </div>
            <nav className = 'horizontal-flex-container'>
                <ul className = 'dropdown-appear'>
                    {children}
                </ul>
            </nav>
        </div>
    );
}

/**
 * Creates a tags in a li tag to simulate links
 */
function Link({text}) {
    return(
        <li><a href = {'#' + text.toLowerCase()}>{text}</a></li>
    );
}

/**
* Adds components as a nav bar (is the nav bar itself)
* @returns A horizontal flex container with a navigation-search-themePicker button
*/
export default function NavBar ({children}) {
    return(
        <header className = ''>
            <div className = 'horizontal-flex-container' id = 'navigation-bar' style = {{justifyContent: 'space-around'}}>
                <Navigation>
                    <Link text = 'About'/>
                    <Link text = 'Projects'/>
                    <Link text = 'Chart'/>
                    <Link text = 'Citations'/>
                </Navigation>
                <SearchBar/>
                <ThemePicker/>
            </div>
            <hr></hr>
        </header>
    );
}

