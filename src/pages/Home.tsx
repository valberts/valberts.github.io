import * as React from "react";


export interface PresetState {
    pid: number,
    name: string,
    correctName: boolean,
    profile: {
        name: string,
    }
}

export default class Home extends React.Component<{},PresetState> {

    constructor(props: {}) {

        super(props)

        this.state = {
            pid: 0,
            name: 'hello',
            correctName: true,
            profile: {
                name: 'name',
            }
        }
    }

    componentDidMount() {
        let state: PresetState = this.state;
        state.name = 'Vincent';
        this.setState(state);
    }

    changeInput() {
        let state: PresetState = this.state;
        if (this.state.correctName) {
            state.correctName = false;
            state.name = 'Hahaitsme';
        } else {
            state.correctName = true;
            state.name = 'Vincent';
        }
        this.setState(state);
    }

    render() {


        let name = this.state.name;
        let car = 'Nissan Skyline';

        

        return(
            <div className="home-container">
                <div className="home-title">
                    <p>This is the title</p>
                </div>
                <p>{this.state.name}</p>
                <button onClick={(evt) => this.changeInput()}></button>
            </div>
        )
    }
}