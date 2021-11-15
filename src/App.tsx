import "./App.css";

import { store } from "redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { LightTheme, BaseProvider } from "baseui";
import { Unstable_A11y as A11y } from "baseui/a11y";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";

import AppRoutes from "routes/AppRoutes";
import Toaster from "components/atoms/Toaster";
import AppContainer from "components/templates/AppContainer";

const engine = new Styletron();

export default function App() {
	return (
		<Provider store={store}>
			<StyletronProvider value={engine}>
				<BaseProvider theme={LightTheme}>
					<A11y>
						<BrowserRouter>
							<AppContainer>
								<Toaster />
								<AppRoutes />
							</AppContainer>
						</BrowserRouter>
					</A11y>
				</BaseProvider>
			</StyletronProvider>
		</Provider>
	);
}
