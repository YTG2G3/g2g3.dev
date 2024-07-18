export default function CVPublication() {
  return (
    <div className="flex flex-col space-y-2">
      <section className="flex flex-col">
        <div className="flex justify-between">
          <h1>
            Prediction of Treatment Recommendations Via Ensemble Machine
            Learning Algorithms for Non-Small Cell Lung Cancer Patients in
            Personalized Medicine
          </h1>
          <h1>2024</h1>
        </div>
        <div className="flex justify-between">
          <span>Coauthor</span>
          <span>Cancer Informatics</span>
        </div>
        <ul className="ml-8 list-disc">
          <li>
            <span>
              Research aims to develop genomic predictive markers for non-small
              cell lung cancer treatment using machine learning algorithms to
              recommend individualized chemotherapy.
            </span>
          </li>
          <li>
            <span>
              Study employs ensemble learning algorithms, including bagging with
              regularized Cox regression models and Random Survival Forests, for
              prediction.
            </span>
          </li>
          <li>
            <span>
              A comprehensive meta-database was compiled from NCBI Gene
              Expression Omnibus for lung cancer patients to capture complex
              genomic patterns for accurate treatment outcome prediction.
            </span>
          </li>
        </ul>
      </section>
      <section className="flex flex-col">
        <div className="flex justify-between">
          <h1>
            Efficacy of Utilizing Large Language Models to Detect Public Threat
            Posted Online
          </h1>
          <h1>2024</h1>
        </div>
        <span>First Author*</span>
        <ul className="ml-8 list-disc">
          <li>
            <span>
              Study examined effectiveness of large language models (LLMs) in
              detecting online threats using a dataset of 520 posts from a
              Korean online community.
            </span>
          </li>
          <li>
            <span>
              Various LLMs (GPT-3.5, GPT-4, PaLM) showed strong accuracy in
              classifying posts as &quot;threat&quot; or &quot;safe&quot;, with
              GPT-4 performing best at 97.9% non-threat and 100% threat
              accuracy.
            </span>
          </li>
          <li>
            <span>
              Results suggest LLMs can effectively augment human content
              moderation, though ethical considerations and biases must be
              addressed before real-world implementation.
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
