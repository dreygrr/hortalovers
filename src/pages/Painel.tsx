import './painel.scss';

const Painel = () => {
    return (
        <div className="bloco painel">
            <div className="section materiais">
                <h1 className="section-title">Materiais (204) <button type="button" className="btn btn-primary"><i className="fa-solid fa-plus" /></button></h1>

                <ul className="section-items materiais">
                    <li className="section-item">
                        <p>Material 1</p>
                    </li>
                    <li className="section-item">
                        <p>Material 2</p>
                    </li>
                    <li className="section-item">
                        <p>Material 3</p>
                    </li>
                </ul>
            </div>

            <hr />
            
            <div className="section hortalicas">
                <h1 className="section-title">Hortaliças (123) <button type="button" className="btn btn-primary"><i className="fa-solid fa-plus" /></button></h1>

                <ul className="section-items materiais">
                    <li className="section-item">
                        <p>Hortaliça 1</p>
                    </li>
                    <li className="section-item">
                        <p>Hortaliça 2</p>
                    </li>
                    <li className="section-item">
                        <p>Hortaliça 3</p>
                    </li>
                </ul>
            </div>

            <hr />
            
            <div className="section producoes">
                <h1 className="section-title">Produções (58) <button type="button" className="btn btn-primary"><i className="fa-solid fa-plus" /></button></h1>

                <ul className="section-items materiais">
                    <li className="section-item">
                        <p>Produção 1</p>
                    </li>
                    <li className="section-item">
                        <p>Produção 2</p>
                    </li>
                    <li className="section-item">
                        <p>Produção 3</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export { Painel }