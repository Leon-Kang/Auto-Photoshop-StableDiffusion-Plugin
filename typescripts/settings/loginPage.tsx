import React from "react";
import { Settings, store } from "./settings";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "../util/errorBoundary";
import { login } from "../../utility/lambda/actions";

interface State {
    name: string;
    pw: string;
    result: string;
}

export default class LoginPage extends React.Component<{}, State> {
    readonly state: State = {
        name: "",
        pw: "",
        result: "",
    };

    componentDidMount(): void {}

    render() {
        return (
            <div style={{ marginBottom: 8, marginTop: 8 }}>
                <div>
                    <sp-label value="">
                        User Name:
                    </sp-label>
                    <sp-textfield
                        id="filedUsername"
                        type="text"
                        placeholder="User Name"
                        value={this.state.name}
                        onInput={(
                            event: React.ChangeEvent<HTMLTextAreaElement>
                        ) => {
                            store.updateProperty(
                                '',
                                event.target.value
                            )
                        }}
                    />
                </div>

                <div>
                    <sp-label value="" style={{ marginRight: 8 }}>
                        Password:
                    </sp-label>
                    <sp-textfield
                        value={this.state.pw}
                        type="password"
                        id="fieldPassword"
                        onInput={(
                            event: React.ChangeEvent<HTMLTextAreaElement>
                        ) => {
                            store.updateProperty(
                                '',
                                event.target.value
                            )
                        }}
                    />
                </div>

                <button
                    className="btnSquare"
                    style={{ marginBottom: 8 }}
                    id="btnSettingLogin"
                    onClick={async () => {
                       const result = await login(this.state.name, this.state.pw);
                       this.setState({ result });
                    }}
                >
                    Login
                </button>

                <p
                    id="labelLogin"
                >
                    {this.state.result}
                </p>
            </div>


        );
    }
};

