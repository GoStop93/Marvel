import ComicsList from '../comicsList/ComicsList';
import { Helmet } from 'react-helmet';
import AppBanner from '../appBanner/AppBanner';

const ComicsPage = () => {

    return (
        <>  
            <Helmet>
                <meta
                    name="description"
                    content="Page with list of our comics"
                />
                <title>Comics page</title>
                <link rel="icon" href="favicons/favicon.ico" />
            </Helmet>
            <AppBanner/>
            <ComicsList/>
        </>
    )
}

export default ComicsPage;