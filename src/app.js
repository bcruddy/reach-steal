import html from 'innerself';
import {connect} from './store';
import {availablePlayers, draftedPlayers, takenPlayers} from './components/';

function app (state) {
    return html`
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    ${availablePlayers()}
                </div>
                <div class="col-md-6">
                    ${draftedPlayers()}
                    ${takenPlayers()}
                </div>
            </div>
        </div>
    `;
}

export default connect(app);
