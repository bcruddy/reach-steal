import html from 'innerself';
import {connect} from '../store';

function pickTracker (state) {
    const {overall, round, pick} = state;
    return html`
        <ul class="list-inline">
            <li><strong>Round</strong>: ${round}</li>
            <li><strong>Pick</strong>: ${pick}</li>
            <li><strong>Overall</strong>: ${overall}</li>
        </ul>
    `;
}

export default connect(pickTracker);
