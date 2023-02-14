const imagenes = require.context("/src/assets/images", true);

export const User = () => {
  return (
    <div className="row user">
      <div className="col-md-12">
        <div className="row p-4">
          <div className="col-md-4">
            <div className="row p-2">
              <div className="col-md-12 panel">Imagen de usuario</div>
              <div className="col-md-12 panel">Datos que solo puede ver el medico</div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row p-2">
              <div className="col-md-12">Datos y puntuaciones de usuario</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
