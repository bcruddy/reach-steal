import sanitize from 'innerself/sanitize';

const init = {
    test: 'passed-init'
};

export default function reducer (state = init, action, args) {
    switch (action) {
        case 'TEST_ACTION':
            return {
                test: args[0]
            };
        default:
            return state;
    }
}
