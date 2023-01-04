import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {StyledToolBar} from "./styled"
import {goToLogin, goToRecipesList} from "../../routes/coordinator"
import {useNavigate} from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()

  return (
   
      <AppBar position="static">
        <StyledToolBar>
          <Button onClick={() =>goToLogin(navigate)}>Receitas</Button>
          <Button onClick={() => goToRecipesList(navigate)}>Login</Button>
        </StyledToolBar>
      </AppBar>
  );
}

export default Header