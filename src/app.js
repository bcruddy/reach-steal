import html from 'innerself';
import {connect} from './store';
import {availablePlayers, draftedPlayers, takenPlayers, pickTracker} from './components/';

function app (state) {
    return html`
        <div class="jumbotron">
            <div class="container">
                <h3>rs draft tracker</h3>
                ${pickTracker()}
            </div>
        </div>
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
