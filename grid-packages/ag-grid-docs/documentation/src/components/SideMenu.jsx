import React, { useState, useEffect } from 'react';
import styles from './SideMenu.module.scss';

const SideMenu = ({ headings = [], pageName, hideMenu }) => {
    const [allHeadings, setAllHeadings] = useState(headings);

    useEffect(() => {
        // this checks for headings once the page has rendered
        let headings = [];
        let maxLevel = 1;

        const selector = [1, 2, 3, 4, 5, 6].map(depth => `#doc-content h${depth}`).join(',');
        const headingsFromDom = document.querySelectorAll(selector);

        for (let i = 0; i < headingsFromDom.length; i++) {
            const heading = headingsFromDom[i];
            const depth = parseInt(heading.tagName.match(/\d/)[0], 10);
            const { id } = heading;

            if (!id) { continue; }

            headings.push({ depth, id, value: heading.innerText });

            if (depth > maxLevel) {
                maxLevel = depth;
            }
        }

        // limit the length of the side menu
        while (headings.length > 30 && maxLevel > 2) {
            const topLevel = maxLevel;
            headings = headings.filter(h => h.depth < topLevel);
            maxLevel--;
        }

        setAllHeadings(headings);

        if (headings.length < 2) {
            // no point in showing the menu if there is only one link
            hideMenu();
        }
    }, [hideMenu]);

    return allHeadings.length > 1 && (
        <div className={styles['side-nav']}>
            <ul className={styles['side-nav__list']}>
                {allHeadings.map(heading => <li key={`${pageName}_${heading.id}`} className={styles[`side-nav__item--level-${heading.depth}`]}>
                    <a className={styles['side-nav__link']} href={`#${heading.id}`}>{heading.value}</a>
                </li>
                )}
            </ul>
        </div>
    );
};

export default SideMenu;
