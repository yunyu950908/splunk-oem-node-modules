import React from 'react';
import { keys, forEach } from 'lodash';
import Actions from './sets/Actions';
import Arrows from './sets/Arrows';
import Concepts from './sets/Concepts';
import Objects from './sets/Objects';
import Shapes from './sets/Shapes';
import Visualizations from './sets/Visualizations';
import Formatting from './sets/Formatting';
import Documents from './sets/Documents';
import css from './All.css';

function Basic() {
    function createSet(title, Set) {
        const icons = [];

        function createIcon(key, index) {
            const ThisIcon = Set[key];

            icons.push(
                <span className={css.example} key={index}>
                    <span className={css.icon}><ThisIcon /></span>
                    <span className={css.name}>{key}</span>
                </span>,
            );
        }
        forEach(keys(Set).sort(), createIcon);

        return (
            <div>
                {title}
                <div className={css.section}>
                    {icons}
                </div>
            </div>
        );
    }

    return (
        <div>
            { createSet('Actions', Actions) }
            { createSet('Arrows', Arrows) }
            { createSet('Concepts', Concepts) }
            { createSet('Documents', Documents) }
            { createSet('Formatting', Formatting) }
            { createSet('Objects', Objects) }
            { createSet('Shapes', Shapes) }
            { createSet('Visualizations & Results', Visualizations) }
        </div>
    );
}

export default Basic;
