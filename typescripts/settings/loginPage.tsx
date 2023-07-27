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
                        id="username"
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
                >
                    Login
                </button>

            </div>


        );
    }
};

const containerNode = document.getElementById('reactSettingsContainer')!
const root = ReactDOM.createRoot(containerNode)

root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <LoginPage> </LoginPage>
        </ErrorBoundary>
    </React.StrictMode>
)
