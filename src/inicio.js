import Topo from "./Topo"
import Tela from "./Tela"

export default function Inicio()
{

    return(
        <div className="container">

            <Topo></Topo>

            <div className="row align-items-center justify-content-center">
                <div className="col-4">
                    <Tela></Tela>
                </div>
            </div>
            



        </div>
    )

}