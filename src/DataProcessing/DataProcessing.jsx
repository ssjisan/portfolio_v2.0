import { createContext } from "react";
import PropTypes from 'prop-types';
import ThemeController from "./Components/ThemeController";
import MenuDrawerController from "./Components/MenuDrawerController";

export const DataContext = createContext();

export default function DataProcessing({ children }) {
    const { light, handleMode } = ThemeController()
    const { toggleDrawer, open, handleDrawerClose,goToTop } = MenuDrawerController()

    
    return (
        <DataContext.Provider
            value={{
                // Theme Controller
                light, handleMode,
                // Drawer for menu
                toggleDrawer, open, handleDrawerClose,goToTop                
            }}
        >
            {children}
        </DataContext.Provider>
    )
}
// Prop types validation
DataProcessing.propTypes = {
    children: PropTypes.node.isRequired,
};