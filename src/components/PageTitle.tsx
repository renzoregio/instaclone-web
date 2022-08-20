import { Helmet } from "react-helmet-async";

const PageTitle = ({ pageTitle } : { pageTitle : string }) => {
    return (
        <Helmet>
            <title> {pageTitle} | Instaclone </title>
        </Helmet>
    )
}

export default PageTitle;