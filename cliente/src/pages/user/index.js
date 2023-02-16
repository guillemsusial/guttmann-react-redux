const imagenes = require.context("/src/assets/images", true);

export const User = () => {
  return (
    <div className="row panel-usuario">
      <div className="col-md-12">
        <div className="row p-4">
          <div className="col-md-4">
            <div className="row p-2">
              <div className="col-md-12 panel">
                <div className="pt-5">
                  <img
                    className="imagen"
                    src={imagenes(`./institut-guttmann.jpg`)}
                  />
                </div>
              </div>
              <div className="col-md-12 pt-3 panel">
                Informacion del paciente
                <hr />
                <p className="pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8 pt-3">
            Datos y puntuaciones de usuario
            <hr />
            <hr className="hr" />
          </div>
        </div>
      </div>
    </div>
  );
};
