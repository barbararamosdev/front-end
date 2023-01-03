import react from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeDetailsPage from "../pages/RecipeDetailsPage/RecipeDetailsPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />}>
                </Route>
                <Route path="/cadastro" element={<SignUpPage />}>
                </Route>
                <Route path="/" element={<RecipesListPage />}>
                </Route>
                <Route path="/adicionar-receita" element={<AddRecipesPage />}>
                </Route>
                <Route path="/detalhe/:id" element={<RecipeDetailsPage />}>
                </Route>
                 {/* <Route>
                    <ErrorPage />
                </Route>  */}
            </Routes>
        </BrowserRouter>
    )
}
export default Router