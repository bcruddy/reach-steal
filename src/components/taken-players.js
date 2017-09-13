import html from 'innerself';
import {connect} from '../store';

function takenPlayers (state) {
    const rows = state.taken.map((row, index) => {
        const {pick, rank, name, team, pos, bye} = row;

        return html`
            <tr data-index="${index}">
                <td>${pick}</td>
                <td>${rank}</td>
                <td>${name}</td>
                <td>${team}</td>
                <td>${pos}</td>
                <td>${bye}</td>
            </tr>
        `;
    }).join('');

    return html`
        <table class="table table-striped">
            <thead>
                <tr style="text-align: left;">
                    <th>Pick</th>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Pos</th>
                    <th>Bye</th>
                </tr>
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>
    `;
}

export default connect(takenPlayers);
