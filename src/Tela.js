
export default function Tela()
{
   return(

   <div>

      <div className="input-group mb-3">
         <input type="text" className="form-control" placeholder="Pesquise seu Pokemon" aria-label="Recipient's username" aria-describedby="button-addon2" />
         <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
      </div>

      <div className="card">

         <div className="card-header">
            Nome do Pokemon
         </div>

         <img src="https://placehold.co/400x200" className="card-img-top" alt="..." />

         <div className="card-body">
            Detalhes
         </div>

      </div>
   </div>

  )
}