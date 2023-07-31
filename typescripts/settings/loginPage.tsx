import React from "react";
import { Settings, store } from "./settings";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "../util/errorBoundary";

export default class LoginPage extends React.Component<{}> {
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
                        value=""
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
                        value={''}
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
                >
                    Login
                </button>

                <sp-label
                    id="labelLogin"
                />
            </div>


        );
    }
};

