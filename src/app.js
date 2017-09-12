import html from 'innerself';
import {connect} from './store';
import availablePlayers from './components/available-players';

function app (state) {
    return html`
        <div>
            ${availablePlayers()}
        </div>
    `;
}

export default connect(app);
