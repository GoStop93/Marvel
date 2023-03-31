import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import img from './404.gif';

const Page404 = () => {
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="Page 404"
                    />
                <title>Error 404</title>
            </Helmet>
            <img style={{ display: 'block', width: '430px', height: '430px', objectFit: 'contain', margin: '0 auto'}} src={img} alt='Error'/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '24px'}} to='/'>Back to main page</Link>
        </div>
    )
}

export default Page404;