//list component
import listStyles from './List.module.css';

export default function List({ unBulleted, noMargin, children }) {

    const bullets = unBulleted ? listStyles.noBullets : '';
    const margin = noMargin ? listStyles.noMargin : listStyles.withMargin

    return (
        <ul className={`${margin} ${bullets}`}>
            {children}
        </ul>
    );
}
