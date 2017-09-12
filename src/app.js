import html from 'innerself';
import {connect} from './store';

function app (state) {
    return html`
        <div>
            <p>This is a test. It ${state.test}.</p>
            <button onclick="dispatch('TEST_ACTION', 'works')">Update</button>
        </div>
    `;
}

export default connect(app);
