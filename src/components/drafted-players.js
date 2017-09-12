import html from 'innerself';
import {connect} from '../store';

function draftedPlayers (state) {
    const rows = state.drafted.map((row, index) => {
        console.log(row);
        const {Rank, Name, Team, Pos, Bye, Avg, ADP, 'vs. ADP': vsADP} = row;
        return html`
            <tr data-index="${index}">
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

export default connect(draftedPlayers);
