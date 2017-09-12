import html from 'innerself';
import {connect} from '../store';

function availablePlayers (state) {
    const rows = state.available.map((row, index) => {
        const {Rank, Name, Team, Pos, Bye, Avg, ADP, 'vs. ADP': vsADP} = row;
        return html`
            <tr data-index="${index}">
                <td>${Rank}</td>
                <td>${Name}</td>
                <td>${Team}</td>
                <td>${Pos}</td>
                <td>${Bye}</td>
                <td>${Avg}</td>
                <td>${ADP}</td>
                <td>${vsADP}</td>
                <td>
                    <div class="btn-group">
                        <button class="btn btn-sm btn-primary" onclick="dispatch('PLAYER_DRAFTED', ${index})">
                            <i class="fa fa-check"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="dispatch('PLAYER_TAKEN', ${index})">
                            <i class="fa fa-ban"></i>
                        </button>
                    </div>
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
