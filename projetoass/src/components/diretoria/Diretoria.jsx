import Presidente from "../../assets/images/PROF.-LUIZ-GOEBEL.jpg";
import Vice from "../../assets/images/PROF.-JORGE-GOEBEL.jpg";

function DiretoriaSection() {
  return (
    <section className="w-full py-16 bg-amber-50">

      <h2 className="text-center text-3xl font-bold text-secondary mb-12">
        Diretoria
      </h2>

      <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
        
        <div className="flex flex-col items-center gap-4">
          <div
            className="
              w-53
              aspect-square
              bg-white
              rounded-xl
              border
              border-white
              shadow-xl
              shadow-black/20
              overflow-hidden
              flex
              items-center
              justify-center
            "
          >
            <img
              src={Presidente}
              alt="Presidente"
              className="w-40 h-40 object-cover"
            />
          </div>

          <span className="text-lg font-semibold text-secondary">
            Presidente
          </span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div
            className="
              w-53
              aspect-square
              bg-white
              rounded-xl
              border
              border-white
              shadow-xl
              shadow-black/20
              overflow-hidden
              flex
              items-center
              justify-center
            "
          >

            <div className="w-40 h-40 bg-gray-200 flex items-center justify-center text-gray-500">
              <img
              src={Vice}
              alt="Presidente"
              className="w-full h-full object-cover"
            />
            </div>
          </div>

          <span className="text-lg font-semibold text-secondary">
            Vice-Presidente
          </span>
        </div>

      </div>
    </section>
  );
}

export default DiretoriaSection;