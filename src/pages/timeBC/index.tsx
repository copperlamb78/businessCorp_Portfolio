import maria from "../../shared/assets/malu.png";
import gabriel from "../../shared/assets/gabriel.png";
import ingrid from "../../shared/assets/ingrid.png";
import background from "../../shared/assets/backgroundimg_time.svg";

/*gab: 11/01/2000*/
/*malu: 06/11/2005*/
/*ingrid: 15/08/2003*/

const calculateAge = (day: number, month: number, year: number): number => {
  const today = new Date();
  let age = today.getFullYear() - year;
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  if (currentMonth < month || (currentMonth === month && currentDay < day)) {
    age--;
  }

  return age;
};

export default function TimeBusiness() {
  return (
    <section className="w-full text-[#f2e3b0]">
      <div className="max-w-100% mx-auto">
        <div className="mb-6 sm:mb-8 md:mb-11 lg:mb-14 text-left">
          <div className="inline-flex flex-row items-center gap-0 text-white px-3 sm:px-4 md:px-8 lg:px-20 xl:px-30">
            <span className="block text-4xl sm:text-3xl md:text-5xl xl:text-6xl font-theseasons tracking-tight leading-none">
              Time Business
            </span>
            <span className="block text-4xl sm:text-3xl md:text-5xl xl:text-6xl font-cocomat font-semibold tracking-tight leading-[0.85]">
              CORP.
            </span>
          </div>
        </div>

        <div
          className="w-full bg-[#6d430e] p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 px-3 sm:px-4 md:px-8 lg:px-20 xl:px-30 relative"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mb-8 sm:mb-12 md:mb-18 lg:mb-22 xl:mb-25">
            <h2 className="text-2xl sm:text-2xl md:text-4xl xl:text-5xl font-cocomat font-semibold tracking-tight">
              Consultores
            </h2>
          </div>

          <div className="grid gap-4 md:gap-5 lg:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                name: "Maria Sousa",
                birthDay: 6,
                birthMonth: 11,
                birthYear: 2005,
              },
              {
                name: "Gabriel Evangelista",
                birthDay: 11,
                birthMonth: 1,
                birthYear: 2000,
              },
              {
                name: "Ingrid Moreira",
                birthDay: 8,
                birthMonth: 10,
                birthYear: 2003,
              },
            ].map((consultor) => {
              const age = calculateAge(
                consultor.birthDay,
                consultor.birthMonth,
                consultor.birthYear,
              );
              return (
                <div
                  key={consultor.name}
                  className="bg-[#a86b1d] w-56 sm:w-72 md:w-80 lg:w-85 xl:w-90 mx-auto"
                >
                  <div className="h-56 sm:h-64 md:h-70 lg:h-75 xl:h-80 flex items-end justify-center">
                    <div className="hover:scale-105 transition-all duration-500 w-36 sm:w-44 md:w-55 lg:w-60 xl:w-65 relative bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 xl:bottom-6 left-0 sm:left-7 md:left-10 lg:left-11 xl:left-12.5 h-full">
                      {consultor.name == "Maria Sousa" ? (
                        <img src={maria} alt={consultor.name} />
                      ) : consultor.name == "Gabriel Evangelista" ? (
                        <img src={gabriel} alt={consultor.name} />
                      ) : (
                        <img src={ingrid} alt={consultor.name} />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between text-left p-2 sm:p-3 xl:h-35">
                    <p className="text-lg sm:text-base md:text-2xl lg:text-4xl xl:text-[2.5rem] font-theseasons text-white">
                      {consultor.name}
                    </p>
                    <p className="text-xs sm:text-xs md:text-base xl:text-xl font-theseasons text-[#f7dca5]">
                      {age} anos
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-11 xl:mt-12 px-3 sm:px-4 md:px-6 lg:px-10 text-center">
          <p className="text-xs sm:text-sm md:text-base xl:text-md leading-5 sm:leading-6 md:leading-7 lg:leading-8 text-left font-semibold font-garet text-[#f4e2b2] max-w-4xl mx-auto">
            Nossos consultores possuem uma carga de conhecimentos pois atuam
            diariamente nas rotinas administrativas e possuem um curso técnico
            em administração em andamento no SENAI BA.
          </p>
        </div>
      </div>
    </section>
  );
}
