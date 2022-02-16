import {Routes, Route, Link} from "react-router-dom";


import "./App.css";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout from "./components/Layout/Layout";
import UserDetailPage from "./pages/UserDetailPage/UserDetailPage";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailPage/>}/>
                    </Route>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
