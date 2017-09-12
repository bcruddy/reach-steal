import html from 'innerself';
import {connect} from '../store';

function takenPlayers (state) {
    const rows = state.taken.map((row, index) => {
        const {Pick, Rank, Name, Team, Pos, Bye, Avg, ADP, 'vs. ADP': vsADP} = row;
        return html`
            <tr data-index="${index}">
                <td>${Pick}</td>
                <td>${Rank}</td>
                <td>${Name}</td>
                <td>${Team}</td>
                <td>${Pos}</td>
                <td>${Bye}</td>
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
