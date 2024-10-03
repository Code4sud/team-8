interface InfoImportantesProps {
  data: {
    pollutant: string;
    objectifQualite: number;
    valeurLimite: number;
    seuilInformation: number;
    seuilAlerte: number;
  };
}

function InfoImportantes({ data }: InfoImportantesProps) {
  return (
    <>
      <div className="flex flex-col justify-center w-full h-full p-6 bg-white border rounded-lg shadow-md ">
        {/* Titre */}
        <h2 className="mb-4 text-xl font-semibold">{data.pollutant}</h2>

        {/* Informations complémentaires */}
        <div>
          <p className="text-sm">
            <strong>Objectif de qualité :</strong> {data.objectifQualite} µg/m³
          </p>
          <p className="text-sm">
            <strong>Valeur limite :</strong> {data.valeurLimite} µg/m³
          </p>
          <p className="text-sm">
            <strong>Seuil d'information :</strong> {data.seuilInformation} µg/m³
          </p>
          <p className="text-sm">
            <strong>Seuil d'alerte :</strong> {data.seuilAlerte} µg/m³
          </p>
        </div>
      </div>
    </>
  );
}

export default InfoImportantes;
