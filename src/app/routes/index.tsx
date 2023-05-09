import { BrowserRouter,Route, Routes as Switch,Navigate} from "react-router-dom";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/Entrar"/>
                <Route/>

            </Switch>
        
        </BrowserRouter>
    );
}
