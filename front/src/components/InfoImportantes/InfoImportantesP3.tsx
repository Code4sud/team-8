
function InfoImportantesP3() {
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-l font-bold text-gray-800 mb-4">Les conséquences</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
      Ces gaz et particules ont une incidence directe :
      </p>
        <ul  className="text-sm text-gray-600 list-disc list-inside">
          <li>sur la santé humaine : maladies cardiovasculaires, cancers, troubles respiratoires etc. ;</li>
          <li>sur l’environnement : dégradation des bâtiments, baisse des rendements agricoles (blé par exemple).</li>
        </ul>
      <p className="text-sm text-gray-600 leading-relaxed">
        Leurs effets sont à moyen et long termes, en lien avec une exposition chronique à la pollution dite de fond, ou à court terme, en lien avec une exposition de courte durée à des concentrations élevées pendant les épisodes de pollution.
      </p>
    </div>
  )
}

export default InfoImportantesP3