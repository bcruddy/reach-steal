import html from 'innerself';
import {connect} from '../store';

function availablePlayers (state) {
    const rows = state.available.map(row => {
        const {Rank, Name, Team, Pos, Bye, Avg, ADP, 'vs. ADP': vsADP} = row;
        return html`
            <tr data-index="${row.Rank - 1}">
                <td>${Rank}</td>
                <td>${Name}</td>
                <td>${Team}</td>
                <td>${Pos}</td>
                <td>${Bye}</td>
                <td>${Avg}</td>
                <td>${ADP}</td>
                <td>${vsADP}</td>
                <td>
                    buttons
                </td>
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
                    <th>Avg</th>
                    <th>ADP</th>
                    <th>vs ADP</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>
    `;
}

export default connect(availablePlayers);
