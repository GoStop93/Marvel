import img from './deadpool.gif';

const ErrorMessage = () => {
    return (
        <div>
            <span style={{display: 'flex', justifyContent: 'center', marginTop: '5px', color:'#9F0013', fontWeight: 'bold', fontSize:'20px' }}>
                Error</span>
            <img style={{ display: 'block', width: '230px', height: '230px', objectFit: 'contain', margin: '0 auto'}} src={img} alt='Error'/>
        </div>
    )
}

export default ErrorMessage;