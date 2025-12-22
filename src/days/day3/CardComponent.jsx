const Card = ({children, title})  => {
    const CustomStyle = {
        'User Info': { bg: '#e3f2fd', border: '2px solid #2196f3'},
        Settings: { bg: '#e8f5e9', border: '2px solid #4caf50'}
    }
return (
    <div style={{
        backgroundColor: CustomStyle[title].bg,
        border: CustomStyle[title].border,
        marginBottom: '3rem',
        padding: '1rem',
    }}>
        {children}
    </div>
)
}

export default Card
