import React,{ createContext, Component} from "react";

export const getid = createContext();

class getIDProvider extends Component {
    state = {
        id: "1"
    }
    render(){
        return(
            <getid.Provider value={{...this.state}}>
                {this.props.children}
            </getid.Provider>
        );
    }
}

export default getIDProvider;