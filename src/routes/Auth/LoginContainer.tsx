import * as React from "react";
import { observer, inject } from "mobx-react";
import App from "../../models";

@inject("app")
@observer
export default class LoginContainer extends React.Component<{app?: typeof App.Type}, {}> {
    componentDidMount() {
        const { app } = this.props;
        const isLoggedIn = !!app!.auth.user;
        if (!isLoggedIn) {
            app!.navigateTo("/", {}, "REPLACE");
        }
    }
    render() {
        const { app, children} = this.props;
        const isLoggedIn = !!app!.auth.user;
        if (isLoggedIn) {
            return children;
        } else {
            return null;
        }
    }
}