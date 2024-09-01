import NavigationWrapper from "./src/navigation/navigation_wrapper";
import AppProvidersWrapper from "./src/app_providers_wrapper";

export default function App() {
    return (
        <AppProvidersWrapper>
            <NavigationWrapper />
        </AppProvidersWrapper>
    );
}
