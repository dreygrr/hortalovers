import '../_forms.scss';

const Entrar = () => {
    return (
        <div className='bloco entrar'>
            <div className="form">
                <h1>entrar</h1>

                <div className="field">
                    <label htmlFor="inEmail">e-mail: </label>
                    <input type="email" name="email" id="inEmail" required />
                </div>

                <div className="field">
                    <label htmlFor="inPassword">password: </label>
                    <input type="password" name="password" id="inPassword" />
                </div>

                <button className="btn btn-primary" type='button'>entrar</button>
            </div>
        </div>
    )
}

export { Entrar }