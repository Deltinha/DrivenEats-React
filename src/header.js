function HeaderName(){
    return (
        <>
            <span className="header__name">FoodCamp</span>
        </>
    );
}

function HeaderSlogan(){
    return (
        <>
            <span className="header__slogan">Sua comida em 6 minutos</span>
        </>
    );
}

export default function Header(){
    return (
        <div className='header'>
            <HeaderName />
            <HeaderSlogan />
        </div>
    );
}