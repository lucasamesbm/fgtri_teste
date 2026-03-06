import fototri from "../../assets/images/triathlon-swim-bike-run.jpeg";

function Federar() {
  return (
    <section className="relative w-full min-h-[50vh] md:min-h-[60vh] lg:min-h-[80vh]">
      <div className="absolute inset-0">
        <img
          src={fototri}
          alt="Triathlon"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="absolute inset-0 bg-black/65" />

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="max-w-5xl text-center text-light">
          <h1 className="mt-20 mb-6 text-3xl font-extrabold uppercase tracking-wider md:text-5xl">
            Federação de Triathlon
          </h1>

          <p className="mb-8 text-md leading-relaxed md:text-xl px-2 font-semibold">
            Faça parte da federação oficial, participe de competições, rankings
            e eventos reconhecidos.
          </p>

          <a
            href="#"
            className="inline-block bg-secondary px-7 py-3 text-lg font-bold tracking-wider hover:bg-hovers transition-colors"
          >
            Federar-se Agora
          </a>
        </div>
      </div>
    </section>
  );
}

export default Federar;
